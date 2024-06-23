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
              <Card index={projectData.index} name={projectData.name} description={projectData.description} />
              )
            })
          }
        </div>
    </div>
  )
}

export default Project