Highcharts.getJSON('./jsonfiles/ftse100.json', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {   


        rangeSelector: {
            selected: 1
        },
        scrollbar: {
            hide: true
        },
        series: [{
            name: 'ftse100',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});

function myJsFunc(param1) {

  Highcharts.getJSON('./jsonfiles/'+param1+".json", function (data) {
    // Create the chart
    Highcharts.stockChart('container', {   


        rangeSelector: {
            selected: 1
        },
        scrollbar: {
            hide: true
        },
        series: [{
            name: param1,
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});
}
