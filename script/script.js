/*
var smartPeople = [
  "name1", "name2", "name3", "name4"
];

var ul =
document.createElement("ul");
document.getElementById("myList").appendChild(ul);

smartPeople.forEach(function (name) {
  var li = document.createElement("li");

  ul.appendChild(li);
  li.innerHTML += name;
});

smartPeople();  */

/* function smartPeople() {
  let names = [];
  // create element in html
  ul = document.createElement("ul");
  
  // grant created element an id
  ul.setAttribute("id","students");

  let test = document.getElementById('students')
  // display names to html 
  names.forEach((item) => {
    test.innerHTML += 
    `<li>${item}</li> `
  });
} */

names = ["name1", "name2", "name3", "name4"];

const wrapper = document.createElement('ul');
document.getElementsByTagName('body')[0].appendChild(wrapper);

function smartPeople() {  
names.forEach(item => {
  var list = document.createElement('li')
  list.innerHTML += item;
  wrapper.appendChild(list);
});
}

smartPeople();