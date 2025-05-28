$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		// Turn on lights
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		
		// Hide the button
		$(this).fadeOut('slow');
		
		// Play music automatically after lights
		setTimeout(function(){
			playMusic();
		}, 5000);
	});
	
	// Function to play music and continue the sequence
	function playMusic() {
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		
		// Start decorations after 10 seconds
		setTimeout(function(){
			startDecorations();
		}, 10000);
	}
	
	// Function to start decorations
	function startDecorations() {
		$('.bannar').addClass('bannar-come');
		
		// Start balloons flying after 6 seconds
		setTimeout(function(){
			flyBalloons();
		}, 6000);
	}

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	// Function to fly balloons
	function flyBalloons() {
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		// Wait for balloons to fly before spelling OMICRON
		setTimeout(function(){
			showWishMessage();
		}, 18000);
	}	

	// Function to light candles
	function lightCandles() {
		$('.fuego').fadeIn('slow');
	}

	// Function to arrange balloons to spell OMICRON
	function showWishMessage() {
		vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		
		// Show cake after balloons spell OMICRON
		setTimeout(function(){
			showCake();
		}, 5000);
	}
	
	// Function to show cake
	function showCake() {
		// Position cake close to the balloons
		var balloonRowPosition = $('#b11').position().top + 50;
		
		$('.cake').css({
			'display': 'block',
			'position': 'absolute',
			'top': (balloonRowPosition + 100) + 'px', // Position even closer to balloons
			'left': '50%',
			'transform': 'translateX(-50%)', // Center horizontally
			'margin': '0 auto'
		});
		
		// Light candles immediately when cake appears
		lightCandles();
		
		// Show message after cake appears
		setTimeout(function(){
			showMessage();
		}, 5000);
	}
	
	// Function to show the message
	function showMessage() {
		// Position the message under the cake
		var cakePosition = $('.cake').position().top + $('.cake').height();
		
		$('.message').css({
			'position': 'absolute',
			'top': (cakePosition - 100) + 'px', // Position much closer to cake
			'left': '0',
			'right': '0',
			'margin': '0 auto',
			'text-align': 'center',
			'width': '100%'
		});
		
		// Show message
		$('.message').fadeIn('slow');
		
		// Start the message animation sequence
		msgLoop(1);
		
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==50){
					$("p:nth-child(49)").fadeOut('slow');
				}
				else{
					msgLoop(i);
				}
			});
		}
	}
});




//alert('hello');