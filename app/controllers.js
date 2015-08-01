// Controller definitions
angular.module('borkeh-app').controller("IndexCtrl", IndexCtrl);
angular.module('borkeh-app').controller("CartCtrl", CartCtrl);

// Controller impls
function IndexCtrl($scope, MockDS, ngCart){
    var self = this;

    self.menu = MockDS.menu;
}

function CartCtrl($scope, MockDS, ngCart){
    var self = this;

    ngCart.setTaxRate(5.25);    //e-vat?
    ngCart.setShipping(100.00);

}




