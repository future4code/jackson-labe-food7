import React, { useState, useEffect } from 'react';
import { HeaderTop } from '../../Components/HeaderTop/HeaderTop';
import axios from 'axios';
import { baseUrl } from '../../Constants/axiosConstants';
import useForm from '../../Hooks/useForm';
import { Text, InputContainer, Input, ButtonContainer, Button, Container } from './styled'
import { useHistory } from 'react-router-dom';
import { goToProfile } from '../../Router/GoToPages';

const ProfileEdit = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const headers = { headers: { auth: token } }
    const [ profileInfo, setProfileInfo ] = useState({})
    

    const getProfile = () => {
      axios.get(`${baseUrl}/profile`, headers)
      .then((response) => {
        console.log(response)
        setProfileInfo(response.data.user)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const {form, onChange}  = useForm({
        name: `${profileInfo.name}`,
        email: `${profileInfo.email}`,
        cpf: `${profileInfo.cpf}`
    })
    
    console.log(profileInfo.name)
    console.log(form) // pq tá chegando undefined dentro do estado inicial do form se no console acima o valor chega ok?!

    const updateProfile = () => {
        const body = {
            name: `${profileInfo.name}`,
            email: `${profileInfo.email}`,
            cpf: `${profileInfo.cpf}`
        }

        axios.put(`${baseUrl}/profile`, body, headers)
        .then((response) => {
            console.log(response) // mesmo em caso de sucesso, console da resposta mostra os dados antigos
            setProfileInfo(response.data.user)
            alert("Dados atualizados com sucesso!")
            // a requisição de atualizar os dados está sendo chamada e funcionando ok
            // mas quando volta para a página do perfil, os dados continuam desatualizados
            goToProfile(history)
        })
        .catch((error) => {
            console.log(error)
            alert("Erro ao atualizar dados. Tente novamente!")
        })
    }

    const handleInputChange = (event) =>{
        const { name, value } = event.target
        onChange(name, value)
    }
      
    const handleSubmittion = (event) =>{
        event.preventDefault()
        updateProfile()
        
    }


    return (
        <Container className="App">
            <HeaderTop backButton={true} title={"Editar"} />
            <form onSubmit={handleSubmittion} autoComplete="off">
                <InputContainer>
                    <Input placeholder=" Nome" name="name" value={form.name} required type="text"  onChange={handleInputChange}/>
                </InputContainer>                
                <InputContainer>
                    <Input placeholder=" Email" name="email" value={form.email} required type="email" onChange={handleInputChange}/>
                </InputContainer>
                <InputContainer>
                    <Input placeholder=" CPF" name="cpf" value={form.cpf} required type="text" pattern={"[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"}  onChange={handleInputChange}/>
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">
                        <Text>Salvar</Text>
                    </Button>
                </ButtonContainer>
            </form>
        </Container>
    );
}

export default ProfileEdit;