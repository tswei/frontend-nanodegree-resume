// $("#main").append("Charlie Chaplin");

var awesomeThoughts = "I am Charlie Chaplin and I am AWESOME";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

var name = "Charlie Chaplin"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Comedian Extrodinaire"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


