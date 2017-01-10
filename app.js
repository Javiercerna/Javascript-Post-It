(function() {
  var app = angular.module('board', []);

  app.controller('BoardController',function() {
    this.post_its = [];
    this.addPostIt = function() {
      this.post_its.push({
                 text : 'Change this text by clicking on the edit icon',
        options_shown : false,
             editable : false,
          showOptions : function() {
            this.options_shown = true;
          },
          hideOptions : function() {
            this.editable = false;
            this.options_shown = false;
          },
         makeEditable : function() {
           this.editable = true;
          }
      });
    };
    this.deletePostIt = function(post_it) {
      var index = this.post_its.indexOf(post_it);
      this.post_its.splice(index,1);
    };
  });

})();
