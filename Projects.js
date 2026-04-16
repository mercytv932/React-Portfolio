
const Projects = () =>{
  return(
    <div className="projectsContainer">
      <h1>My Projects</h1>
      <div className="projectCard">
        <h3>Expense Tracker</h3>
        <p>Expense Tracker built with TypeScript. Track expenses by category, 
          filter by type, and view a running total.</p>
        <a href="https://github.com/mercytv932/Expense_Tracker">View on GitHub</a>
      </div>
      
      <div className="projectCard">
        <h3>Image Search App</h3>
        <p>Image search app built with JavaScript. Search for any image 
          using the Unsplash API and browse through results in real time.</p>
        <a href="https://github.com/mercytv932/Image_Search_App">View on GitHub</a>
      </div>
    </div>
  )
}

export default Projects;