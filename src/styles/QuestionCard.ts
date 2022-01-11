import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 30rem;
    width: 100%;
    background-color: #dae3e5;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter:blur(12px);
    border-radius: 2rem;
    padding: 2rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 1px 12px 0px rgba(180,182,189,0.75);
    
    .number{
        color: #03071e;
        font-size: 1.5rem;
    }

    .question{
        color: #F2545B;
        font-size: 1.7rem;
        margin: 1rem;
    }

    .container-options-button{
        width: 100%;
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
        width: 100%;
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
            ? '#02c39a'
            : !correct && userClick
            ? '#ff595e'
            : '#ffb703'
        };
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius:2rem;
    }

    button:hover{
        background-color: #f77f00;
    }
`