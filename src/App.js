import './App.css';
import {useState} from 'react'
import FileExplorer from './components/FileExplorer'
import Editor from './components/Editor'
import LiveView from './components/LiveView'

function App() {
  const [html,setHtml] = useState('');
  const [css,setCss] = useState('');
  const [js,setJs] = useState('');

  const SrcDocument =
    `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `

  return (
    <div className="app">
      <FileExplorer />
      <div className="editors">
        <Editor visible="true" language="xml" name="index.html" value={html} onChange={setHtml}/>
        <Editor visible="true" language="css" name="index.css" value={css} onChange={setCss}/>
        <Editor visible="true" language="js" name="index.js" value={js} onChange={setJs}/> 
      </div>
      <LiveView src={SrcDocument}/>
    </div>
  );
}

export default App;
