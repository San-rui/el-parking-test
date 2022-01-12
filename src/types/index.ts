export type Question = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
}

export type TriviaReducer = {
    type: string,
    payload: Question[]
}

export type TriviaState = {
    loading: boolean,
    items: Question[]
    error: string
}

export type QuestionState = { 
    answers: string[],
    question: Question,
}

export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string,
}

export type UserGame ={
    name: string,
    questionNumber: number,
    questions: QuestionState[],
    score?: number,
    time?:number,
    level?: string,
    category?:string,
    gameOver?:boolean,
    totalResults: AnswerObject[],
}
