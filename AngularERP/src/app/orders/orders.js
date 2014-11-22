/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/orders`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.orders', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'orders', {
    url: '/orders',
    views: {
      "main": {
        controller: 'OrdersCtrl',
        templateUrl: 'orders/orders.tpl.html'
      }
    },
    data:{ pageTitle: 'Our beautiful orders website' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller('OrdersCtrl', function OrdersCtrl($scope) {

    $scope.orders = [
        {
            "numerator": "1a",
            "value": "25"
        },
        {
            "numerator": "2x",
            "value": "30"
        }
    ];
    $scope.predicate = '-numerator';
});
