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
angular.module('portalERP.invoices', [
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
        .state('invoices', {
            url: '/invoices',
            views: {
                "main": {
                    controller: 'InvoicesCtrl',
                    templateUrl: 'invoices/invoices.tpl.html'
                }
            },
            data: { pageTitle: 'Our beautiful orders website' }
        })
        .state('invoice', {
            url: '/invoice/{id}',
            views: {
                "main": {
                    controller: 'InvoiceDetailsCtrl',
                    templateUrl: 'invoices/invoiceDetails.tpl.html'
                }
            },
            data: { pageTitle: 'Our beautiful invoices website' }
        });
})

/**
 * And of course we define a controller for our route.
 */
.controller('InvoicesCtrl', function InvoicesCtrl($scope, $http, invoicesService, $state, $stateParams) {
    $scope.orders = [];

    $scope.predicate = 'numerator';
        invoicesService.getOrders(function(data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].items.length; j++) {
                    data[i].items[j].value = data[i].items[j].price * data[i].items[j].quantity;
                }
            }
            $scope.orders = data;
        });
        $scope.showOrderDetails = function(order) {
            $state.go('details', { id: order.index}, { reload: true });
        };
    })

.controller('InvoiceDetailsCtrl', function OrderDetailCtrl($scope, $stateParams) {

    //$scope.order = $stateParams.order;
        $scope.id = $stateParams.id;
        $scope.predicate = 'code';
       
    })

.factory('invoicesService', function($http) {
    return {
        getOrders: function(callback) {
            $http.get('http://localhost:17707/api/Invoices').success(function (data) {
                callback(data);
            });
        }
    };
});
