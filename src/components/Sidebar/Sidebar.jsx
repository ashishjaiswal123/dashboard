import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import {motion} from 'framer-motion'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)
    const [expanded, setExpanded] = useState(false)

    const sidebarvariants = {
        true:{
            left: '0'
        },
        false:{
            left: '-60%'
        }
    }

  return (
    <>
    <div className='bars' style={expanded ? {left: '60%'}: {left: '5%'}}
    onClick={()=>setExpanded(!expanded)}>
         <UilBars/>
    </div>
    <motion.div className="sidebar"
    variants={sidebarvariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
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
    </motion.div>
    </>
  )
}

export default Sidebar