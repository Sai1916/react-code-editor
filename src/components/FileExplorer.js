import React, { useState } from 'react'
import EditorView from './EditorView'
import './FileExplorer.css'
import data from './data'

function FileExplorer(){

    const [open,setOpen] = useState(false)

   

        function ClickEvent(file){
            <EditorView open={setOpen(!open)} value={file.value} />
        }

    return(
        <div className="file_explorer">
            <h5>FILE EXPLORER</h5>
            <hr />
            <div className="files">
                {data.map((file) => (
                    <button key={file.id} value={file.language} onClick={ClickEvent}>{file.name}</button>
                ))}
            </div>
        </div>
    )
}

export default FileExplorer