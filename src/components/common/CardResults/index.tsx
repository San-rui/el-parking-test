import { FC } from "react";
import { Wrapper, Button } from "../../../styles/QuestionCard";
import { WrapperResultsCard } from "../../../styles/ResultsCardStyle";
import { AnswerObject } from "../../../types";

type Props = {
    answers: AnswerObject[],
}

const CardResults :FC <Props> = ({ answers }) =>{

    return (
        <WrapperResultsCard>
            <div className="container-results">
                {answers?.map((answer, index) => (
                    <div className="container-answer">
                        <p>{index+1}-  {answer.question}</p>
                        <p>
                            <span>Your answer was {answer.answer}: </span>
                            <span className="result">{`${answer.correct}`}</span>
                        </p>
                    </div>
                    
                ))}
            </div>
        </WrapperResultsCard>
    );
}

export { CardResults }