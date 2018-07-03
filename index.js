function takeANumber(katzDeliLine){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${parseInt(katzDeliLine.indexOf(name))+1} in line.`
} // all returning indexes will be +1 

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else{
    var first = katzDeliLine[0] 
    katzDeliLine.shift() //same as pop in a stack
    return `Currently serving ${first}.`
  }
}

var line = [] 

function currentLine(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push (' ' +[i+1]+`. ` + katzDeliLine[i]);
    i++;
}
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.` }
  else {
    return `The line is currently:` + line;
  }
}
