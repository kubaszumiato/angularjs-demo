//use strict';
var myapp = angular.module('ngBoilerplate.articles', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
]);

myapp.config(function config($stateProvider) {
        $stateProvider.state('articles', {
            url: '/articles',
            views: {
                "main": {
                    controller: 'ArticlesCtrl',
                    templateUrl: 'articles/articles.tpl.html'
                }
            },
            data: { pageTitle: 'articles' }
        },
        {
            url: '/articles/details',
            views: {
                "details": {
                    controller: 'ArticlesCtrl',
                    templateUrl: 'articles/details.tpl.html'
                }
            },
            data: { pageTitle: 'details' }
        }
        );
        //$stateProvider.state('articles', {
        //    url: '/articles/details',
        //    views: {
        //        "details": {
        //            controller: 'ArticlesCtrl',
        //            templateUrl: 'articles/details.tpl.html'
        //        }
        //    },
        //    data: { pageTitle: 'details' }
        //});
    })
    .controller('ArticlesCtrl', function ArticlesCtrl($scope, ArticleService) {
        // This is simple a demo for UI Boostrap.
        console.log('ArticlesCtrl controller loaded sd');
    $scope.articles = []; 
    $scope.refreshArticles = function () {
        console.log('refreshArticles');
        ArticleService.getArticles(function(data) {
            $scope.articles = data;
        });
         

        };

        $scope.addArticle = function(article) {
            return $scope.articles.push(article);



        };

        $scope.refreshArticles();
        console.log('xxx');
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

    ArticleService.getArticlestmp = function () {

    };

    return ArticleService;
});



