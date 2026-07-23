import axios from "axios";

const API = axios.create({
  baseURL: "https://quizgen-ai-okns.onrender.com/api",
});

export const generateQuiz = async (quizData) => {
  const response = await API.post("/generate-quiz", quizData);
  return response.data;
};