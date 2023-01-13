import React, { useEffect, useState } from 'react'
import '../Style/Form.css'

export default function New() {
    const [click, save] = useState();
    const [click2, reset] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tblDiv, setTable] = useState('');
    const [tbl, setData] = useState('');

    var noteCount = 0;
    var newNote = '';

      
    /*-------Functions-------*/
    //Update Table
    function updateTable(){
        //Display the table when notes get added
        if(noteCount > 0){
            tblDiv.style.display='';
            tbl.appendChild(newNote);
        }
        else{
            tblDiv.style.display = 'none';
        }
    }
  
    let id = 0;

    const myfn = (event) => {
        event.preventDefault()
        
        if(title === '' && body === ''){
            alert("Please fill all fields!!!")
            console.log("2");
        }else{

            //create a new note  record
            console.log("3");
            //New tr
            var tr = document.createElement('tr');
            tr.className = 'item';
            tr.id = id;
            
            //new td for title and body
            var td1 = document.createElement('td');
            td1.innerHTML  = title
            // td1.appendChild(tr);
            // var span = document.createElement('span');
            // span.className = 'note-body';
            // span.appendChild(document.createTextNode(body));
            // td1.appendChild(span);

            //new td for view
            var td2 = document.createElement('td')
            td2.innerHTML  = body
            // td2.appendChild(tr);
            // td2.className = 'view';
            // var btn1 = document.createElement('button');
            // btn1.appendChild(document.createElement('view'));
            // btn1.setAttribute('id', 'vw');
            // td2.appendChild(btn1);
            
            //new td for delete
            var td3 = document.createElement('td')
            td3.className = 'delete';
            var btn2 = document.createElement('button');
            btn2.innerHTML = "Delete"
            btn2.onClick = ()=>{
                document.removeParent(document.getElementById(id))
            }
            td3.appendChild(btn2);
            // btn2.setAttribute('id', 'del');
            // td3.appendChild(btn2);

            //add all tds to tr
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            document.getElementById('tbl_body').appendChild(tr)
            id += 1;
            // //increment note count
            // noteCount++;

            // //set new note
            // newNote = tr;

            // //add or update the note of the table
            // updateTable();
    
        }
    }

    // useEffect(() => {
    
    //     console.log("#1");
    //     // e.preventDefault();
        
    //     if(title === '' && body === ''){
    //         alert("Please fill all fields!!!")
    //         console.log("2");
    //     }else{

    //         //create a new note  record
    //         console.log("3");
    //         //New tr
    //         var tr = document.createElement('tr');
    //         tr.className = 'item';
            
    //         //new td for title and body
    //         var td1 = document.createElement('td');
    //         td1.appendChild(document.createTextNode(title));
    //         var span = document.createElement('span');
    //         span.className = 'note-body';
    //         span.appendChild(document.createTextNode(body));
    //         td1.appendChild(span);

    //         //new td for view
    //         var td2 = document.createElement('td')
    //         td2.className = 'view';
    //         var btn1 = document.createElement('button');
    //         btn1.appendChild(document.createElement('view'));
    //         btn1.setAttribute('id', 'vw');
    //         td2.appendChild(btn1);
            
    //         //new td for delete
    //         var td3 = document.createElement('td')
    //         td2.className = 'delete';
    //         var btn2 = document.createElement('button');
    //         btn2.appendChild(document.createElement('delete'));
    //         btn2.setAttribute('id', 'del');
    //         td3.appendChild(btn2);

    //         //add all tds to tr
    //         tr.appendChild(td1);
    //         tr.appendChild(td2);
    //         tr.appendChild(td3);

    //         //increment note count
    //         noteCount++;

    //         //set new note
    //         newNote = tr;

    //         //add or update the note of the table
    //         updateTable();
    
    //     }
    // }, []);


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
                <form action="" className='form' id='frm' onSubmit={myfn}>
                    <h2 className='h2'> Add a Note</h2>
                    <input type ="text" id='title' placeholder='Title' value={title} onInput={(e) => setTitle(e.target.value)}/><br/>
                    <textarea type="text" id="nBody" placeholder='Note Body' value={body} onInput={(e) => setBody(e.target.value)}/><br/>
                    <button type='submit' id='save'>Save</button>
                    <button type='reset' id='reset' onClick={() => reset(click2)}>Reset</button>
                </form>
            </div>
            <div id='table' className='tbl' onClick={(e) => setTable(e.target.value)} >
                <table id='items' onClick={(e) => setData(e.target.value)}> 

                   <thead>
                   <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Delete</th>
                    </tr>
                   </thead>

                   <tbody id='tbl_body'></tbody>
                    
                </table>
            </div>

        </div>
    </div>
    </>
  )
}
