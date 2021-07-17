import './App.css';
import {useEffect, useState} from 'react'
import Editor from './components/Editor'
import LiveView from './components/LiveView'
import { data } from './components/data';
import useLocalStorage from './components/useLocalStorage'

function App() {
  const [html,setHtml] = useLocalStorage('html','');
  const [css,setCss] = useLocalStorage('css','');
  const [js,setJs] = useLocalStorage('js','');

  const [open,setOpen] = useState('xml');

  const [doc,setDoc] = useState('')

  useEffect(() =>{
    const timeout = setTimeout(() =>{
      setDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `
      )
    },200)
      return () => clearTimeout(timeout)
  },[html,css,js])

  return (
    <div className="app">
      <div className="file_explorer">
            <h5>FILE EXPLORER</h5>
            <hr />
            <div className="files">
                {data.map((file) => (
                    <button key={file.id} value={file.language} onClick={()=> {setOpen(file.language)}}>{file.name}</button>
                ))}
            </div>
        </div>
      <div className="editors">
        {open === "xml" && <Editor language="xml" name="index.html" value={html} onChange={setHtml}/>}
        {open === "css" && <Editor language="css" name="index.css" value={css} onChange={setCss}/>}
        {open === "js" && <Editor language="js" name="index.js" value={js} onChange={setJs}/> }
      </div>
      <LiveView src={doc}/>
    </div>
  );
}

export default App;
