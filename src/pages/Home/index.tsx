import { FC } from "react";
import { Link } from "react-router-dom";
import { CardQuestion, ProgressBar } from "../../components/common";
import { Layout } from "../../components/layout";
import { useGame } from "../../hooks";
import { Wrapper } from "../../styles/HomeStyle";
import { UserGame } from "../../types";

const Home :FC= () =>{

    const dataGameUser: UserGame = JSON.parse(localStorage.getItem('user-session') || '{}');
    
    const { checkAnswer, nextQuestion, number, score, userAnswers, seconds, status , goDashboard} = useGame()


    return(
        <Layout>
            <Wrapper>
                <p className="hi-user">Hi {dataGameUser.name} the category is {dataGameUser.questions[0].question.category}</p>
                
                <CardQuestion 
                    questionNumber={number + 1}
                    totalQuestions={ 10 }
                    question= { dataGameUser.questions[number].question.question}
                    answers={dataGameUser.questions[number].answers}
                    userAnswer ={ userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
                
                { dataGameUser.questionNumber < 10 ? (<button className="next" onClick={nextQuestion}> Next Question</button>): null}
                <p className="score">Partial Score: {score}</p> 
                <p className="score">Time: {seconds}</p>
                <ProgressBar percent={(seconds*100)/30} status={status}/>
                { dataGameUser.questionNumber ===10 ? (<button className="link" onClick={goDashboard}> Go to Results</button>) : null }
            
            </Wrapper>
        </Layout>
    )
}

export { Home }