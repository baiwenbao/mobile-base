var dot = require('dot');

var RenderTmp = function (con, tmp, url, data) {
    this.con = con;
    this.tmp = tmp;
    this.url = url;
    this.data = data;
};
RenderTmp.prototype = {
    init: function () {
        this.getinfo(this.rendertemplate);
    },
    getinfo: function (callback) {
        var me = this;
        $.ajax({
            type: "get",
            url: me.url,
            data: me.data,
            async: true,
            success: function (data) {
                callback && callback.call(me, data);
            }
        })
    },
    rendertemplate: function (data) {
        var template = this.tmp.html();
        this.con.append(dot.template(template)(data));
    }
}

module.exports = RenderTmp;
