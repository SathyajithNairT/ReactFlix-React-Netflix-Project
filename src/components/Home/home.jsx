import './home.css'
import { HashRouter, Router, Route, Routes } from 'react-router-dom'
import Sign_In from '../sign_in_page/sign-in'
import User_Page from '../user_page/user-page'


function Home() {
    return (
        <div className='home-wrap d-flex flex-column'>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Sign_In />}/>
                    <Route path='/user' element={<User_Page />}/>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Home