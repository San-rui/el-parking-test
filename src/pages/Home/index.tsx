import { FC, useState } from "react";
import { CardQuestion } from "../../components/common";
import { Layout } from "../../components/layout";
import { useTrivia } from "../../hooks";
import { QuestionState } from "../../types";

type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string,
}

const Home :FC= () =>{

    const { items, startTrivia, checkAnswer, nextQuestion } = useTrivia()
    console.log(items)


    return(
        <Layout>
            <div className="home">
                <h1>El Parking Quiz</h1>
                <button className="start" onClick={startTrivia}> Start</button>
                <p className="score"> Score</p>
                <p> Loading questions...</p>
                {/* <CardQuestion 
                    questionNumber={number + 1}
                    totalQuestions={ 10 }
                    question= { questions[number].question}
                    answers={questions[number].answers}
                    userAnswer ={ userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                /> */}
                <button className="next" onClick={nextQuestion}> Next Question</button>
            </div>

        </Layout>
    )
}

export { Home }