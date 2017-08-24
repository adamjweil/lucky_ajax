var dieView = function(roll){
  return '<div class="die"><span class="roll">' + roll + '</span></div>'
};

$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  $('#roll-form').on('submit', function(event){
    event.preventDefault();
    var $form = $(this);

    var request = $.ajax({
      url: $form.attr('action'),
      method: $form.attr('method'),
      data: $form.serialize()

    });
    request.done(function(response){
      console.log(response);
      $('#die-container').html(dieView(response.roll));
    });
  });
  //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery

});
