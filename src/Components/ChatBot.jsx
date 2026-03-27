import { useSelector } from "react-redux";
import Messages from "./Messages";
import "./ChatBot.css";
import "./Message.css"

const ChatBot = () => {
  const { messages, loading, error } = useSelector((state) => state.chat);

  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <Messages key={index} message={msg} />
      ))}

      {loading && <p className="left">Typing...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default ChatBot