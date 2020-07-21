import React, {useContext} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {ThemeContext} from './Dashboard';
import {chartData} from './Data';
import {darkerGrey, lightGrey} from './GlobalStyle';
import { Card } from './Card';

const getOptions = (dark) => {
    return{
        chart: {
            height:'360px',
            type: 'column',
            backgroundColor: dark ? darkerGrey: 'white',
            style: {
                fontFamily: `'Blinker' sans-serif`
            }
        },
        title: {
            text: 'Revenue By Product',
            style:{
                color: dark ? lightGrey: 'black'
            }
        },
        xAxis: {
            labels:{
                style:{
                    color: dark ? lightGrey: 'black'
                }
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            gridLineColor: dark ? 'grey': lightGrey,
            labels:{
                style:{
                    color: dark ? lightGrey: 'black'
                }
            },
            min: 0,
            reverseStacks: false,
            title: {
                text: 'Billions of Dollars',
                style:{
                    color: dark ? lightGrey: 'black'
                }
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true,
            backgroundColor: dark ? darkerGrey: 'white',
            style:{
                color: dark ? lightGrey: 'black'
            }
        },
        plotOptions: {
            series:{
                borderWidth: 0
            },
            column: {
                stacking: 'normal'
            }
        },
        legend:{
            itemStyle:{
                color: dark ? lightGrey: 'black'
            }
        },
        series: chartData
    }
}

export function Chart(){

    const [theme, setTheme] = useContext(ThemeContext);

    const dark = theme === 'dark';

    return(
        <Card height={400} dark={dark}>
            <HighchartsReact
                highcharts={Highcharts}
                options={getOptions(dark)}
            />
        </Card>
    );
}
