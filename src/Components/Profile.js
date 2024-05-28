import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../Styles/profile.css'
import image1 from '../Assets/image1.jpg'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

const courses = [
    {
        title: "HTML & CSS",
        duration: "2 hours",
        icon: <BookOutlinedIcon/>
    },
    {
        title: "Javascript",
        duration: "2 hours",
        icon: <BookOutlinedIcon/>
    },
    {
        title: "React.js",
        duration: "2 hours",
        icon: <BookOutlinedIcon/>
    },
]

function Profile() {
    return (
        <div className='profile'>
            <ProfileHeader/>
            <div className='user-profile'>
                <div className='user-details'>
                    <img src={image1} alt='user-image'/>
                    <h3 className='user-name'>Harshil Patel</h3>
                    <span className='profession'>Teacher</span>
                </div>
                <div className='user-courses'>
                    {courses.map((course)=>(
                        <div className='course'>
                            <div className='course-detail'> 
                                <div className='course-cover'> 
                                        {course.icon}
                                </div>
                                <div className='course-name'>
                                    <h5 className='title'>{course.title}</h5>
                                    <span className='course-duration'>{course.duration}</span>
                                </div>
                                
                            </div>
                            <div className='action'>
                                :
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Profile  