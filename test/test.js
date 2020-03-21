/*
let arr = [
  {name: 'one', id: 1},
  {name: 'two', id: 2},
  {name: 'three', id: 3},
  {name: 'four', id: 4},
  {name: 'five', id: 5}
];

// для удаления из массива по id
function delElem(num) {
  arr.map((item, index) => {
    if(item.id === num) {
      arr.splice(index, 1)
    }
  })
}

console.log(arr);
*/

let but = document.getElementById('but');

let val = [];

but.addEventListener('click', function() {
  let text = document.getElementById('inpt')
  let value = {
    name: text.value,
    id: JSON.stringify(Date.now())
  }

  val.push(value)
  alert(value);
});


