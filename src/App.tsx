
import Portfolio from './Profile/Home/Portfolio'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Projects from './Profile/pages/Projects';
import Layout from './Profile/layout/Layout';
import AboutSection from './Profile/sections/AboutSection';
import SkillsSection from './Profile/sections/SkillsSection';
import ExperienceSection from './Profile/sections/ExperienceSection';
import ContactSection from './Profile/sections/ContactSection';


const router = createBrowserRouter([
  {
    path:'/', 
    element: <Layout/>,
    children:[
      {index: true , element: <Portfolio/>},
      {path:'about' , element: <AboutSection/>},
      {path:'skills' , element: <SkillsSection/>},
      {path:'experience' , element: <ExperienceSection/>},
      {path:'contact', element: <ContactSection/>},
      {path:'/projects/:id', element: <Projects/>},
    ]
    
  },

  
])

function App() {

  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
