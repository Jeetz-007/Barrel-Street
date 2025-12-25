import { 
        createBrowserRouter,
        createRoutesFromElements,
        Route,
        RouterProvider
} from 'react-router-dom'

// Pages
import Home from "./pages/Home.jsx"    
import About from "./pages/About.jsx"
import Menu from "./pages/Menu.jsx"
import Contact from "./pages/Contact.jsx"

// Components
import Layout from "./components/Layout.jsx"


// style
import "./style/Layout.css"
import "./style/Home.css"
import "./style/About.css"
import "./style/Menu.css"
import "./style/Contact.css"
import "./style/Footer.css"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />  
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu /> }/>
      <Route path="contact" element={<Contact />} />
    </Route> 
)
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
