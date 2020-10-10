import React from 'react'
import useForm from '../../Hooks/useForm'
import { PTBox, PTPage } from './styled'

export const PaginaTesteCard = (props) => {
    const {form, onChange, resetState} = useForm({id:'', qtde:''})
    const handleInput = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }
    return(
        <PTPage>
            <PTBox>
                <input type='text' name={'id'} placeholder='id' value={form.id} onChange={handleInput} />
                <input type='number' name={'qtde'} placeholder='qtde' value={form.qtde} onChange={handleInput} />
                <button onClick={()=>props.product(form.id, form.qtde)} > Adicionar ao carrinho </button>
                {/* <button onClick={()=>props.onClickCart(products)} > Envia Products </button> */}
                {/* <button onClick={()=>goToCart(history)} > goToCart </button> */}
            </PTBox>
        </PTPage>
    )
}