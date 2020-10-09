import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { goToCart } from '../../Router/GoToPages'
import { PaginaTesteCard } from './PaginaTesteCard'
import { PTBox, PTPage } from './styled'

export const PaginaTeste = (props) => {
    const [products, setProducts] = useState([])
    const {form, onChange, resetState} = useForm({id:'', qtde:''})
    const history = useHistory()
    const [insertBox, setInsertBox] = useState(false)
    
    const handleInput = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const product = (id, qtde) => {
        let newProducts = products.map(prod=>{
            return prod.id === id ? prod = {...prod, qtde: qtde} : prod
        })

        // console.log('newProducts', newProducts)

        const filterProducts = newProducts.filter(prod=>{
            return prod.id === id
        })

        // console.log('filterProducts', filterProducts)

        if (filterProducts.length <= 0) {
            newProducts = [...newProducts, {id: id, qtde: qtde}]
        }

        setProducts(newProducts)

        console.log('newProducts2', newProducts)

        props.onClickCart(newProducts)

        resetState()

        setInsertBox(false)
    }

    return (
        <div>
            {/* {console.log('return', form.id, form.qtde)} */}
            {/* <input type='text' name={'id'} value={form.id} onChange={handleInput} /> */}
            {/* <input type='number' name={'qtde'} value={form.qtde} onChange={handleInput} /> */}
            <button onClick={()=>setInsertBox(true)} > Insere Product </button>
            {/* <button onClick={()=>props.onClickCart(products)} > Envia Products </button> */}
            <button onClick={()=>goToCart(history)} > goToCart </button>

            {insertBox &&
                // <PTPage>
                //     <PTBox>
                //         <input type='text' name={'id'} placeholder='id' value={form.id} onChange={handleInput} />
                //         <input type='number' name={'qtde'} placeholder='qtde' value={form.qtde} onChange={handleInput} />
                //         <button onClick={()=>product(form.id, form.qtde)} > Insere Product </button>
                //         {/* <button onClick={()=>props.onClickCart(products)} > Envia Products </button> */}
                //         {/* <button onClick={()=>goToCart(history)} > goToCart </button> */}
                //     </PTBox>
                // </PTPage>

                <PaginaTesteCard
                    product={product}
                />
            }

        </div>
    )
}
