import React from 'react'
import Cards from '../cards/Cards'
import Table from '../Table/Table'
import './MainDash.css'

const MainDash = () => {
  return (
    <div className="mainDash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDash