

const nbCards = 11;
/* selon le niveau debutant, expert ...  le nb Cards augmente 
pas implémenté dans cette version */ 

 	for(let cardId = 0, backId = 1; cardId <12; cardId++,backId++ ){
   		//recupération de la section par son id  
     	const mainsection = document.getElementById('mainsection');
     	const divCard = document.createElement('div');
     	divCard.className = "card";
     	mainsection.appendChild(divCard);

     	const divInner = document.createElement('div');
     	divInner.className = "inner";
     	divInner.value = cardId;
     	divInner.setAttribute('value', cardId);
		divCard.appendChild(divInner);
	
	    const pFront = document.createElement('p');
        pFront.className = 'front';
		pFront.innerHTML= "&#10068";
		
	    divInner.appendChild(pFront);

        const pBack = document.createElement('p');
        pBack.className = 'back back'+ backId;
	
		
		divInner.appendChild(pBack);
               
        
	}









