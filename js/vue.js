	var cardsArray = [ 	
		'&#128525;','&#128525;',   //smiley in hexadecimal code credit  https://codepen.io/celina-ngth/pen/mdEoWVZ?editors=1012
		'&#128561;','&#128561;',
		'&#128564;','&#128564;',
		'&#128520;','&#128520;',
		'&#128545;','&#128545;',
		'&#129313;','&#129313;'],
	flippedCard = [], //initalisation differents tableaux 
	flippedId = [], 
	NbPairFound = 0,

	innerCards = document.querySelectorAll(".inner"),
	
	
	
	chronotime = document.getElementById('chronotime');
    b_chronoStart = false;
	min = 1;
	sec = 30;
	m = min; s = sec;//m et s sont utilisées dans chrono.js
	document.getElementById('chronotime').value ="0" + m + ":" + "0"+ s;//affiche 02:00

    window.onload = start();//ca part de la 
	
	document.getElementById("rejouer").addEventListener("click", newGame);//ca coute rien 
	 
    // prepare les cartes  jeu 
	function start() {
		shuffle(cardsArray);//à commenter pour coder gestion des temps en fin de jeu
		assignCards();
		//add event click sur les cartes --> appel de la fct flippedCard sur un clik 
		innerCards.forEach(card => card.addEventListener("click", flippedCards));
	}

  
	// Results 
	function endOfGame(b_success) {
		chronoStop();
		resultDisplay = document.getElementById("resultats");
		resultDisplay.style.display = "block";
	    resultText = document.querySelector(".modal-content p");
        innerCards.forEach(card => card.removeEventListener("click", flippedCards));
		
		if (b_success == true){
			//affichage du temps  		
			var currentChrono =   { min:0, sec:0}
			recupChronoPourAffichage(currentChrono);/*objet passé par reference*/
		    resultText.innerHTML = 	"<h2>Winner  your time:</h2> " +  currentChrono.min+" mn : "+currentChrono.sec+ " secs"  ;
			//insertion in db le temps est transformé en sec puis affichage dans la fenetre fct callback
			insertScore(transformChronoInTime(currentChrono));
		}
		else
		{
			resultText.innerHTML = 	"<h1>Lost</h1> " + "try again";
		}
		close = document.getElementsByClassName("close")[0];
		close.onclick = function() {
			resultDisplay.style.display = "none";   
		}
		
	}
    
   
  
	
// Reinitialize and start a new game
	function newGame() {
		resultDisplay.style.display = "none";
		b_start = false;
		flipped = [];
		flippedId = [];
		NbPairFound = 0;
		innerCards.forEach(card => card.classList.remove("flipped"));
		b_chronoStart = false;
    	min = 2;
    	sec = 0;
		m = min; s = sec;
		document.getElementById('chronotime').value ="0" + m + ":" + "0"+ s;//affiche 02:00
		start();
	}
  
  

  
