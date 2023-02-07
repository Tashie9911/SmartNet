import { useEffect,useState } from 'react';

import {Table,TableHead,TableBody,TableRow,TableCell,styled,Button} from '@mui/material';

import {getusers} from '../service/api';
import {Link} from 'react-router-dom';

const StyledTable = styled(Table)`
      width: 90%;
      margin: 50px auto 0 auto;

`;
const Thead = styled(TableRow)`
     background: #;
     & > th{
      color:#;
      font-size:30px
     }
`

const Tbody = styled(TableRow)`
     & > td{
      font-size:20px
     }
`

const Users = () => {

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
               <TableCell>NAME</TableCell>
               <TableCell>SURNAME</TableCell>
               <TableCell>USERNAME</TableCell>
               <TableCell>EMAIL</TableCell>
               <TableCell>PASSWORD</TableCell>
               <TableCell>PHONE</TableCell>
               <TableCell></TableCell>
              </Thead>
            </TableHead>
            <TableBody>
              {
                users.map((user, id) => (
                     <Tbody key={id}>
                        <TableCell>{user.NAME}</TableCell>
                        <TableCell>{user.SURNAME}</TableCell>
                        <TableCell>{user.USERNAME}</TableCell>
                        <TableCell>{user.EMAIL}</TableCell>
                        <TableCell>{user.PASSWORD}</TableCell>
                        <TableCell>{user.PHONE}</TableCell>
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

export default Users;