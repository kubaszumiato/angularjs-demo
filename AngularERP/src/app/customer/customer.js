angular.module('ngBoilerplate.customer', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config($stateProvider) {
    $stateProvider.state('customer', {
        url: '/customers/:customerIndex',
        views: {
            "main": {
                controller: 'customerController',
                templateUrl: 'customer/customer.tpl.html'
            }
        },
        data: { pageTitle: 'customer' }
    });
})

.controller('customerController', function customerController($scope, $stateParams, $http) {

     var index = $stateParams.customerIndex;
     $scope.Index = index;
     $http.get('assets/Customer'+index+'.json').success(function (data) {
         $scope.customer = data;
     });

     //$scope.cust = customers;
    
    //var cust = $scope.customers[0];
    //$http.get('customers/customer', id).success(function (data) {
    //    $scope.customer = data;
    });



