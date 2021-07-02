function initMonthCashGraph() {

    let colorPaybackDividends = "#47B252";
    let colorOverallDividends = "#E6EEFF";
    let widthGraphPoint = 80;

    if (document.body.offsetWidth < 1500) {
        widthGraphPoint = 65;
    }

    // общее кол-во дивидендов
    let dataPrev = [
        ['Янв', 19.12],
        ['Фев', 24.12],
        ['Мар', 38.12],
        ['Апр', 11.12],
        ['Май', 24.12],
        ['Июн', 38.12],
        ['Июл', 29.12],
        ['Авг', 46.12],
        ['Сен', 24.12],
        ['Окт', 38.12],
        ['Ноя', 29.12],
        ['Дек', 46.12]
    ];

    // выплаченные дивиденды
    let data = [
        ['Янв', 15.12],
        ['Фев', 19.12],
        ['Мар', 26.12],
        ['Апр', 17.12],
        ['Май', 19.12],
        ['Июн', 0],
        ['Июл', 27.12],
        ['Авг', 46.12],
        ['Сен', 24.12],
        ['Окт', 38.12],
        ['Ноя', 29.12],
        ['Дек', 46.12]
    ];

    function getData(data) {
        return data.map(function (country, i) {
            return {
                name: country[0],
                y: country[1],
                color: colorPaybackDividends
            };
        });
    }

    let elem = document.querySelector("#monthCashGraph");
    if (elem !== null) {
        var chart = Highcharts.chart('monthCashGraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: '',
            },
            plotOptions: {
                series: {
                    grouping: false,
                    borderWidth: 0
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            xAxis: {
                type: 'category',
                labels: {
                    useHTML: true,
                    animate: true,
                    style: {
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        color: "#606371",
                        fontSize: '0.9rem'
                    }
                }
            },
            yAxis: [{
                title: {
                    text: ''
                },
                showFirstLabel: false
            }],
            series: [
            {
                //enableMouseTracking: false,
                states: {
                    hover: {
                        enabled: false
                    }
                },
                color: colorOverallDividends, // ожидаемые дивиденды
                borderWidth: 1,
                borderColor: "#D3E3FF",
                pointPlacement: 0, // cмещение синего графика
                linkedTo: 'main',
                data: dataPrev.slice(),
                name: 'Ож.дивиденды',
                pointWidth: widthGraphPoint,
                borderRadius: widthGraphPoint / 15,
            }, 
            {
                //enableMouseTracking: false,
                states: {
                    hover: {
                        enabled: false
                    }
                },
                name: 'Выпл. дивиденды',
                borderWidth: 1,
                borderColor: colorPaybackDividends,
                id: 'main',
                pointWidth: widthGraphPoint,
                borderRadius: widthGraphPoint / 15,
                dataLabels: [{
                    enabled: true,
                    inside: true,
                    useHTML: true,
                    verticalAlign: "bottom",
                    style: {
                        fontFamily: "Montserrat",
                        fontWeight: "500",
                        color: "#24252E",
                        fontSize: '0.9rem',
                    },
                    formatter: function(e) {
                        return dataPrev[this.x][1] + "$";
                    }
                }],
                data: getData(data).slice(),
            }],
            exporting: {
                allowHTML: true
            }
        });
    }
}

initMonthCashGraph()