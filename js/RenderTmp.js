var dot = require('dot');
require('../node_modules/zepto/zepto.min.js');

var RenderTmp = function (con, tmp, url, data, key) {
    this.con = con;
    this.tmp = tmp;
    this.url = url;
    this.data = data;
    this.key = key;
};
RenderTmp.prototype = {
    init: function () {
        this.getData(this.renderData);
    },
    getData: function (callback) {
        var me = this;
        $.ajax({
            type: "get",
            url: me.url,
            data: me.data,
            async: true,
            success: function (data) {
                data = $.type(data) == 'string' ? $.parseJSON(data) : data;
                data = data[me.key];
                callback && callback.call(me, data);
            }
        })
    },
    renderData: function (data) {
        var template = this.tmp.html();
        this.con.append(dot.template(template)(data));
    }
}

module.exports = RenderTmp;
