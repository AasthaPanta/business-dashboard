import React, {createContext, useState} from 'react'
import { Brand } from './Brand';
import { Container} from './Container';
import { DarkSwitch } from './DarkSwitch';
import { VirtualizedTable } from './Table';
import { Chart } from './Chart';
import { GlobalStyle } from './GlobalStyle';

export const ThemeContext = createContext();

export function Dashboard() {

    const themeState = useState('dark');

    const [theme] = themeState;

    const dark = theme === 'dark';
    return (
        <ThemeContext.Provider value={themeState}>
            <GlobalStyle dark={dark} />
            <Container>
                <Brand />
                <DarkSwitch />
                <Chart />
                <VirtualizedTable />
            </Container>
        </ThemeContext.Provider>
        
    )
}
