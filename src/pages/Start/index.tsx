import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useGame, useTrivia } from "../../hooks";
import { StartWrapper } from "../../styles/StartStyle";
import { UserGame } from "../../types";


const Start :FC= () =>{

    const { startTrivia, setName, name } = useGame()
    const { loading } = useTrivia();
    const dataGameUser: UserGame = JSON.parse(localStorage.getItem('user-session') || '{}');


    return(
        <Layout hidenHeader>
            <StartWrapper>
                <h1 className="title-quiz">El Parking Quiz</h1>
                
                <input id="name"
                    className="input-name"
                    type="text" name="name" 
                    placeholder="Enter your name" 
                    value={ name }
                    onChange={e =>{ 
                        setName(e.target.value)
                    }}
                />
                
                <button className="start" onClick={startTrivia}> Start Game</button>
                { loading && <p className="loading"> Loading questions...</p>}

            </StartWrapper>
        </Layout>
    )
}

export { Start}