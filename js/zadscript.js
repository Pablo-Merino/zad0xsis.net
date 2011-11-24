$(document).ready(function(){
  $('#contact').click(function(){
    $('#cbox').slideToggle(150, function() {
      $('#tbox').slideUp(200);
      $('#abtbox').slideUp(200);
      $('#mtbox').slideUp(200);
      $('#blogbox').slideUp(200);
    });

  });
  $('#twitter').click(function(){
    $('#tbox').slideToggle(150, function() {
      $('#cbox').slideUp(200);
      $('#abtbox').slideUp(200);
      $('#mtbox').slideUp(200);
      $('#blogbox').slideUp(200);
    });

  });
  $('#abtme').click(function(){
    $('#abtbox').slideToggle(150, function() {
      $('#tbox').slideUp(200);
      $('#cbox').slideUp(200);
      $('#mtbox').slideUp(200);
      $('#blogbox').slideUp(200);

    });

  });
  $('#mythings').click(function(){
    $('#mtbox').slideToggle(150, function() {
      $('#tbox').slideUp(200);
      $('#cbox').slideUp(200);
      $('#abtbox').slideUp(200);
      $('#blogbox').slideUp(200);

    });
  });
  $('#blog').click(function(){
    getJSONPosts();

    $('#blogbox').slideToggle(150, function() {
      $('#tbox').slideUp(200);
      $('#cbox').slideUp(200);
      $('#abtbox').slideUp(200);
      $('#mtbox').slideUp(200);

    });
  });

  $('#subtitle').click(function(){
    //$("#sopa").modal({overlayClose:true, overlayCss: {backgroundColor:"#000", }});
    $("#sopa").modal({overlayClose:true, overlayCss: {backgroundColor:"#000"}, 
    onClose: function (dialog) {
      dialog.data.fadeOut('fast', function () {
        dialog.container.fadeOut('fast', function () {
          dialog.overlay.fadeOut('fast', function () {
            $.modal.close();
          });
        });
      });

    },
    onOpen: function (dialog) {
      dialog.overlay.fadeIn('fast', function () {
        dialog.data.hide();
        dialog.container.fadeIn('fast', function () {
          dialog.data.fadeIn('fast');
        });
      });
    }});    
    getJSONPosts();
  });

function getJSONPosts() {
  $.get('./posts.php', function(data) {
    var parsed = jQuery.parseJSON(data);
    $('#blogbox #posts').html('<hr />');

    $.each(parsed, function(index, value){
      $('#posts').append("<h1>"+parsed[index].title+"</h1><h3>By "+parsed[index].author+" on "+parsed[index].date+"</h3><p>"+parsed[index].body+"<a href=\"mailto:comments@zad0xsis.net\" id=\"commenta\">Comments to comments@zad0xsis.net</a><hr />");
    });
      //$('#posts').html(parsed[0].title);
      //alert('Load was performed.');
  });
}
});

