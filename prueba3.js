class Heart extends mojs.CustomShape {
  getShape () { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
  //getLength () { return 200; } // optional
}
mojs.addShape( 'heart', Heart ); // passing name and Bubble class

/* USE CUSTOM SHAPE */
// now it is available on mojs.Shape constructor as usual
const heart = new mojs.Shape({
  shape:    'heart', // <--- shape of heart is now available!
  fill:     'none',
  stroke:   'white',
  scale:    { 0 : 1 },
  strokeWidth: { 50 : 0 },
  y:         -20,
  duration:  1000,
swirlSize:      35,
  swirlFrequency: 4, 
});


const swirl = new mojs.ShapeSwirl({
  fill:           'cyan',
  y:              { 0: -150 },
  radius:         18,
  direction:      -1,
  swirlSize:      60,
  swirlFrequency: 8,
  duration:       1000,
  degreeShift:    90,
  pathScale:      'rand( .1, 1 )',
});




const SWIRL_OPTS = {
  left: 0, top: 0,
  fill:           '#F93E39',
  duration:       'rand(600, 1000)',
  radius:         'rand(10, 20)',
  pathScale:      'rand(.5, 1)',
  swirlFrequency: 'rand(2,4)',
  swirlSize: 'rand(6,14)',
}

const swirl1 = new mojs.ShapeSwirl({
  SWIRL_OPTS
});
  
const swirl2 = new mojs.ShapeSwirl({
  SWIRL_OPTS,
  direction: -1
});

const swirl3 = new mojs.ShapeSwirl({
 SWIRL_OPTS
});
  
const swirl4 = new mojs.ShapeSwirl({
  SWIRL_OPTS
});



document.addEventListener( 'click', function (e) {
  
  heart.tune({  x: e.pageX, y: e.pageY  }).replay();

  swirl.replay();


    const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
  swirl1
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl2
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl3
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl4
    .tune({ x, y })
    .generate()
    .replay();
});
