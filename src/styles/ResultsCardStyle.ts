import styled from "styled-components";

export const WrapperResultsCard = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 80%;
    background-color: #ffff;
    color: #001845;
    box-shadow: 2px 1px 12px 0px rgba(180,182,189,0.75);
    margin-top: 1rem;
    padding: 1.5rem;
    border-radius:2rem;

    .container-results{
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
    }

    .container-answer{
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;
        margin-bottom:1rem;
    }

    .result{
        color: #F2545B;
    }

`