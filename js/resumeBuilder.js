var work = {
	"jobs" : [
	{
		"employer" : "Planet Express",
		"title" : "Delivery Boy",
		"location" : "New New York",
		"dates worked" : "January 1, 3000 - Future",
		"description" : "Traveling the galaxy and teaching alien women to love."
	},
	{
		"employer" : "Panucci's Pizza",
		"title" : "Delivery Boy",
		"location" : "New York",
		"dates worked" : "1998 - December 31, 1999",
		"description" : "Falling for prank calls and being frozen for 1000 years."
	}]
}

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job]["title"]));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job]["dates worked"]));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
}

//image for project "Delivery to the Moon" from : http://en.wikipedia.org/wiki/File:Futurama_102_-_Episode_Two_The_Series_Has_Landed.jpg
//image for project "Roomies" from : http://en.wikipedia.org/wiki/File:Benders_apartment_room.jpg
var projects = {
	"projects" : [
	{
		"title" : "Delivery to the Moon",
		"dates worked" : "April 4, 3000",
		"description" : "Delivered Package to the Lunar Theme Park and found the original Lunar lander placed at the landing site by the Historical Sticklers Society.",
		"images" : [
			"images/LunarLander.jpg' alt='Lunar image'"
		]
	},
	{
		"title" : "Roomies",
		"dates worked" : "April 6, 3000",
		"description" : "Kicked out of my Great-Something-Something-Nephew's place, and found a great roommate.",
		"images" : [
			"images/Roommate.jpg' alt='Roomies image'"
		]
	}]
}

projects.display = function() {
	if (projects.projects) {
		for (var i in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i]["title"]));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i]["dates worked"]));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i]["description"]));
			for (var j in projects.projects[i]["images"]) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i]["images"][j]));
			}
		}
	}
}

var bio = {
	"name" : "Phillip J. Fry",
	"role" : "Delivery Boy",
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
	"contacts" : {
		"mobile" : "650-555-5555",
		"email" : "fry@planetexpress.com",
		"github" : "cryoguy",
		"twitter" : "@cryoguy",
		"location" : "New New York"
	},
	"skills" : [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic" : "images/fry.jpg' alt='selfie'"
};

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
	if (bio.skills) {
		$("#header").append(HTMLskillsStart);
		for (item in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[item]));
		}
	}
}

var education = {
	"schools" : [
	{
		"name" : "Mars University",
		"location" : "Mars",
		"degree" : "college dropout",
		"majors" : [
			"20th Century History", "Monkey Intellegence", "Banana Bribery"
		],
		"dates attended" : "August 27, 3000 - October 3, 3000",
		"url" : "www.mars.edu"
	},
	{
		"name" : "Coney Island College",
		"location" : "Coney Island, New York",
		"degree" : "college dropout",
		"majors" : [
			"Physics", "Space Travel", "Parcel Negotiation"
		],
		"dates attended" : "August 27, 1998 - October 3, 1998",
		"url" : "www.coneyislandcollege.edu"
	}],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates attended" : "October 1, 2014 - October 7, 2014",
		"url" : "https://www.udacity.com/course/ud304"
	},
	{
		"title" : "How to use Git and GitHub",
		"school" : "Udacity",
		"dates attended" : "October 7, 2014 - October 14, 2014",
		"url" : "https://www.udacity.com/course/ud775"
	},
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates attended" : "October 14, 2014 - October 21, 2014",
		"url" : "https://www.udacity.com/course/ud804"
	}]

}

// Need to insert online courses
education.display = function() {
	for (var i in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i]["name"]) + HTMLschoolDegree.replace("%data%", education.schools[i]["degree"]));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i]["dates attended"]));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i]["location"]));
		for (var j in education.schools[i]["majors"]) {
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i]["majors"][j]));
		}
	}
	if (education.onlineCourses) {
		$(".education-entry:last").append(HTMLonlineClasses)
		for (var j in education.onlineCourses) {			
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[j]["title"]) + HTMLonlineSchool.replace("%data%", education.onlineCourses[j]["school"]));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[j]["dates attended"]));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[j]["url"]));
		}
	}
}

$(document).click(function(loc) {
	// your code goes here
	console.log(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(name) {
	name = bio.name.trim().split(" ");
	for (var i in name) {
		if (i == 0) {
			name[i] = (name[i][0].toUpperCase() + name[i].slice(1).toLowerCase());
		} else {
			name[i] = name[i].toUpperCase();
		}
	}
	console.log(name)
	return name.join(" ");
}

// Add map functionality
// alter CSS
$("#mapDiv").append(googleMap);
work.display();
projects.display();
bio.display();
education.display();