import React from 'react'

function contact() {
  return (
    <div className='contact'>
            <div className="contact_header">
                <h2>Contact</h2>
                <p>Hi there,  contact me to ask me about anything you have in mind.</p>
            </div>

            <form className="contact__form">
                <div className="input50">
                    <div className="form__group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" id="first_name" placeholder='Enter Your First Name' />
                    </div>
                    <div className="form__group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" id="last_name" placeholder='Enter Your Last Name' />
                    </div>
                </div>

                <div className="input100">
                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder='yourname@gmailcom' />
                    </div>

                    <div className="form__group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible"></textarea>
                    </div>
                </div>
                <div className="aggree">

                    <input type="checkbox" name="" id="" className="checkbox" />
                    <p>You agree to providing your data to Benedict Anthony who may contact you</p>
                </div>
                <button type="submit" id='btn__submit' className='button'>Send Message</button>
            </form>

        </div>
  )
}

export default contact
