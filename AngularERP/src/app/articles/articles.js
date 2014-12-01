 
//'use strict';
 
 
var myapp = angular.module('ngBoilerplate.articles', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
]);

myapp.config(function config($stateProvider) {
    $stateProvider
        .state('articles', {
            url: '/articles',
            views: {
                "main": {
                    controller: 'ArticlesCtrl',
                    templateUrl: 'articles/articles.tpl.html'
                }
            },
            data: { pageTitle: 'articles' }
        })
        .state('articleDetails', {
            url: '/articles/:id',
            views: {
                "main": {
                    controller: 'ArticleDetailsCtrl',
                    templateUrl: 'articles/articleDetails.tpl.html'
                }
            },
            data: { pageTitle: 'article details page' }
        });

});
 
 

myapp.controller('ArticlesCtrl', function ArticlesCtrl($scope, ArticleService, $state) {
        // This is simple a demo for UI Boostrap.
        console.log('ArticlesCtrl controller loaded sd');
    $scope.articles = []; 
    $scope.refreshArticles = function () {
        console.log('refreshArticles');
        ArticleService.getArticles(function(data) {
            $scope.articles = data;
        });
         
        };

    $scope.articlesDetail = function (article) {
        console.log(article);

    };

        $scope.addArticle = function(article) {
            $scope.open(200);
            return $scope.articles.push(article);
            
        };

        $scope.loadMore = function () {
            var last = $scope.images[$scope.images.length - 1];
            //for (var i = 1; i <= 8; i++) {
            //    $scope.images.push(last + i);
            //}
        };
    $scope.getArticleDetails = function(article) {
        $state.go('articleDetails', { id: article.id }, { reload: true });
    };

        $scope.refreshArticles();
        console.log('xxx');
});

myapp.controller('ArticleDetailsCtrl', function ArticleDetailsCtrl($scope, $stateParams, ArticleService, $state) {
    // This is simple a demo for UI Boostrap.
    console.log('jhvhjg  ' + $stateParams.id);
    console.log('ArticleDetailsCtrl controller loaded sd');
    $scope.article = [];
    $scope.loadDetails = function () {
        console.log('loadDetails');
        ArticleService.getArticlebyId($stateParams.id,function (data) {
            $scope.article = data;
        });


    };
    $scope.openList = function () {
        $state.go('articles', {  }, { reload: true });


    };

    $scope.loadDetails();
    console.log('ArticleDetailsCtrl');
});

myapp.service("ArticleService", function($http, $location) {
    var ArticleService = {};

    ArticleService.getArticles = function (callback) {

        console.log('ArticleService.getArticles');
         
        $http.get('assets/ArticlesList.json').success(function (data) {
            console.log('success get');
            console.log(data);
            callback(data);
        });
    };

    ArticleService.saveArticles = function (article) {

    };

    ArticleService.deleteArticle = function () {

    };

    ArticleService.getArticlebyId = function (id, callback) {
        console.log('ArticleService.getArticlebyId');

        $http.get('assets/ArticleDetails.json').success(function (data) {
            console.log('success get');
            console.log(data[id]);
            callback(data[id]);
        });
    };

    return ArticleService;
});

 
