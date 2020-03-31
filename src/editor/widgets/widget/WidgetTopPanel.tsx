import React, { useState, useEffect, useCallback } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Identicon from "identicon.js";
import { sha256 } from "js-sha256";
import {
  useDeleteWidgetMutation,
  useUpdateWidgetMutation
} from "../../../generated/graphql";
import Noty from "noty";
import { useTranslation } from "react-i18next";
import { Editor as CodeMirrorEditor } from "codemirror";
import {
  Box,
  Avatar,
  Tooltip,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import { TrashCanOutline, Pencil, ContentSave, Cancel } from "mdi-material-ui";
import { renderPreview } from "vickymd/preview";
import { Widget } from "../../../generated/graphql";
const VickyMD = require("vickymd");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topPanel: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    avatar: {
      width: "24px",
      height: "24px",
      borderRadius: "4px"
    },
    widgetTitle: {
      marginLeft: `${theme.spacing(1)}px !important`
    },
    widgetSourceLink: {
      marginTop: `8px`,
      marginLeft: theme.spacing(0.5)
    },
    actionButtons: {
      position: "absolute",
      right: "0",
      top: "0",
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    editorWrapper: {
      // height: "160px",
      // border: "2px solid #96c3e6",
      "& .CodeMirror-gutters": {
        display: "none"
      }
    },
    textarea: {
      width: "100%",
      height: "100%"
    },
    preview: {
      backgroundColor: "inherit !important",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      "& p:last-child": {
        marginBottom: "0 !important"
      },
      "& br": {
        // display: "none"
      }
    }
  })
);

interface Props {
  widget: Widget;
  removeSelf: () => void;
  isPreview: Boolean;
}

export function WidgetTopPanel(props: Props) {
  const classes = useStyles(props);
  const widget = props.widget;
  const { t } = useTranslation();
  const [previewElement, setPreviewElement] = useState<HTMLElement>(null);
  const [textAreaElement, setTextAreaElement] = useState<HTMLTextAreaElement>(
    null
  );
  const [editor, setEditor] = useState<CodeMirrorEditor>(null);
  const [editorDialogOpen, setEditDialogOpen] = useState<boolean>(false);

  const [
    resDeleteWidget,
    executeDeleteWidgetMutation
  ] = useDeleteWidgetMutation();
  const [
    resUpdateWidget,
    executeUpdateWidgetMutation
  ] = useUpdateWidgetMutation();
  const [widgetDescription, setWidgetDescription] = useState<string>("");

  const deleteWidget = useCallback(() => {
    if (widget && widget.id) {
      executeDeleteWidgetMutation({
        id: widget.id
      });
    }
  }, [widget, executeDeleteWidgetMutation]);

  const updateWidget = useCallback(() => {
    if (editor && widget) {
      const description = editor.getValue() || widget.description;
      executeUpdateWidgetMutation({
        id: widget.id,
        description
      });
      setWidgetDescription(description);
    }
    setEditDialogOpen(false);
  }, [editor, widget, executeUpdateWidgetMutation]);

  // Delete widget
  useEffect(() => {
    if (!widget.id) {
      return;
    }
    const err = () => {
      new Noty({
        type: "error",
        text: t("error/failed-to-delete-widget"),
        layout: "topRight",
        theme: "relax",
        timeout: 5000
      }).show();
    };
    if (resDeleteWidget.error) {
      err();
    } else if (resDeleteWidget.data) {
      if (resDeleteWidget.data.deleteWidget) {
        resDeleteWidget.data = null;
        props.removeSelf();
      } else {
        err();
      }
    }
  }, [resDeleteWidget, t, widget, props]);

  useEffect(() => {
    if (widget && previewElement) {
      renderPreview(previewElement, widgetDescription);

      // TODO: There might be a bug in renderPreview function. It generated extra new lines
      previewElement.innerHTML = previewElement.innerHTML
        .replace(/<br>\n/g, "<br>")
        .trim();
    }
  }, [widget, previewElement, widgetDescription]);

  useEffect(() => {
    if (!widget) {
      return;
    }

    if (textAreaElement) {
      const editor: CodeMirrorEditor = VickyMD.fromTextArea(textAreaElement, {
        mode: {
          name: "hypermd",
          hashtag: true
        },
        inputStyle: "textarea"
        // autofocus: false
      });
      editor.setValue(widgetDescription);
      editor.setOption("lineNumbers", false);
      editor.setOption("foldGutter", false);
      editor.setOption("autofocus", false);
      editor.focus();
      setEditor(editor);

      return () => {
        setEditor(null);
        setTextAreaElement(null);
      };
    }
  }, [textAreaElement, widget, widgetDescription]);

  useEffect(() => {
    if (widget) {
      setWidgetDescription(widget.description);
    } else {
      setWidgetDescription("");
    }
  }, [widget]);

  return (
    <Box className={clsx(classes.topPanel)}>
      <div
        className={clsx(classes.preview, "preview")}
        ref={(element: HTMLElement) => {
          setPreviewElement(element);
        }}
      ></div>

      <Box className={clsx(classes.actionButtons)}>
        <Tooltip title={widget.owner.username}>
          <IconButton>
            <Avatar
              className={clsx(classes.avatar)}
              variant={"rounded"}
              src={
                widget.owner.avatar ||
                "data:image/png;base64," +
                  new Identicon(sha256(widget.owner.username), 80).toString()
              }
            ></Avatar>
          </IconButton>
        </Tooltip>
        {!props.isPreview && widget.canConfigure && (
          <IconButton onClick={() => setEditDialogOpen(true)}>
            <Pencil></Pencil>
          </IconButton>
        )}
        {!props.isPreview && widget.canConfigure && (
          <IconButton onClick={deleteWidget}>
            <TrashCanOutline></TrashCanOutline>
          </IconButton>
        )}
      </Box>
      <Dialog open={editorDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogContent>
          <Box
            className={clsx(classes.editorWrapper)}
            style={{ minWidth: "300px", maxWidth: "100%" }}
          >
            <textarea
              className={classes.textarea}
              ref={(element: HTMLTextAreaElement) => {
                setTextAreaElement(element);
              }}
            ></textarea>
          </Box>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={updateWidget}>
            <ContentSave></ContentSave>
          </IconButton>
          <IconButton
            onClick={() => {
              setEditDialogOpen(false);
            }}
          >
            <Cancel></Cancel>
          </IconButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
