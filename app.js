(function() {
  var app = angular.module('board', []);

  app.controller('BoardController',function() {
    this.post_its = [];
    this.addPostIt = function() {
      this.post_its.push({'text': ''});
    };
  });

})();
