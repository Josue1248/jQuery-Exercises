$(() => {
  $('#switcher-narrow')
    .on('click', () => {
      $('body')
        .addClass('narrow')
        .removeClass('large');
    });

    $('#switcher-large').on('click', () => {
      $('body')
        .addClass('narrow')
        .removeClass('large');
    });
  
    $('#switcher-default').on('click', () => {
      $('body')
        .removeClass('narrow')
        .addClass('large');
    });

    $('#switcher button')
      .on('click', (event)=>{
        event.stopPropagation();
        $('#switcher button')
          .removeClass('selected');
        $(event.target).addClass('selected');
      });

    // $('#switcher h3')
    //   .click(function(){
    //     $(this)
    //       .siblings('button').toggleClass('hidden');
    //   });
    
    $('#switcher')
      .click(()=>{
        $('#switcher button').toggleClass('hidden');
      });

    $('#switcher h3')
      .hover((event)=>{
        $(event.target).addClass('hover');
      }, (event)=>{
        $(event.target).removeClass('hover');
      })
});
