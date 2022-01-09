import { FC } from "react";
import { Layout } from "../../components/layout";
import { useGame } from "../../hooks";

const Dashboard :FC= () =>{

    const { currentUserGame, startTrivia, checkAnswer, nextQuestion, gameOver, questionsItems, number, score, userAnswers, seconds, status } = useGame()

    return(
        <Layout>
            <h2>Results</h2>
            <h3>Final Score</h3>
            <p>{currentUserGame.score}</p>
            
        </Layout>
    )
}

export { Dashboard }