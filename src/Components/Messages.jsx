import "./Message.css";

const Message = ({ message }) => {
  return (
    <div
      className={`message-container ${
        message.role === "user" ? "user-message" : "ai-message"
      }`}
    >
      <div className="message">{message.content}</div>
    </div>
  );
};

export default Message;