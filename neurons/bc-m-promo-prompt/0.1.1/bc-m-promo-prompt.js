(function(){
function mix(a,b){for(var k in b){a[k]=b[k];}return a;}
var _0 = "zepto@^1.2.2";
var _1 = "bc-m-promo-prompt@0.1.1/index.js";
var asyncDepsToMix = {};
var globalMap = asyncDepsToMix;
define(_1, [_0], function(require, exports, module, __filename, __dirname) {

var $ = require('zepto'),
    
    Prompt = function (options) {
        this.$parent = $(document.body);
        this.$container = $('<div></div>');
        this.html = options.html;
        this.render();
    },
    p = {};
Prompt.prototype = p;
p.constructor = Prompt;
module.exports = Prompt;

p.render = function () {
    if ($('.pop-box-bg').length > 0) {
        return this;
    }
    var _this = this;
    this.$container.addClass('pop-box-bg pop-box-anim');
    this.$container.append(this.html);
    this.$parent.append(this.$container);
    this.$container.on('touchmove', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    setTimeout(function () {
        _this.$container.removeClass('pop-box-anim');
    }, 0);
    this.$container.on('tap',function(e){
        e.stopPropagation()
        if($(e.target).hasClass('pop-box-bg')){
            _this.close();
        }
    });
    return this;
};

p.find = function (selector) {
    return this.$container.find(selector);
};

p.close = function (callback) {
    var _this = this;
    this.$container.addClass('pop-box-anim');
    setTimeout(function () {
        _this.$container.remove();
        callback && callback();
    }, 200);
    return this;
};

}, {
    main:true,
    map:globalMap
});
})();