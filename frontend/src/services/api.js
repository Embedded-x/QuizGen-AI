import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const generateQuiz = async (quizData) => {
  const response = await API.post("/generate-quiz", quizData);
  return response.data;
};