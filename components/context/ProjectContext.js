import React, { useContext, useState } from 'react'

const ProjectContext = React.createContext()

export function useProjectContext() {
  return useContext(ProjectContext)
}

export function ProjectProvider({ children }) {
  const [project, setProject] = useState("")

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  )
}