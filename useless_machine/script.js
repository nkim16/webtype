$(document).ready(function(){
	console.log('script loaded');

	let personality = "";
	let submitButtonId = "submit";

	let counters = {
		"whole" : 0,
		"dest" : 0,
		 "stu" : 0,
		 "cur" : 0,
		 "bor" : 0,
		 "sm" : 0,
	}
	let whole_counter = 0;

	$('#options').on('change',function(){
	console.log($(this).val());
	personality=$(this).val();

		$('#result-final').text(personality);
	});


	$('button').click(function(){
		let id = $(this).attr('id');

		counters[id] ++;

		console.log(counters);

		//calling the new funciton
		if(id == submitButtonId){
			getResult();
		} 

		// whole_counter++; 
		rayResult( id );
		updatetagline( id );
		
	});


	//WHOLE SOME 
	let lists = {
		'whole_list': [
			"Cute dog videos", 
			"Baby Animals", 
			"Motivational speeches", 
			"Babies smiling", 
			"Sunrise videos", 
			"Best chocolate chip recipes", 
			"Bob Ross painting videos", 
			"Cute cats",
			"How to make bread",
			"How to grow plants",
			"Watch disney movies online free",
			"Plant stores near me",
			"Baby platypus",
			"ASMR sleep videos",
			"Daily yoga routines",
			"Wholesome memes",
			"Bike trail near me",
			"Self care activities",
			"DIY homemade slime",
			"How to knit",

			],
		'dest_list': [
			"How to launder money",
			"Best spot to hide drugs",
			"I think I am a serial killer",
			"Where to buy a fake ID",
			"How to get away from murder",
			"Where to buy cyanide",
			"Delete search history permanant",
			"Order fake passport",
			"How to bury body",
			"Rob a bank",
			"Steal a car",
			"Make counterfeit money",
			"Buy drugs near me",
			"Sell organs for money",
			"Evade taxes without getting caught",
			"How to ATM fraud",
			"How to hack the government",
			"Shoplifting methods",
			"How many cherry pits can kill a human?",
			"Where to buy tear gas",
			"How pickpockets steal wallets",
		],
		'stu_list': [
			"can you kill ants", 
			"Baby Animals", 
			"Motivational speeches", 
			"Babies smiling", 
			"Sunshine", 
			"Delicious food recipies", 
			"Bob Ross painting videos", 
			"Cute cats"],

		'cur_list': [
			"world's tallest dog", 
			"What is Zac efron’s blood type?", 
			"What happens when you get swallowed by a whale", 
			"World's fattest skyscraper", 
			"YouTube accounts that got banned", 
			"World's shortest cat", 
			"Richest dog in the world", 
			"What is the rarest M&M color?",
			"Lady Gaga real name",
			"What is the loudest animal on Earth?",
			"The first toy to be advertised on television",
			"Which country produces the most coffee in the world?",
			"Why do bees have five eyes",
			"Best music for plants",
			"What celebrity has their dog cloned– twice?",
			"the most expensive home in the world",
			"When will the world end",
			"the most common letter in the English alphabet?",
			"A tick bite can make you allergic to what food",
			"youngest person ever to appear on a Billboard chart",
			"Worst TV series",
			"Most viewed video",
			"Most expensive artwork",],

		'bor_list': [
			"Nearest grocery store near me", 
			"Nearest school", 
			"Best desks", 
			"Water bill is low", 
			"Travel to Idaho", 
			"How to make cabbage soup", 
			"Weather next month", 
			"Best coupons",
			""],
		'sm_list': [
			"The Collatz Conjecture", 
			"Goldbach's Conjecture﻿ Creative Commons", 
			"The Riemann Hypothesis", 
			"Are these variables dynamically conjugate, both in classical and in quantum mechanics?", 
			"The Unknotting Problem", 
			"Spacetime Wave theory", 
			"Does the pair exhibit similar principle as the position-momentum?", 
			"The Twin Prime Conjecture",
			"Copenhagen Interpretation of Quantum Mechanics",
			"Which schools can i get into with 4.0 gpa",
			"The Coriolis effect",
			"Construction of phylogenetic trees",
			"Fourier transform",
			"Harmonic analyzer",
			"Paleomagnetism",
			"Biological Anthropology",
			"SCHRODINGER'S RABID CHICKEN",
			"The Single Theory of Gravity",
			"Higgs Boson",],
	}
	// var whole_list = [
	// 		"Cute dog videos", 
	// 		"Baby Animals", 
	// 		"Motivational speeches", 
	// 		"Babies smiling", 
	// 		"Sunshine", 
	// 		"Delicious food recipies", 
	// 		"Bob Ross painting videos", 
	// 		"Cute cats"]

	// //WHOLE SOME 
	// var dest_list = [
	// 		"test",
	// 		"test2"]


	function rayResult( listkey ) {

		let arrayname = listkey + '_list';
		console.log(arrayname);

		let array = lists[arrayname];

		let word = array[Math.floor(Math.random()*array.length)];


	  	$("#result").html('<a target="_blank" href="https://www.google.com/search?q=' + word +'">' + word + '</a>');
	  

	}

	function updatetagline( buttonID ){
		//get proper tagline for button
		console.log("update tagline is getting called");
		let taglinelist = {
			'whole': "You seem like a good person!",
			'dest': "We're keeping an eye on you",
			'stu':"Don't worry we're not too concerned about you",
			'cur': "Haha we're entertained too!",
			'bor': "Damn, wish we got a different person",
			'sm': "We won't even try to understand you",

		};
		var tagLineWeWantToSet = ""
		tagLineWeWantToSet = taglinelist[buttonID];
		console.log(tagLineWeWantToSet);
		//set tagline on HTML object
		$("#tagline-whole").text(tagLineWeWantToSet)
	}

	function getResult(){
		console.log("getresult is called");

		//find the most clicked on
		var max = 0
		var maxKey = ""
		for (var key in counters) {
			if(counters[key]>max){
				max = counters[key]
				maxKey = key
			}
			console.log(counters[key])
		}


		//we want to create an explanation for the result
		let explanations = {
			'whole': "Wholesome explanation",
			'dest': "Destructive explan",
			'stu':"Don't worry we're not too concerned about you",
			'cur': "your curious nature can be dangerous for you."
		}
		let names = {
			'whole': "Wholesome",
			'dest':"destructive",
					}
		let moreExplanation = explanations[maxKey]
		let explanation = "You are " + names[maxKey] + " because you clicked it " + max + " times.  " + moreExplanation
		
		//add an HTML element that contains the result + explanation to the page
		$("#quiz-result").html('<p class="quiz">' + explanation + ' </p>')
	}

	// rayResult ();
var tag = document.getElementById("whole");
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('demo');
});

});