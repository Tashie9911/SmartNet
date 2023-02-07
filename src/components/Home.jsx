import react from 'react';
import { Button,Paper } from "@mui/material"
import BackgroundImage from "../Assets/homeback.png"
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



const Home = () => {
  const backgroundStyles={
       height: '40rem', width:'100%', background: `url(${BackgroundImage})`,
       backgroundRepeat: 'no-repeat',backgroundPosition:'fixed'
    }
  return (
    <Paper style={backgroundStyles}  >
    <div classname="home-container">
      <div className="home-banner-container">
          </div>
          <div classname="home-text-selection">
             <Typography variant="h1" gutterBottom>
        Find your place 
             </Typography>
             <Typography variant="h1" gutterBottom>
        of home
              </Typography>
            <Typography variant="h5" gutterBottom>
              We are glad to have you around. Feel free to browse our website.
            </Typography>
            <Typography variant="h5" gutterBottom>
              How can we Help?
            </Typography>
            <Button variant="contained" endIcon={<SendIcon />}>
        GetStarted
      </Button>
            <Typography variant="h3" gutterBottom>
              Adorn Your Home Today
              <Typography variant="h3" gutterBottom>
              Brick by Brick         
              </Typography>
            </Typography>
            <Typography variant="h5" gutterBottom>
              Bringing  Property and infrastructure management into the 21st Century by aligning the interest of the tenant and client through service and asset protection as well as ensuring the maximization of the asset  value 
            </Typography>
      </div>
    </div>
    </Paper>
  )
};

export default Home;
