/**
 * 
 */

   backs = document.querySelectorAll(".back");
	function shuffle(array) {  //on mélange les cartes rangées dans le tableau 
		array = array.sort(() => Math.random() - 0.5)
	}
	function assignCards() { //
		for (var i=0; i<cardsArray.length; i++) {
			backs[i].innerHTML = cardsArray[i];//[0] p.back.back1 add &#128525
		}
		//aucune paire est trouvée
		backs.forEach(back => back.classList.remove("foundCard"));
	}
	
	// Flipped cards on click le jeu démarre sur click de n'importe quel carte' 
	function flippedCards() {
		if (b_chronoStart === false) {//évite de redémarrer le chrono à tous les click sur une carte
		   chronoStart();
		    b_chronoStart = true;
	    }
		
		this.classList.add("flipped");
		flippedCard.push(this.children[1].innerHTML);
		flippedId.push(this.getAttribute("value"));
		
		if (flippedId.length === 2) {//2 cartes sont retournées on les compare
			//le click sur ces cartes n'est plus pssible'
			innerCards.forEach(card => card.removeEventListener("click", flippedCards));
			setTimeout(checkCards, 400);
		} 
		
	}

	// Check flipped cards
	function checkCards() {
		innerCards.forEach(card => card.addEventListener("click", flippedCards));
		if (flippedCard[0] === flippedCard[1]) {
			NbPairFound++;
			backs[flippedId[0]].classList.add("foundCard");
			backs[flippedId[1]].classList.add("foundCard");
		} else {
			innerCards[flippedId[0]].classList.remove("flipped");
			innerCards[flippedId[1]].classList.remove("flipped");
		}
		flippedCard = [];
		flippedId = [];
		if (NbPairFound === cardsArray.length/2) { 
			endOfGame(true);
		}
	}