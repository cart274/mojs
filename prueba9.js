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
var _x;
var LINE1_DURATION = 400;
var ball = new mojs.Shape({
    shape: 'circle',
    fill: 'white',
    radius: 15,
    x: (_x = {}, _x[-100] = 100, _x),
    duration: 2 * LINE1_DURATION,
    easing: 'cubic.out'
});
var shadow = new mojs.Shape({
    parent: ball.el,
    top: '150%',
    shape: 'circle',
    fill: 'rgba(0,0,0,.05)',
    radius: 15,
    radiusY: 3,
    duration: 2 * LINE1_DURATION,
    easing: 'cubic.out'
});
var trailOpts = {
    parent: ball.el,
    fill: 'none',
    stroke: 'white',
    shape: 'line',
    radiusY: 0,
    radiusX: 10,
    strokeDasharray: '100%',
    strokeDashoffset: { '100%': '0%' },
    angle: 180,
    duration: LINE1_DURATION / 2,
    strokeWidth: { 6: 2 },
    isShowStart: true,
    easing: 'cubic.out',
    opacity: 0.75,
    y: -4,
    left: -22
};
var trail2Opts = _extends({}, trailOpts, {
    radiusX: 4,
    left: -15,
    y: 3
});
var trailReturn = {
    easing: 'quad.in',
    strokeDashoffset: '100%',
    duration: LINE1_DURATION / 2
};
var trail1 = new mojs.Shape(trailOpts).then(_extends({ duration: LINE1_DURATION / 5 }, trailReturn));
var trail2 = new mojs.Shape(trail2Opts).then(_extends({ duration: LINE1_DURATION / 6 }, trailReturn));
var timeline = new mojs.Timeline({ delay: 500 });
timeline.add(ball, shadow, trail1, trail2);
timeline.play();