import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 30rem;
    width: 100%;
    background-color: #ffffff10;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter:blur(12px);
    border-radius: 2rem;
    padding: 2rem;
    margin: 2rem;
    
    >p{
        color: #14213d;
        font-size: 1.5rem;

    }
`
type ButtonProps ={
    correct: boolean,
    userClick: boolean,
}

export const Button = styled.div<ButtonProps>`
    trasition : all 0.3s ease;
    
    :hover {
        opacity: 0.8;
    }

    button {
        font-family: 'Sansita', sans-serif;
        cursor: pointer;
        user-select: none;
        font-size:1.3rem;
        color: #ffffff;
        width: 100%;
        padding: 1rem;
        margin: 1rem 0;
        background: ${ ({correct, userClick})=>
            correct
            ? 'green'
            : !correct && userClick
            ? 'red'
            : '#ffbf69'
        };
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:2rem;

    }
`