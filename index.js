function theBeatlesPlay(musicians, instruments) {
  var play = []
  
  for (var i = 0, l = musicians.length; i < l; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return play;
}

function johnLennonFacts(facts) {
  var shout = []
  
  var i = 0;
  while(i < facts.length) {
    shout.push(`${facts[i]}!!!`)
    i++
  }
  
  return shout;
}

function iLoveTheBeatles(n) {
  var love = []
}

do {
  console.log("I love the Beatles!")
} while (iLoveTheBeatles());