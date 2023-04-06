import React from "react";
import Swal from "sweetalert2";
import { Productos } from "./Productos";
import "./Components-Styles/ProductosList.scss"
import "./Components-Styles/SwalLoader.scss"

export const ProductosList = ({ productosCarrito, setProductosCarrito, contador, setContador, total, setTotal }) => {

    const agregarProductos = (item) => {

        setTimeout(time => {
            let carrito = [productosCarrito.length];
            if (productosCarrito.find(items => items.id === item.id)) {
                const itemsRep = productosCarrito.map(items => items.id === item.id ? { ...items, cantidad: items.cantidad + 1 } : items);
                setTotal(total + item.precio * item.cantidad);
                return setProductosCarrito([...itemsRep]);
            }
            setProductosCarrito([...productosCarrito, item]);
            setContador(contador + carrito.length);
            setTotal(total + item.precio * item.cantidad);
        }, 500);

        Swal.fire({
            width: 200,
            iconHtml: '<div class="lds-facebook"><div></div><div></div><div></div>',
            iconColor: "white",
            showConfirmButton: false,
            timer: 500
        });
    }

    const descripcion = (item) => {
        Swal.fire({
            html: `<p className="descripcionProducto">${item.descripcion}</p>`,
            showConfirmButton: true,
            confirmButtonText: "CERRAR DESCRIPCIÓN",
            confirmButtonColor: "gray",
        })
    }

    return (
        <>
            <div className="contenedorProductos">
                {Productos.map(item => {
                    return (
                        <div className="contenedorItems" key={item.id}>
                            <p className="nombreItem">{item.nombre}</p>
                            <p className="marcaItem">Marca: <span>{item.marca}</span></p>
                            <p className="categoriaItem">Categoria: <span className="colorCategoriaItem">{item.categoria}</span></p>
                            <img className="imgItem" src={item.img.src} alt={item.img.alt} />
                            <p className="precioItem">Precio: $<span className="numeroItem">{item.precio}</span></p>
                            <button className="botonAgregarItem" type="button" onClick={() => agregarProductos(item)}>AGREGAR</button>
                            <button className="descripcion" onClick={() => descripcion(item)}>DESCRIPCIÓN</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}