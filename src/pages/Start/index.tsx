import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useGame, useTrivia } from "../../hooks";
import { StartWrapper } from "../../styles/StartStyle";


const Start :FC= () =>{

    const { startTrivia, currentUserGame, setName } = useGame()
    const { loading } = useTrivia();


    return(
        <Layout>
            <StartWrapper>
                <h1 className="title-quiz">El Parking Quiz</h1>
                
                <input id="name"
                    className="input-name"
                    type="text" name="name" 
                    placeholder="Enter your name" 
                    value={currentUserGame.name}
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