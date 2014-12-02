angular.module('ngBoilerplate.customers', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'ngBoilerplate.customer'
])

.config(function config($stateProvider) {
    $stateProvider.state('customers', {
        url: '/customers',
        views: {
            "main": {
                controller: 'CustomersController',
                templateUrl: 'customers/customers.tpl.html'
            }
        },
        data: { pageTitle: 'Customers' }
    });
})

.controller('CustomersController', function customersController($scope, $http, $state) {

    $http.get('http://localhost:17707/api/Customers').success(function (data) {
        $scope.customers = data;
    });

    $scope.openDetails = function(id)
    {
        $state.go("customer", {customerId: id});
    };
})

;