//Practicing Strings
// Declaration of Favorite actor
let favActorFirstName = "Johnny";
let favActorLastname = "Depp";
let fullname = favActorFirstName.concat(favActorLastname); //Using concatination in adding first name and last name
let uppercase = fullname.toUpperCase(); //Using changing case to capitalize actors name
let message = "My favorite actor is " + uppercase; //Adding massage to actors name
message += " his best show is Silicon Valley"; //Utilazation of append

//To log all the variables
console.log(favActorFirstName);
console.log(favActorLastname);
console.log(fullname);
console.log(uppercase);
console.log(message);