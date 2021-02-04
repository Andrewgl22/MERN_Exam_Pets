import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Header from './Header'

const PetEdit = (props) => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errors, setErrors] = useState({}) 

    const [pet, setPet] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
        .then((res)=>{
            console.log(res)
            setPet(res.data)
            setName(res.data.name)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkill1(res.data.skill1)
            setSkill2(res.data.skill2)
            setSkill3(res.data.skill3)
        })
        .catch((err)=>console.log(err))
    },[])

    const submitHandler = (e) => {
        e.preventDefault()

        axios.put('http://localhost:8000/api/pet/edit/' + pet._id,{
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
            <h2 style={{marginLeft:"80px"}}>Edit {name}</h2>
            <form onSubmit={submitHandler} className="form">
                <div className="form-block">
                    <label>Pet Name:</label>
                    <input type="text" onChange={(e)=> setName(e.target.value)} value={name}></input><br></br>
                    { errors.name ? (<span style={{color:"red"}}>{errors.name.message}<br></br></span>) : null}
                    <label>Pet Type:</label>
                    <input type="text" onChange={(e)=> setType(e.target.value)} value={type}></input><br></br>
                    { errors.type ? (<span style={{color:"red"}}>{errors.type.message}<br></br></span>) : null}
                    <label>Pet Description:</label>
                    <input type="text" onChange={(e)=> setDescription(e.target.value)} value={description}></input><br></br>
                    { errors.description ? (<span style={{color:"red"}}>{errors.description.message}<br></br></span>) : null}
                    <input type="submit" value="Edit Pet" className="blueButton"/>
                </div>
                <div className="form-block">
                    <p>Skills: (Optional)</p>
                    <label>Skill 1:</label>
                    <input type="text" onChange={(e)=> setSkill1(e.target.value)} value={skill1}></input><br></br>
                    <label>Skill 2:</label>
                    <input type="text" onChange={(e)=> setSkill2(e.target.value)} value={skill2}></input><br></br>
                    <label>Skill 3:</label>
                    <input type="text" onChange={(e)=> setSkill3(e.target.value)} value={skill3}></input><br></br>
                </div>
            </form>

        </div>
    )
}

export default PetEdit;