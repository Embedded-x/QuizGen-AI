from fastapi import APIRouter
from pydantic import BaseModel

from app.services import generate_quiz

router = APIRouter()


class QuizRequest(BaseModel):
    topic: str
    difficulty: str
    questions: int


@router.post("/generate-quiz")
def create_quiz(request: QuizRequest):
    return generate_quiz(
        request.topic,
        request.difficulty,
        request.questions,
    )