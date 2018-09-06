
function init(){
    var tbody = d3.select("tbody");

    dataSet.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");

        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);

            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};



var resets = d3.select("#resets");
var searches = d3.select("#searches");

resets.on("click", function(){
    init();
});

searches.on("click", function() {
    d3.event.preventDefault();
    tbl.innerHTML="";
    var tbody = d3.select("tbody");
    dataSet.forEach((sighting) => {
        var row = tbody.append("tr");
        if(sighting.datetime == d3.select("#date").property("value")){
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
        }
    });
    document.getElementById('date').value = '';
});

init();


