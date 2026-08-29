import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GitVsGithub from './components/GitVsGithub'
import GitBasics from './components/GitBasics'
import LearningRoadmap from './components/LearningRoadmap'
import GitWorkflow from './components/GitWorkflow'
import PlaygroundPreview from './components/PlaygroundPreview'
import CommandPreview from './components/CommandPreview'
import Footer from './components/Footer'
import './App.css'
import './workflow.css'

function App() {
  return <div className="site-shell"><Navbar /><main><Hero /><GitVsGithub /><GitBasics /><LearningRoadmap /><GitWorkflow /><PlaygroundPreview /><CommandPreview /></main><Footer /></div>
}

export default App
