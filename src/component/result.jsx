import React, { useContext, useEffect, useState } from 'react'
import './result.css'
import { DataContext } from './context/datacontext'
import { FaPlay } from 'react-icons/fa'
function Result() {
    const { html, css, js } = useContext(DataContext);
    const [srcd, setsrc] = useState('');
    const src = `
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    `;
    useEffect(() => {
        setTimeout(() => {
            setsrc(src);
        }, 250)
    }, [html, css, js])
    return (
        <div className='bg-black '>
            <div className='flex text-white font-semibold text-2xl  px-4 py-3 place-items-center'>
                <h1 className=''>Output </h1>
                <h1 style={{ marginLeft: "10px" }}><FaPlay /></h1>
            </div>
            <iframe className='iframe' srcDoc={srcd} frameborder="1"></iframe>
        </div>
    )
}

export default Result
