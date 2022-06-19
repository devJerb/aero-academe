import React, { useState, useRef } from 'react'
import { Container, FormWrap, Icon, Error, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignupElements'
import { useAuth } from '../../Contexts/AuthContext'
import { useHistory } from "react-router-dom"

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/dashboard")
      } catch {
        setError("Failed to create an account")
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
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required ref={emailRef}/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required ref={passwordRef}/>
                            <FormLabel htmlFor="for">Confirm Password</FormLabel>
                            <FormInput type="password" required ref={passwordConfirmRef}/>
                            <FormButton type="submit" disabled={loading}>Sign Up</FormButton>
                            <Text to="/forgot-password">Forgot Password</Text>
                            <Text to="/login">Log In</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>   
        </>
    )
}

export default Signup