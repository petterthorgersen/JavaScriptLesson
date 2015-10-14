
var highestNumber = 0;


function findHighestNumber(){
  while(true){
	  var input = prompt('Type a number(0 for done)');
	  var number = parseInt(input, 10);
	  if (number === 0) return highestNumber;
	  if (number > highestNumber) highestNumber = number;
  }
}

//document.write(findHighestNumber());

function countLetters(){
  var input = prompt('What letter to search for?');
  document.write(countLetter(input));
}

function countLetter(char){
  if (char.length > 1) return "Du gjorde nok feil.";
  var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec felis nulla. Aenean erat risus, gravida vitae elit nec, ultrices posuere arcu. Pellentesque sed eros sit amet nunc consequat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin augue augue, in mollis nulla pellentesque quis. In porttitor massa a nisl laoreet maximus. Vivamus finibus leo sed ligula lacinia, a finibus lorem porta.";
  var chars = text.split("");
  var counter = 0;
  for (var i=0;i<chars.length;i++){
    if (chars[i] === char) counter++;
  }
  return counter;
}

countLetters();
