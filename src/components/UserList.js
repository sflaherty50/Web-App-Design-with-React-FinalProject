import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button,
    Table
} from 'react-bootstrap';


export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);
    return (
<ListGroup className="mt-4">
    {users.length > 0 ? (
  <>
<Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Skill</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Team</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               
            
    {users.map(user => (
        
    
         <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.skill}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.team}</td>
                    <td><Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link> &nbsp; 
                    <Button onClick= {() => removeUser(user.id)} color="danger">Delete</Button></td>
                </tr>
        
        
    ))}
    </tbody>
        </Table>
    </>
   
    ) : (
<h4 className="text-center">No User</h4>

    )}
    </ListGroup>
    )
}