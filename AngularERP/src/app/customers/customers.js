angular.module('ngBoilerplate.customers', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
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

.controller('CustomersController', function CustomersController($scope, $http) {

    $http.get('assets/Customers.json').success(function (data) {
        $scope.customers = data;
    });
})

;