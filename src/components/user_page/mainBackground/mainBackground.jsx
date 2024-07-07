import './mainBackground.css'
import { useState, useEffect } from 'react'

import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

import Action from '../show_datas/action'
import Comedies from '../show_datas/comedies'
import Drama from '../show_datas/drama'
import Horror from '../show_datas/horror'
import MysteryMovies from '../show_datas/mystry_movies'
import OnlyOnNetflix from '../show_datas/only_on_netflix'
import PopularOnNetflix from '../show_datas/popular_TV_shows'
import TrendingNow from '../show_datas/trending_now'
import TvScifiAndHorror from '../show_datas/tv_scifi_and_horror'


function MainBackground() {

    const [mainBackground, setMainBackground] = useState(Action[1])

    const [showDetailedInfoVisible, setShowDetailedInfoVisible] = useState(false)
    const [detailedInfoContent, setDetailedInfoContent] = useState(Action[1])

    const show_genres_main_background = [
        PopularOnNetflix,
        Horror,
        OnlyOnNetflix,
        TrendingNow,
        Comedies,
        Action,
        TvScifiAndHorror,
        MysteryMovies,
        Drama
    ]

    function toggleDetailedInfo(show) {
        setDetailedInfoContent(show)
        setShowDetailedInfoVisible(!showDetailedInfoVisible)
    }



    useEffect(() => {
        function updateBackgroundImage() {
            const random_genre_index = Math.floor(Math.random() * show_genres_main_background.length)
            const random_genre = show_genres_main_background[random_genre_index]
            const random_background_image_object_index = Math.floor(Math.random() * random_genre.length)
            const random_background_image_object = random_genre[random_background_image_object_index]
            setMainBackground(random_background_image_object)
        }

        updateBackgroundImage()

    }, [])

    return (
        <div className='user-page-main-background-content-wrap'>
            <div className='user-page-main-backgroundimage-wrap'>
                <img src={mainBackground.banner} alt="" className='userpage-mainbackground-img' />
            </div>
            <div className='main-background-content'>
                <div className='main-background-title'>
                    {mainBackground.title}
                </div>
                <div className='main-background-description'>
                    {mainBackground.overview}
                </div>
                <div className='main-background-btn-wrap'>
                    <button className='main-background-btn'><FaPlay style={{ marginRight: '0.8rem' }} /> Play</button>
                    <button className='main-background-btn main-background-moreinfo-btn' onClick={() => toggleDetailedInfo(mainBackground)}><MdOutlineInfo style={{ marginRight: '0.4rem' }} /> More Info</button>
                </div>
            </div>

            <div className='show-card-detailed-info-wrap d-flex justify-content-center align-items-center' style={showDetailedInfoVisible ? { display: 'flex' } : { display: 'none' }}>
                <div className='show-card-detailed-info'>
                    <div className='show-card-detailed-info-img-wrap'>
                        <img src={mainBackground.banner} alt="" className='show-card-detailed-info-img' />
                    </div>
                    <div className='show-card-detailed-info-contents'>
                        <div className='show-card-detailed-info-show-name'>
                            {mainBackground.title}
                        </div>
                        <div className='show-card-detailed-info-btn-wrap'>
                            <button className='main-background-btn'><FaPlay style={{ marginRight: '1rem' }} /> Play</button>
                            <button className='show-card-info-btn show-card-detailed-info-btn-background'><FaPlus /></button>
                            <button className='show-card-info-btn show-card-detailed-info-btn-background'><AiOutlineLike /></button>
                            <button className='show-card-info-btn show-card-detailed-info-btn-background'><AiOutlineDislike /></button>
                        </div>
                        <div className='show-card-detailed-info-rating'>
                            Rating: {mainBackground.rating}
                        </div>
                        <div className='show-card-detailed-info-show-description d-flex justify-content-between align-items-center'>
                            <div className='show-card-detailed-info-show-overview'>
                                {mainBackground.overview}
                            </div>
                            <div className='show-card-detailed-info-show-genre d-flex'>
                                <span style={{ color: 'gray', marginRight: '0.5rem', fontSize: '1.1rem' }}>Genre: </span> {mainBackground.genre.map(item => (
                                    `${item.name} . `
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='show-card-detailed-info-exit-btn-wrap d-flex justify-content-center align-items-center' onClick={() => toggleDetailedInfo(detailedInfoContent)}>
                        <RxCross2 />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MainBackground