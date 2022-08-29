const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal() {
  modal.style.display = 'flex';
  selectedIndex=-1;
}

function closeModal() {
  modal.style.display = 'none'; 
}

function closeForm(){
  document.getElementById('formContainer').reset();
  var r =document.getElementById('error')
  r.textContent="";
}
  
var arr = [];
function init(){
  selectedIndex=-1;
  document.getElementById("tableRows").innerHTML="";
  if (localStorage.record)
  {
    arr=JSON.parse(localStorage.record);
    for(var i = 0; i<arr.length;i++){
      var name = arr[i].n;
      var id  = arr[i].id;
      var email = arr[i].email;
      tableCell(i,name,id,email);
    }
  }
}

//LOCAL STORAGE

function onReg(){
  var name = document.getElementById("empName").value;
  var id  = document.getElementById("empId").value;
  var email = document.getElementById("email").value;

  var obj = {n:name,id:id,email:email};
  if(selectedIndex===-1){
    arr.push(obj);
  }
  else{arr.splice(selectedIndex,1,obj);
  }
  localStorage.record= JSON.stringify(arr);

  init();
  document.getElementById('formContainer').reset();

}

//INSERT

function tableCell(index,name,id,email){
  var tbl = document.getElementById("tableRows");
  var row = tbl.insertRow();
  var name1 = row.insertCell(0);
  var id1 = row.insertCell(1);
  var email1 = row.insertCell(2);
  var edit1 = row.insertCell(3);
  var dlt1 = row.insertCell(4);
  name1.innerHTML = name;
  id1.innerHTML = id;
  email1.innerHTML = email;
  dlt1.innerHTML = '<i  onclick="dFunOpen('+index+')" class="fa-solid fa-trash-can"></i>';
  edit1.innerHTML='<i onclick ="editTbl('+index+')" class="fa-solid fa-pen-to-square"></i>';
}

//EDIT

var selectedIndex=-1;

function editTbl(index){
  
  modal.style.display='flex';
  selectedIndex = index;
  var empObj = arr[index];
  document.getElementById("empName").value=empObj.n;
  document.getElementById("empId").value=empObj.id;
  document.getElementById("email").value=empObj.email;

  initEdit();
}

function initEdit(){
  document.getElementById("tableRows").innerHTML="";
  if (localStorage.record){
    arr=JSON.parse(localStorage.record);
    for(var i = 0; i<arr.length;i++){
      var name = arr[i].n;
      var id  = arr[i].id;
      var email = arr[i].email;
      tableCell(i,name,id,email);
    }
  }
}


function errorMessage() {

  var uname = document.getElementById("error")
  if ((document.getElementById("empName").value == ""||document.getElementById("empId").value == ""||document.getElementById("email").value == "")) {
    uname.textContent = "Please enter all Fields"
    Form.addEventListener("submit",function(e){
      e.preventDefault();
    })
  }
  else {
    uname.textContent = ""
   onReg();
    closeModal();
  }
}


const dFull = document.querySelector('#dFull');

function dFunOpen(index){
  dFull.style.display='flex';
  var d =index;
  const m = document.getElementById('check');
  m.innerHTML='<button onclick="deleteka('+d+');">YES</button>'
}

function deleteka(d){
  var tbl = document.getElementById("tableRows");
  selectedIndex=d;
  
  tbl.deleteRow(d);
  arr.splice(d, 1);
  localStorage.record = JSON.stringify(arr);
  init();
  dFunClose();
  selectedIndex = -1;
}

function dFunClose() {
  dFull.style.display = 'none';

}