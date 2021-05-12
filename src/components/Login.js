import React, { useContext } from 'react';

import { Box, Button, Container, Grid } from '@material-ui/core';

import {Context} from "../index"
import firebase from "firebase"


const Login = () => {
    
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }


    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justify={"center"}
            >
                <Grid style={{width: 250, background: 'lightgray'}}
                >
                    <Box p={5}>
                        <Button variant={"outlined"}
                            onClick={login}
                        >
                            Войти через Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;