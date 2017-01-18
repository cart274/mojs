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
var dustOpts = {
    radius: 20,
    fill: 'white',
    radius: 'rand(3, 15)',
    scale: { 1: 0 },
    x: { 0: 70 },
    y: { 0: -20 },
    isForce3d: true,
    swirlSize: 50,
    swirlFrequency: 1,
    isTimelineLess: true
};
var dust = new mojs.Timeline();
for (var i = 0; i < 7; i++) {

    dust.add(new mojs.ShapeSwirl(_extends({}, dustOpts, { delay: i * 45 })));
}
var timeline = new mojs.Timeline();
timeline.add(dust);
timeline.play();