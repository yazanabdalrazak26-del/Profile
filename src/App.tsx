
import Portfolio from './Profile/Home/Portfolio'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Projects from './Profile/pages/Projects';
import Layout from './Profile/layout/Layout';
import AboutAndConatct from './Profile/sections/AboutAndConatct';


const router = createBrowserRouter([
  {
    path:'/', 
    element: <Layout/>,
    children:[
      {index: true , element: <Portfolio/>},
      {path:'about' , element: <AboutAndConatct/>},
      {path:'/projects/:id', element: <Projects/>}
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
