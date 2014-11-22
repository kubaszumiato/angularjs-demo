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

.controller('CustomersController', function CustomersController($scope) {
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
      "The first choi ce!",
      "And another choice for you.",
      "but wait! A third!"
    ];
})

;