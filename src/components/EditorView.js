import React from 'react'
import Editor from './Editor'

function EditorView({open,language,name,value,onChange}){
    return(
        <div>
            <Editor visible={open} language={language} name={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default EditorView