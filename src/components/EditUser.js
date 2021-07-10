import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { POSITIONS, SKILLLEVELS, AGEGROUPS, GENDERS, TEAMS } from './../constants';

import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
} from 'react-bootstrap';

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name:'',
        position:'',
        skillevel:'',
        agegroups:'',
        gender:'',
        Team:'',
    });
    const {users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(()=> {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
       setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(selectedUser)

        history.push('/');

    }

    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }

    return (
<Form onSubmit={onSubmit}>
    <FormGroup>
        <FormLabel>Name</FormLabel>
        <FormControl type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter Name" ></FormControl>
    </FormGroup>


    <FormGroup>
        <FormLabel>Position</FormLabel>
        <FormControl onChange={onChange} as="select" name="position">
        <option value="">Choose position</option>
          {POSITIONS.map((position) => (
            <option key={position.value} value={position.value}>
              {position.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>

    <FormGroup>
        <FormLabel>Skill Level</FormLabel>
        <FormControl onChange={onChange} as="select" name="skill">
        <option value="">Choose skill</option>
          {SKILLLEVELS.map((skilllevel) => (
            <option key={skilllevel.value} value={skilllevel.value}>
              {skilllevel.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>

    <FormGroup>
        <FormLabel>Age Groups</FormLabel>
        <FormControl onChange={onChange} as="select" name="age">
        <option value="">Choose age-group</option>
          {AGEGROUPS.map((agegroups) => (
            <option key={agegroups.value} value={agegroups.value}>
              {agegroups.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>



    <FormGroup>
        <FormLabel>Gender</FormLabel>
        <FormControl onChange={onChange} as="select" name="gender">
        <option value="">Choose Gender</option>
          {GENDERS.map((gender) => (
            <option key={gender.value} value={gender.value}>
              {gender.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>

    <FormGroup>
        <FormLabel>Team</FormLabel>
        <FormControl onChange={onChange} as="select" name="team">
        <option value="">Choose Team</option>
          {TEAMS.map((Team) => (
            <option key={Team.value} value={Team.value}>
              {Team.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>

    <Button type="submit">Edit Name</Button>
    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
</Form>
    )
}