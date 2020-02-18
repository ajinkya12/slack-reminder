function yaadDilaDo() {
  /* var xhr = $.get('https://www.eventsnow.com/hyderabad/srh-ipl-tickets', function(response){
      //console.log('RESPONSE', response.includes('No matches available currently'));
  });*/
  var url = "EYvs5bLcCHZbNdCTzgRPBWHj/Z36E927UB/QD7D8E30T/secivres/moc.kcals.skooh//:sptth";
  var actual = url.split("").reverse().join("");
  var text = "NEW NEW";
  $.ajax({
      type: 'POST',
      url: actual,
      data: 'payload=' + JSON.stringify({
        "text": text
      }),
      dataType: "json"
  });
};
