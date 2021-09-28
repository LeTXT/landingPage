import React, { useState, usaEffect } from "react";
import './Input.css'
import {
    TextField,
    Button,
    FormLabel,
    Typography,
    Paper,
  } from '@material-ui/core';

const Input = ({onSubmit}) => {

const [email,setEmail] = React.useState('');
const [nome,setNome] = React.useState('');
const [cep,setCep] = React.useState('');
const [validEmail,setValidEmail] = React.useState(false);
const [validNome,setValidNome] = React.useState(false);
const [validCep,setValidCep] = React.useState(false);
const regexCep = /(\d{5})-?(\d{3})/g;
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const noSpaceNameValidator = /^[a-zA-Z]{1}[a-zA-Z\s]+$/;

React.useEffect(() => {
    if(regexCep.test(cep) && cep?.length === 9){
        setValidCep(true)
    } else {setValidCep(false)}
},[cep]);

React.useEffect(() => {
    if(regexEmail.test(email)) {
        setValidEmail(true)
    } else {setValidEmail(false)}
},[email]);

React.useEffect(() => {
    if(noSpaceNameValidator.test(nome)) {
        setValidNome(true)
    } else {setValidNome(false)}
},[nome]);

const handleNome = (e) => {
    setNome((p) => p = e.target.value)
};

const handleEmail = (e) => {
    setEmail((p) => p = e.target.value)
};

const handleCep = (e) => {
    setCep((p) => p = e.target.value)
};

const submitValidator = () => {
    if(validNome && validCep && validEmail) onSubmit(nome,email,cep)
};

return (
<div className="input">
    
    <Paper>
        <form> 
        <FormLabel>Nome</FormLabel>
        <TextField 
        name="Nome"
        variant="outlined"
        value={nome}
        onChange={handleNome}
        fullWidth
        TextField="Charlie Brown"
        />
        <FormLabel>Email</FormLabel>
        <TextField 
        name="Email"
        variant="outlined" 
        value={email}
        onChange={handleEmail} 
        fullWidth />
        <FormLabel>CEP</FormLabel>
        <TextField id="surnameForm"
        name="CEP"
        variant="outlined"
        value={cep}
        onChange={handleCep}
        fullWidth
        error={!validCep}
        label="CEP"
        defaultValue="00000-000"
        helperText={!validCep ? "Entre um CEP assim: 00000-000" : ""}
        />
        </form>
        <Button
        id="enviarBtn"
        color="primary"
        fullWidth
        variant="contained"
        onClick={submitValidator}
        className='button'
        >Enviar</Button>
    </Paper>


</div>
)}

export default Input