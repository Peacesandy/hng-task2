import React from 'react'
import Links from '../components/Links'
import Profile from '../components/Profile'

import slack from "../image/slack.png";
import github from "../image/Icon.png";


const Home = () => {
    return (
        <div className="container">
            <Profile />
            <Links />

            <div className="logos">
                <img src={slack} alt="" />
                <img src={github} alt="" />
            </div>
        </div>
    )
}

export default Home