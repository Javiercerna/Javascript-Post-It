(function() {
  var app = angular.module('board', []);

  app.controller('BoardController',function() {
    this.post_its = [];
    this.addPostIt = function() {
      this.post_its.push({
                 text : 'Change this text by clicking on the edit icon',
        options_shown : false
      });
    };
    this.deletePostIt = function(post_it) {
      var index = this.post_its.indexOf(post_it);
      this.post_its.splice(index,1);
    };
  });

})();
