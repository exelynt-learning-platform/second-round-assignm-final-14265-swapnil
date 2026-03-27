import axios from "axios";

export const fetchChatResponse = async (messages) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log(apiKey)
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: messages,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].message;
};