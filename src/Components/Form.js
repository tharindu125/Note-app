import React, { Component } from 'react'
import '../Style/Form.css'
import { Button } from 'react-bootstrap';


export default class Form extends Component{

constructor (props) {
    super(props)

    this.onSubmitSave = this.onSubmitSave.bind(this);
    this.onResetBtn = this.onResetBtn.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);

    this.state = {
        nTitle : '',
        nBody : ''
    }
}

onChangeBody = (e) => {
    this.setState({nBody : e.target.value})
    console.log("1");
}

onChangeTitle = (e) => {
    this.setState({nTitle : e.target.value})
    console.log("2");
}

onSubmitSave = (e) => {
    e.preventDefault();
    console.log("3");
    if(this.state.nTitle === '' || this.state.nBody === ''){
        alert("Please fill all thins!!! ");
    }
    else{
        //----create a new note  record-----
        //New tr
        var tr = document.createElement('tr');
        tr.className = 'item';

        //new td for title and body
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(this.state.nTitle));
        var span = document.createElement('span');
        span.className = 'note-body';
        span.appendChild(document.createTextNode(this.state.nBody));
        td1.appendChild(span);

        //new td for view
        var td2 = document.createElement('td')
        td2.className = 'view';
        var btn1 = document.createElement('Button');
        btn1.appendChild(document.createElement('view'));
        btn1.setAttribute('id', 'vw');
        td2.appendChild(btn1);
        
         //new td for delete
         var td3 = document.createElement('td')
         td3.className = 'delete';
         var btn2 = document.createElement('Button');
         btn2.appendChild(document.createElement('delete'));
         btn2.setAttribute('id', 'del');
         td3.appendChild(btn2);

         //add all tds to tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    }

}

onResetBtn = (e) => {
    e.preventDefault();
    console.log("4");
}

// /*-------Variables-------*/
// var form = document.getElementById('save');

// // var items = document.getElementById('items');
// // var nTitle = document.getElementById('title');
// // var nBody = document.getElementById('nBody');
// // var tableDiv = document.getElementById('table');

// // var noteCount = 0;
// // var newNote = '';
// console.log("helloh")
// /*-------Events-------*/ 

// form.addEventListener('click',onceHandler);

// function onceHandler(){
//     alert('outer, once');
// }


// //For page load
// // window.onload = updateTable;

// /*-------Functions-------*/
// //Update Table
// // function updateTable(){
// //     //Display the table when notes get added
// //     if(noteCount > 0){
// //         tableDiv.style.display='';
// //         items.appendChild(newNote);
// //     }
// //     else{
// //         tableDiv.style.display = 'none';
// //     }
// // }
// //Add note
// // function addNote(e){
// //     e.preventDefault(); //stop initial behaviors

// //     //Validate inputs
// //     if(nTitle.value === '' || nBody.value === ''){
// //         alert("Please fill all fields!!!")
// //     }
// //     else{
// //         //create a new note  record

// //         //New tr
// //         var tr = document.createElement('tr');
// //         tr.className = 'item';
        
// //         //new td for title and body
// //         var td1 = document.createElement('td');
// //         td1.appendChild(document.createTextNode(nTitle.value));
// //         var span = document.createElement('span');
// //         span.className = 'note-body';
// //         span.appendChild(document.createTextNode(nBody.value));
// //         td1.appendChild(span);

// //         //new td for view
// //         var td2 = document.createElement('td')
// //         td2.className = 'view';
// //         var btn1 = document.createElement('button');
// //         btn1.appendChild(document.createElement('view'));
// //         btn1.setAttribute('id', 'vw');
// //         td2.appendChild(btn1);
        
// //         //new td for delete
// //         var td3 = document.createElement('td')
// //         td2.className = 'delete';
// //         var btn2 = document.createElement('button');
// //         btn2.appendChild(document.createElement('delete'));
// //         btn2.setAttribute('id', 'del');
// //         td3.appendChild(btn2);

// //         //add all tds to tr
// //         tr.appendChild(td1);
// //         tr.appendChild(td2);
// //         tr.appendChild(td3);

// //         //increment note count
// //         noteCount++;

// //         //set new note
// //         newNote = tr;

// //         //add or update the note of the table
// //         // updateTable();
// //     }
    
// // }
render() {
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
                <form action="" className='form' id='frm' >
                    <h2 className='h2'> Add a Note</h2>
                    <input type ="text" id='title' value={this.state.nTitle} onChange={this.onChangeTitle} placeholder='Title'/><br/>
                    <textarea type="text" id="nBody" value={this.state.nBody} onChange={this.onChangeBody} placeholder='Note Body'/><br/>

                    <Button type='submit' id='save' onClick={this.onSubmitSave} >Save</Button>
                    <Button type='reset' id='reset' onClick={this.onResetBtn}>Reset</Button>
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
  );
}
}