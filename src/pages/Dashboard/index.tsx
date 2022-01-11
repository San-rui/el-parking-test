import { FC } from "react";
import { Layout } from "../../components/layout";
import { Wrapper } from "../../styles/DashboardStyle";
import { UserGame } from "../../types";

const Dashboard :FC= () =>{

    const dataGameUser: UserGame = JSON.parse(localStorage.getItem('user-session') || '{}');

    return(
        <Layout>
            <Wrapper>
                <h2 className='hi-user'>Hi {dataGameUser.name}</h2>
                <div className='results'>
                    <h2 className='text'>These are your Results</h2>
                    <div className='text-category-container'>
                        <p className='text-category'>Your Category was <span className='category'> {dataGameUser.category}</span></p>
                    </div>
                    
                    <h3 className='text'>Final Score</h3>
                    <p className='text-score'>{dataGameUser.score}</p>
                </div>

            </Wrapper>

        </Layout>
    )
}

export { Dashboard }