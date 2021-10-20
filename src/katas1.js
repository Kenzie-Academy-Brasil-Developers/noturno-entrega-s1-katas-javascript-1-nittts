function oneThroughTwenty() {
  let array = []
  for(let index = 1; index <= 20; index++) {
     array.push(index)
     
    }    
    return array
  }

//oneThroughTwenty()

function evensToTwenty() {
  let array = []
  for(let index = 1; index <= 20; index++) {
      if (index % 2 === 0) {
        array.push(index)
      }
    }
    return array
  }

//evensToTwenty()

function oddsToTwenty() {
  let array = []
  for(let index = 1; index <= 20; index++) {
    if (index % 2 !== 0) {
      array.push(index)
    }
  }
  return array
}

//oddsToTwenty()

function multiplesOfFive() {
  let array = []  
  for(let index = 0; index <= 100; index++) {
      if(index % 5 === 0) {
        array.push(index) 
      }
    }
    return array
}

//multiplesOfFive()

function squareNumbers() {
  let array = []    
  let resultado = 0  
      for(index = 0; index <= 10; index++) {
        resultado = index ** 2
        array.push(resultado)
      }          
      return array 
}

//squareNumbers()

function countingBackwards() {
  let array = []    
  for(index = 20; index >= 1; index--){
        array.push(index)
      }
      return array
}

//countingBackwards()

function evenNumbersBackwards() {
  let array = []
  for(index = 20; index >= 1; index--){
    if(index % 2 === 0) {
      array.push(index)
    }
}
  return array
}

//evenNumbersBackwards()

function oddNumbersBackwards() {
  let array = []
  for(index = 20; index >= 1; index--){
    if(index % 2 !== 0) {
      array.push(index)
  }
  }
  return array
}

//oddNumbersBackwards()

function multiplesOfFiveBackwards() {
  let array = []    
  for(index = 100; index >= 5; index--){
        if(index % 5 === 0){ 
          array.push(index)
        }
      }
  return array
}

multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let array = []
  let resultado = 0
    for(index = 10; index >= 1; index--) {
      resultado = index ** 2
      array.push(resultado)
    }
    return array
}

//squareNumbersBackwards()
