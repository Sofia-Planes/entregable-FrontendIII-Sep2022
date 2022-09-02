// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)


import React from 'react'

const Cabecera = ({total}) => {
  
  return (
    
    <header>
        <h2>Carrito de Compras</h2>
        <h4>Cantidad de Productos: <span className='span-negrita'>{total}</span></h4>
        
        
    </header>
  )
}

export default Cabecera

