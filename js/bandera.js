
window.onload = function(){
	var flag = document.getElementById('flag');
	drawAmericanFlag( flag, 320, 0, 40 );
	flag.style.marginLeft = -(flag.width/2)+'px';
	flag.style.marginTop  = -(flag.height/2)+'px';
	var timer = waveFlag( flag, 20, 10, 150, 200, -0.1 );
};

function drawAmericanFlag( canvas, width, padX, padY ){
	if (!padX) padX = 0;
	if (!padY) padY = 0;
	
	var a = width / 1.9;
	var b = width;
	var c = 7*a/13;
	var d = 0.76*a;
	var e = 0.054*a;
	var g = 0.063*a;
	var k = 0.0616*a;
	var l = a / 13;
	canvas.width  = b+2*padX;
	canvas.height = a+2*padY;
	var ctx = canvas.getContext('2d');

// Begin Stripes
	ctx.fillStyle = '#fff';
	ctx.fillRect(padX,padY,b,a);
	ctx.fillStyle = '#900';
	for (var i=0;i<13;i+=2) ctx.fillRect(padX,i*l+padY,b,l);
	
// End Stripes
  
 // Begin Blue Circle Background
	
    ctx.fillStyle="rgb(0,0,141)";

    ctx.beginPath();


//  The moveTo() method moves the path to the specified point in the canvas, without creating a line.
//  Internet Explorer 9, Firefox, Opera, Chrome, and Safari support the moveTo() method.
//  Tip: Use the stroke() method to actually draw the path on the canvas.

ctx.moveTo(220,113);
ctx.bezierCurveTo(220,115,220,117,220,119);
ctx.bezierCurveTo(220,121,219,123,219,124);
ctx.bezierCurveTo(216,147,199,167,176,172);
ctx.bezierCurveTo(173,173,169,173,165,174);
ctx.bezierCurveTo(163,174,161,174,159,174);
ctx.bezierCurveTo(157,174,156,174,154,173);
ctx.bezierCurveTo(131,170,112,153,106,131);
ctx.bezierCurveTo(105,127,105,123,104,119);
ctx.bezierCurveTo(104,117,104,115,104,114);
ctx.bezierCurveTo(104,112,105,110,105,108);
ctx.bezierCurveTo(108,85,125,66,148,60);
ctx.bezierCurveTo(152,59,156,59,159,58);
ctx.bezierCurveTo(161,58,163,58,165,58);
ctx.bezierCurveTo(167,59,168,59,170,59);
ctx.bezierCurveTo(193,62,212,79,218,102);
ctx.bezierCurveTo(219,106,219,109,220,113);
ctx.fill();
  
  // END Circle Background
  
  
  // BEGIN Codepen Logo

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(197,102);
ctx.bezierCurveTo(199,102,200,102,200,103);
ctx.lineTo(200,126);
ctx.bezierCurveTo(200,127,199,127,198,127);
ctx.lineTo(198,127);
ctx.bezierCurveTo(196,127,195,127,195,126);
ctx.lineTo(195,103);
ctx.bezierCurveTo(195,102,196,102,197,102);
ctx.lineTo(197,102);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(200,105);
ctx.bezierCurveTo(199,106,197,107,196,106);
ctx.lineTo(160,82);
ctx.bezierCurveTo(159,81,159,79,159,78);
ctx.lineTo(159,78);
ctx.bezierCurveTo(160,76,162,76,163,77);
ctx.lineTo(199,101);
ctx.bezierCurveTo(200,102,200,103,200,105);
ctx.lineTo(200,105);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(199,102);
ctx.bezierCurveTo(200,103,200,105,199,106);
ctx.lineTo(164,131);
ctx.bezierCurveTo(162,132,161,131,160,130);
ctx.lineTo(160,130);
ctx.bezierCurveTo(159,129,159,127,160,126);
ctx.lineTo(195,101);
ctx.bezierCurveTo(197,100,198,100,199,102);
ctx.lineTo(199,102);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(164,78);
ctx.bezierCurveTo(165,79,165,81,164,81);
ctx.lineTo(129,107);
ctx.bezierCurveTo(127,107,126,107,125,106);
ctx.lineTo(125,106);
ctx.bezierCurveTo(124,104,124,103,125,102);
ctx.lineTo(160,77);
ctx.bezierCurveTo(162,76,163,76,164,78);
ctx.lineTo(164,78);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(165,130);
ctx.bezierCurveTo(164,131,162,132,161,131);
ctx.lineTo(125,107);
ctx.bezierCurveTo(124,106,124,104,124,103);
ctx.lineTo(124,103);
ctx.bezierCurveTo(125,101,127,101,128,102);
ctx.lineTo(164,126);
ctx.bezierCurveTo(165,127,165,128,165,130);
ctx.lineTo(165,130);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(200,127);
ctx.bezierCurveTo(199,128,197,129,196,128);
ctx.lineTo(160,104);
ctx.bezierCurveTo(159,103,159,101,160,100);
ctx.lineTo(160,100);
ctx.bezierCurveTo(161,99,163,98,164,99);
ctx.lineTo(200,123);
ctx.bezierCurveTo(201,124,201,126,200,127);
ctx.lineTo(200,127);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(200,124);
ctx.bezierCurveTo(201,125,200,127,199,128);
ctx.lineTo(164,153);
ctx.bezierCurveTo(163,154,161,153,160,152);
ctx.lineTo(160,152);
ctx.bezierCurveTo(159,151,159,149,161,148);
ctx.lineTo(196,123);
ctx.bezierCurveTo(197,122,199,123,200,124);
ctx.lineTo(200,124);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(165,100);
ctx.bezierCurveTo(166,101,166,103,164,104);
ctx.lineTo(129,129);
ctx.bezierCurveTo(128,130,126,129,125,128);
ctx.lineTo(125,128);
ctx.bezierCurveTo(124,127,125,125,126,124);
ctx.lineTo(161,99);
ctx.bezierCurveTo(162,98,164,98,165,100);
ctx.lineTo(165,100);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(165,152);
ctx.bezierCurveTo(164,153,162,154,161,153);
ctx.lineTo(125,129);
ctx.bezierCurveTo(124,128,124,126,125,125);
ctx.lineTo(125,125);
ctx.bezierCurveTo(126,124,128,123,129,124);
ctx.lineTo(165,148);
ctx.bezierCurveTo(166,149,166,151,165,152);
ctx.lineTo(165,152);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(162,79);
ctx.bezierCurveTo(164,79,165,79,165,80);
ctx.lineTo(165,103);
ctx.bezierCurveTo(165,104,164,104,162,104);
ctx.lineTo(162,104);
ctx.bezierCurveTo(161,104,159,104,159,103);
ctx.lineTo(159,80);
ctx.bezierCurveTo(159,79,160,79,162,79);
ctx.lineTo(162,79);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(127,103);
ctx.bezierCurveTo(129,103,130,103,130,104);
ctx.lineTo(130,127);
ctx.bezierCurveTo(130,128,129,128,127,128);
ctx.lineTo(127,128);
ctx.bezierCurveTo(126,128,124,128,124,127);
ctx.lineTo(124,104);
ctx.bezierCurveTo(124,103,125,103,127,103);
ctx.lineTo(127,103);
ctx.fill();

ctx.fillStyle="rgb(254,254,254)";
ctx.beginPath();
ctx.moveTo(162,126);
ctx.bezierCurveTo(164,126,165,126,165,127);
ctx.lineTo(165,150);
ctx.bezierCurveTo(165,151,164,151,162,151);
ctx.lineTo(162,151);
ctx.bezierCurveTo(161,151,159,151,159,150);
ctx.lineTo(159,127);
ctx.bezierCurveTo(159,126,160,126,162,126);
ctx.lineTo(162,126);
ctx.fill();
  
    // END Codepen Logo
  
 // Flag Border
 
	ctx.strokeStyle = 'rgba(255,255,255,0.85)';
	ctx.lineWidth = 3;
	ctx.strokeRect( padX, padY, b, a );
}

   // BEGIN Wave Animation Script


