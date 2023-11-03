let selectedRow=null;
let username=document.getElementById("username");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let city=document.getElementById("city");

//when user clicks on submit button

function enterData(){
	let studentData=fetchData();
	if(selectedRow==null){
		addData(studentData);
	}
	else{
		updateData(studentData);
	}
	clearForm();
}

//a function to fetch data

function fetchData(){
	let studentData={};
	studentData.username=username.value;
	studentData.email=email.value;
	studentData.phone=phone.value;
	studentData.city=city.value;
	return studentData;
}

// function to add data in the table 
 function addData(data) {
 	let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];
 	let newRow = table.insertRow(0);
 	cell1 = newRow.insertCell(0);
 	cell1.innerHTML = data.username ;
 	cell2 = newRow.insertCell(1);
 	cell2.innerHTML = data.email ;
 	cell3 = newRow.insertCell(2);
 	cell3.innerHTML = data.phone ;
 	cell4 = newRow.insertCell(3);
 	cell4.innerHTML = data.city ;
 	cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="editData(this)">EDIT</button>
    <button onclick="deleteData(this)">DELETE</button>` ;

 }
 // function to update data
 function updateData(data) {
     selectedRow.cells[0].innerHTML = data.username ;
     selectedRow.cells[1].innerHTML = data.email ;
     selectedRow.cells[2].innerHTML = data.phone ;
     selectedRow.cells[3].innerHTML = data.city ;
 }

 // function to clear form

 function clearForm() {
 	username.value = "";
 	email.value = "";
 	phone.value  = "" ;
 	city.value = "" ;
 	selectedRow = null ;
 }
 // function to delete data 
 function deleteData(btn) {
 	if (confirm("Do you want to delete the data ? ")) {
 	  row = btn.parentElement.parentElement ;
 	  document.getElementById("studentList").deleteRow(row.rowIndex);
 	}
 }

 // function to edit data 
 function editData(btn) {
 	selectedRow = btn.parentElement.parentElement ;
 	username.value = selectedRow.cells[0].innerHTML ;
 	email.value = selectedRow.cells[1].innerHTML ;
 	phone.value = selectedRow.cells[2].innerHTML ;
 	city.value = selectedRow.cells[3].innerHTML ;

 }

