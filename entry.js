require('./sass/home.scss');
require('./js/base.js');
var $ = require('jquery');

window.onload = function () {
    var render = new Render();
    render.init();
}



var Render = function () {};
Render.prototype = {
    init: function () {
        this.getinfo(this.getdot(), this.rendertemplate);
    },
    getinfo: function (arg, callback) {
        $.ajax({
            type: "get",
            url: "test.json",
            async: true,
            success: function (data) {
                callback && callback(arg, data);
            }
        })
    },
    getdot: function () {
        return require('dot');
    },
    rendertemplate: function (obj, jsons) {
        var template = document.getElementById('template').innerHTML;
        document.getElementById('body').innerHTML = obj.template(template)(jsons);
    }
}
