import axios from "axios";

const API = axios.create({
  baseURL: "https://quizgen-ai-okns.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const generateQuiz = async (quizData) => {
  const response = await API.post("/generate-quiz", quizData);
  return response.data;
};

export default API;