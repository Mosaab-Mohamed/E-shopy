import ReactDOM from "react-dom";
import { connect } from "react-redux";
import icons from "../../assets/icons/symbol-defs.svg";

const MessageModal = ({ message }) => {
  return (
    message &&
    ReactDOM.createPortal(
      <div className="messageModal">
        {message.content}
        <svg className={`icon ${message.icon}`}>
          <use xlinkHref={`${icons}#${message.icon}`}></use>
        </svg>
      </div>,
      document.getElementById("message-modal")
    )
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps)(MessageModal);
