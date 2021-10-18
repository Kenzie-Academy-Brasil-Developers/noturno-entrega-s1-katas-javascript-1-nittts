function oneThroughTwenty() {
  for(let index = 1; index <= 20; index++) {
     return index
    }    
}

//oneThroughTwenty()

function evensToTwenty() {
  for(let index = 1; index <= 20; index++) {
      if (index % 2 === 0) {
        return index  
      }
    }
}

//evensToTwenty()

function oddsToTwenty() {
  for(let index = 1; index <= 20; index++) {
    if (index % 2 !== 0) {
      return index 
    }
  }
}

//oddsToTwenty()

function multiplesOfFive() {
    for(let index = 0; index <= 100; index++) {
      if(index % 5 === 0) {
        return index 
      }
    }
}

//multiplesOfFive()

function squareNumbers() {
      let resultado = 0  
      for(index = 0; index <= 10; index++) {
        resultado = index ** 2
        return resultado
      }          
        
      
}

//squareNumbers()

function countingBackwards() {
      for(index = 20; index >= 1; index--){
        return index
      }
}

//countingBackwards()

function evenNumbersBackwards() {
  for(index = 20; index >= 1; index--){
    if(index % 2 === 0) {
      return index
    }
}
}

//evenNumbersBackwards()

function oddNumbersBackwards() {
  for(index = 20; index >= 1; index--){
    if(index % 2 !== 0) {
      return index
  }
  }
}

//oddNumbersBackwards()

function multiplesOfFiveBackwards() {
      for(index = 100; index >= 0; index--){
        if(index % 5 === 0){ 
          return index
        }
      }
}

//multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let resultado = 0
    for(index = 10; index >= 1; index--) {
      resultado = index ** 2
      return resultado
    }
  }
//squareNumbersBackwards()
