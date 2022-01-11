import styled from "styled-components";

export const StartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #03071e;
    color: #e9ecef;
    width: 100%;
    height: 93vh;

    .nav-link{
        text-decoration: none;
        margin-right:1rem ;
        color: #e9ecef;
    }

    .input-name{
        width: 17rem;
        border: none;
        border-radius: 0.3rem;
        padding: 0.6rem;
        box-shadow: 2px 1px 12px 0px rgba(180,182,189,0.75);
        margin: 1rem;
        font-size: 1.2rem;
        font-family: 'Sansita', sans-serif;
        outline:none;
    }

    .input-name:active{
        border: 1px solid #F2545B;
    }

    .input-name:focus{
        box-shadow: 2px 1px 12px 0px #F2545B;
    }

    .start, .next {
        cursor: pointer;
        background: #F2545B;
        color: #fdfffc;
        border: none;
        width: 15rem;
        height: 3rem;
        border-radius:2rem;
        box-shadow: 2px 1px 12px 0px rgba(180,182,189,0.75);
        font-size: 1.5rem;
        margin: 1rem;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Sansita', sans-serif;
    }

    .start:hover , .next:hover{
        background: #f87060;
    }


`