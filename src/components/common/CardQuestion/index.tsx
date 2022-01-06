import { FC } from "react";
import { Wrapper, Button } from "../../../styles/QuestionCard";
import { AnswerObject } from "../../../types";

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement> ) => void;
    userAnswer: AnswerObject | undefined,
    questionNumber: number,
    totalQuestions: number,
}

const CardQuestion :FC <Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions
}) =>{


    return (
        <Wrapper>  
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <Button 
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClick={userAnswer?.answer === answer}
                        >

                        <button disabled ={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>

                    </Button>
                ))}
            </div>
        </Wrapper>
    );
}

export { CardQuestion }