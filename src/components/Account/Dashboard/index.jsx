import React, { useState } from 'react'
import { Container, FormWrap, Icon, Error, FormContent, Form, FormH1, FormButton, Text } from './DashboardElements'
import { useAuth } from '../../Contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            logout()
            await history.push('/login')
        } catch {
            setError("Failed to log out")
        }

    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/aeronautics">Aircraft Control</Icon>
                    {error && <Error>{error}</Error>}
                    <FormContent>
                        <Form action="#">
                            <FormH1>Hello there, {(currentUser.email).slice(0, -10).charAt(0).toUpperCase() + (currentUser.email).slice(0, -10).substr(1).toLowerCase()}!</FormH1>
                            <FormButton type="submit" onClick={handleLogout}>Log Out</FormButton>
                            <Text to="/update-profile">Update Profile</Text>
                            <Text to="/signup">Sign Up</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Login