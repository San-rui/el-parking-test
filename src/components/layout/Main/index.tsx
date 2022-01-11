import { FC } from 'react';
import { MainWrapper } from '../../../styles/MainStyle';

const Main:FC = ({children}) => {

    return (
            <MainWrapper>
                { children }
            </MainWrapper>
    )
}

export { Main }