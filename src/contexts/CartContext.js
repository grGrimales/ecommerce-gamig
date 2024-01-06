"use client";

import { Cart } from "@/api/cart";
import { set } from "lodash";
import { createContext, useEffect, useState } from "react";



export const CartContext = createContext();


const cartCtrl = new Cart();
export function CartProvider (props) {
    const  {children} = props;

    const  [cart, setCart] = useState(null);
    const [total, setTotal] = useState(cartCtrl.count());

    useEffect(() => {
    const response = cartCtrl.getAll();
    setCart(response);
    }, []);


    const addCart = (gameId) => {
        console.log(gameId)
        cartCtrl.add(gameId);
        refreshCart();

    }

    const refreshCart = () => {
        setTotal(cartCtrl.count());
        setCart(cartCtrl.getAll());
    }

    const changeQuantityItem = (gameId, quantity) => {
        cartCtrl.changeQuantity(gameId, quantity);
        refreshCart();
    }

    const deleteItem = (gameId) => {
        cartCtrl.deleteItem(gameId);
        refreshCart();
    }
    
    const data = {
        cart,
        total,
        addCart,
        deleteItem,
        deleteAllItems: () =>{},
        changeQuantityItem,
    };


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}