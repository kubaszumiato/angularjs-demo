angular.module( 'ngBoilerplate.articles', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
    $stateProvider.state('articles', {
        url: '/articles',
    views: {
      "main": {
          controller: 'ArticlesCtrl',
          templateUrl: 'articles/articles.tpl.html'
      }
    },
    data:{ pageTitle: 'articles' }
  });
})

.controller('ArticlesCtrl', function ArticlesCtrl($scope) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The second choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
