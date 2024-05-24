import { createContext, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [box, setBox] = useState([])
    const [product, setProduct] = useState([])

    return (
        <ProductContext.Provider
            value={{ data, setData, box, setBox, product, setProduct }}
        >
            {children}
        </ProductContext.Provider>
    )
}