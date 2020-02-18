function yaadDilaDo() {
  $.get('https://www.eventsnow.com/hyderabad/srh-ipl-tickets', function(response){
      var tickets = response.includes('No matches available currently');
      console.log("available :: " + tickets);
      if(tickets) {
        sendMessage();
      }
  });
};

function sendMessage() {
  var url = "EYvs5bLcCHZbNdCTzgRPBWHj/Z36E927UB/QD7D8E30T/secivres/moc.kcals.skooh//:sptth";
  var actual = url.split("").reverse().join("");
  var text = "Ticket ticket";
  $.ajax({
      type: 'POST',
      url: actual,
      data: 'payload=' + JSON.stringify({
        "text": text
      }),
      dataType: "json"
  });
}
