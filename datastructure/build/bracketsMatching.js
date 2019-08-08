function bracketsMatching(str) {
  let arr = str.split('');
  let target = '[]{}()';
  let open = '[{(';
  let pendingClose = [];

  arr.foEach(char => {
    if (target.includes(char)) {
      if (open.includes(char)) {
        
        pendingClose.push(target.charAt(target.indexOf(char)+1))
      } else if (char !== pendingClose.pop()){
        return false
      }
    }
  })

  if (pendingClose.length > 0) {
    return false
  }

  return true  
}

console.log(bracketsMatching('()'));