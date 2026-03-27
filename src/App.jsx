import './App.css'
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import ChatBot from './Components/ChatBot'
import InputBox from './Components/InputBox'

function App() {

  return (
   
   <Provider store={store}>
      <div className="app-container">
        <h1 className="title">AI Chatbot</h1>

        <div className="chat-wrapper">
         <ChatBot/>
        </div>

        <InputBox/>
      </div>
    </Provider>
   
  )
}

export default App
