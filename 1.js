function solution(s1,s2){
  let string1=s1.split("")
  let string2=s2.split("")
  let count = 0
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if(string1[i]===string2[j]){
        count++
        string2.splice(string2[j],1)
      }
    }   
  }
  return count
}
console.log(solution('aaddcb', 'aacbb'))
