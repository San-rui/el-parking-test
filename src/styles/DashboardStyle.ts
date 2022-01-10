import styled from "styled-components";

export const Wrapper = styled.div`
    width: 99.1vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1b998b;
    padding: 5%;
    color: #001845;


    .hi-user {
        color: #edf2fb;
        font-size: 3rem;
        margin-bottom:1rem;
    }

    .results{
        width: 80%;
        background-color: #ffe1a8;
        padding: 1rem;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text{
        margin-bottom:1rem;
    }

    .text-category-container{
        font-size: 1.5rem;
        margin-bottom:1rem;
    }

    .category{
        color: #05668d;
    }

    .text-score{
        font-size: 1.5rem;
        margin-bottom:1rem;
        color: #05668d;
    }
`