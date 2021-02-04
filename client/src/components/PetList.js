import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"
import {Link} from '@reach/router';
import ListHeader from './ListHeader'


const PetList = () => {
    
    const [pets, setPets] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
        .then((res)=>setPets(res.data))
        .catch((err)=> console.log(err))

    },[])


    return(
        <div>
            <ListHeader />
            <div className='header'>
            
                <h2>These pets are looking for a good home</h2>
                
            </div>
            <table className="table">
                <th style={{borderRight:"2px solid black"}}>Name</th>
                <th style={{borderRight:"2px solid black"}}>Type</th>
                <th>Actions</th>
                {pets.map((pet, i)=>(
                    <>
                    <tr>
                        <td style={{borderRight:"2px solid black"}}>{pet.name}</td>
                        <td style={{borderRight:"2px solid black"}}>{pet.type}</td>
                        <td><Link to={'/pet/' + pet._id}>Details</Link> | <Link to={'/pet/edit/' + pet._id}>Edit</Link></td> 
                    </tr>
                    </>      
                ))}
            </table>
        </div>
    )
}

export default PetList;