import styled from "styled-components";
//@ts-ignore
import backgroundImage from '../assets/images/backgroundImage.jpeg'


export const Wrapper = styled.div`
    width: 99vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size:cover;
    background-position: left;
    padding: 5%;

    >p{
        color: #14213d;
        font-size: 2rem;
    }

    .score {
        color: #edf2fb;
        font-size: 2rem;
    }

    h1{
        font-size: 3rem;
        text-align: center;
    }

    .start, .next {
        cursor: pointer;
        background: #f6bd60;
        border: none;
        width: 10rem;
        height: 2.5rem;
        border-radius:2rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-size: 1rem;
        margin: 1rem;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Sansita', sans-serif;
    }

    .loading{
        background-color: #ffff;
    }
`