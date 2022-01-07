import { FC } from "react";
import { CardQuestion } from "../../components/common";
import { Layout } from "../../components/layout";
import { useGame, useTrivia } from "../../hooks";
import { Wrapper } from "../../styles/HomeStyle";

const Home :FC= () =>{

    const { startTrivia, checkAnswer, nextQuestion, gameOver, questionsItems, number, score, userAnswers, seconds } = useGame()

    const { loading } = useTrivia();


    return(
        <Layout>
            <Wrapper>
                <h1>El Parking Quiz</h1>
                { gameOver || userAnswers.length ===10 ? (<button className="start" onClick={startTrivia}> Start</button>) : null }
                
                { loading && <p> Loading questions...</p>}
                { !loading && !gameOver && (
                    <CardQuestion 
                    questionNumber={number + 1}
                    totalQuestions={ 10 }
                    question= { questionsItems[number].question.question}
                    answers={questionsItems[number].answers}
                    userAnswer ={ userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
                )}
                { !gameOver && !loading && userAnswers.length === number +1 && number !== 9? (<button className="next" onClick={nextQuestion}> Next Question</button>): null}
                { !gameOver ? <p className="score">Score: {score}</p> : null }
                { !loading && !gameOver &&  (<p className="score">Time: {seconds}</p>)}
                
            </Wrapper>
        </Layout>
    )
}

export { Home }