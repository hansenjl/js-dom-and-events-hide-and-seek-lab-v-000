function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
   return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (lis[i].innerHTML + 1).toString()
}
}