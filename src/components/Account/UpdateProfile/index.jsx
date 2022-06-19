import React, { useState, useRef } from 'react'
import { Container, FormWrap, Icon, Error, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './UpdateProfileElements'
import { useAuth } from '../../Contexts/AuthContext'
import { useHistory } from 'react-router-dom'


const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    function handleSubmit(e) {
      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      const promises = []
      setLoading(true)
      setError("")
  
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
      }
  
      Promise.all(promises)
        .then(() => {
          history.push("/")
        })
        .catch(() => {
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/aeronautics">Aircraft Control</Icon>
                    {error && <Error>{error}</Error>}
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Update account profile</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required ref={emailRef} defaultValue={currentUser.email}/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" ref={passwordRef} placeholder="Leave blank to keep password"/>
                            <FormLabel htmlFor="for">Password Confirm</FormLabel>
                            <FormInput type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep password"/>
                            <FormButton type="submit" disabled={loading}>Update</FormButton>
                            <Text to="/dashboard">Cancel</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default UpdateProfile