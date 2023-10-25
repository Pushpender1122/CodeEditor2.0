import React, { useContext, useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import './editor.css'
import 'codemirror/addon/comment/comment'

function Editor({ name, lang, value, onChange, icon }) {
    // const [value, setvalue] = useState('');
    return (
        <div className='codemirror my-4'>
            <div className="heading">
                <h1>{icon}
                    <h1>{name}</h1>
                </h1>
            </div>
            <CodeMirror
                value={value}
                options={{
                    mode: lang,
                    theme: 'material',
                    lineNumbers: true,
                    lineWrapping: true,
                    scrollbarStyle: null,
                    extraKeys: { 'Ctrl-/': 'toggleComment' }
                }}
                onBeforeChange={(editor, data, value) => {
                    // setvalue(value);
                    onChange(value);
                }}
            />

        </div>
    )
}

export default Editor
