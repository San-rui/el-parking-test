import styled from "styled-components";

export const Wrapper = styled.div`
    width: 99vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #160f29;
    padding: 5%;
    color: #001845;


    .hi-user {
        color: #fefcfb;
        font-size: 3rem;
        margin-bottom:1rem;
    }

    .results{
        width: 80%;
        background-color: #f1f2ee;
        color: #160f29;
        padding: 1rem;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 2px 1px 12px 0px rgba(180,182,189,0.75);
    }

    .text{
        margin-bottom:1rem;
    }

    .text-category-container{
        font-size: 1.5rem;
        margin-bottom:1rem;
    }

    .category{
        color: #F2545B;
    }

    .text-score{
        font-size: 1.5rem;
        margin-bottom:1rem;
        color: #F2545B;
    }
`