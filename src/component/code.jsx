import React, { useContext } from 'react'
import Editor from './editor'
import Result from './result'
import { DataContext } from './context/datacontext'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3 } from 'react-icons/fa'
import { BiLogoJavascript } from 'react-icons/bi'
function Code() {
    const { html, css, sethtml, setcss, js, setjs } = useContext(DataContext)
    return (
        <>
            <div className='flex justify-between bg-black ' style={{ height: "58vh", padding: "0px 20px" }}>
                <Editor name={"HTML"}
                    lang={'xml'}
                    value={html}
                    onChange={sethtml}
                    icon={<AiFillHtml5 />}
                />
                <Editor name={"CSS"}
                    lang={"css"}
                    value={css}
                    onChange={setcss}
                    icon={<FaCss3 />}
                />
                <Editor
                    name={"JS"}
                    lang={"javascript"}
                    value={js}
                    onChange={setjs}
                    icon={<BiLogoJavascript />}
                />
            </div>
            <Result />
        </>
    )
}

export default Code
