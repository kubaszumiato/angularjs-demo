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

.controller('CustomersController', function CustomersController($scope, $http, $state) {

    $http.get('assets/Customers.json').success(function (data) {
        $scope.customers = data;
    });

    $scope.openDetails = function(index)
    {
        $state.go("customer", {customerIndex: index});
    };
})

;