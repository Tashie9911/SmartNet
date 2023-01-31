import  { useState } from 'react';
import { FormControl, FormGroup,InputLabel,Input,Typography,Button,styled } from "@mui/material"


import { addcar } from '../service/api';

const Container = styled(FormGroup)`
       width:50%;
       margin: 5% auto 0% auto;
       & <div (
           margin-top: 20px;
       )
`


const initialvalues = {
    ID:'',
    NAME:'',
    MODEL:'',
    COLOR:'',
    YEAR:''


}

const Addcar = () => {

    const [user,setUser] =useState(initialvalues)

    const onValuechange = (e) => {
        setUser({ ...user,[e.target.name]: e.target.value })
        console.log(user);
    }

    const addcarDetails = async () => {
        await addcar(user);
        
    }

    return (
        <Container>
            <Typography variant="h4">AddCar</Typography>
            <FormControl>
                <InputLabel>ID</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="ID" />
            </FormControl>
            <FormControl>
                <InputLabel>NAME</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="NAME" />
            </FormControl>
            <FormControl>
                <InputLabel>MODEL</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="MODEL" />
            </FormControl>
            <FormControl>
                <InputLabel>COLOR</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="COLOR" /> 
            </FormControl>
            <FormControl>
                <InputLabel>YEAR</InputLabel>
                <Input onChange={(e) => onValuechange(e)} name="YEAR" />
            </FormControl>
            <FormControl>
                <Button onClick={() => addcarDetails()}variant="contained">AddCar</Button>
            </FormControl>
        </Container>
    )
}

export default Addcar;