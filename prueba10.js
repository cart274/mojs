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
const logo = document.body.querySelector('.logo');
var dustOpts = {
    parent:logo,
    radius: 20,
    fill: 'white',
    radius: 'rand(23, 35)',
    scale: { 1: 0,2:1},
    x: { 0: 770 },
    y: { 0: -120 },
    isForce3d: true,
    swirlSize: 50,
    swirlFrequency: 1,
    isTimelineLess: true,
    duration:1000
};
var dust = new mojs.Timeline();
for (var i = 0; i < 7; i++) {

    dust.add(new mojs.ShapeSwirl(_extends({}, dustOpts, { delay: (i) * 120 })));
}
var timeline = new mojs.Timeline();
timeline.add(dust);
dust.play();