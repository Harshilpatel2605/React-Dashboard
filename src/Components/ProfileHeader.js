import React from 'react'
import '../Styles/profile.css'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function ProfileHeader() {
    return (
        <div className='profile-header'>
            <h2 className='header-title'>Profile</h2>
            <div className='edit'>
                <EditOutlinedIcon className='icon'/>   
            </div>
        </div>
    )
}


export default ProfileHeader