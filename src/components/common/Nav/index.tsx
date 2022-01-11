import { FC } from "react";
import { Link } from "react-router-dom";
import { NavWrapper } from "../../../styles/NavStyle";
import { UserGame } from "../../../types";

const Nav:FC = () => {

    const dataGameUser: UserGame = JSON.parse(localStorage.getItem('user-session') || '{}');
    
    return (
        <NavWrapper>
            <div className="nav">
                <Link className="nav-link" to="./">New Game</Link>
            </div>
        </NavWrapper>
        
    )
}

export { Nav }