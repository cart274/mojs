'use strict';
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        if (window.CP.shouldStopExecution(2)) {
            break;
        }
        var source = arguments[i];
        for (var key in source) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
        window.CP.exitedLoop(1);
    }
    return target;
    window.CP.exitedLoop(2);
};
var SWIRL_OPTS = {
    left: 0,
    top: 0,
    fill: '#F93E39',
    duration: 'rand(600, 1000)',
    radius: 'rand(10, 20)',
    pathScale: 'rand(.5, 1)',
    swirlFrequency: 'rand(2,4)',
    swirlSize: 'rand(6,14)'
};
var swirl1 = new mojs.ShapeSwirl(_extends({}, SWIRL_OPTS));
var swirl2 = new mojs.ShapeSwirl(_extends({}, SWIRL_OPTS, { direction: -1 }));
var swirl3 = new mojs.ShapeSwirl(_extends({}, SWIRL_OPTS));
var swirl4 = new mojs.ShapeSwirl(_extends({}, SWIRL_OPTS));
document.addEventListener('click', function (e) {
    var _y;
    var x = e.pageX, y = (_y = {}, _y[e.pageY] = e.pageY - 150, _y);
    swirl1.tune({
        x: x,
        y: y
    }).generate().replay();
    swirl2.tune({
        x: x,
        y: y
    }).generate().replay();
    swirl3.tune({
        x: x,
        y: y
    }).generate().replay();
    swirl4.tune({
        x: x,
        y: y
    }).generate().replay();
});