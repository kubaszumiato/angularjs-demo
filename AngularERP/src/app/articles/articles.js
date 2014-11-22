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

        $scope.articles = [
            {
                "id": "54706f30b29b6229734f580d",
                "code": "NETPLODE"
            },
            {
                "id": "54706f30e1ddb00fd58a77a3",
                "code": "LETPRO"
            }
        ];

        $scope.getArticles = function() {
            return $scope.articles;
        };

        $scope.addArticle = function (article) {
            return $scope.articles.push(article);
        };

        
    })

;
