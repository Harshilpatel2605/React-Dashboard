import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function ContentHeader() {
    return (
        <div className='content-header'>
            <h1 className='header-title'>Dashboard</h1>
            <div className='header-activity'>
                <div className='search-box'>
                    <input type='text' placeholder='Search here..'/>
                    <SearchIcon className='icon'/>
                </div>
                <div className='notify'>
                    <NotificationsNoneIcon className='icon'/>
                </div>
            </div>
        </div>
    )
}


export default ContentHeader