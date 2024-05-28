import React from 'react'
import ContentHeader from './ContentHeader'
import '../Styles/content.css'
import Card from './Card'
import TeacherList from './TeacherList'

function Content() {
    return (
        <div className='content'>
          <ContentHeader/>
          <Card/>
          <TeacherList/>
        </div>
    )
}


export default Content