import React from 'react'
import './Editor.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor({language,name,value,onChange,visible}){

    // const [html,setHtml] = useState('');
    // const [css,setCss] = useState('');
    // const [js,setJs] = useState('');

    const TextChange = (editor,data,value) => {
        onChange(value);
    }

    return(
        <div className={`editor ${visible ? 'view' : 'hide'}`}>
            <div className="editor_header">
                <h4>{name}</h4>
            </div>
            <ControlledEditor
                onBeforeChange={TextChange}
                value={value}
                className="editor_text"
                options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor
