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

.controller('customerController', function customerController($scope, $http) {
    // This is simple a demo for UI Boostrap.
    //$scope.dropdownDemoItems = [
    //  "The first choi ce!",
    //  "And another choice for you.",
    //  "but wait! A third!"
    //];

    //$scope.customers = [];
    //$http.get('assets/Customers.json').success(function (data) {
    //    $scope.customers = data;
    //});

    //var cust = $scope.customers[0];
    $http.get('customers/customer', id).success(function (data) {
        $scope.customer = data;
    });




})

;