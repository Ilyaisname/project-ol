let arr = ['apples', 'banana', 'orange', 'mandarin', 'purl'];


function createUl(arr) {
  let ul = document.createElement('ul');
  let li = '';

  arr.forEach(element => {
    li += '<li>' + element + '</li>'
  });

  ul.innerHTML = li;

  return document.body.append(ul);
}

createUl(arr);

function createBut() {
  let li = document.querySelectorAll('li');
  
  for (let elem of li) {
    elem.insertAdjacentHTML("beforeend", '<button id="but"> invisiable </button>');
  }
  
  let but = document.querySelectorAll('button');
  
  
  for (elem of but) {
      elem.onclick = () => alert('hello');
    } 
  // console.log(but);
}

createBut();

// let but = document.querySelectorAll('button');
// console.log(but);
