$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
      // console.log(data);
      makeTable($("#shirtContainer"),data)
      for(const tee in data){
        console.log(data[tee]);
      }
      function makeTable(container, data) {
        var table = $("<table/>").addClass('CSSTableGenerator');
          table.append($("<th class='thead' />").text(`Shirt Color`))
          table.append($("<th class='thead'/>").text(`Shirt Icon`))
        $.each(data, function(rowIndex, r) {
            var row = $("<tr/>").addClass('theRow');


                row.append($("<td align ='center' class='theCol'/>").html("<img src='"+r.color+"' height='200' width='200' alt='a shirt'>"));
                row.append($("<td align ='center' class='theCol'/>").html("<img src='"+r.icon+"' height='200' width='200' alt='a icon'>"));
 
            table.append(row);
        });
        return container.append(table);
    }
    });
  });