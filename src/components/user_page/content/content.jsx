import './content.css'

import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import Action from '../show_datas/action'
import Animation from '../show_datas/animation'
import Comedies from '../show_datas/comedies'
import Drama from '../show_datas/drama'
import Horror from '../show_datas/horror'
import MysteryMovies from '../show_datas/mystry_movies'
import OnlyOnNetflix from '../show_datas/only_on_netflix'
import PopularOnNetflix from '../show_datas/popular_TV_shows'
import Top10 from '../show_datas/top_10'
import TrendingNow from '../show_datas/trending_now'
import TvScifiAndHorror from '../show_datas/tv_scifi_and_horror'
import { useState } from 'react';



function Content() {

    const [showDetailedInfoVisible, setShowDetailedInfoVisible] = useState(false)
    const [detailedInfoContent, setDetailedInfoContent] = useState(Action[1])

    const show_genres = [
        {
            genre: PopularOnNetflix,
            genre_heading: 'Popular On Netflix'
        },
        {
            genre: Horror,
            genre_heading: 'Horror Movies'
        },
        {
            genre: OnlyOnNetflix,
            genre_heading: 'Only On Netflix'
        },
        {
            genre: TrendingNow,
            genre_heading: 'Trending Now'
        },
        {
            genre: Comedies,
            genre_heading: 'Comedies'
        },
        {
            genre: Top10,
            genre_heading: 'Top 10 In India Today'
        },
        {
            genre: Action,
            genre_heading: 'Action'
        },
        {
            genre: TvScifiAndHorror,
            genre_heading: 'TV Sci-Fi And Horror'
        },
        {
            genre: MysteryMovies,
            genre_heading: 'Mystery Movies'
        },
        {
            genre: Animation,
            genre_heading: 'Animation'
        },
        {
            genre: Drama,
            genre_heading: 'Drama'
        }

    ]
    

    function toggleDetailedInfo(show) {
        setDetailedInfoContent(show)
        setShowDetailedInfoVisible(!showDetailedInfoVisible)
    }


    return (
        <div className='content-wrap'>
            {show_genres.map((genre_object, index) => (
                <div className={genre_object.genre == OnlyOnNetflix ? 'show-genre-wrap only-on-netflix-height' : 'show-genre-wrap'} key={index} style={genre_object.genre == PopularOnNetflix ? { marginTop: '0rem' } : {}}>
                    <div className='genre-heading'>
                        {genre_object.genre_heading}
                    </div>
                    <div className='show-list d-flex'>
                        {genre_object.genre.map((show, index) => (
                            <div className={genre_object.genre == OnlyOnNetflix ? 'show-poster-wrap' : 'show-banner-wrap'} key={index}>
                                <img src={genre_object.genre == OnlyOnNetflix ? show.poster : show.banner} alt="" className={genre_object.genre == OnlyOnNetflix ? 'show-poster-img' : 'show-banner-img'} />
                                <div className='show-card-info flex-column'>
                                    <div className='show-card-info-btn-wrap d-flex justify-content-between'>
                                        <div className='show-card-info-left-btn-group'>
                                            <button className='show-card-info-btn' style={{ color: 'black', backgroundColor: 'white' }}><FaPlay /></button>
                                            <button className='show-card-info-btn'><FaPlus /></button>
                                            <button className='show-card-info-btn'><AiOutlineLike /></button>
                                            <button className='show-card-info-btn'><AiOutlineDislike /></button>
                                        </div>
                                        <div className='show-card-info-right-btn-group'>
                                            <button className='show-card-info-btn' onClick={() => toggleDetailedInfo(show)}><IoIosArrowDown /></button>
                                        </div>
                                    </div>
                                    <div className='show-card-show-name'>
                                        {show.title}
                                    </div>
                                    <div className='show-card-show-rating'>
                                        Rating: {show.rating}
                                    </div>
                                    <div className='show-card-show-genre'>
                                        {show.genre.map(item => (
                                            `${item.name} . `
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='show-card-detailed-info-wrap d-flex justify-content-center align-items-center' style={showDetailedInfoVisible ? { display: 'flex' } : { display: 'none' }}>
                <div className='show-card-detailed-info'>
                    <div className='show-card-detailed-info-img-wrap'>
                        <img src={detailedInfoContent.banner} alt="" className='show-card-detailed-info-img' />
                    </div>
                    <div className='show-card-detailed-info-contents'>
                        <div className='show-card-detailed-info-show-name'>
                            {detailedInfoContent.title}
                        </div>
                        <div className='show-card-detailed-info-btn-wrap'>
                            <button className='main-background-btn'><FaPlay style={{ marginRight: '1rem' }} /> Play</button>
                            <button className='show-card-info-btn show-card-detailed-info-btn-background'><FaPlus /></button>
                            <button className='show-card-info-btn show-card-detailed-info-btn-background'><AiOutlineLike /></button>
                            <button className='show-card-info-btn show-card-detailed-info-btn-background'><AiOutlineDislike /></button>
                        </div>
                        <div className='show-card-detailed-info-rating'>
                            Rating: {detailedInfoContent.rating}
                        </div>
                        <div className='show-card-detailed-info-show-description d-flex justify-content-between align-items-center'>
                            <div className='show-card-detailed-info-show-overview'>
                                {detailedInfoContent.overview}
                            </div>
                            <div className='show-card-detailed-info-show-genre d-flex'>
                                <span style={{ color: 'gray', marginRight: '0.5rem', fontSize: '1.1rem' }}>Genre: </span> {detailedInfoContent.genre.map(item => (
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

export default Content