import React, { useState, useRef } from 'react'
import { Container, FormWrap, Icon, Error, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './LoginElements'
import { useAuth } from '../../Contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

    try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/dashboard")
    } catch {
        setError("Failed to log in")
    }

        setLoading(false)
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/aeronautics">Aircraft Control</Icon>
                    {error && <Error>{error}</Error>}
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1>Log in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required ref={emailRef}/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required ref={passwordRef}/>
                            <FormButton type="submit" disabled={loading}>Log In</FormButton>
                            <Text to="/forgot-password">Forgot Password</Text>
                            <Text to="/signup">Sign Up</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Login