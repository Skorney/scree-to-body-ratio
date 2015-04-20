(function(){
    var app = angular.module('calc', []);

    app.controller('CalcController', function(){
        this.device = gem;

        this.get_diag_mm = function(){
            this.device.diagonal_mm = (this.device.diagonal_inch * 25.4).toFixed(2);
        }
    });

    var gem = {
        height: "",
        width: "",
        diagonal_inch: "",
        diagonal_mm: "",
        screen_height: "",
        screen_width: ""
    };

})();


