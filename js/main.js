var pageCounter = 1
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn")


btn.addEventListener("click", function () {

	var ourRequest = new XMLHttpRequest();
	ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
	
	ourRequest.onload = function() {     // LOOK INTO ONLOAD!!! vs addEventListener for("load", f)
										// xhr = ourRequest. look into
		var ourData = JSON.parse(ourRequest.responseText);
		responseTextenderHTML(ourData)
	};
		ourRequest.send();
		pageCounter ++
		if (pageCounter > 3) {
			btn.classList.add("hide-me");
		}

});

function renderHTML(data){

	var htmlString = "";

	for (i = 0; i < data.length; i++){
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that dislikes to eat ";
	
		for (ii = 0; ii < data[i].foods.likes.length; ii++){

			if (ii == 0) {
				htmlString += data[i].foods.likes[ii];
			} else {

				htmlString +=  " add " + data[i].foods.likes[ii];
			}	
		}

		htmlString += " and dislike ";

		for (ii = 0; ii < data[i].foods.dislikes.length; ii++){

			if (ii == 0) {
				htmlString += data[i].foods.dislikes[ii];
			} else {

				htmlString +=  " add " + data[i].foods.dislikes[ii];
			}	
		}
		htmlString += '</p>'
	}
	document.getElementById("animal-info").insertAdjacentHTML("beforeend", htmlString)
}
