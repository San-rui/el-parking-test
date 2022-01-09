import { FC } from "react";
import { CardQuestion, ProgressBar } from "../../components/common";
import { Layout } from "../../components/layout";
import { useGame, useTime, useTrivia } from "../../hooks";
import { Wrapper } from "../../styles/HomeStyle";

const Dashboard :FC= () =>{

    const { currentUserGame, startTrivia, checkAnswer, nextQuestion, gameOver, questionsItems, number, score, userAnswers, seconds, status } = useGame()
    

    const { loading } = useTrivia();

    return(
        <Layout>
            <h2>Results</h2>
            <h3>Final Score</h3>
            <p>{currentUserGame.score}</p>
            
        </Layout>
    )
}

export { Dashboard }