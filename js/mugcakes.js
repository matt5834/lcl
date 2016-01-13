/* global $,Miso,JST */
$(function(){

  var cakes = new Miso.Dataset({
    importer : Miso.Dataset.Importers.GoogleSpreadsheet,
    parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
    key: "12B4GzljD0Tp8gbSpDcmGum7BP4vQEvsLQxd4Vbmbsjs",  
    worksheet: "1"
  });

  var workingColumns = [
    "Project",
    "Profile Link",
    "URL for Gallery"
  ];

  var $el = $("#cakes");
  cakes.fetch().done(function() {
    cakes.each(function(cake) {
       $el.append(JST["templates/cake.html"]({
         cake : cake,
         controls : workingColumns
       }));
    });
  });
}());
