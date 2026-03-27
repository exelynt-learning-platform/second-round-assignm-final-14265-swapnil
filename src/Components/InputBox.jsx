import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../Redux/ChatAction";
import "./Inputbox.css"

const InputBox = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (!input.trim()) return;
    dispatch(sendMessage(input));
    setInput("");
  };

return (
  <div className="input-container">
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Type a message..."
    />
    <button onClick={handleSend}>Send</button>
  </div>
);
}

export default InputBox;