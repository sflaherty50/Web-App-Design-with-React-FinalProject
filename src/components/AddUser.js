import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { POSITIONS, SKILLLEVELS, AGEGROUPS, GENDERS, TEAMS } from './../constants';
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
} from 'react-bootstrap';
export const AddUser = () => {
    const [formData, setFormData] = useState({
      name:"",
      position:"",
      skill:"",
      age:"",
      gender:"",
      team:""
      
    });
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
          ...formData
  
        }
        addUser(newUser);
        history.push('/');
    }
    const onChange = (e) => {
      setFormData(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value,
     }))
    }
    
    return (
<Form onSubmit={onSubmit}>
    <FormGroup>
        <FormLabel>Name</FormLabel>
        <FormControl name='name' type="text" value={formData.name} onChange={onChange} 
placeholder="Enter Name" ></FormControl>
    </FormGroup>

    <FormGroup>
        <FormLabel>Position</FormLabel>
        <FormControl onChange={onChange} as="select" name="position" >
        <option value="">Choose position</option>
          {POSITIONS.map((position) => (
            <option key={position.value} value={position.value}  >
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
            <option key={skilllevel.value} value={formData.skilllevel} >
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
            <option key={agegroups.value} value={formData.agegroups}>
              {agegroups.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>

    <FormGroup>
        <FormLabel>Gender</FormLabel>
        <FormControl onChange={onChange} as="select" name="gender">
        <option value="">Choose Gender</option>
          {GENDERS.map((Gender) => (
            <option key={Gender.value} value={formData.Gender}>
              {Gender.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>


    <FormGroup>
        <FormLabel>Team</FormLabel>
        <FormControl onChange={onChange} as="select" name="team">
        <option value="">Choose Team</option>
          {TEAMS.map((Team) => (
            <option key={Team.value} value={formData.Team}>
              {Team.title}
            </option>
          ))}
        </FormControl>
    </FormGroup>

    <Button type="submit">Submit</Button>
    <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
</Form>
    )
}