function waveFlag( canvas, wavelength, amplitude, period, shading, squeeze ){
	if (!squeeze)    squeeze    = 0;
	if (!shading)    shading    = 100;
	if (!period)     period     = 200;
	if (!amplitude)  amplitude  = 10;
	if (!wavelength) wavelength = canvas.width/10;

	var fps = 30;
	var ctx = canvas.getContext('2d');
	var   w = canvas.width, h = canvas.height;
	var  od = ctx.getImageData(0,0,w,h).data;
	// var ct = 0, st=new Date;
	return setInterval(function(){
		var id = ctx.getImageData(0,0,w,h);
		var  d = id.data;
		var now = (new Date)/period;
		for (var y=0;y<h;++y){
			var lastO=0,shade=0;
			var sq = (y-h/2)*squeeze;
			for (var x=0;x<w;++x){
				var px  = (y*w + x)*4;
				var pct = x/w;
				var o   = Math.sin(x/wavelength-now)*amplitude*pct;
				var y2  = y + (o+sq*pct)<<0;
				var opx = (y2*w + x)*4;
				shade = (o-lastO)*shading;
				d[px  ] = od[opx  ]+shade;
				d[px+1] = od[opx+1]+shade;
				d[px+2] = od[opx+2]+shade;
				d[px+3] = od[opx+3];
				lastO = o;
			}
		}
		ctx.putImageData(id,0,0);		
		// if ((++ct)%100 == 0) console.log( 1000 * ct / (new Date - st));
	},1000/fps);
}