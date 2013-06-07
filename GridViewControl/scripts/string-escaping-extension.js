(function () {
    if (!String.prototype.htmlEscape) {
        String.prototype.htmlEscape = function () {
            return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, "&#39").replace(/ /g, "&nbsp;");
        }
    }
})();