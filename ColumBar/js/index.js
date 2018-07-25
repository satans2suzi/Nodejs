function generateChartData() {
    var chartData=[];
    var country= ['Russia', 'South Korea', 'Canada', 'Brazil'];
    var visits=500;

    for (var i =500 ; i <700 ; i ++) {
        var visits = Math.round(Math.random() * i) + 300;

        country[0] = visits;
        chartData.push({
            "country": country[0],
            "visits": visits
        });
    };
    for (var i =500 ; i <700 ; i ++) {
        var visits = Math.round(Math.random() * i) + 500;

        country[1] = visits;
        chartData.push({
            "country": country[1],
            "visits": visits
        });
    };

    for (var i =400 ; i <700 ; i ++) {
        var visits = Math.round(Math.random() * i) + 600;

        country[2] = visits;
        chartData.push({
            "country": country[2],
            "visits": visits
        });
    };

    for (var i =300 ; i <700 ; i ++) {
        var visits = Math.round(Math.random() * i) + 500;

        country[3] = visits;
        chartData.push({
            "country": country[3],
            "visits": visits
        });
    };
    return chartData;

};

var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "dataProvider": generateChartData(),
    "graphs": [{
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
    }],
    "categoryField": "country",
    "chartCursor": {
        "fullWidth": true,
        "cursorAlpha": 0.1,
        "listeners": [{
            "event": "changed",
            "method": function(ev) {
                // Log last cursor position
                ev.chart.lastCursorPosition = ev.index;
            }
        }]
    },
    "listeners": [{
        "event": "init",
        "method": function(ev) {
            // Set a jQuery click event on chart area
            jQuery(ev.chart.chartDiv).on("click", function(e) {
                // Check if last cursor position is present
                if (!isNaN(ev.chart.lastCursorPosition)) {
                    console.log("clicked on " + ev.chart.dataProvider[ev.chart.lastCursorPosition].country);
                }
            })
        }
    }]
})

setInterval(function () {
     var count= ["Russia", "Sorth Korea", "Canada", "Brazil"]
     var visits= Math.round(Math.random()*500)+100;
     count[0]= visits;
     count[1]= visits;
     count[2]= visits;
     chart.dataProvider.push({
         "country": country,
         "visits": visits
     });
     chart.validatecountry()

},1000);

setInterval(function () {
     chart.dataProvider.splice(30);
}, 1000);