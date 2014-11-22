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
<<<<<<< HEAD
     $scope.Index = index;
     $http.get('assets/Customers.json').success(function (data) {
         $scope.customer = data[index];
=======
     $http.get('assets/Customer' + index + '.json').success(function (data) {
         $scope.customer = data;
>>>>>>> 80a0c9eb6a77c0bad923a4855db770e88a7f5f7e
     });
});
