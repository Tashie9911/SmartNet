import {AppBar, Toolbar, Button,styled} from '@mui/material';
import { Box,drawer,ListItem,ListItemButton,ListItemIcon,ListItemText,} from "@mui/material";
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
         background: #;
`       

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return (
            <Header position="static">
                <Toolbar sx={{marginLeft:'auto'}}>
                   
                    <Tabs to="/Home"><Button variant='contained' color='primary' sx={{color:'white',borderRadius:'30px'}}>Home</Button></Tabs>
                    <Tabs to="/Login"><Button variant='contained' color='primary' sx={{color:'white',borderRadius:'30px'}}>Login</Button></Tabs>
                    <Tabs to="/ContactUs"><Button variant='contained' color='primary' sx={{color:'white',borderRadius:'30px'}}>ContactUs</Button></Tabs>
                    <Tabs to="/Properties"><Button variant='contained' color='primary' sx={{color:'white',borderRadius:'30px'}}>Properties</Button></Tabs>  
                   <Tabs to="/Propertiesmanagement"><Button variant='contained' color='primary' sx={{color:'white',borderRadius:'30px'}}>Propertiesmanagement</Button></Tabs>  
                   <Tabs to="/Buyingandselling"><Button variant='contained' color='primary' sx={{color:'white',borderRadius:'30px'}}>Buyingandselling</Button></Tabs>  
                    <Tabs to="/Rentingservices"><Button variant='contained' color='primary' sx={{color:'white',borderRadius:'30px'}}>Rentingservices</Button></Tabs>  
                    </Toolbar>

            </Header>
          );
       }
        

export default NavBar;

