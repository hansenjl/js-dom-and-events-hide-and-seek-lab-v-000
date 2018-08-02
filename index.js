function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
   return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + 1).toString()
  }
}

function deepestChild(){
  const node = document.querySelector('div#grand-node')
  var j = node.children[0]
  while (j.children[0]){
      j = j.children[0]
    }
    return j 
}