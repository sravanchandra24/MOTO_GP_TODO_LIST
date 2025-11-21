let motoArray=[
    { Team:"Yamaha / VR46 Yamaha",SponsorCompany:"Monster / Mooney Energy",Racer:"Valentino Rossi (VR46)",WinsCount:"155+"},
    { Team:"Ducati Lenovo",SponsorCompany:"Lenovo",Racer:"Francesco Bagnaia",WinsCount:"20+"},
    { Team:"Prima Pramac",SponsorCompany:"Prima",Racer:"Jorge Martín",WinsCount:"10+"},
    { Team:"Repsol Honda",SponsorCompany:"Repsol",Racer:"Marc Márquez",WinsCount:"60+"}
    
]

function display(){
   let trs="";
   for(let ind in motoArray){
        trs+=`
            <tr>
                <td>${motoArray[ind].Team}</td>
                <td>${motoArray[ind].SponsorCompany}</td>
                <td>${motoArray[ind].Racer}</td>
                <td>${motoArray[ind].WinsCount}</td>
                <td>
                    <button onclick="deleteTask(${ind})">Delete</button>
                </td>
                <td>
                    <button onclick="editTask(${ind})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                </td>
            </tr>    
        `
   }

    let refEle = document.getElementById("ref");
    refEle.innerHTML=`
        <table border="5px">
            ${trs }
        </table>
    `
}
display();

function deleteTask(i){
    let res = confirm("Want to delete???????"); // It will take conformation(true/false)
    if(res==true){
        motoArray.splice(i,1); //delete item in an array using index
        display(); 
    }
}

let editTeamTextBoxElem=document.getElementById("editTeamTextBox");
let editSponsorCompanyTextBoxElem=document.getElementById("editSponsorCompanyTextBox");
let editRacerTextBoxElem=document.getElementById("editRacerTextBox");
let editWinsCountTextBoxElem=document.getElementById("editWinsCountTextBox");
index=0;

function editTask(i){
    index=i;
    editTeamTextBoxElem.value=motoArray[i].Team;
    editSponsorCompanyTextBoxElem.value=motoArray[i].SponsorCompany;
    editRacerTextBoxElem.value=motoArray[i].Racer;
    editWinsCountTextBoxElem.value=motoArray[i].WinsCount;
    display(); 

}

function saveTask(){
    let obj={
        Team:editTeamTextBoxElem.value,
        SponsorCompany:editSponsorCompanyTextBoxElem.value,
        Racer:editRacerTextBoxElem.value,
        WinsCount:editWinsCountTextBoxElem.value
    }
    motoArray[index]=obj;
    display();
}



function addTask(e){
   e.preventDefault();
    let allForms = document.forms;  // collecting all forms from the document
    let myForm = allForms.addForm; // getting the required form from all forms
    let TeamTextBoxEle = myForm.TeamTextBox; // getting the TeamTextBox from the myForm
    let SponsorCompanyTextBoxEle = myForm.SponsorCompanyTextBox; // getting the SponsorCompanyTextBox from the myForm
    let RacerTextBoxEle = myForm.RacerTextBox; // getting the RacerTextBox from the myForm
    let WinsCountTextBoxEle = myForm.WinsCountTextBox; // getting the WinsCountTextBox from the myForm
    
    let errorElem=document.getElementById("error");


    // form validations
    // if the text box empty  it shows error and message(Please fill all the details....)
    if(TeamTextBoxEle.value==""){
        errorElem.innerText="Please fill all the details";
        TeamTextBoxEle.style.border="2px solid red";

        return;
    }
     
     if(RacerTextBoxEle.value==""){
        errorElem.innerText="Please fill all the details";
        RacerTextBoxEle.style.border="2px solid red";
        return;
    }
     if(WinsCountTextBoxEle.value==""){
        errorElem.innerText="Please fill all the details....";
        WinsCountTextBoxEle.style.border="2px solid red";
        return;
    }
    errorElem.innerText="";


    // creating object to add in motoArray
    let obj={
        Team:TeamTextBoxEle.value,
        SponsorCompany:SponsorCompanyTextBoxEle.value,
        Racer:RacerTextBoxEle.value,
        WinsCount:WinsCountTextBoxEle.value    
    }
    motoArray.push(obj);
    display();
}

function removeError(e){
    e.target.style.border="2px solid black";
    
}
