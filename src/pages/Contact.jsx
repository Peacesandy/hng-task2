
import React, {useState} from 'react'

     const Contact = () => {
        const [disabled, setDisabled] = useState(true)
        const [contact, SetContact] = useState ({
             first_name: "",
            last_name:  "",
            email: "",
            message: "" 
        })


        function handleChange (e) {
            console.log('ememobong')
            if (e.target.name=== 'message') {
            SetContact({
                ...contact,
                message:e.target.value
            })
            }
        }

        const [errors, setErrors] = useState(false)
         const handleSubmit = (e) => {
        e.preventDefault();
        if (disabled) return;
        

        if (!contact.message) {
            setErrors(true)
        }
    }
        

  return (
    <div className='section'>
            <div className="header">
                <h2>Contact Me</h2>
                <p>Hi there,  contact me to ask me about anything you have in mind.</p>
            </div>

            <form className="section__form" onSubmit={handleSubmit} >
                <div className="input50">
                    <div className="form__group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" value={contact.first_name} name="first_name" id="first_name" placeholder='Enter Your First Name' onChange={handleChange} />
                    </div>
                    <div className="form__group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" value={contact.last_name} name="last_name" id="last_name" placeholder='Enter Your Last Name' onChange={handleChange}/>
                    </div>
                </div>

                <div className="input100">
                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={contact.email} name="email" id="email" placeholder='yourname@gmailcom' onChange={handleChange} />
                    </div>

                    <div className="form__group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" value={contact.message} id="message" placeholder="Send me a message and I'll reply you as soon as possible" onChange={handleChange}></textarea>
                        {errors && <p className="error">Please enter a message</p>}
                        
                    </div>
                </div>
                <div className="aggree">

                    <input type="checkbox" name="" id="" className="checkbox" onChange={()=> setDisabled(!disabled)} />
                    <p>You agree to providing your data to Peace Sandy who may contact you</p>
                </div>
                <button type="submit" id='btn__submit' className={`button ${disabled ? 'disabled' : ''}`} >Send Message</button>
            </form>

        </div>
  )
}

export default Contact
