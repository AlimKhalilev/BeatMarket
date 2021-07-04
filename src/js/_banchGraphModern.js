function initBanchGraphModern() {
    let graph = document.querySelector(".banchGraphModern__graph");
    if (graph === null) {
        return false;
    }

    Highcharts.chart('banchGraphModern', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            gridLineWidth: 5,
            categories: [
                'Янв 2020', 'Фев 2020', 'Мар 2020', 'Апр 2020', 'Май 2020', 
                'Июн 2020', 'Июл 2020', 'Авг 2020', 'Сен 2020', 'Окт 2020', 'Ноя 2020', 'Дек 2020'
            ]
        },
        yAxis: {
            gridLineWidth: 0
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Мой портфель',
            data: [32.56, 4.44, 6.18, -10.22, 10.23, 12.22, 32.56, 4.44, 6.18, -10.22, 10.23, 12.22],
            color: 'rgba(25, 159, 39, 0.8)',
            pointWidth: 24,
            groupPadding: 0,
        }, {
            name: 'S&P 500',
            data: [-12.22, 5.12, -5.22, -7.22, 16.23, -12.22, 18.56, 4.44, 16.18, 10.22, -10.23, 3.22],
            color: 'rgba(62, 84, 216, 0.8)',
            pointWidth: 24,
            groupPadding: 0,
        }]
    });
}

initBanchGraphModern();