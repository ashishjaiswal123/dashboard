import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'

import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)
  return (
    <div className="sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                sh<span>o</span>ps
            </span>
        </div>

        {/* menu */}
        <div className='menu'>
            {SidebarData.map((item,i) =>(
                <div className={selected===i ? 'menuItem active' : 'menuItem'} key={i}
                onClick={()=>setSelected(i)}
                >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            ))}

            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar