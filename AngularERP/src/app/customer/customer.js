angular.module('ngBoilerplate.customer', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config($stateProvider) {
    $stateProvider.state('customer', {
        url: '/customer',
        views: {
            "main": {
                controller: 'customerController',
                templateUrl: 'customer/customer.tpl.html'
            }
        },
        data: { pageTitle: 'customer' }
    });
})

.controller('customerController', function customerController($scope) {
    // This is simple a demo for UI Boostrap.
    $scope.dropdownDemoItems = [
      "The first choi ce!",
      "And another choice for you.",
      "but wait! A third!"
    ];
})

;