// to know the all the operations of document
/*console.dir(document);
//examine the document object
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title="123"; --> it can change the title of the document
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
*/
//some of the query selectors
//getElementById
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="Goodbye";
//headerTitle.innerHtml="<h3>Hello</h3>";
//header.style.borderBottom = "solid 3px #000";
//getElementByClassName
/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello teju";
items[1].style.fontWeight ="bold";
items[1].style.backgroundColor = "red"; //here it is overridden by
for loop so we added again this line after for loop.*/

//to give background to all items we use for loop to iterate through every item.
/*for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor ="gray";
}
items[1].style.backgroundColor = "red";
*/
//getElementsByTagName
/*var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello teju";
li[1].style.fontWeight ="bold";
li[1].style.backgroundColor = "red"; //here it is overridden by
//for loop so we added again this line after for loop.

//to give background to all items we use for loop to iterate through every item.
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor ="gray";
}
li[1].style.backgroundColor = "red";*/

//Queryselector
/*var header = document.querySelector('#main-header');
header.style.borderBottom = "solid 3px #000 ";

var input = document.querySelector('input');
input.value = 'Hello world';

var submit = document.querySelector('input[type="submit"]');
submit.value="send";
//first-child
var item = document.querySelector('.list-group-item');
item.style.color ="red";
//last child
var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color ="yellow";
//any child or secondchild
var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color ="blue";*/

//querySelectorAll
/*var titles = document.querySelectorAll('.title')
console.log(titles);
titles[0].textContent ="Add Items here";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="pink";
    even[i].style.backgroundColor="#ccc";
}*/
 

//Traversing the dom
//var itemlist = document.querySelector('#items');
//parentnode
/*console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = "lightblue";
console.log(itemlist.parentNode.parentNode.parentNode);
//parentelement
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "pink";
console.log(itemlist.parentElement.parentElement.parentElement);

//childnodes
console.log(itemlist.childNodes);

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = "yellow";

//firstchild
console.log(itemlist.firstChild);
//firstelemntchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = "Hello 1";

//lastchild
console.log(itemlist.lastChild);
//lastelemntchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = "Hello 4";

//NEXT SIBLING
console.log(itemlist.nextSibling);
//nextelementsibling
console.log(itemlist.nextElementSibling);

//previoussibling
console.log(itemlist.previousSibling);
//previouselementsibling
console.log(itemlist.previousElementSibling);

//createElement
var newDiv = document.createElement('div');
//add class
newDiv.className = "hello";
//add id
newDiv.id = "hello id";
//add attribute
newDiv.setAttribute('title', 'Hello title');
//create text node
var newDivText = document.createTextNode('Hello javascript');
//add text to div
newDiv.appendChild(newDivText);
console.log(newDiv);//creation over now insertion

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv,h1);


//events
var button = document.getElementById('button').addEventListener('click', buttonClick);
function buttonClick(e){
    //console.log('Button clicked');
    //console.log(e);
    //console.log(e.target);
    //console.log(e.type);
    //console.log(e.clientX);
    //console.log(e.clientY);

    //console.log(e.offsetX);
    //console.log(e.altKey);
    //console.log(e.ctrlKey);
    //console.log(e.shiftKey);
}*/
//mouseevents
//keyinputevents

//
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
























