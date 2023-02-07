import  { useState } from 'react';
import { FormControl, FormGroup,InputLabel,Input,Typography,Button,styled,Paper } from "@mui/material"
import BackgroundImage from "../Assets/homeback.png"

import { adduser } from '../service/api';
import {Link} from 'react-router-dom';

import {useNavigate} from 'react-router-dom'

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
    PASSWORD:'',
    PHONE:''


}

const Adduser = () => {

    const [user,setUser] =useState(initialvalues)
    const navigate = useNavigate();

    const onValuechange = (e) => {
        setUser({ ...user,[e.target.name]: e.target.value })
        console.log(user);
    }

    const adduserDetails = async () => {
        await adduser(user);
        navigate('/all');
        
    }
     const backgroundStyles={
       height: '40rem', width:'100%', background: `url(${BackgroundImage})`,
       backgroundRepeat: 'no-repeat',backgroundPosition:'fixed'
    }


    return (
        <Paper style={backgroundStyles}  >
            <Paper sx={{padding:'', backgroundColor:'rgba(0,0,0, 0.5)'}}>
        <Container>
            <Typography variant="h4">LOGIN</Typography>
            <FormControl>
                <InputLabel>NAME</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="NAME" />
            </FormControl>
            <FormControl>
                <InputLabel>SURNAME</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="SURNAME" />
            </FormControl>
            <FormControl>
                <InputLabel>USERNAME</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="USERNAME" />
            </FormControl>
            <FormControl>
                <InputLabel>EMAIL</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="EMAIL" /> 
            </FormControl>
                        <FormControl>
                <InputLabel>PASSWORD</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="EMAIL" /> 
            </FormControl>
            <FormControl>
                <InputLabel>PHONE</InputLabel>
                <Input variant='filled' sx={{backgroundColor:'#FFFFFF', borderRadius:'50px'}} onChange={(e) => onValuechange(e)} name="PHONE" />
            </FormControl>
            <FormControl>
                <Button onClick={() => adduserDetails()}variant="contained">LOGIN</Button>
            </FormControl>
            <p>Already have an account ?</p>
            <Button variant="contained"component={Link} to = {'/edit/$'}>Signin</Button>
        </Container>
        </Paper>
    </Paper>
    )
}

export default Adduser;