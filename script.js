/*
GIPHY API: http://api.giphy.com/v1/gifs/search?q=
Public Beta Key: dc6zaTOxFJmzC

sample: http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC 
*/

var app = app || {};
app.main = (function() {

	// attaching multiple functions from input field to search button to API
	var attachEvents = function() {

		$('#search-button').off('click').on('click', function(){
			loadData($('#search-box').val());	
		});

		$('#search-box').keypress(function(e) {
			if (e.keyCode == 13) {
				loadData($('#search-box').val());
			}
		});		
	};

	//load data from GIPHY

	var loadData = function(subject){
		var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + subject +  '&api_key=dc6zaTOxFJmzC';
		$.getJSON(searchURL, function(json){
			console.log('Data received');

			var results = json.data;
			console.log('Found ' + results.length + ' results');
			appendData(results);
		});
	};

	// Attach that data to the html

	var appendData = function(data){
		console.log('Appended data');
		console.log(data);
		$('#view').append('<img src="' + data[0].images.fixed_height.url + '" />');

	};


	var init = function(){
		console.log('Initializing app.');
		attachEvents();
	};
	return {
		init: init
	};
	
	})();

	window.addEventListener('DOMContentLoaded', app.main.init);


