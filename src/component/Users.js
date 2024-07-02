import React, { useState } from 'react'
import Button  from '@mui/material/Button'
import { saveUsers } from './Services/services'
import {useNavigate} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'
function User() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [description, setDescription] = useState()
    const [quantity, setQuantity] = useState()
    const navigate = useNavigate()
    const getchange = (e) => {
        if (e.target.name === "firstName") {
            if (e.target.value.length <= 20) {
                setFirstName(e.target.value)
            }
        }
        if (e.target.name === "lastName") {
            if (e.target.value.length <= 20) {
                setLastName(e.target.value)
            }
        }
        if (e.target.name === "description") {
            if (e.target.value.length <= 20) {
                setDescription(e.target.value)
            }
        }
        if (e.target.name === "quantity") {
            if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 20) {
                setQuantity(e.target.value)
            }
            else{
                setQuantity()
            }
        }
    }
    const submit = async () => {
        if (firstName !== null && lastName !== null && description !== null && (parseInt(quantity) > 0)) {
            const user = {
                FirstName:firstName,
                LastName:lastName,
                Description:description,
                Quantity:parseInt(quantity)
            }
            await saveUsers(user)
            navigate("/Home")
        }
    }
    return (
        <Paper >
            <div style={{ padding: '12px 10px' }}>
               <TextField 
                label="First Name" 
                name="firstName" 
                maxLength={20} 
                onChange={getchange} 
                value={firstName} />
            </div>
            <div style={{ padding: '12px 10px' }}>
                <TextField 
                 label="Last Name" 
                 maxLength={20} 
                 name="lastName" 
                 onChange={getchange} 
                 value={lastName} />
            </div>
            <div style={{ padding: '12px 10px' }}>
               <TextField 
                label='Description' 
                maxLength={100} 
                name="description" 
                onChange={getchange} 
                value={description} />
            </div>
            <div style={{ padding: '12px 10px' }}>
               <TextField label='Quantity'  
               type='number' 
               maxLength={2} 
               name="quantity" 
               onChange={getchange} value={quantity} />
            </div>
            <div style={{ padding: '12px 10px' }}>
                <Button variant="contained" onClick={submit}>Submit</Button>
            </div>
        </Paper>
    )

}

export default User