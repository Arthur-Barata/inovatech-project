import { Box, Button, Paper, TextField } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import users from '../../ApiMockData/mockUser'

export default function Login(props: { changeLog: any }) {
    const navigation = useNavigate()
    const changeLog = props.changeLog

    const [userValue, setUserValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const [invalid, setInvalid] = useState(false)

    const validateLogin = (login: any, senha: any) => {
        let user = null
        const usersEmails = users.map(x => x.email)
        if (usersEmails.includes(login)) {
            console.log('achou')
            user = users.find(x => x.email === login)
        }
        if (user?.senha === senha) {
            console.log('senha')
            return true
        }
        return false
    }


    return (
        <Box sx={{
            display: 'flex',
            flex: 1,
            height: '100vh',
            justifyContent: 'space-evenly',
            background: '#123449',
            '& p': {
                margin: '3px'
            }
        }}>
            <Box sx={{
                textAlign: "center",
                marginTop: '6%'
            }}>
                <img
                    src={require('../../assets/icons/logo.png')}
                    alt="logo"
                    height={'25%'}
                    width={'auto'}
                />
                <Paper sx={{
                    padding: 5,
                }}>
                    <h1>Acesse o TaskBoard</h1>

                    <TextField
                        value={userValue}
                        placeholder="Usuário"
                        onChange={(e) => setUserValue(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                    {invalid && !userValue && <p>Campo não preenchido</p>}

                    <br />

                    <TextField
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                        placeholder="Senha"
                    />

                    {invalid && !passwordValue && <p>Campo não preenchido</p>}

                    <p>
                        <Button onClick={() => {
                            if (validateLogin(userValue, passwordValue)) {
                                changeLog()
                                navigation('/')
                            } else {
                                setInvalid(true)
                            }


                        }}>Entrar</Button>

                        {invalid && <p>Algo deu errado, tente novamente</p>}

                    </p>
                </Paper>
            </Box>
        </Box>
    )
}