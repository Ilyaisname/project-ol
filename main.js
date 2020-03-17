 let arr = [
   {name: 'apples', id:'2020-03-16_23:30'}, 
   {name: 'banana', id:'2020-03-16_23:31'}, 
   {name: 'orange', id:'2020-03-16_23:32'}, 
   {name: 'mandarin', id:'2020-03-16_23:33'},
   {name: 'purl', id:'2020-03-16_23:34'}
  ];

function createUl() {
  let ul = document.createElement('ul');
  let li = '';

  arr.forEach(element => {
    li += `<li id=${element.id}>` + element.name + `<button class='but'> remove </button>` + '</li>';
  });

  ul.innerHTML = li;
  
  document.body.append(ul);
  
  document.querySelectorAll('.but').forEach(elem => {
    elem.onclick = function() {
      let id = this.parentNode.getAttribute('id');
      this.parentElement.remove();
      console.log(id);
      arr.map((item, index) => {
       if (item.id === id ) {
         arr.splice(index, 1);
        }
      });
    }
  });
}

createUl(arr);

