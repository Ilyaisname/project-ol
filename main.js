 let arr = ['apples', 'banana', 'orange', 'mandarin', 'purl'];


function createUl() {
  let ul = document.createElement('ul');
  let li = '';
  // let but; 

  arr.forEach(element => {
    li += '<li>' + element + `<button class='but'> remove </button>` + '</li>';
  });

  ul.innerHTML = li;
   
  document.body.append(ul);

  document.querySelectorAll('.but').forEach(elem => {
    elem.onclick = function() {
      document.querySelector('li').remove();
    }
  });
  /*
  for (elem of but) {
    elem.onclick = function() {
      document.querySelector('li').remove();
    }
  }
  */
}

createUl(arr);


