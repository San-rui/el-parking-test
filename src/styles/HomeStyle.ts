import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #03071e;
    padding: 5%;
    color: #e9ecef;

    >p{
        color: #e9ecef;
        font-size: 2rem;
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


    .hi-user{
        color: #fdfffc;
    }

    .score {
        color: #fdfffc;
        font-size: 2rem;
        margin-bottom:1rem;
    }

    .title-quiz{
        font-size: 3rem;
        text-align: center;
        margin-bottom:1rem;
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

    .loading{
        color: #fff3b0;
        margin-top:1rem;
    }

    .link{
        text-decoration: none;
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
`