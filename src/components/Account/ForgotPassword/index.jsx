import React, { useState, useRef } from 'react'
import { Container, FormWrap, Icon, Error, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, Alert} from './ForgotPasswordElements'
import { useAuth } from '../../Contexts/AuthContext'

const Login = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError('Failed to reset password')
        }

        setLoading(false)
    }


    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/aeronautics">Aircraft Control</Icon>
                    {error && <Error>{error}</Error>}
                    {message && <Alert>{message}</Alert>}
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1>Reset Password</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required ref={emailRef}/>
                            <FormButton type="submit" disabled={loading}>Reset Password</FormButton>
                            <Text to="/signup">Sign Up</Text>
                            <Text to="/login">Log In</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Login