$(document).ready(function(){

	var totalHeight = $(document).height() - $(window).height();
	// console.log(totalHeight);

	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    var ratio = height/totalHeight;

	    var vfValue = Math.round( ratio*(900-100) + 100 );

		console.log(vfValue);

		$('.text').css('--font-weight', vfValue);
		if ( ratio > 0.04){
			$('.text').addClass('light');
			$('.text').text('WHO IN THE WORLD AM I? THAT IS THE GREAT PUZZLE...');
		}else{
			$('.text').removeClass('light');
			$('.text').removeClass('TWO FACED TYPE');
		}

		if ( ratio > 0.145){
			$('.text').addClass('light');
			$('.text').text('');
		}else{
			$('.text').removeClass('light');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.145){
			$('.text').addClass('disappear');
			$('.text').text('');
		}else{
			$('.text').removeClass('light');
			$('.text').removeClass('hi');
		}

	if ( ratio > 0.215){
			$('.text').addClass('dark');
			$('.text').text('A');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}


	if ( ratio > 0.22){
			$('.text').addClass('dark');
			$('.text').text('AB');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

		if ( ratio > 0.225){
			$('.text').addClass('dark');
			$('.text').text('ABC');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.23){
			$('.text').addClass('dark');
			$('.text').text('ABCD');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.235){
			$('.text').addClass('dark');
			$('.text').text('ABCDE');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

			if ( ratio > 0.24){
			$('.text').addClass('dark');
			$('.text').text('ABCDEF');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

if ( ratio > 0.245){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFG');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

		if ( ratio > 0.25){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGH');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}
if ( ratio > 0.255){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHI');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}
if ( ratio > 0.26){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJ');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}

		if ( ratio > 0.265){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJK');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}
if ( ratio > 0.27){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKL');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
		}


			if ( ratio > 0.275){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLM');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}


			if ( ratio > 0.28){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMN');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.285){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNO');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.29){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOP');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.295){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQ');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.3){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQR');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.305){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRS');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.31){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRST');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}


			if ( ratio > 0.315){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTU');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}


			if ( ratio > 0.32){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTUV');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.325){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTUVW');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.33){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTUVWX');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.335){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTUVWXY');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.34){
			$('.text').addClass('dark');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}
			if ( ratio > 0.4){
			$('.text').addClass('dark');
			$('.text').text('');
		}else{
			$('.text').removeClass('dark');
			$('.text').removeClass('hi');
}

			if ( ratio > 0.46){
			$('.text').addClass('pixel');
			$('.text').text('BUT IT IS NO USE NOW TO PRETEND TO BE TWO PEOPLE');
		}else{

			$('.text').removeClass('hi');
}
			if ( ratio > 0.58){
			$('.text').addClass('pixel');
			$('.text').text('WHY THERE IS HARDLY ENOUGH OF ME');
		}else{

			$('.text').removeClass('hi');
}
			if ( ratio > 0.65){
			$('.text').addClass('pixel');
			$('.text').text('TO MAKE ONE RESPECTABLE PERSON');
		}else{

			$('.text').removeClass('hi');
}

			

			if ( ratio > 0.75){
			$('.text').addClass('pixel');
			$('.text').text('ABCDEFGHIJKL');
		}else{
			$('.text').removeClass('hi');
}



			if ( ratio > 0.77){
			$('.text').addClass('pixel');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTUVW');
		}else{
			$('.text').removeClass('hi');
}

	
			if ( ratio > 0.80){
			$('.text').addClass('pixel');
			$('.text').text('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
		}else{
			$('.text').removeClass('hi');
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
	});



});