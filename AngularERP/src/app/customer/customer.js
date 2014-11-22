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

<<<<<<< HEAD
.controller('customerController', function customerController($scope, $http) {
    // This is simple a demo for UI Boostrap.
    //$scope.dropdownDemoItems = [
    //  "The first choi ce!",
    //  "And another choice for you.",
    //  "but wait! A third!"
    //];
=======
.controller('customerController', function customerController($scope, $stateParams) {
>>>>>>> ff956bd38b3519b65e06b2195d979ec1f65086c1

        var index = $stateParams.customerIndex;
        $scope.Index = index;

<<<<<<< HEAD
    //var cust = $scope.customers[0];
    $http.get('customers/customer', id).success(function (data) {
        $scope.customer = data;
    });




=======
    //w zmiennej index mamy index customera
>>>>>>> ff956bd38b3519b65e06b2195d979ec1f65086c1
})

;