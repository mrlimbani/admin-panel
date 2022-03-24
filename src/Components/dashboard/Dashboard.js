import React from 'react'
import Navbar1 from './Navbar1'
import Section1 from './Section1'
import SidebarCom from './SidebarCom'

const Dashborad = () => {
    return (
        <React.Fragment>
            <Navbar1 />

            <div className='d-flex flex-row'>
                <SidebarCom />
                <Section1 />
            </div>

        </React.Fragment>
    )
}

export default Dashborad;
