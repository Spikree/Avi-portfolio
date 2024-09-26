import React from 'react'
import './Project.css'
import { projectData } from '../../data/projects'
import Card from '../../components/card/Card'

const Project = () => {
  return (
    <div className='projects'>
        <div className="card-component">
          {
            projectData.map((projectData) => {
              return (
              <Card key={projectData.id} name={projectData.name} description={projectData.description} image={projectData.image} demo={projectData.demo} code={projectData.code}/>
              )
            })
          }
        </div>
        <p style={{textAlign:"center", fontSize:"20px", marginTop:"20px"}}>for more projects checkout my github</p>
    </div>
  )
}

export default Project