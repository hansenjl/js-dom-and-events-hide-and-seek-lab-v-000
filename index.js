function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
   document.querySelector('#nested div div div div.target' )
   return document.querySelector('#nested .target')
}