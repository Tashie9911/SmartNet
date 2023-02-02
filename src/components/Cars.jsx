import { useEffect,useState } from 'react';

import {Table,TableHead,TableBody,TableRow,TableCell,styled,Button} from '@mui/material';

import {getusers} from '../service/api';
import {Link} from 'react-router-dom';

const StyledTable = styled(Table)`
      width: 90%;
      margin: 50px auto 0 auto;

`;
const Thead = styled(TableRow)`
     background: #000;
     & > th{
      color:#fff;
      font-size:20px
     }
`

const Tbody = styled(TableRow)`
     & > td{
      font-size:20px
     }
`

const Cars = () => {

  const [users,setusers] = useState([]);

  useEffect(() =>{
     getusersdetails();
  },  [])

  const getusersdetails = async () => {
    let response = await getusers();
    console.log(response);
    setusers(response.data);
  }

    return (
       <StyledTable>
        <TableHead>
             <Thead>
               <TableCell>ID</TableCell>
               <TableCell>NAME</TableCell>
               <TableCell>MODEL</TableCell>
               <TableCell>COLOR</TableCell>
               <TableCell>YEAR</TableCell>
               <TableCell></TableCell>
              </Thead>
            </TableHead>
            <TableBody>
              {
                users.map((user, id) => (
                     <Tbody key={id}>
                        <TableCell>{user.ID}</TableCell>
                        <TableCell>{user.NAME}</TableCell>
                        <TableCell>{user.MODEL}</TableCell>
                        <TableCell>{user.COLOR}</TableCell>
                        <TableCell>{user.YEAR}</TableCell>
                        <TableCell>
                          <Button variant ="contained"style={{marginRight: 10}} component={Link} to = {'/edit/$'}>EDIT</Button>
                          <Button variant ="contained" color="secondary">DELETE</Button>
                        </TableCell>
                     </Tbody>
                ))
              }
            </TableBody>
       </StyledTable>
    )
}

export default Cars;