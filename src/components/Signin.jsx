import  { useState,useEffect } from 'react';
import { FormControl, FormGroup,InputLabel,Input,Typography,Button,styled, Paper } from "@mui/material"
import BackgroundImage from "../Assets/homeback.png"


import { getUser } from '../service/api';

import {useNavigate,useParams} from 'react-router-dom'

const Container = styled(FormGroup)`
       width:50%;
       margin: 5% auto 0% auto;
       & <div (
           margin-top: 20px;
       )
`


const initialvalues = {
    NAME:'',
    SURNAME:'',
    USERNAME:'',
    EMAIL:'',
    PHONE:''


}

const Signin = () => {

    const [user,setUser] =useState(initialvalues)
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        getUserData();
    }, [])

    const getUserData = async () => {
       let response = await getUser(id);
       setUser(response.data);
    }

    const onValuechange = (e) => {
        setUser({ ...user,[e.target.name]: e.target.value })
        console.log(user);
    }

    const adduserDetails = async () => {
        //await adduser(user);
        //navigate('/all');
        
    }

    const backgroundStyles={
       height: '40rem', width:'100%', background: `url(${BackgroundImage})`,
       backgroundRepeat: 'no-repeat',backgroundPosition:'fixed'
    }

    return (
          <Paper style={backgroundStyles}  >
            <Paper sx={{padding:'', backgroundColor:'rgba(0,0,0, 0.5)'}}>
                <Container>
              
            
                 <Typography variant="h4">SIGNIN</Typography>
            <FormControl>
                
                <InputLabel>EMAIL/PHONE</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="EMAIL_PHONE" /> 
            </FormControl>
            <FormControl>
                <InputLabel>PASSWORD</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="PASSWORD" />
            </FormControl>
            <FormControl>
                <Button onClick={() => adduserDetails()}variant="contained">SIGNIN</Button>
            </FormControl>
        </Container> 
            </Paper>
                
        </Paper>
       
    )
}

export default Signin;