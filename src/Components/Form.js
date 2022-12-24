import React from 'react'
import '../Style/Form.css'

export default function Form() {
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
                <form action='' className='form'>
                    <h2 className='h2'> Add a Note</h2>
                    <input type ="text" id='title' placeholder='Title'/><br/>
                    <textarea type="text" id="nBody" placeholder='Note Body'/><br/>

                    <button type='submit' id='save'>Save</button>
                    <button type='reset' id='reset'>Reset</button>
                </form>
            </div>
            <div id='table' className='tbl'>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>Note 01</td>
                        <td className='view'>
                            <button>View</button>
                        </td>
                        <td className='delete'>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Note 02</td>
                        <td className='view'>
                            <button>View</button>
                        </td>
                        <td className='del'>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Note 03</td>
                        <td className='view'>
                            <button>View</button>
                        </td>
                        <td className='del'>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
  )
}
