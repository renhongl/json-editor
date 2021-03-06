import * as React from "react";
import CodeMirror from "codemirror";
import IconButton from "@material-ui/core/IconButton";
import activine from "codemirror-activine";
import Tooltip from "@material-ui/core/Tooltip";
// import AlertDialog from "./Dialog";
// import Help from "./Help";
import { I18n } from "react-i18nify";
import "codemirror/mode/javascript/javascript.js";
import "codemirror-formatting";
// import "codemirror/addon/display/rulers.js";

activine(CodeMirror);

export default class Markdown extends React.Component {
  state = {
    showHelp: false,
    preview: true
  };

  toggleHelp = () => {
    this.setState({
      showHelp: !this.state.showHelp
    });
  };

  componentDidUpdate(preProps) {
    if (preProps.current !== this.props.current) {
      this.renderMarkdown();
    }
  }

  formatJson = () => {
    const range = {
      from: this.myCodeMirror.getCursor(true),
      to: this.myCodeMirror.getCursor(false)
    };
    this.myCodeMirror.autoFormatRange(range.from, range.to);
  };

  renderMarkdown() {
    let codeDom = document.querySelector(".CodeMirror");
    if (codeDom) {
      codeDom.parentNode.removeChild(codeDom);
    }
    const { value, handleValueChange } = this.props;
    this.myCodeMirror = CodeMirror(document.querySelector(".markdown"), {
      value: value,
      mode: { name: "application/ld+json", highlightFormatting: true },
      lineNumbers: true,
      theme: "default",
      indentUnit: 2,
      showCursorWhenSelecting: true,
      autofocus: true,
      cursorScrollMargin: 5,
      cursorHeight: 1,
      spellcheck: true,
      activeLine: true,
      autocorrect: true,
      lineWrapping: true
    });
    this.myCodeMirror.on("change", (a, b) => {
      handleValueChange(this.myCodeMirror.getValue());
    });
    this.props.addKeDownEvent();
  }

  componentDidMount() {
    this.renderMarkdown();
  }

  openTogglePreview = () => {
    if (this.state.preview) {
      document.querySelector(".app-left").style.width = "100%";
      document.querySelector(".app-right").style.width = "0%";
      this.setState({
        preview: false
      });
    } else {
      document.querySelector(".app-left").style.width = "50%";
      document.querySelector(".app-right").style.width = "50%";
      this.setState({
        preview: true
      });
    }
  };

  render() {
    const {
      // openFullScreen,
      fileList,
      current,
      switchFileById,
      closeFile
      // fullScreen
    } = this.props;
    // const { showHelp } = this.state;

    return (
      <div className="markdown-container">
        {/* <AlertDialog
          title={I18n.t("mardkown syntax help")}
          content={<Help />}
          open={showHelp}
          toggleDialog={this.toggleHelp}
          type="help"
        /> */}
        <div className="markdown-title">
          <div className="title-file-list">
            {fileList
              .filter(item => item.open)
              .map((file, index) => (
                <div
                  onClick={() => switchFileById(file.id)}
                  className={
                    file.id === fileList[current].id
                      ? "title-item-wrap selected"
                      : "title-item-wrap"
                  }
                  title={file.title}
                  key={file.id}
                >
                  <div className="title-item">{file.title}</div>
                  <div
                    className={
                      file.save
                        ? "title-item-status"
                        : "title-item-status unsave"
                    }
                    onClick={() => closeFile(file.id)}
                  >
                    {file.save ? "×" : <span className="unsave-icon" />}
                  </div>
                </div>
              ))}
          </div>
          <Tooltip title={I18n.t("markdown syntax")} placement="bottom">
            <IconButton
              aria-label="help"
              className="help-btn"
              size="small"
              onClick={this.formatJson}
            >
              <i className="material-icons" fontSize="small">
                format_list_bulleted
              </i>
            </IconButton>
          </Tooltip>
          {/* <Tooltip title={I18n.t("full screen")} placement="bottom">
            <IconButton
              size="small"
              className="full-screen-btn"
              aria-label="Delete"
              onClick={openFullScreen}
            >
              {fullScreen ? (
                <i className="material-icons" fontSize="small">
                  fullscreen_exit
                </i>
              ) : (
                <i className="material-icons" fontSize="small">
                  fullscreen
                </i>
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title={I18n.t("toggle view")} placement="bottom">
            <IconButton
              size="small"
              className="show-preview-btn"
              onClick={this.openTogglePreview}
            >
              <i className="material-icons" fontSize="small">
                chrome_reader_mode
              </i>
            </IconButton>
          </Tooltip> */}
        </div>
        <div className="markdown" />
      </div>
    );
  }
}
