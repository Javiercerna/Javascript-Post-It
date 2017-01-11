(function() {
  var app = angular.module('board', []);

  var color_picker = document.querySelector('.jscolor');

  app.controller('BoardController',function() {
    this.post_its = [];
    this.color_picker_src = -1;
    this.addPostIt = function(board) {
      this.post_its.push({
                 text : 'Change this text by clicking on the edit icon',
        options_shown : false,
             editable : false,
                color : 'EE0',
                index : board.post_its.length,
          showOptions : function() {
            this.options_shown = true;
            color_picker.jscolor.fromString(this.color);
          },
          hideOptions : function() {
            this.editable = false;
            this.options_shown = false;
          },
         makeEditable : function() {
           this.editable = true;
          },
         showColorPicker : function() {
           color_picker.jscolor.show();
           board.color_picker_src = this.index;
         },
         changeColor : function(new_color) {
           this.color = new_color;
         }
      });
    };
    this.deletePostIt = function(post_it) {
      var index = this.post_its.indexOf(post_it);
      this.post_its.splice(index,1);
    };
    this.update = function(jscolor)
    {
      if (this.color_picker_src != -1)
      {
        this.post_its[this.color_picker_src].changeColor(jscolor);
      }
    }
  });

})();
