import './header.css'
import { FaSearch, FaBell } from "react-icons/fa"
import { CgProfile } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";


function Header() {
    return (
        <div className='header-main-wrap d-flex justify-content-between align-items-center'>
            <div className='header-left-wrap d-flex align-items-center'>
                <div className='header-logo d-flex align-items-center'></div>
                <div className='header-navigation-wrap d-flex'>
                    <div className='header-navigation'>Home</div>
                    <div className='header-navigation'>TV Shows</div>
                    <div className='header-navigation'>Movies</div>
                    <div className='header-navigation'>New & Popular</div>
                    <div className='header-navigation'>My List</div>
                </div>
                <div className='header-navigation-collapse justify-content-center align-items-center'>
                    Browse <MdArrowDropDown />
                </div>
            </div>
            <div className='header-right-wrap d-flex align-items-center'>
                <div className='header-icon'><FaSearch /></div>
                <div className='header-icon'><FaBell /></div>
                <div className='header-icon header-profile-icon d-flex justify-content-center align-items-center'><CgProfile /></div>
            </div>
        </div>
    )
}

export default Header