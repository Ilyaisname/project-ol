 let arr = ['apples', 'banana', 'orange', 'mandarin', 'purl'];


function createUl() {
  let ul = document.createElement('ul');
  let li = '';
  

  arr.forEach(element => {
    li += '<li>' + element + `<button class='but'> remove </button>` + '</li>';
  });

  ul.innerHTML = li;
   
  document.body.append(ul);

  document.querySelectorAll('.but').forEach(elem => {
    elem.onclick = function() {
     this.parentElement.remove();
    }
  });
}

createUl(arr);


