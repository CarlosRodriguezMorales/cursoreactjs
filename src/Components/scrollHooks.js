import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {
    const [scrollY, setscrollY] = useState(0)

    useEffect(() => {
        console.log("moviendo escroll")
        const detectarScroll = () => setscrollY(window.pageYOffset)  
        
        window.addEventListener("scroll",detectarScroll)
    }, [scrollY])

    useEffect(() => {
        console.log("fase de montaje")
    }, [])

    useEffect(() => {
        console.log("fase de actualizacion")
    })

    return(
        <>
            <h2>Hooks- useeffect y ciclo de vida</h2>
            <p>scroll Y del Navegador {scrollY}px</p>
        </>
    )
}