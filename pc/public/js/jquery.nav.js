/*
* jQuery One Page Nav Plugin
* http://github.com/davist11/jQuery-One-Page-Nav
*
* Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
* Dual licensed under the MIT and GPL licenses.
* Uses the same license as jQuery, see:
* http://jquery.org/license
*
* @version 0.9
*/
(function (e) {
    e.fn.onePageNav = function (j) {
        var h = e.extend({}, e.fn.onePageNav.defaults, j), d = {}; d.sections = {}; d.bindNav = function (b, c, a) { var f = b.parent(), g = b.attr("href"), i = e(window); if (!f.hasClass(a.currentClass)) { a.begin && a.begin(); d.adjustNav(c, f, a.currentClass); i.unbind(".onePageNav"); e.scrollTo(g, a.scrollSpeed, { easing: a.easing, offset: { top: -a.scrollOffset }, onAfter: function () { if (a.changeHash) window.location.hash = g; i.bind("scroll.onePageNav", function () { d.scrollChange(c, a) }); a.end && a.end() } }) } }; d.adjustNav =
function (b, c, a) { b.find("." + a).removeClass(a); c.addClass(a) }; d.getPositions = function (b, c) { b = b.find("a"); if (c.filter !== "") b = b.filter(c.filter); b.each(function () { var a = e(this).attr("href"), f = e(a).offset(); f = f.top; d.sections[a.substr(1)] = Math.round(f) - c.scrollOffset }) }; d.getSection = function (b, c) { var a = ""; c = Math.round(e(window).height() * c.scrollThreshold); for (var f in d.sections) if (d.sections[f] - c < b) a = f; return a }; d.scrollChange = function (b, c) {
    d.getPositions(b, c); var a = e(window).scrollTop(); a = d.getSection(a,
c); a !== "" && d.adjustNav(b, b.find("a[href=#" + a + "]").parent(), c.currentClass)
}; d.init = function (b, c) { var a = false, f = b.find("a"); if (c.filter !== "") f = f.filter(c.filter); f.bind("click", function (g) { d.bindNav(e(this), b, c); g.preventDefault() }); d.getPositions(b, c); e(window).bind("scroll.onePageNav", function () { a = true }); setInterval(function () { if (a) { a = false; d.scrollChange(b, c) } }, 250) }; return this.each(function () { var b = e(this), c = e.meta ? e.extend({}, h, b.data()) : h; d.init(b, c) })
    }; e.fn.onePageNav.defaults = { currentClass: "current",
        changeHash: false, easing: "swing", filter: "", scrollSpeed: 750, scrollOffset: 0, scrollThreshold: 0.5, begin: false, end: false
    }
})(jQuery);