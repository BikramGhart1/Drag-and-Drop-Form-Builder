import React, { useState } from 'react'

const Fullname =React.memo(({ handleChange }) => {
    return (
        <div>
            <label htmlFor="fullname">Fullname</label>
            <input type="text" name='fullname' onChange={handleChange} />
        </div>
    )
})

const Email =React.memo( ({ handleChange }) => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' onChange={handleChange} />
        </div>
    )
})
const Password =React.memo( ({ handleChange }) => {
    return (
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
    )
})
const Gender = () => {
    return (
        <div>
            <label htmlFor="gender">Gender</label>
            <br />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor='others'>Others</label>
            <input type="radio" name="gender" id="others" />
        </div>
    )
}
export default function Form() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ formData, [name]: value })
        console.log(formData);
    }
    return (
        <form>
            <Fullname handleChange={handleChange} />
            <Email handleChange={handleChange} />
            <Password handleChange={handleChange} />
            <Gender />

        </form>
    )
}
