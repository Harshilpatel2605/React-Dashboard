import React from 'react'
import '../Styles/teacherList.css'
import image1 from '../Assets/image1.jpg'
const Teachers = [
    {
        image: image1,
        name: 'Prof. John Doe',
        duration: '20 hrs Lesson',
        cost: 100,
    },
    {
        image: image1,
        name: 'Prof. John Doe',
        duration: '20 hrs Lesson',
        cost: 100,
    },
    {
        image: image1,
        name: 'Prof. John Doe',
        duration: '20 hrs Lesson',
        cost: 100,
    },
    {
        image: image1,
        name: 'Prof. John Doe',
        duration: '20 hrs Lesson',
        cost: 100,
    },
    {
        image: image1,
        name: 'Prof. John Doe',
        duration: '20 hrs Lesson',
        cost: 100,
    },
];

function TeacherList() {
    return (
        <div className='teacher-list'>
            <div className='list-header'>
                <h2>Teachers</h2>
                <select>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
            </div>
            <div className='list-container'>
                {Teachers.map((teachers)=>
                    <div className='list'>
                        <div className='teacher-details'>
                            <img src={teachers.image} alt={teachers.name}/>
                            <h2>{teachers.name}</h2>
                        </div>
                        <span>{teachers.duration}</span>
                        <span>{teachers.cost}</span>
                        <span className='teacher-todo'>:</span>
                    </div>
                )}
            </div>
        </div>
    )
}


export default TeacherList