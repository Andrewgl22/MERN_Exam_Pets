import React, { useState, useEffect } from 'react';
import '../App.css'
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import Header from './Header'

const PetDetail = (props) => {

    const [pet, setPet] = useState({})
    const [like, setLike] = useState(0)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet/' + props.id)
        .then((res)=>{
            console.log(res)
            setPet(res.data)
        })
        .catch((err)=>console.log(err))
    },[])

    const adoptPet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pet/delete/${pet._id}` )
        .then((res)=>{
            console.log(res)
            navigate('/pets')
        })
        .catch((err)=>console.log(err))

    }

    return(
        <div>
            <Header />
            <div className="header">
                <h2>Details about: {pet.name}</h2>
                <button onClick={adoptPet} className="adopt-button">Adopt {pet.name}</button>
            </div>
            <div className="description-box">
                <p><b>Type: </b> {pet.type}</p>
                <p><b>Description:</b> {pet.description}</p>
                <p><b>Skills:</b></p>
                <div style={{display:"inline-block"}}>{pet.skill1}<br></br> {pet.skill2}<br></br> {pet.skill3}</div>
            </div>

        </div>
    )
}

export default PetDetail;