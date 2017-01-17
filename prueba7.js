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
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var COLORS = {
    white: '#ffffff',
    black: '#000000',
    green: '#49F2CC',
    pink: '#777',
    grey: '#29363B',
    cyan: 'cyan',
    yellow: '#FFE202',
    hotpink: 'deeppink'
};
var y = -35;
var Sparks = function (_mojs$CustomShape) {
    _inherits(Sparks, _mojs$CustomShape);
    function Sparks() {
        _classCallCheck(this, Sparks);
        return _possibleConstructorReturn(this, _mojs$CustomShape.apply(this, arguments));
    }
    Sparks.prototype.getShape = function getShape() {
        return '<path d="M51.8274713,76.9078071 C11.8274713,76.9078071 2.16693973,42.95046 30.0687526,21.2517012"></path><path d="M25.7538383,77.4836394 C25.7538383,77.4836394 20.7413252,19.6928312 92.8457655,18.1298659"></path><path d="M29.8949928,85.1781099 C29.8949928,85.1781099 41.4904038,48.3985179 81.1308462,59.416066"></path>';
    };
    return Sparks;
}(mojs.CustomShape);
mojs.addShape('sparks', Sparks);
var pinkSquare = new mojs.Transit({
    shape: 'rect',
    stroke: COLORS.hotpink,
    strokeWidth: 40,
    angle: { '-240': 0 },
    radius: 20,
    scale: { 0: 2 },
    duration: 872,
    fill: 'none',
    easing: 'expo.out',
    y: y
});
var SPARKS_OPTS = {
    shape: 'sparks',
    parent: pinkSquare.el,
    radius: 15,
    left: '130%',
    top: '25%',
    fill: 'none',
    strokeWidth: { 10: 0 },
    stroke: 'white',
    strokeDasharray: '75',
    strokeDashoffset: { '75': '-75' },
    duration: 900,
    easing: 'cubic.out',
    strokeLinecap: 'round',
    isForce3d: true
};
var sparks1 = new mojs.Shape(_extends({}, SPARKS_OPTS, {
    left: '125%',
    top: '25%',
    angle: 80
}));
var sparks2 = new mojs.Shape(_extends({}, SPARKS_OPTS, {
    top: '125%',
    left: '80%',
    angle: 165
}));
var sparks3 = new mojs.Shape(_extends({}, SPARKS_OPTS, {
    top: '75%',
    left: '-25%',
    angle: 250
}));
var sparks4 = new mojs.Shape(_extends({}, SPARKS_OPTS, {
    top: '-25%',
    left: '20%',
    angle: 330
}));
var timeline = new mojs.Timeline({ speed: 0.5 });
timeline.add(pinkSquare, sparks1, sparks2, sparks3, sparks4);
timeline.play();