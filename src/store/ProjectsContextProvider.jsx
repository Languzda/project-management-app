import { createContext, useState } from "react";
import { v4 as Uuid } from "uuid";

export const ProjectsContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
  onAddTask: () => {},
  onDeleteTask: () => {},
  onSelectProject: () => {},
  onStartAddProject: () => {},
  onCancelAddProject: () => {},
  onAddProject: () => {},
  onDeleteProject: () => {},
});

const ProjectsContextProvider = ({ children }) => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Uuid(),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      const updatedTasks = prevState.tasks.filter((task) => task.id !== taskId);

      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleStartAddProject() {
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

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== projectId
      );

      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined,
      };
    });
  }

  const contextValue = {
    selectedProjectId: projectsState.selectedProjectId,
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    onAddTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
    onSelectProject: handleSelectProject,
    onStartAddProject: handleStartAddProject,
    onCancelAddProject: handleCancelAddProject,
    onAddProject: hadleAddProject,
    onDeleteProject: handleDeleteProject,
  };

  console.log(contextValue);

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
