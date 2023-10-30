import { useState } from "react";
import { v4 as Uuid } from "uuid";

import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function hadleAddProject(newProjectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...newProjectData,
        id: Uuid(),
      };

      console.log(newProject);

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={hadleAddProject}
        onCancelAddProject={handleCancelAddProject}
      />
    );
  } else {
    content = <NoProjectSelected onStartAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
