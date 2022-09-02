// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import React from 'react'

export default function Item  ({item, total, setTotal}) {

    const buy = () => {
        if(item.stock > 0) {
            item.stock = item.stock - 1;
            setTotal(total + 1)
        }
    }
    
  return (
    <div className='producto'>
        <h3>{item.producto.nombre}</h3>
        <p>${item.producto.descripcion}</p>
        <br/> 
        <h5>En stock: <span>{item.stock > 0 ? item.stock : "agotado"}</span></h5>
        <button 
          onClick={buy}
          className={item.stock > 0 ? 'button' : 'button-disabled'}
          disabled={item.stock > 0 && false}
        >
          {item.stock > 0  ? 'Comprar' : 'Sin stock'}
        </button>
    </div>
  )
}

