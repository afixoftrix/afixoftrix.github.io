import React from 'react'
import { ProjectPage } from '../../../Components/ProjectPage'

export const DesignAnalysis = ({ picture, title, date}) => {
  return (
    <ProjectPage picture={picture} title={title} date={date}>
      <div>
        this should work
      </div>
    </ProjectPage>
  )
}
