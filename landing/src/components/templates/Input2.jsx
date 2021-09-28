import React, { useState, useEffect } from "react";
import axios from 'axios'

function useForm ({
    initialValues,
    validate
}) {
    const [touched, setTouchedFields] = useState({})
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState(initialValues)

    useEffect(() => {
        validateValues(values)
    }, [values])

    function handleChange(e) {
        const fieldName = e.target.getAttribute('name')
        const { value } = e.target
        setValues({
            ...values,
            [fieldName]: value,
        })
    }

    function handleBlur(e) {
        const fieldName = e.target.getAttribute('name')
        setTouchedFields({
            ...touched,
            [fieldName]: true,
        })
    }

    function validateValues(values) {
        setErrors(validate(values))
    }
    function viaCep() {
        const url = `http://viacep.com.br/ws/${values.userCep}/json/`
        fetch(url).then(e => { 
            console.log(e) })
    }

    return {
        values, 
        errors,
        touched,
        handleBlur,
        setErrors,
        handleChange,
    }
}




const Input = () => {
    const form = useForm ({
        initialValues: {
            userEmail: '',
            userCep: ''
        },
        validate: function (values) {
            const errors = {}

            if(!values.userEmail.includes('@' && '.com')) {
                errors.userEmail = 'Por favor, insira um email válido.'
            }
            if(values.userCep.length !== 8) {
                errors.userCep = 'Por favor, insira um CEP válido.'
            }

            return errors
        }
    })

    return (
        <div className="input">
            <form onSubmit={(e) =>{
                e.preventDefault()
            }}>
                <div className='formField'>
                    <label htmlFor="userNome">Nome</label>
                    <input
                        type="text"
                        placeholder='Insira seu nome...'
                        name='nome'
                        />
                </div>
                <div className='formField'>
                    <label htmlFor="userEmail">E-mail</label>
                    <input
                        type="text"
                        placeholder='email@exemplo.com'
                        name='userEmail'
                        id='userEmail'
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.userEmail}
                        />
                        {form.touched.userEmail && form.errors.userEmail && <span className='formField__error'>{form.errors.userEmail}</span>}
                </div>
                <div className='formField'>
                    <label htmlFor="userCep">CEP</label>
                    <input
                        type="text"
                        placeholder='0000000'
                        name='userCep'
                        id='userCep'
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                        value={form.values.userCep}
                        />
                        {form.touched.userCep && form.errors.userCep && <span className='formField__error'>{form.errors.userCep}</span>}
                </div>
                <button type='submit'>
                    Enviar
                </button>
            </form>
        </div>
    )
}
    
export default Input