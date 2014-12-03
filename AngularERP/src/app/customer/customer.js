angular.module('ngBoilerplate.customer', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config($stateProvider) {
    $stateProvider.state('customer', {
        url: '/customers/:customerId',
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

    var id = $stateParams.customerId;
    $http.get('http://localhost:17707/api/Customers/' + id).success(function (data) {
         $scope.customer = data;
     });
});
