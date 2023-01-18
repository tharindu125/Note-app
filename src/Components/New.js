import React, { useState } from 'react'
import '../Style/Form.css'

export default function New() {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
   
    var items = document.getElementById('tbl_body');
    
    let id = 0;


    /*------Add Note----*/
    const myFn = (event) => {
        event.preventDefault()
        
        if(title === '' && body === ''){
            alert("Please fill all fields!!!")
            
        }else{

            //create a new note  record
            //New tr
            var tr = document.createElement('tr');
            tr.className = 'item';
            tr.id = id;
            
            //new td for title
            var td1 = document.createElement('td');
            td1.innerHTML  = title
            
            //new td for body
            var td2 = document.createElement('td')
            td2.innerHTML  = body
            
            //new td for delete
            var td3 = document.createElement('td')
            td3.className = 'delete';
            var btn2 = document.createElement('button');
            btn2.appendChild(document.createElement('delete'));
            btn2.setAttribute('id', 'del');
            td3.appendChild(btn2);
            btn2.innerHTML = "Delete"
            items.addEventListener('click', removeNote);

            
            //add all tds to tr
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

           document.getElementById('tbl_body').appendChild(tr)
            id += 1;

            
        }
    }

    /*--------Reset----------*/
    const myRe = (e) => {
        e.preventDefault();

        let data= document.getElementById('tbl_body');
        data.replaceChildren();
     
    }
    
    /*------delete button--------*/
    function removeNote(e) {
        e.preventDefault();
        console.log('ffffffffff')
        let data= document.getElementById('tbl-body');
        data.replaceChildren();
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
                <form action="" className='form' id='frm' onSubmit={myFn} onReset={myRe} >
                    <h2 className='h2'> Add a Note</h2>
                    
                    <input type ="text" id='title' placeholder='Title' value={title} onInput={(e) => setTitle(e.target.value)}/><br/>
                    <textarea type="text" id="nBody" placeholder='Note Body' value={body} onInput={(e) => setBody(e.target.value)}/><br/>

                    <button type='submit' id='save'>Save</button>
                    <button type='reset' id='reset'>Reset</button>
                </form>
            </div>
            <div id='table' className='tbl'  >
                <table id='items' > 

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
