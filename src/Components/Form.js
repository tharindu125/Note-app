import React from 'react'
import '../Style/Form.css'

export default function Form() {

/*-------Variables-------*/
var form = document.getElementById('frm');
var items = document.getElementById('items');
var nTitle = document.getElementById('title');
var nBody = document.getElementById('nBody');
var tableDiv = document.getElementById('table');

var noteCount = 0;
var newNote = '';
console.log("hello")
/*-------Events-------*/
// form.onclick = btnClick
// form.addEventListener('submit', addNote);


//For page load
// window.onload = updateTable;

/*-------Functions-------*/
//Update Table
// function updateTable(){
//     //Display the table when notes get added
//     if(noteCount > 0){
//         tableDiv.style.display='';
//         items.appendChild(newNote);
//     }
//     else{
//         tableDiv.style.display = 'none';
//     }
// }
//Add note
function addNote(e){
    e.preventDefault(); //stop initial behaviors
    console.log("hello333");
    //Validate inputs
    if(nTitle.value === '' || nBody.value === ''){
        alert("Please fill all fields!!!")
    }
    else{
        // //create a new note  record

        // //New tr
        // var tr = document.createElement('tr');
        // tr.className = 'item';
        
        // //new td for title and body
        // var td1 = document.createElement('td');
        // td1.appendChild(document.createTextNode(nTitle.value));
        // var span = document.createElement('span');
        // span.className = 'note-body';
        // span.appendChild(document.createTextNode(nBody.value));
        // td1.appendChild(span);

        // //new td for view
        // var td2 = document.createElement('td')
        // td2.className = 'view';
        // var btn1 = document.createElement('button');
        // btn1.appendChild(document.createElement('view'));
        // btn1.setAttribute('id', 'vw');
        // td2.appendChild(btn1);
        
        // //new td for delete
        // var td3 = document.createElement('td')
        // td2.className = 'delete';
        // var btn2 = document.createElement('button');
        // btn2.appendChild(document.createElement('delete'));
        // btn2.setAttribute('id', 'del');
        // td3.appendChild(btn2);

        // //add all tds to tr
        // tr.appendChild(td1);
        // tr.appendChild(td2);
        // tr.appendChild(td3);

        // //increment note count
        // noteCount++;

        // //set new note
        // newNote = tr;

        // //add or update the note of the table
        // updateTable();
    }
    
}

return (
    <div>
        <header id='header' >
            <h2>Note App</h2>
            <div className='search'>
                <label>Search : </label>
                <input type="text" id='srch' placeholder='Search your note...'/>
            </div>
        </header>
        <div className='main' id='bdy'>
            <div>
                <form action='' className='form' id='frm' >
                    <h2 className='h2'> Add a Note</h2>
                    <input type ="text" id='title' placeholder='Title'/><br/>
                    <textarea type="text" id="nBody" placeholder='Note Body'/><br/>

                    <button type='submit' id='save' onclick= {addNote()}>Save</button>
                    <button type='reset' id='reset'>Reset</button>
                </form>
            </div>
            <div id='table' className='tbl'>
                <table id='items'> 

                    <tr>
                        <th>Title</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                    
                </table>
            </div>

        </div>
    </div>
  )
}
