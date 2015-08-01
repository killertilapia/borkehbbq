
angular.module('borkeh-app',['ngCart','ngRoute']);

angular.module('borkeh-app').config(['$routeProvider', BorkehRoutes]);

function BorkehRoutes($routeProvider){
    $routeProvider.when('/cart',{
        templateUrl: 'template/seecart.html',
        controller: 'CartCtrl'
    })
    .when('/',{
        templateUrl: 'template/index.html',
        controller: 'IndexCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
}

angular.module('borkeh-app').factory('MockDS', MockDS);

function MockDS(){
    var mockData = {
        menu: [
            { 'id':1, 'name': 'Crispy Pata', 'desc':'Whole Pork leg in Deep fried Goodness','price': 1100.00},
            { 'id':2, 'name': 'Pancit Malabon', 'desc':'Pinoy classic rice noodles','price': 220.00},
            { 'id':3, 'name': 'Fruit Platter', 'desc':'Seasonal Fruit Platter','price': 180.00},
            { 'id':4, 'name': 'Appetizer Platter', 'desc':'Various finger foods like meats, deviled eggs','price': 445.00},
            { 'id':5, 'name': 'Peppered Spare Ribs', 'desc':'Spicy and Sticky Spare ribs','price': 245.00},
            { 'id':6, 'name': 'Classic Shanghai Rice', 'desc':'Classic Chinese fried rice','price': 165.00},
            { 'id':7, 'name': '4 Seasons Vege platter', 'desc':'Vegetable Stir-fry','price': 155.00},
            { 'id':8, 'name': 'Bad Fried Platter', 'desc':'Everything Fried, even vegetables','price': 565.00},
            { 'id':9, 'name': 'Very Western Eats', 'desc':'Family-sized serving of Hamburgers and Fries','price': 390.00},
            { 'id':10, 'name': 'Potato Salad XXL', 'desc':'Bucket size serving of our decadent Potato Salad','price': 330.00},
        ]
    };

    return mockData;
}