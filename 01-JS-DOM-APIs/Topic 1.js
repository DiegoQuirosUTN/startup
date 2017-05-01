
		//Exercise 1.7
		var getURL = function (url, callback){
			requestURL("GET", url, callback);
		}
		var requestURL = function(method, url, callback) {
 			var req = new XMLHttpRequest();
 		 
 			req.open(method, url, true);
  			req.addEventListener("load", function(event) {
  				console.log(req.status);
    			if (req.status == 200){
    				event.stopPropagation();
    				callback(JSON.parse(req.responseText));
    			}
      		
   		 		else
   		 		{
      				changeSectionsToRed(); //added for exercise 1.8
      				callback(null, new Error("Request failed: " + req.statusText));
      			}
  			});
  		
  			req.addEventListener("error", function() {
  				changeSectionsToRed(); //added for exercise 1.8
    			callback(null, new Error("Network error"));
  			});
  		
 			req.send(null);
 		}

 		// Exercise 1.8
		function changeSectionsToRed(){
			for(var i=0; i < document.body.getElementsByTagName("section").length ; i++){
				document.body.getElementsByTagName("section")[i].style.color = "red";
			}
		}
		/*
		//Test for the getURL function
		var logResponse = function(reqs){
			console.log(reqs.value.joke);
			console.log("message recived");
		};
		getURL("http://api.icndb.com/jokes/random", logResponse);
		*/
		var logResponse = function(reqs){
			console.log(reqs);
			console.log("message recived");
		};

		var createList = function(reqst){
			var sectionElement = document.createElement("section");
			sectionElement.classList.add("searchResults");
			var ul = document.createElement("ul");
			ul.textContent = "repositories:";
			document.body.appendChild(sectionElement);
			sectionElement.appendChild(ul);
				for(var i=0; i < reqst.items.length; i++){
					var li = document.createElement("li");
					ul.appendChild(li);
					li.textContent = reqst.items[i].full_name;
				}
		}

		// Exercise 1.6
		var req = new XMLHttpRequest();
        var button = document.body.getElementsByTagName("button")[0];
        function botonApretado(event){
			req.open("GET", "http://api.icndb.com/jokes/random", true);
			req.addEventListener("load", function() {
  				console.log(req.status);
  				var jason = JSON.parse(req.responseText);
  				console.log(jason.value.joke);
  				document.body.getElementsByClassName("hidden")[0].textContent = "Hello World!"+" Joke:"+jason.value.joke;
  				button.removeEventListener("click", botonApretado);
			});
		req.send(null);
		};
        button.addEventListener("click", botonApretado);


        // Exercise 1.9-1.10
		var searchButton = document.body.getElementsByClassName("searchButton")[0];
       
        var createSearchList = function(reqst){
        	document.body.removeChild(document.body.getElementsByClassName("searchResults")[0])
			var sectionElement = document.createElement("section");
			sectionElement.classList.add("searchResults");
			var ul = document.createElement("ul");
			var searchValue = document.body.getElementsByClassName("search")[0].value;
			ul.textContent = "repositories:";
			document.body.appendChild(sectionElement);
			sectionElement.appendChild(ul);
				for(var i=0; i < reqst.items.length; i++){
					if(reqst.items[i].full_name.toLowerCase().includes(searchValue.toLowerCase())){
						var li = document.createElement("li");
						ul.appendChild(li);
						li.textContent = reqst.items[i].full_name;
					}
				}
		}

        function getData(event){
        	getURL("https://api.github.com/search/repositories?q='javaScript", createSearchList);
        }

        searchButton.addEventListener("click",getData);


        //exercise 1.4
 		var hiddenSection = document.body.getElementsByClassName("hidden")[0];
        window.addEventListener("load", function(event) {
    		hiddenSection.style.display = "block";
    		hiddenSection.style.opacity = 1;
    	});

 		window.addEventListener("load", function(event) {
    		console.log("All resources finished loading!");
  		});
  		//getURL("invalid url", logResponse);
  		
  		getURL("https://api.github.com/search/repositories?q='javaScript", createList);


  		//Exercise 1.12
		var items = [
  		[1, 2, 43, 503, 99],
  		[3, 4, 434, 4234, 93],
  		[5, 6, 123, 0, 1],
  		[3,1,1,1,1]
		];

		function printTable(matrix, whereToInsert){
			var table = document.createElement("table");
			whereToInsert.appendChild(table);
			for(var i = 0; i < matrix.length; i++ ){
				var row = document.createElement("tr");
				table.appendChild(row);
				for(var j = 0; j < matrix[i].length; j++){
					var cell = document.createElement("td");
					row.appendChild(cell);
					cell.textContent = matrix[i][j].toString()
				}
			}
		}
		printTable(items, document.getElementsByClassName("Table")[0]);