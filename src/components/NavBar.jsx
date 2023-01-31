
import {AppBar, Toolbar, Typography,styled} from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
         background: #111111;
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
                <Toolbar>
                    <Tabs to="/">Home</Tabs>
                    <Tabs to="/Admin">Admin</Tabs>
                    <Tabs to="/Cars">Cars</Tabs>
                    <Tabs to="/Addcar">Add car</Tabs>
                    <Tabs to="/Contact">Contact</Tabs>
                    <Tabs to='/services'>services</Tabs>
                </Toolbar>
            </Header>
          );
       }
        

export default NavBar;
