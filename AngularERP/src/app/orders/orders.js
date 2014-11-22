/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/orders`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('ngBoilerplate.orders', [
        'ui.router',
        'plusOne'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    $stateProvider
        .state('orders', {
            url: '/orders',
            views: {
                "main": {
                    controller: 'OrdersCtrl',
                    templateUrl: 'orders/orders.tpl.html'
                }
            },
            data: { pageTitle: 'Our beautiful orders website' }
        })
        .state('details', {
            url: '/details/{id}',
            views: {
                "main": {
                    controller: 'OrderDetailsCtrl',
                    templateUrl: 'orders/orderDetails.tpl.html'
                }
            },
            data: { pageTitle: 'Our beautiful orders website' }
        });
})

/**
 * And of course we define a controller for our route.
 */
.controller('OrdersCtrl', function OrdersCtrl($scope, $http, ordersService, $state, $stateParams) {
    $scope.orders = [];

    $scope.predicate = 'numerator';
<<<<<<< HEAD
        ordersService.getOrders(function(data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].items.length; j++) {
                    data[i].items[j].value = data[i].items[j].price * data[i].items[j].quantity;
                }
            }
            $scope.orders = data;
        });
    $scope.showOrderDetails = function (order) {
        $state.go('details', { id: order.index, order: order }, {reload:true});
    }
})

.controller('OrderDetailsCtrl', function OrderDetailCtrl($scope, $stateParams) {
    $scope.order = {};
    $scope.id = $stateParams.id;

})


=======
    ordersService.getOrders(function (data) {
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data[i].items.length; j++) {
                data[i].items[j].value = data[i].items[j].price * data[i].items[j].quantity;
            }
        }
        $scope.orders = data;
    });

})
>>>>>>> f89e2385d2018c5c0af797a4d94f4e7063250cf8
.factory('ordersService', function($http) {
    return {
        getOrders: function(callback) {
            $http.get('assets/orders.json').success(function(data) {
                callback(data);
            });
        }
    };
});
