 const message = require('/module/module1.js');

 let arr = [
   {name: 'apples', id:'2020-03-16_23:30'}, 
   {name: 'banana', id:'2020-03-16_23:31'}, 
   {name: 'orange', id:'2020-03-16_23:32'}, 
   {name: 'mandarin', id:'2020-03-16_23:33'},
   {name: 'purl', id:'2020-03-16_23:34'}
  ];

message.hiAll();

function createUl() {
  let ul = document.createElement('ul');
  let li = '';
  document.body.innerHTML='';

  arr.forEach(element => {
    li += `<li id=${element.id}>` + element.name + `<button class='but'> remove </button>` + '</li>';
  });

  ul.innerHTML = li;
  
  document.body.append(ul);
  
  document.querySelectorAll('.but').forEach(elem => {
    elem.onclick = function() {
      let id = this.parentNode.getAttribute('id');
      
      console.log(id);
      
      arr.map((item, index) => {
       if (item.id === id ) {
         arr.splice(index, 1);
        }
      });

      this.parentElement.remove();
    }
  });
  
  createInputText();
}

createUl(arr);

function createInputText() {
  let block = document.createElement('div');
  let ol = document.querySelector('ul');

  block.innerHTML= `<label for='inpt'> Fruits:</label>
  <input id='inpt' type="text" > <button id='but'>click me</button>`;
  
  ol.after(block);

  let but = document.getElementById('but');
  let text = document.getElementById('inpt')

  but.addEventListener('click', function() {
    let value = {
      name: text.value,
      id: Date.now().toString()
    }
      if (value.name === '') {
        return text.focus();
      }
    arr.push(value);
    console.log(value);
    text.value='';

    createUl(arr);

  });
}

// createInputText();