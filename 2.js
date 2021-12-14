function arrange(input){
  
    for (let j = 0; j < input.length; j++) {
      for (let i = 0; i < input.length; i++) {
        let nextIndex =i+1
        
        while(input[nextIndex] === -1){
          if(input[nextIndex] === -1 ){
            nextIndex+=1
          }else {
            nextIndex
          }
        }
  
   
        if  (input[i]> input[nextIndex]){
          let sum = input[nextIndex]
          input[nextIndex]=input[i]
          input[i]=sum
        }
      }
      
    }
    return input 
  }
  console.log(arrange([170,160,-1,150,-1,-1,-1,190,180]))
  