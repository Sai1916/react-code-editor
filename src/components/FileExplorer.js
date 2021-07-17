import React from 'react'
import './FileExplorer.css'

function FileExplorer(){

    const fileNames=[
        {
            id:"1",
            name:"index.html",
            language:"xml",
            value:''
        },
        {
            id:"2",
            name:"index.css",
            language:"css",
            value:''
        },
        {
            id:"3",
            name:"index.js",
            language:"js",
            value:''
        }]

    return(
        

        <div className="file_explorer">
            <h5>FILE EXPLORER</h5>
            <hr />
            <div className="files">
                {fileNames.map((file) => (
                    <button key={file.id} value={file.language}>{file.name}</button>
                ))}
            </div>
        </div>
    )
}

export default FileExplorer