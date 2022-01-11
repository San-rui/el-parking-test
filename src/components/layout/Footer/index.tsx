import { FC } from "react";
import { FooterWrapper } from "../../../styles/FotterStyle";

const Footer:FC = ()=>{
    return (
        <FooterWrapper>
            <footer className="footer">
                <p>
                    <span>Made with love by</span>
                    <span> San</span>

                </p>
            </footer>
        </FooterWrapper>
    )
}

export {Footer}
