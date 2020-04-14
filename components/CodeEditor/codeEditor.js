import React from 'react'
import { UnControlled as  Codemirror} from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'


const CodeEditor = (props) =>{
    return(
        <div>
            <Codemirror
            {...props}
            value={props.value}
            options={{theme:'material'
            ,mode:'javascript',
            lineNumbers:true}}
            onChange={() => null}
            />
        </div>
    )
}

export default CodeEditor;