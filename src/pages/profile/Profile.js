import React from 'react'
import Card from '../../components/card/Card'
import "./Profile.scss"
import profile from "../../assets/profile1.png"

const Profile = () => {
    return (
        <>
            <div className="container">
                <h2>Profile</h2>
                <div className='--flex-start profile'>
                    <Card cardClass={"card"}>
                        <div>
                            <div className="profile-photo">
                                <img src={profile} alt="profileImg" />
                                <h3>Role : User</h3>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Profile