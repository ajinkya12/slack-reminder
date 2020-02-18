function yaadDilaDo() {
  /* var xhr = $.get('https://www.eventsnow.com/hyderabad/srh-ipl-tickets', function(response){
      //console.log('RESPONSE', response.includes('No matches available currently'));
  });*/
  $.post('https://hooks.slack.com/services/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',
                      {'text': 'NEW NEW'}, function(response){
                        console.log(JSON.stringify(response));
                      });
};
