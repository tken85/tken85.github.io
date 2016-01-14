(function() {
  'use strict';


  $(document).ready(function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

    var javaScriptRules = false;
    var wantToHire = false;
    var projects = false;
    var about = false;

    var showAbout = function(){
      if(javaScriptRules && wantToHire){
        $('#about').removeClass('hidden');
        about = true;
      }
    };

    var showProjects = function(){
      if(javaScriptRules && wantToHire){
        $('#examples').removeClass('hidden');
        projects = true;
      }
    };

    var showFooter = function(){
      $('footer').removeClass('hidden');
    };

    $('#run').on('click', function(event){
      event.preventDefault();
      $('#error').addClass('hidden');
      $('#codeSuccess').addClass('hidden');
      var myCode=editor.getValue();
      try{
        eval(myCode);
        if (!wantToHire) throw "You still don't want to hire me even after I made you enter code?";
        if (!javaScriptRules) throw "What!! You don't love JavaScript?!!? Try again!";
        $('#codeSuccess').removeClass('hidden');
        if (projects && about){
          showFooter();
        }
      }
      catch(err){
        $('#error').removeClass('hidden');
        $('#error').html('<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>' + err);
      }


    });

  });



}());
