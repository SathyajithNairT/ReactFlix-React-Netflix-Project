import { ShuffleGenreList } from "./utils"


const Animation = [

    {
        "id": 4194,
        "title": "Star Wars: The Clone Wars",
        "rating": 8.472,
        "overview": "Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
        "poster": "https://image.tmdb.org/t/p/w500/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
        "banner": "https://image.tmdb.org/t/p/original/jjECb6dSFUKXDtryuQk4rkFY7oP.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 74204,
        "title": "Big Mouth",
        "rating": 7.705,
        "overview": "Teenage friends find their lives upended by the wonders and horrors of puberty in this edgy comedy from real-life pals Nick Kroll and Andrew Goldberg.",
        "poster": "https://image.tmdb.org/t/p/w500/v0WrnCkqwXAVhVOu0bGo5ljaZJV.jpg",
        "banner": "https://image.tmdb.org/t/p/original/uM6WJodeCyTp7h7NhE4rgd0RbRZ.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            }
        ]
    },
    {
        "id": 90855,
        "title": "SAINT SEIYA: Knights of the Zodiac",
        "rating": 7.426,
        "overview": "Seiya and the Knights of the Zodiac rise again to protect the reincarnation of the goddess Athena, but a dark prophecy hangs over them all.",
        "poster": "https://image.tmdb.org/t/p/w500/il9scUkw3q8bs1HGFotJhcPNo1J.jpg",
        "banner": "https://image.tmdb.org/t/p/original/lA3MKdT3QOrYGe5dg7Uzuceu8zZ.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 105248,
        "title": "Cyberpunk: Edgerunners",
        "rating": 8.557,
        "overview": "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
        "poster": "https://image.tmdb.org/t/p/w500/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg",
        "banner": "https://image.tmdb.org/t/p/original/gLlemMoIN4vbKvZvOWInWGxeQNL.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 155292,
        "title": "Scott Pilgrim Takes Off",
        "rating": 8.113,
        "overview": "Scott Pilgrim meets the girl of his dreams, Ramona Flowers, only to find out her seven evil exes stand in the way of their love.",
        "poster": "https://image.tmdb.org/t/p/w500/nHROk2C6bv8LqtvyYd0tCMURbxC.jpg",
        "banner": "https://image.tmdb.org/t/p/original/weo6T4zmgAhN7Jz9phX5sXHHcr5.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            }
        ]
    },
    {
        "id": 61222,
        "title": "BoJack Horseman",
        "rating": 8.553,
        "overview": "Meet the most beloved sitcom horse of the 90s - 20 years later. BoJack Horseman was the star of the hit TV show \"Horsin' Around,\" but today he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.",
        "poster": "https://image.tmdb.org/t/p/w500/pB9L0jAnEQLMKgexqCEocEW8TA.jpg",
        "banner": "https://image.tmdb.org/t/p/original/qFYDJUIFh8zgEDy3EvnHwhgOl0S.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 106393,
        "title": "Star Trek: Prodigy",
        "rating": 7.4,
        "overview": "A motley crew of young rebellious aliens commandeer an old Starfleet ship and must figure out how to work together while navigating a greater galaxy, in search for a better future. These six young outcasts know nothing about the ship they have commandeered, but over the course of their adventures together, they will each be introduced to Starfleet and the ideals it represents.",
        "poster": "https://image.tmdb.org/t/p/w500/hUzSjQYNZ1T0yiKDTzvxsTJR4of.jpg",
        "banner": "https://image.tmdb.org/t/p/original/gPPpVtiecs53znt0JLAzgFACABh.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10762,
                "name": "Kids"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 129600,
        "title": "Baki Hanma",
        "rating": 8.137,
        "overview": "To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.",
        "poster": "https://image.tmdb.org/t/p/w500/x145FSI9xJ6UbkxfabUsY2SFbu3.jpg",
        "banner": "https://image.tmdb.org/t/p/original/3Aj7j0xHXwGntChU1VaL9seBGIe.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            }
        ]
    },
    {
        "id": 86831,
        "title": "Love, Death & Robots",
        "rating": 8.264,
        "overview": "Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David Fincher.",
        "poster": "https://image.tmdb.org/t/p/w500/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg",
        "banner": "https://image.tmdb.org/t/p/original/78NtUwwo3lhH7QGh4vG3U1qK1mc.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 212989,
        "title": "LEGO Ninjago: Dragons Rising",
        "rating": 8,
        "overview": "Two teenagers from different worlds use their newly discovered Ninja powers to defend dragons from villains who want to use their life-force for evil.",
        "poster": "https://image.tmdb.org/t/p/w500/aUOgcqXVy7tSus5u6OJeB1pB8uL.jpg",
        "banner": "https://image.tmdb.org/t/p/original/p1P0QJ3cqeBnODfyQd2ceEZ23KQ.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10762,
                "name": "Kids"
            }
        ]
    },
    {
        "id": 71377,
        "title": "The Mr. Peabody & Sherman Show",
        "rating": 5.6,
        "overview": "The world's smartest dog and his boy host a zany late-night comedy show from a swanky penthouse, with time-traveling historical figures and a live audience.",
        "poster": "https://image.tmdb.org/t/p/w500/zEjmd6XiOUnuoSm6ISMjctz5nqa.jpg",
        "banner": "https://image.tmdb.org/t/p/original/3gurUoTME1Sa495LaLNJyN7T3AN.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 10751,
                "name": "Family"
            }
        ]
    },
    {
        "id": 103786,
        "title": "The Cuphead Show!",
        "rating": 7.919,
        "overview": "Follow the misadventures of the impulsive Cuphead and his cautious but persuadable brother Mugman in this animated series based on the hit video game.",
        "poster": "https://image.tmdb.org/t/p/w500/l6nGUyxKCi7ODvyfc8qQShliVEd.jpg",
        "banner": "https://image.tmdb.org/t/p/original/gcoKL5TC1MMDVvMS7mGGeym3mpd.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 10751,
                "name": "Family"
            }
        ]
    },
    {
        "id": 94605,
        "title": "Arcane",
        "rating": 8.748,
        "overview": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        "poster": "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
        "banner": "https://image.tmdb.org/t/p/original/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 211051,
        "title": "My Daemon",
        "rating": 8.303,
        "overview": "To save his mother, a kind-hearted boy and his tiny daemon friend set out on a journey across post-apocalyptic Japan as dark forces close in.",
        "poster": "https://image.tmdb.org/t/p/w500/5bWTE3CwBM6z8lew9BPykujeNwG.jpg",
        "banner": "https://image.tmdb.org/t/p/original/sWbzxsnLKWdBXvfGBkJIC5k9U00.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 73021,
        "title": "Disenchantment",
        "rating": 7.455,
        "overview": "Set in a ruined medieval city called Dreamland, Disenchantment follows the grubby adventures of a hard-drinking princess, her feisty elf companion and her personal demon.",
        "poster": "https://image.tmdb.org/t/p/w500/1WynayCqKRzrl4cFZR8NOfiDwd6.jpg",
        "banner": "https://image.tmdb.org/t/p/original/ucVRYtCYGRl4D3N23xLc1QRvZpV.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            }
        ]
    },
    {
        "id": 90660,
        "title": "Kengan Ashura",
        "rating": 8.355,
        "overview": "Since the Edo periods of Japan, gladiator arenas exist in certain areas. In these arenas, wealthy business owners and merchants hire gladiators to fight in unarmed combat where winner takes all. Toki Taouma, nicknamed \"Ashura,\" joins these arenas and devastates his opponents. His spectacular ability to crush his enemies catches the attention of the big business owners, including the Nogi Group chairman, Nogi Hideki.",
        "poster": "https://image.tmdb.org/t/p/w500/pgUnbZScsrfMJIJl43FKOL9sbhU.jpg",
        "banner": "https://image.tmdb.org/t/p/original/wJtrctuWTKgIi45zLw9tTjWQFY3.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            }
        ]
    },
    {
        "id": 64783,
        "title": "Dawn of the Croods",
        "rating": 7.4,
        "overview": "The world's first family is back for more laughs as they discover sports, sleepovers and other wonders in a world of exotic creatures and adventures. This 2D animated cartoon is based on the 3D animated feature film, \"The Croods\".",
        "poster": "https://image.tmdb.org/t/p/w500/cyCAsMLGECvEAFDfKcxcWy7YTOW.jpg",
        "banner": "https://image.tmdb.org/t/p/original/bVml4IQKIS5DfPqgDoaZoRLlxIY.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 35,
                "name": "Comedy"
            }
        ]
    },
    {
        "id": 90293,
        "title": "Ghost in the Shell: SAC_2045",
        "rating": 6.551,
        "overview": "After a global financial crisis, the world is engulfed in an AI-driven \"sustainable war.\" It's up to Section 9 to counter new forms of cyber threats.",
        "poster": "https://image.tmdb.org/t/p/w500/tPK8BER0Pyq68IGKHrTemGlxBV4.jpg",
        "banner": "https://image.tmdb.org/t/p/original/2L4ob76e1tp6fgMXgMD2BC2hSUT.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 93741,
        "title": "Jurassic World Camp Cretaceous",
        "rating": 8.022,
        "overview": "Six teens attending an adventure camp on the opposite side of Isla Nublar must band together to survive when dinosaurs wreak havoc on the island.",
        "poster": "https://image.tmdb.org/t/p/w500/nkCbCmlwjwT6QL44DqG7qE9ch8H.jpg",
        "banner": "https://image.tmdb.org/t/p/original/4WIglfr4lDFVjCEcXzCeu6cJsOh.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10762,
                "name": "Kids"
            }
        ]
    },
    {
        "id": 203704,
        "title": "Junji Ito Maniac: Japanese Tales of the Macabre",
        "rating": 6.9,
        "overview": "From the mind of horror manga maestro Junji Ito comes a spine-tingling selection of some of his most bizarre, disturbing and terrifying tales.",
        "poster": "https://image.tmdb.org/t/p/w500/eE3vyu2F8upsQujhS8IP7QiG8Hm.jpg",
        "banner": "https://image.tmdb.org/t/p/original/tI4A1Md9J5QHARl60TsMpekSsvg.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 9648,
                "name": "Mystery"
            }
        ]
    }
]

ShuffleGenreList(Animation)

export default Animation