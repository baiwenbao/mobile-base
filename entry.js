require('./sass/home.scss');
require('./js/base.js');
var RenderTmp = require('./js/RenderTmp.js');

window.onload = function () {
    var render = new RenderTmp($('body'), $('#template'), 'test.json', null, 'data');
    render.init();
}
