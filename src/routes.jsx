import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ErrorPage from "./components/Error";
import Navbar from './components/NavBar'

const routes=[
    {    
        path:'/',
        element: <Navbar/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                errorElement: <ErrorPage/>
            },
            {
                path:'shop',
                element: <Shop/>
            },
            {
                path:'cart',
                element: <Cart/>
            }
        ]
    }
]

export default routes