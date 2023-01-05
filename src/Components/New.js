import React, { useEffect, useState } from 'react'
import '../Style/Form.css'

export default function New() {
    const [click, save] = useState(false);
    const [click2, reset] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tblDiv, setTable] = useState('');
    const [tbl, setData] = useState('');

    var noteCount = 0;
    var newNote = '';

      
    /*-------Functions-------*/
    //Update Table
    function updateTable(e){
        e.preventDefault();
        //Display the table when notes get added
        if(noteCount > 0){
            tblDiv.style.display='';
            tbl.appendChild(newNote);
        }
        else{
            tblDiv.style.display = 'none';
        }
    }
  
    useEffect(() => {
    
        console.log("#1");
        // e.preventDefault();
        
        if(title === '' && body === ''){
            alert("Please fill all fields!!!")
            console.log("2");
        }else{

            //create a new note  record
            console.log("3");
            //New tr
            var tr = document.createElement('tr');
            tr.className = 'item';
            
            //new td for title and body
            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(title));
            var span = document.createElement('span');
            span.className = 'note-body';
            span.appendChild(document.createTextNode(body));
            td1.appendChild(span);

            //new td for view
            var td2 = document.createElement('td')
            td2.className = 'view';
            var btn1 = document.createElement('button');
            btn1.appendChild(document.createElement('view'));
            btn1.setAttribute('id', 'vw');
            td2.appendChild(btn1);
            
            //new td for delete
            var td3 = document.createElement('td')
            td2.className = 'delete';
            var btn2 = document.createElement('button');
            btn2.appendChild(document.createElement('delete'));
            btn2.setAttribute('id', 'del');
            td3.appendChild(btn2);

            //add all tds to tr
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            //increment note count
            noteCount++;

            //set new note
            newNote = tr;

            //add or update the note of the table
            updateTable();
    
        }
    }, [click2]);


  return (
    <>
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
                    <input type ="text" id='title' placeholder='Title' onClick={(e) => setTitle(e.target.id)}/><br/>
                    <textarea type="text" id="nBody" placeholder='Note Body' onClick={(e) => setBody(e.target.id)}/><br/>
                    <button type='submit' id='save' onClick={() => save(click) } >Save</button>
                    <button type='reset' id='reset' onClick={() => reset(click2)}>Reset</button>
                </form>
            </div>
            <div id='table' className='tbl' onClick={(e) => setTable(e.target.id)} >
                <table id='items' onClick={(e) => setData(e.target.id)}> 

                    <tr>
                        <th>Title</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                    
                </table>
            </div>

        </div>
    </div>
    </>
  )
}
