import { useState } from 'react'

const useForm = (initialState) => {
  
  const [form, setForm] = useState(initialState)
  
  const onChange = (name, value) => {
    console.log('useForm > onChange: ', name, value)
    const newForm = { ...form, [name]: value }
    console.log('useForm > newForm: ', newForm)
    setForm(newForm)
  }

  const resetState = () => {
    setForm(initialState)
  }

  return { form, onChange, resetState }
}
export default useForm

