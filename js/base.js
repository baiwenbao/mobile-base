(function () {
    function setwidth() {
        var doc = document,
            win = window,
            dpr = win.devicePixelRatio,
            scale = 1 / dpr,
            docEl = doc.documentElement,
            metaEl = docEl.querySelector('meta[name="viewport"]');
        if (!metaEl) {
            var metaEl = doc.createElement('meta');
            metaEl.name = 'viewport';
        }
        metaEl.content = 'initial-scale=' + scale + ',minimum-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no';
        docEl.firstElementChild.appendChild(metaEl);
        var width = docEl.getBoundingClientRect().width,
            maxwidth = 640;
        if (width / dpr > maxwidth) {
            width = maxwidth * dpr;
            docEl.style.width = width + 'px';
            docEl.style.margin = '0 auto';
        }
        var rem = width / 16;
        docEl.style.fontSize = rem + 'px';
        docEl.dataset.dpr = dpr;

    }
    setwidth();
    window.onresize = setwidth;
})()
