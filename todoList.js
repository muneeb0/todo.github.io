var arr = ['Hit the gym',
    'Pay bills',
    'Meet George',
    'Buy eggs',
    'Read a book',
    'Organize office']
var ind 
var list = document.getElementById("myUL");
var txtval

function insertElement(){
    var a = document.getElementById("item").value
    arr.push(a)
    render();
    document.getElementById("item").value=""
}
 
function render(){
    var item1 = ""
    for (let index = 0; index < arr.length; index++) {
        item1 += "<li>" + arr[index] + "<li>"
    }
    myUL.innerHTML = item1
}


function select() {
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI'){
      console.log(ev.target.value)
        document.getElementById("item").value = ev.target.innerHTML; 
        txtval = document.getElementById("item").value = ev.target.innerHTML; 
        }
    }, false);
  }

  function Delete(){
    var a = document.getElementById("item").value
    for (let index = 0; index < arr.length; index++) {
        if (a == arr[index]) {
            ind = index
            arr.splice(ind,1)
            break
        }
        
    }
    myUL.innerHTML = " "
    document.getElementById("item").value =""
    render();
  }

  
  function Edit(){
    var a = document.getElementById("item").value
    for (let index = 0; index < arr.length; index++) {
        if (txtval == arr[index]) {
            arr[index]= a
        }
        
    }
    myUL.innerHTML = " "
    document.getElementById("item").value =""
    render();
  }