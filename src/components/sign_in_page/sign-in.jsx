import './sign-in.css'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io"



function Sign_In() {

    const navigate = useNavigate()

    const handleSignIn = () => {
        navigate('/user')
    }

    return (
        <div className='sign-in-wrap d-flex justify-content-center align-items-center'>
            <div className='sign-in-form d-flex align-items-center justify-content-center flex-column'>
                <button className='get-started-btn mt-2 d-flex justify-content-center align-items-center' onClick={handleSignIn}>Get Started <IoIosArrowForward style={{marginLeft:'0.5rem'}}/></button>
            </div>
        </div>
    )
}

export default Sign_In