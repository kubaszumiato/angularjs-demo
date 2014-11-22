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
angular.module('ngBoilerplate.orders', [
        'ui.router',
        'plusOne'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
    $stateProvider
        .state('orders', {
            url: '/orders',
            views: {
                "main": {
                    controller: 'OrdersCtrl',
                    templateUrl: 'orders/orders.tpl.html'
                }
            },
            data: { pageTitle: 'Our beautiful orders website' }
        })
        .state('details', {
            url: '/details/{id}',
            views: {
                "main": {
                    controller: 'OrderDetailsCtrl',
                    templateUrl: 'orders/orderDetails.tpl.html'
                }
            },
            data: { pageTitle: 'Our beautiful orders website' }
        });
})

/**
 * And of course we define a controller for our route.
 */
.controller('OrdersCtrl', function OrdersCtrl($scope, $http, ordersService, $state, $stateParams) {
    $scope.orders = [];

    $scope.predicate = 'numerator';
        ordersService.getOrders(function(data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].items.length; j++) {
                    data[i].items[j].value = data[i].items[j].price * data[i].items[j].quantity;
                }
            }
            $scope.orders = data;
        });
        $scope.showOrderDetails = function(order) {
            $state.go('details', { id: order.index}, { reload: true });
        };
    })

.controller('OrderDetailsCtrl', function OrderDetailCtrl($scope, $stateParams) {
    //$scope.order = $stateParams.order;
        $scope.id = $stateParams.id;
        $scope.predicate = 'code';
        $scope.order = {
            "_id": "54708e0a19888e36893aa446",
            "index": 0,
            "guid": "8f78e82d-43ab-48a0-a44d-18eafd9af9ce",
            "isActive": true,
            "value": "$3,400.53",
            "numerator": "2014/COMC/1",
            "referenceNumber": "ExtSys/ 21",
            "customer": "INFOTRIPS",
            "email": "holmansharpe@infotrips.com",
            "phone": "+48 (913) 584-2265",
            "address": "539 Exeter Street, Waikele, West Virginia, 4047",
            "description": "Et proident officia ad adipisicing exercitation. Mollit consequat dolore cupidatat reprehenderit. Qui est excepteur proident ex aute mollit irure ipsum nulla non velit culpa labore. Labore qui nulla aliquip laboris sit officia eiusmod Lorem duis. Dolore cupidatat ex pariatur ut. Ipsum veniam eiusmod dolor ullamco consectetur. Reprehenderit ullamco tempor proident id nisi.\r\n",
            "registered": "2014-02-07T14:44:28 -01:00",
            "latitude": -46.730452,
            "longitude": 56.123322,
            "tags": [
                "pariatur",
                "adipisicing",
                "irure",
                "ullamco",
                "dolor",
                "labore",
                "cillum"
            ],
            "items": [
                {
                    "id": 1,
                    "code": "NA-U10",
                    "name": "Article: NA-U50",
                    "price": 950661.97,
                    "quantity": 27
                },
                {
                    "id": 2,
                    "code": "NA-U100",
                    "name": "Article: NA-U60",
                    "price": 529210.1,
                    "quantity": 24
                },
                {
                    "id": 3,
                    "code": "NA-U40",
                    "name": "Article: NA-U10",
                    "price": 591591.16,
                    "quantity": 30
                },
                {
                    "id": 4,
                    "code": "NA-U90",
                    "name": "Article: NA-U60",
                    "price": 36354.37,
                    "quantity": 24
                },
                {
                    "id": 5,
                    "code": "NA-U50",
                    "name": "Article: NA-U90",
                    "price": 54906.56,
                    "quantity": 24
                },
                {
                    "id": 6,
                    "code": "NA-U10",
                    "name": "Article: NA-U100",
                    "price": 917371.85,
                    "quantity": 27
                },
                {
                    "id": 7,
                    "code": "NA-U90",
                    "name": "Article: NA-U60",
                    "price": 977813.73,
                    "quantity": 8
                },
                {
                    "id": 8,
                    "code": "NA-U90",
                    "name": "Article: NA-U60",
                    "price": 55122.46,
                    "quantity": 11
                },
                {
                    "id": 9,
                    "code": "NA-U10",
                    "name": "Article: NA-U80",
                    "price": 846436.16,
                    "quantity": 30
                },
                {
                    "id": 10,
                    "code": "NA-U20",
                    "name": "Article: NA-U100",
                    "price": 340089.37,
                    "quantity": 13
                },
                {
                    "id": 11,
                    "code": "NA-U40",
                    "name": "Article: NA-U90",
                    "price": 852774.3,
                    "quantity": 25
                },
                {
                    "id": 12,
                    "code": "NA-U60",
                    "name": "Article: NA-U70",
                    "price": 406849.77,
                    "quantity": 27
                },
                {
                    "id": 13,
                    "code": "NA-U80",
                    "name": "Article: NA-U100",
                    "price": 62549.41,
                    "quantity": 22
                },
                {
                    "id": 14,
                    "code": "NA-U90",
                    "name": "Article: NA-U50",
                    "price": 656215.74,
                    "quantity": 5
                },
                {
                    "id": 15,
                    "code": "NA-U50",
                    "name": "Article: NA-U90",
                    "price": 655627.7,
                    "quantity": 11
                },
                {
                    "id": 16,
                    "code": "NA-U70",
                    "name": "Article: NA-U90",
                    "price": 654990.34,
                    "quantity": 7
                },
                {
                    "id": 17,
                    "code": "NA-U80",
                    "name": "Article: NA-U10",
                    "price": 933219.86,
                    "quantity": 10
                }
            ]
        };
    })

.factory('ordersService', function($http) {
    return {
        getOrders: function(callback) {
            $http.get('assets/orders.json').success(function(data) {
                callback(data);
            });
        }
    };
});
