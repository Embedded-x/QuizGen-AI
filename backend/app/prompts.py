def quiz_prompt(topic, difficulty, questions):
    return f"""
You are an expert quiz creator.

Generate exactly {questions} multiple choice questions on {topic}.

Difficulty: {difficulty}

Return ONLY valid JSON.

Example:

{{
  "questions":[
    {{
      "question":"...",
      "options": {{
        "A":"...",
        "B":"...",
        "C":"...",
        "D":"..."
      }},
      "answer":"A",
      "explanation":"..."
    }}
  ]
}}

Do not add markdown.
Do not add extra text.
"""