import React from 'react'
import './LiveView.css'

function LiveView({src}){
    return(
        <div className="live">
            <h2 className="title">OUTPUT</h2>
            <div className="browser_view">
                <iframe 
                    srcDoc={src}
                    title="Output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default LiveView