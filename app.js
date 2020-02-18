function yaadDilaDo() {
  /* var xhr = $.get('https://www.eventsnow.com/hyderabad/srh-ipl-tickets', function(response){
      //console.log('RESPONSE', response.includes('No matches available currently'));
  });*/
  var url = "9hDsZS8nEqe7zEXEI1x9hYyu/8EJUHF4UB/QD7D8E30T/secivres/moc.kcals.skooh//:sptth";
  var actual = url.split("").reverse().join("");
  var token = "RB7726vi8Rj0bsi0JTDxArc8-846348849659-6649444843-bxox";
  var actualToken = token.split("").reverse().join("");

  var text = "NEW NEW";
  $.ajax({
      type: 'POST',
      url: actual,
      data: 'payload=' + JSON.stringify({
        "text": text
      }),
      error: function(e) {
        console.log(e);
      },
      dataType: "json",
      contentType: "application/json"
  });
};
