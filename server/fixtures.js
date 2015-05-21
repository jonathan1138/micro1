if (Posts.find().count() === 0) {
	Posts.insert({
		title: "Introducing Telescope",
		author: "Sat Chen",
		url: "http://google.com"
	});

	Posts.insert({
		title: "Do it again",
		author: "Tom C", 
		url: "http://ebay.com"
	});

	Posts.insert({
		title: "third Item yo", 
		author: "mike hunt",
		url: "http://thermos.com"
	});
	
}