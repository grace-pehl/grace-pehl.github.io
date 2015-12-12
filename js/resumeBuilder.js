var skills = ['Data Analysis', 'Machine Learning', 'R', 'Python', 'Excel', 'SQL', 'Matlab', 'Tableau', 'Statistics', 'Hadoop', 'JavaScript'];
var bio = { 'name': 'Grace Pehl, PhD', 
			'role': "Jr. Data Scientist", 
			'contacts': {'phone': '772-299-4470', 'email' : 'grace.pehl@gmail.com', 
						'github' : 'github.com/grace-pehl', 'twitter' : '@Grace_Pehl', 
						'location': 'Vero Beach, FL'}, 
			'welcomeMessage' : "Let's be amazing", 
			'biopic' : 'images/grace.jpg', 
			'skills' : skills};
var education = {
	"schools": [
	{
		"name": "California Institute of Technology",
		"location": "Pasadena, CA",
		"degree": "B.S.",
		"major": "Geology",
		"year": "2001"
	},
	{
		"name": "University of California, Berkeley",
		"location": "Berkeley, CA",
		"degree": "Ph.D.",
		"major": "Earth and Planetary Science",
		"year": "2005"
	},
]};
// education history
education.display = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[school].name) + 
			HTMLschoolDegree.replace('%data%', education.schools[school].degree));
		$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location));
		$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].year));
		$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[school].major));
	}
}

var work = {"jobs" : [
	{
		"employer": "Mother of Six",
		"title": "Primary Caregiver",
		"dates": "August 2006 - present",
		"location": ["Las Vegas, NV", "Los Angeles, CA", "Vero Beach, FL"],
		"description": ["Had 6 children in 8 years often having 3 in diapers at a time",
			"Homeschooled children in rigorous, math-based curriculum"]
	},
	{
		"employer": "Entropy Acreage",
		"title": "Owner/Operator",
		"dates": "March 2010 - May 2015",
		"location": ["Vero Beach, FL"],
		"description": ["Researched state and federal agricultural regulations and tax law to ensure compliance for CSA business",
			"Recruited shareholders through direct marketing and targeted online advertisement", 
			"Cared for 100-150 chickens, plus goats, turkeys, and steers"]
	},
	{
		"employer": "Berkeley Seismological Lab",
		"title": "Fiscal Assistant III",
		"dates": "August 2005 - July 2006",
		"location": ["Berkeley, CA"],
		"description": ["Created annual report including editing reports about ongoing research in seismology",
			"Organized logistics and travel for 3-week workshop for faculty and graduate students"]
	},
	{
		"employer": "Diablo Valley College",
		"title": "Adjunct Faculty",
		"dates": "January 2006 - May 2006",
		"location": ["Pleasant Hill, CA"],
		"description": ["Taught Geol 122, Intro Geology Lab while still in graduate school",
			"Developed my own labs, exams, and field trips"]
	},
	{
		"employer": "Prison University Project",
		"title": "Volunteer Instructor",
		"dates": "January 2005 - May 2006",
		"location": ["San Quentin, CA"],
		"description": ["Taught Geology of California to inmates inside San Quentin State Prison",
			"Developed exercises within prison restrictions"]
	}
]};
// work history
work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + 
			HTMLworkTitle.replace('%data%', work.jobs[job].title));
		$('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
		$('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
		for (var line in work.jobs[job].description) {
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description[line]));
		}
	}
};
var projects = { "projects" : [
	{
		"title": "Interactive Crime Map of London Boroughs",
		"description": "Visualized data from the London Data Store in R and deployed the app on the Shiny server",
		"url" : "https://gracepehl.shinyapps.io/LondonMap"
	},
	{
		"title": "Regression Analysis of Yelp.com Business Reviews" ,
		"description": "Multivariate regression analysis using business hours, city, and business category.  K-means clustering on latitude/longitude to determine city location." ,
		"url" : "https://rpubs.com/grace-pehl/yelpreport"
	},
	{
		"title": "Identifying Fraud from Enron Email",
		"description": "Compared random forest and adaboost classifiers to identify Persons of Interest in the Enron scandal from financial data and email corpus.  Stemmed and vectorized email texts to create a bag-of-words for text learning.",
		"url" : "https://grace-pehl.github.io/enron"
	},
	{
		"title": "Classifying Workout Quality from Personal Accelerometer" ,
		"description": "Implemented a random forest machine learning algorithm for supervised learning of bicep curl technique  from Samsung smartphone accelerometer readings" ,
		"url" : "http://rpubs.com/grace-pehl/weightlifting"
	}
	]};
projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(HTMLprojectTitle.replace('#', projects.projects[project].url).replace('%data%', projects.projects[project].title));
		$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[project].description));
	}
};

// header info
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.phone));
$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
$('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
$('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (skill in skills) {
		$("#skills").append(HTMLskills.replace("%data%", skills[skill]));
	}
}
education.display();
projects.display();
work.display();

// log click locations
$(document).click(function(loc) { 
	 logClicks(loc.pageX, loc.pageY);
});
// create array of work locations
function locationizer(work_obj) {
	var locationArray = ['Cole Camp, MO'];
	for (var job in work.jobs) {
		for (var city in work_obj.jobs[job].location) {
			locations.push(work_obj.jobs[job].location[city]);
		}
	}
	return locationArray;
}
$('#mapDiv').append(googleMap);
var linkedIn = '<a class="center-text" href="https://www.linkedin.com/pub/grace-pehl-phd/a9/949/412"><img src="https://static.licdn.com/scds/common/u/img/webpromo/btn_myprofile_160x33.png" width="160" height="33" border="0" alt="View Grace Pehl, PhD\'s profile on LinkedIn"</a>';
$('#footerContacts').append(HTMLmobile.replace("%data%", bio.contacts.phone));
$('#footerContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
$('#lets-connect').append(linkedIn);