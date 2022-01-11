import { FC } from "react";
import { Layout } from "../../components/layout";
import { useGame } from "../../hooks";
import { Wrapper } from "../../styles/DashboardStyle";

const Dashboard :FC= () =>{

    const { currentUserGame } = useGame()

    return(
        <Layout>
            <Wrapper>
                <h2 className='hi-user'>Hi {currentUserGame.name}</h2>
                <div className='results'>
                    <h2 className='text'>These are your Results</h2>
                    <div className='text-category-container'>
                        <p className='text-category'>Your Category was <span className='category'> {currentUserGame.category}</span></p>
                    </div>
                    
                    <h3 className='text'>Final Score</h3>
                    <p className='text-score'>{currentUserGame.score}</p>
                </div>

            </Wrapper>

        </Layout>
    )
}

export { Dashboard }