(function(){
    var app = angular.module('calc', []);

    app.controller('CalcController', function(){
        this.device = gem;

        this.get_diag_mm = function(){
            var mm = this.device.diagonal_inch * 25.4;
            this.device.diagonal_mm = mm ? mm.toFixed(2) : "";
        }

        this.calculate = function() {
            var ratio = this.device.screen_width/this.device.screen_height;
            var dev_area = this.device.height*this.device.width;
            var screen_area = this.device.diagonal_mm*this.device.diagonal_mm*ratio / (1+ratio*ratio);
            var result = screen_area/dev_area*100;
            this.device.ratio = result ? result.toFixed(2) : "";
        }
    });

    var gem = {
        ratio: "",
        height: "",
        width: "",
        diagonal_inch: "",
        screen_height: "",
        screen_width: ""
    };

})();


