import React from 'react'
import Editor from './Editor'

function EditorView({visible,language,name,value,onChange}){
    return(
        <div>
            <Editor visible={visible} language={language} name={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default EditorView