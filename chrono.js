	 function chronoDecremente()
     {	
	 	s -=  1;
        
       if (s < 10)
           document.getElementById('chronotime').value =  "0" + m + ":0" + s;
        else
           document.getElementById('chronotime').value ="0" + m + ":" + s;
       
        if (s == 0) 
        {
           if( m ==  0){
		    endOfGame(false);
		    return;
           }else {
			s = 60;
            m -= 1;
           }
        }

        timerID =  setTimeout(chronoDecremente, 1000);
	}	
	
	function chronoStop()
	{
		clearInterval(timerID);
	}
	function chronoStart() {
	
		s = 60;
	    m -= 1;
		chronoDecremente();
	}
	function recupChronoPourAffichage(onechrono){
		//a partir du chrono recupérons le temps en min et sec
    //il faut enlever une unité  de min en sec (= 60 sec) principe de la retenue  
     onechrono.sec  = 60 -s;	 
    //il faut enlever 1 min pour compenser l'ajout de 60 secs
      onechrono.min = min - ( m + 1); 
	}
	
	
	function transformChronoInTime(onechrono) {
    
     //ce temps est transformé en seconde 
      var timeEnSecs = onechrono.sec +  (onechrono.min*60)
      return timeEnSecs;
    }

 



	
