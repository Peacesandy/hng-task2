import React from 'react'
import profilePic from "../image/woman.png";
import arrow from "../image/share-left.png";
import mobile from "../image/share-dot.png";
import { useState } from "react"

const Profile = () => {
    const [show, setShow] = useState(false)

    return (
        <div className="profile">
            <img src={profilePic} alt="" id="profile__img" />
            <h3 id='twitter'>PeaceSandy3</h3>
            {/* slack user name */}
            <h3 style={{ display: "none" }} id="slack">Peace Sandy</h3>
            <div className="icon desktop" onClick={() => setShow(!show)} >
                <img src={arrow} alt="" />
                <p className={`share ${show && "show"}`}>share</p>
            </div>
            <div className="icon mobile" onClick={() => setShow(!show)}>
                <p className={`share ${show && "show"}`}>share</p>
                <img src={mobile} alt="" />
            </div>

        </div>

    )
}

export default Profile