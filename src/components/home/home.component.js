import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Input } from 'antd'
import { Card } from 'antd'
import './home.style.css'
import SearchComponent from '../searchbar/search.component'

const gridStyle = {
  width: '30%',
  hoverable: true,
}

const Search = Input.Search

const Home = () => {
  return (
    <div>
      <SearchComponent />
      <Card title="Astrophysics" bordered={false} width="240">
        <Card.Grid style={gridStyle}>
          On Stochastic Effects and Primordial Black-Hole Formation
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          On Stochastic Effects and Primordial Black-Hole Formation
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          On Stochastic Effects and Primordial Black-Hole Formation
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          On Stochastic Effects and Primordial Black-Hole Formation
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          On Stochastic Effects and Primordial Black-Hole Formation
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          On Stochastic Effects and Primordial Black-Hole Formation
        </Card.Grid>
      </Card>
      ,
      <br />
      <Card title="Condensed Matter" bordered={false}>
        <Card.Grid style={gridStyle}>
          Onset of synchronization in networks of second-order Kuramoto
          oscillators with delayed coupling: Exact results and application to
          phase-locked loops
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Onset of synchronization in networks of second-order Kuramoto
          oscillators with delayed coupling: Exact results and application to
          phase-locked loops
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Onset of synchronization in networks of second-order Kuramoto
          oscillators with delayed coupling: Exact results and application to
          phase-locked loops
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Onset of synchronization in networks of second-order Kuramoto
          oscillators with delayed coupling: Exact results and application to
          phase-locked loops
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Onset of synchronization in networks of second-order Kuramoto
          oscillators with delayed coupling: Exact results and application to
          phase-locked loops
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Onset of synchronization in networks of second-order Kuramoto
          oscillators with delayed coupling: Exact results and application to
          phase-locked loops
        </Card.Grid>
      </Card>
      ,
      <br />
      <Card title="General Relativity and Quantum Cosmology" bordered={false}>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>{' '}
      ,
      <br />
      <Card title="Nonlinear Sciences">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
      ,
      <br />
    </div>
  )
}

export default Home
