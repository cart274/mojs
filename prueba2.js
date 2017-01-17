/*const tri = new mojs.Shape({
  shape:      'polygon',
  fill:       'orange',
  radius:     65,
  angle:      { [-120]: -40 },
  x:          { [-200]: 20 },
  y:          { [50]: -20 },
  scaleX:     { 0 : 1.3 },
  
  repeat:     10,
  duration:   800,
  isYoyo:     true,
  backwardEasing: 'sin.in',

  isShowEnd:  true,
  left:'25%',
  top:'70px',
}).play();

const circle = new mojs.Shape({
  shape:        'circle',
  scale:        { 0 : 1, easing: 'cubic.out' },
  fill:         { 'cyan': 'yellow', easing: 'cubic.in' },
  
  duration:     2000,
  repeat:       999,
  isYoyo:     true,
  left:'60px',
  top:'70px',
}).play();



const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };

const circle2 = new mojs.Shape({
  shape:        'rect',
  fill:         { '#F64040' : '#F64040', curve: scaleCurve },
  radius:       10,
  rx:           3,
  x:            { [-125] : 125, easing: shiftCurve },
  scaleX:       { 1 : 1, curve: scaleCurve },
  scaleY:       { 1 : 1, curve: nScaleCurve },
  origin:       { '0 50%' : '100% 50%', easing: shiftCurve },
  
  isYoyo:         true,
  delay:        500,
  duration:     800,
  repeat:       999
}).play();
*/


const shape = new mojs.Shape({
  shape:          'rect',
  fill:           'none',
  stroke:         'cyan',
  radius:         10,
  strokeWidth:    20,
  angle:          { [-180] : 0 },
  duration:       600
}).then({
  strokeWidth:   0,
  scale: { to: 2, easing: 'sin.in' },
}).then({
  strokeWidth:   20,
  scale: { to: 1, easing: 'sin.in' },
}).play();