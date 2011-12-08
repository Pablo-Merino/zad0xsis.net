$(document).ready(function(){
  $.routes({
        '/posts/:id': function(params){
          getJSONPosts();
          $('#blogbox').slideDown(150, function() {
            $('#tbox').slideUp(200);
            $('#cbox').slideUp(200);
            $('#abtbox').slideUp(200);
            $('#mtbox').slideUp(200);
          });
        },
        '/about': function() {
          $('#abtbox').slideToggle(150, function() {
            $('#tbox').slideUp(200);
            $('#cbox').slideUp(200);
            $('#mtbox').slideUp(200);
            $('#blogbox').slideUp(200);

          });
        },
        '/contact': function() {
          $('#cbox').slideToggle(150, function() {
            $('#tbox').slideUp(200);
            $('#abtbox').slideUp(200);
            $('#mtbox').slideUp(200);
            $('#blogbox').slideUp(200);
          });
        }, 
        '/twitter':function(){
          $('#tbox').slideToggle(150, function() {
            $('#cbox').slideUp(200);
            $('#abtbox').slideUp(200);
            $('#mtbox').slideUp(200);
            $('#blogbox').slideUp(200);
          });
        }, 
        '/mythings':function() {
          $('#mtbox').slideToggle(150, function() {
            $('#tbox').slideUp(200);
            $('#cbox').slideUp(200);
            $('#abtbox').slideUp(200);
            $('#blogbox').slideUp(200);

          });
        },
        '/blog':function() {

          $('#blogbox').slideToggle(150, function() {
            $('#tbox').slideUp(200);
            $('#cbox').slideUp(200);
            $('#abtbox').slideUp(200);
            $('#mtbox').slideUp(200);

          });
        }
      });
  /*$('#contact').click(function(){
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
  });*/

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
    
  });

});

