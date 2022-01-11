import { FC } from "react";
import { Link } from "react-router-dom";
import { NavWrapper } from "../../../styles/NavStyle";
import { UserGame } from "../../../types";

const Nav:FC = () => {

    const dataGameUser: UserGame = JSON.parse(localStorage.getItem('user-session') || '{}');
    
    return (
        <NavWrapper>
            <div className="nav">
                <Link className="nav-link" to="./dashboard">Partial Results</Link>
                <Link className="nav-link" to="./">New Game</Link>
                { dataGameUser.questionNumber !==10 && <Link className="nav-link" to="./home">Home</Link>}
            </div>
        </NavWrapper>
        
    )
}

export { Nav }