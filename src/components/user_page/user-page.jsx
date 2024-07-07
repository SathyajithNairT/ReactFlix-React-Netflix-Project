import './user-page.css'
import Header from './header/header'
import Content from './content/content'
import MainBackground from './mainBackground/mainBackground'



function User_Page() {

    return (
        <div className='user-page-main-wrap d-flex flex-column'>
            <div className='user-page-header-wrap'>
                <Header />
            </div>
            <div className='user-page-mainbackground-wrap'>
                <MainBackground />
            </div>
            <div className='user-page-content-wrap d-flex flex-column'>
                <Content />
            </div>
        </div>
    )
}

export default User_Page