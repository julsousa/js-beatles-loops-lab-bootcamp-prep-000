function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}


function johnLennonFacts(facts) {

 var newFacts = [];
 var i = 0;
 while (i < facts.length) {
   newFacts.push(facts[i] + "!!!");
   i++;
  }
  return newFacts;
} 


function iLoveTheBeatles(n) {
  if (n === 7) {
    return "I love the beetles";
  } else if (n === 17) {
    return "I love the beetles";
  } else {
    return "";
  }
}