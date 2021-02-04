import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'
import {Link, navigate} from '@reach/router';
import Header from './Header'

const PetForm = (props) => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errors, setErrors] = useState({}) 

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/pet/new',{
            name:name,
            type:type,
            description:description,
            skill1:skill1,
            skill2:skill2,
            skill3:skill3
        })
        .then((res) =>{
            if(res.data.errors){
                console.log(res.data.errors)
                setErrors(res.data.errors)
            }
            else {
                navigate('/pets');
            }
        })
        .catch((err)=>console.log(err))
    };


    return(
        <div>
            <Header />
            <div className="header">
                <h2>Know a pet needing a home?</h2>
            </div>
            <form onSubmit={submitHandler} className='form'>
                <div className='form-block'>
                    <label>Pet Name:</label>
                    <input type="text" onChange={(e)=> setName(e.target.value)}></input><br></br>
                    { errors.name ? (<span style={{color:"red"}}>{errors.name.message}<br></br></span>) : null}
                    <label>Pet Type:</label>
                    <input type="text" onChange={(e)=> setType(e.target.value)}></input><br></br>
                    { errors.type ? (<span style={{color:"red"}}>{errors.type.message}<br></br></span>) : null}
                    <label>Pet Description:</label>
                    <input type="text" onChange={(e)=> setDescription(e.target.value)}></input><br></br>
                    { errors.description ? (<span style={{color:"red"}}>{errors.description.message}<br></br></span>) : null}
                    <input type="submit" value="Add Pet" className="blueButton"/>
                </div>
                <div className='form-block'>
                    <p>Skills: (Optional)</p>
                    <label>Skill1:</label>
                    <input type="text" onChange={(e)=> setSkill1(e.target.value)}></input><br></br>
                    <label>Skill2:</label>
                    <input type="text" onChange={(e)=> setSkill2(e.target.value)}></input><br></br>
                    <label>Skill3:</label>
                    <input type="text" onChange={(e)=> setSkill3(e.target.value)}></input><br></br>
                </div>
            </form>

        </div>

    )
}

export default PetForm;