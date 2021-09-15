import React from 'react';
import styled from 'styled-components';

export default function ComponentesEstilizados() {
    let mainColor="#db7093",
    mainAlrhaColor80="db709380"

    const MyH3 = styled.h3`
        padding: 2em;
        background: blue;
        `;


    return(
        <>
            <h2>Componentes estilizados</h2>
            <MyH3>componetes estilizados h3</MyH3>
        </>
    )
}