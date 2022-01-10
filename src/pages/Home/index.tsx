import { FC } from "react";
import { Link } from "react-router-dom";
import { CardQuestion, ProgressBar } from "../../components/common";
import { Layout } from "../../components/layout";
import { useGame, useTrivia } from "../../hooks";
import { Wrapper } from "../../styles/HomeStyle";

const Home :FC= () =>{

    const { startTrivia, checkAnswer, nextQuestion, gameOver, questionsItems, number, score, userAnswers, seconds, status, currentUserGame, setName } = useGame()
    const { loading } = useTrivia();

    return(
        <Layout>
            <Wrapper>
                <h1>El Parking Quiz</h1>
                
                { gameOver || userAnswers.length ===10 ? (<input id="name" 
                    type="text" name="name" 
                    placeholder="Enter your name" 
                    value={currentUserGame.name}
                    onChange={e =>{ 
                        setName(e.target.value)
                    }}
                />) : null }
                
                { gameOver || userAnswers.length ===10 ? (<button className="start" onClick={startTrivia}> Start Game</button>) : null }
                { loading && <p className="loading"> Loading questions...</p>}
                { !loading && !gameOver && (<p>Hi {currentUserGame.name} the category is {questionsItems[number].question.category}</p>)}
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
                { !gameOver ? <p className="score">Partial Score: {score}</p> : null }
                { !loading && !gameOver &&  (<p className="score">Time: {seconds}</p>)}
                { !loading && !gameOver &&  (<ProgressBar percent={(seconds*100)/30} status={status}/>)}
                { userAnswers.length ===10 ? (<Link to='./dashboard'> Go to Results</Link>) : null }
            </Wrapper>
            
        </Layout>
    )
}

export { Home }