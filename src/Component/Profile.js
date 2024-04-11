import React, { useContext } from "react";
import './Profile.css'
import logo from './logo.svg'
import DataContext from "../Data/DataContext";


const Profile =()=>{
    const {username,password,email} = useContext(DataContext)
    return (
        <div className="ProfileControl">
            <h1>Profile</h1>
            <form className="UserData">
                <div className="ProfileData">
                    <div>
                        <label>Username</label>
                        <p>{username}</p>
                    </div>
                    <div>
                        <label>Email</label>
                        <p>{email}</p>
                    </div>
                    <div>
                        <button className="ubtn" type="submit">Update</button>
                    </div>
                </div>
                <div className="ProfilePic">
                    <img src={logo} alt="Logo" />
                    <input type="text" placeholder="Bio"/>
                </div>
            </form>
        </div>
    );
}

export default Profile