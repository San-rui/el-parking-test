import { FC } from "react";
import { Link } from "react-router-dom";
import { CardQuestion, ProgressBar } from "../../components/common";
import { Layout } from "../../components/layout";
import { useGame, useTrivia } from "../../hooks";
import { Wrapper } from "../../styles/HomeStyle";

const Home :FC= () =>{

    const { checkAnswer, nextQuestion, questionsItems, number, score, userAnswers, seconds, status, currentUserGame} = useGame()

    return(
        <Layout>
            <Wrapper>
                <p className="hi-user">Hi {currentUserGame.name} the category is {questionsItems[number].question.category}</p>
                
                <CardQuestion 
                    questionNumber={number + 1}
                    totalQuestions={ 10 }
                    question= { questionsItems[number].question.question}
                    answers={questionsItems[number].answers}
                    userAnswer ={ userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
                
                { userAnswers.length === number +1 && number !== 9? (<button className="next" onClick={nextQuestion}> Next Question</button>): null}
                <p className="score">Partial Score: {score}</p> 
                <p className="score">Time: {seconds}</p>
                <ProgressBar percent={(seconds*100)/30} status={status}/>
                { userAnswers.length ===10 ? (<Link className="link" to='./dashboard'> Go to Results</Link>) : null }
            
            </Wrapper>
        </Layout>
    )
}

export { Home }