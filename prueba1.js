var shape = new mojs.Shape({
      shape:        'circle',
      isShowStart:  true,
      x:500,
      y:200
    });

var shape2 = new mojs.Shape({
  shape:        'circle',  // shape "circle" is default
  radius:       25,        // shape radius
  fill:         'white',   // same as 'transparent'
  stroke:       '#F64040', // or 'cyan'
  strokeWidth:  5,         // width of the stroke
  isShowStart:  true, 
  y:-100,     // show before any animation starts
});

var shape3 = new mojs.Shape({
  shape:        'circle',
  top:          '50%',
  x:            'rand(-250, 250)',
  isShowStart:  true,
});


var shape4 = new mojs.Shape({
  shape:        'circle',
  radius:       25,
  radiusX:      35, // explicit radiusX
  fill:         'transparent',
  stroke:       '#F64040',
  strokeWidth:  7,
  isShowStart:  true,
  x:-100,
  y:-200,
});



var circle = new mojs.Shape({
  shape:        'circle',
  radius:       10,
  radiusX:      20, // explicit radiusX
  left:         '25%',
  fill:         'deeppink',
  isShowStart:  true,
});

var rect = new mojs.Shape({
  shape:        'rect',
  radius:       10,
  radiusX:      20, // explicit radiusX
  left:         '50%',
  fill:         'cyan',
  isShowStart:  true,
  y:200,
});

var polygon = new mojs.Shape({
  shape:        'polygon',
  radius:       10,
  radiusY:      20, // explicit radiusY
  left:         '75%',
  fill:         'yellow',
  isShowStart:  true,
});


var zigzag = new mojs.Shape({
  shape:        'zigzag',
  points:       21,
  radius:       55,
  radiusY:      90,
  left:         '25%',
  fill:         '#dda',
  stroke:       'deeppink',
  isShowStart:   true,
  y:-200,
});

var curve = new mojs.Shape({
  shape:        'curve',
  points:       11,
  radius:       25,
  radiusY:      50,
  left:         '50%',
  fill:         '#aad',
  stroke:       'deeppink',
  isShowStart:   true,
  y:-200,
});

var cross = new mojs.Shape({
  shape:        'cross',
  points:       11,
  radius:       25,
  radiusX:      50,
  left:         '75%',
  fill:         'none',
  stroke:       'deeppink',
  isShowStart:   true,
  y:            -250,
});


var shape5 = new mojs.Shape({
  shape:        'circle',
  scale:         { 0 : 1 },
   
  duration:      1000,
  delay:         1000,
  easing:        'cubic.out',
  repeat:        999,
  x:'-600',
  y:200,
}).play();




const circle2 = new mojs.Shape({
  shape:        'circle',
  scale:        { 0 : 1 },
  left:         '25%',
  fill:         { 'cyan': 'yellow' },
  radius:       25,
  duration:     2000,
  repeat:       999,
  y:300,
}).play();


const rect2 = new mojs.Shape({
  shape:        'rect',
  left:         '50%',
  fill:         'none',
  radius:       20,
  stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
  strokeWidth:  { 10: 5 },
  strokeDasharray: '50%',
  strokeDashoffset: { '0%' : '100%' },
  angle:        { 0: 45 },
  y:100,
  duration:     2000,
  repeat:       999,
}).play();


const polygon2 = new mojs.Shape({
  shape:        'polygon',
  points:       7,
  left:         '65%',
  fill:         { 'deeppink' : '#00F87F' },
  x:            { 'rand(-100%, -200%)' : 0  },
  angle:        { 0: 'rand(0, 360)' },
  radius:       25,

  duration:     2000,
  repeat:       999,
}).play();