function toCamelCase(str){
  let returnArr = []
  let stringVal
  str[0] == str[0].toLowerCase() ? stringVal = true : stringVal = false
  returnArr.push(str[0])
  
  for (let i=1;i < str.length; i++) {
    if (stringVal) {
      if (str[i] == '-' || str[i] == '_') {
        returnArr.push(str[i + 1].toUpperCase())
        i = i + 2
      }
      returnArr.push(str[i])
    }

    if (!stringVal) {
      if (str[i] == '-' || str[i] == '_') {
        let upCaseLetter = str[i + 1]
        returnArr.push(upCaseLetter.toUpperCase())
        i = i + 2
      }
      returnArr.push(str[i])
    }
  
  }
  
  console.log(returnArr.join(''))
}

// toCamelCase('the_stealth_warrior')
toCamelCase("The-Stealth-Warrior")