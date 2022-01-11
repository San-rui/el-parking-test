import { FC } from "react";
import { Link } from "react-router-dom";
import { NavWrapper } from "../../../styles/NavStyle";

const Nav:FC = () => {
    
    return (
        <NavWrapper>
            <div className="nav">
                <Link className="nav-link" to="./dashboard">Partial Results</Link>
                <Link className="nav-link" to="./">Home</Link>
            </div>
        </NavWrapper>
        
    )
}

export { Nav }