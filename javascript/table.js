function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

var row = null;
function submitForm () {
    var dataEntered = retreiveData();
    var readData = readingDataFromLocalStorage(dataEntered);
  
   if(dataEntered == false){
    msg.innerHTML = "<span style='color:red'>Please Enter Data!</span>";
   }
   else{

    if(row == null){
        insert(readData);
        msg.innerHTML = "<span style='color:green'>Data Inserted!</span>";
    }
    else{
        update();
        msg.innerHTML ="<span style='color:green'>Data Updated!</span>";
    }
   }
   
  
}


function retreiveData(){
    var name1= document.getElementById('name').value;   
    var emp= document.getElementById('emp').value;
    var email= document.getElementById('email').value;

    var arr = [name1, emp, email];
    if (arr.includes("")){
        return false;
    }
    else {
        return arr;
    }
    
}

//Local storange

function readingDataFromLocalStorage (dataEntered){
    //setting data in local storage
    var n = localStorage.setItem("Name",dataEntered[0]);   
    var e = localStorage.setItem("EmployeeId",dataEntered[1]);
    var e2 = localStorage.setItem("EmailId",dataEntered[2]);

    // getting values from localStorage to table
    var n1 = localStorage.getItem("Name",n);   
    var e1 = localStorage.getItem("EmployeeId",e);
    var r1 = localStorage.getItem("EmailId",e2);

    var arr = [n1, e1, r1];
    return arr; 
}

function insert(readData){
    var row = table.insertRow();

    row.insertCell(0).innerHTML = readData [0];       
    row.insertCell(1).innerHTML = readData [1];
    row.insertCell(2).innerHTML = readData [2];
    row.insertCell(3).innerHTML = `<i onclick = "edit(this),openForm()" class="fa-solid fa-pen-to-square editIcon" ></i>
                                   <i onclick = "remove(this)" class="fas fa-trash deleteBtn" ></i>`
                                      
}

    //EDIT  

function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;       
    document.getElementById("emp").value = row.cells[1].innerHTML; 
    document.getElementById("email").value = row.cells[2].innerHTML; 
}

    //UPDATE    

function update(){
    row.cells[0].innerHTML= document.getElementById("name").value;           
    row.cells[1].innerHTML= document.getElementById("emp").value;
    row.cells[2].innerHTML= document.getElementById("email").value;
    row = null;
}

    //DELETE    

function remove(td){
    var ans =  confirm("Are you sure want to delete this Row?");
       if (ans == true )
       {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        msg.innerHTML = "<span style='color:red'>Row has been successfully deleted!</span>";
        row = null;
       }  
}



     
function newReset() {
    document.login_form.reset(); 
}