var postsData = [

	{
		title: "Intro to Telescope",
		author: "Sacha Greif",
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
		title: "meteor",
		author: "Tom Coleman",
		url: "http://meteor.com"
	},
	{
		title: "the meteor book",
		author: "Tom Coleman",
		url: "http://theMeteorBook.com"
	}
];

Template.postsList.helpers({
	posts: postsData
});