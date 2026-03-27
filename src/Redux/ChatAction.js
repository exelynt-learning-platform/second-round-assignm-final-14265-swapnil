import {
  sendMessageStart,
  sendMessageSuccess,
  sendMessageFailure,
  addUserMessage,
} from "./ChatSlice";
import { fetchChatResponse } from "../Services/api";

export const sendMessage = (userText) => async (dispatch, getState) => {
  try {
    const userMessage = { role: "user", content: userText };

    dispatch(addUserMessage(userMessage));
    dispatch(sendMessageStart());

    const { messages } = getState().chat;

    const aiResponse = await fetchChatResponse(messages);
    
    dispatch(sendMessageSuccess(aiResponse));
  } catch (error) {
    console.log(error);
    dispatch(sendMessageFailure("Failed to fetch response"));
  }
};