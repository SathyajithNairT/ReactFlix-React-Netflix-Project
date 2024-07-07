import './home.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Sign_In from '../sign_in_page/sign-in'
import User_Page from '../user_page/user-page'


function Home() {
    return (
        <div className='home-wrap d-flex flex-column'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Sign_In />}/>
                    <Route path='/user' element={<User_Page />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home