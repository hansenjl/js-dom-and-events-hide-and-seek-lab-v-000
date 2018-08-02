function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
   return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML,10) + 1).toString()
  }
}

function deepestChild(){
  const node = document.querySelector('div#grand-node')
  var last = ""
  var j = node.children[0]
  for(let k = 1, k > 0 , k++){
    last = j.node.children[0]
  }
  
  return last
}