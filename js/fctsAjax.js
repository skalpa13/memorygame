$(document).ready(function(){
	showBestScores();
	});

function showBestScores() {
	 
	  const xhttp = new XMLHttpRequest();
	  xhttp.onload = function() {
	    document.getElementById("spanForScores").innerHTML = this.responseText;
	  
	  }
	  xhttp.open(null,"getScore.php");
	  xhttp.send();
	}

$("#btnscore").click(function () {
	score = $("input").val();
	insertScore(score);
});


function insertScore(score) {
 
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("spanForScores").innerHTML = this.responseText;
  
  }
  xhttp.open("GET","insertScore.php?q="+score, true);
  xhttp.send();
  
  
}