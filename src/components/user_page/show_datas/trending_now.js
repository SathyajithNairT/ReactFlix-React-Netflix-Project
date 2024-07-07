import { ShuffleGenreList } from "./utils"


const TrendingNow = [

    {
        "id": 786892,
        "title": "Furiosa: A Mad Max Saga",
        "rating": 7.714,
        "overview": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
        "poster": "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
        "banner": "https://image.tmdb.org/t/p/original/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 1022789,
        "title": "Inside Out 2",
        "rating": 7.716,
        "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
        "poster": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
        "banner": "https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg",
        "genre": [
            {
                "id": 12,
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
        "id": 639720,
        "title": "IF",
        "rating": 7.41,
        "overview": "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up.",
        "poster": "https://image.tmdb.org/t/p/w500/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
        "banner": "https://image.tmdb.org/t/p/original/nxxCPRGTzxUH8SFMrIsvMmdxHti.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 10751,
                "name": "Family"
            },
            {
                "id": 14,
                "name": "Fantasy"
            }
        ]
    },
    {
        "id": 1086747,
        "title": "The Watchers",
        "rating": 6.475,
        "overview": "A young artist gets stranded in an extensive, immaculate forest in western Ireland, where, after finding shelter, she becomes trapped alongside three strangers, stalked by mysterious creatures each night.",
        "poster": "https://image.tmdb.org/t/p/w500/vZVEUPychdvZLrTNwWErr9xZFmu.jpg",
        "banner": "https://image.tmdb.org/t/p/original/whnFKx0Y54Ktg6o2TiwbnQfXdZf.jpg",
        "genre": [
            {
                "id": 14,
                "name": "Fantasy"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 9648,
                "name": "Mystery"
            }
        ]
    },
    {
        "id": 762441,
        "title": "A Quiet Place: Day One",
        "rating": 7,
        "overview": "As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive.",
        "poster": "https://image.tmdb.org/t/p/w500/yrpPYKijwdMHyTGIOd1iK1h0Xno.jpg",
        "banner": "https://image.tmdb.org/t/p/original/6XjMwQTvnICBz6TguiDKkDVHvgS.jpg",
        "genre": [
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    },
    {
        "id": 508883,
        "title": "The Boy and the Heron",
        "rating": 7.48,
        "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
        "poster": "https://image.tmdb.org/t/p/w500/jDQPkgzerGophKRRn7MKm071vCU.jpg",
        "banner": "https://image.tmdb.org/t/p/original/75nSb1fbWooipwcSU5bUttiOriI.jpg",
        "genre": [
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 14,
                "name": "Fantasy"
            }
        ]
    },
    {
        "id": 704673,
        "title": "Trigger Warning",
        "rating": 5.746,
        "overview": "A Special Forces commando uncovers a dangerous conspiracy when she returns to her hometown looking for answers into her beloved father's death.",
        "poster": "https://image.tmdb.org/t/p/w500/6XJM3C47iGOK9nFU6yLFCSf4U5c.jpg",
        "banner": "https://image.tmdb.org/t/p/original/aATi2PtaOQCVAquCym6OU0Z4FjY.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    },
    {
        "id": 519182,
        "title": "Despicable Me 4",
        "rating": 8.485,
        "overview": "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, and the family is forced to go on the run.",
        "poster": "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
        "banner": "https://image.tmdb.org/t/p/original/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
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
        "id": 823464,
        "title": "Godzilla x Kong: The New Empire",
        "rating": 7.216,
        "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
        "poster": "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
        "banner": "https://image.tmdb.org/t/p/original/jvPMJ2zM92jfXxVEFsqP1MMrLaO.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 987686,
        "title": "A Family Affair",
        "rating": 6.26,
        "overview": "The only thing worse than being the assistant to a high-maintenance movie star who doesn't take you seriously? Finding out he's smitten with your mom.",
        "poster": "https://image.tmdb.org/t/p/w500/l0CaVyqnTsWwNd4hWsrLNEk1Wjd.jpg",
        "banner": "https://image.tmdb.org/t/p/original/ngLxW9WqQAkTCBTcjOSt2Pnz5qZ.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 10749,
                "name": "Romance"
            }
        ]
    },
    {
        "id": 693134,
        "title": "Dune: Part Two",
        "rating": 8.168,
        "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
        "poster": "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        "banner": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        "genre": [
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 974635,
        "title": "Hit Man",
        "rating": 7.049,
        "overview": "A mild-mannered professor moonlighting as a fake hit man in police stings ignites a chain reaction of trouble when he falls for a potential client.",
        "poster": "https://image.tmdb.org/t/p/w500/1126gjlBf4hTm9Sgf0ox3LGVEBt.jpg",
        "banner": "https://image.tmdb.org/t/p/original/nv6F6tz7r61DUhE7zgHwLJFcTYp.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 10749,
                "name": "Romance"
            }
        ]
    },
    {
        "id": 573435,
        "title": "Bad Boys: Ride or Die",
        "rating": 6.995,
        "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
        "poster": "https://image.tmdb.org/t/p/w500/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
        "banner": "https://image.tmdb.org/t/p/original/gRApXuxWmO2forYTuTmcz5RaNUV.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 80,
                "name": "Crime"
            }
        ]
    },
    {
        "id": 150540,
        "title": "Inside Out",
        "rating": 7.914,
        "overview": "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
        "poster": "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
        "banner": "https://image.tmdb.org/t/p/original/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
        "genre": [
            {
                "id": 12,
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
        "id": 533535,
        "title": "Deadpool & Wolverine",
        "rating": 0,
        "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        "poster": "https://image.tmdb.org/t/p/w500/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg",
        "banner": "https://image.tmdb.org/t/p/original/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 746036,
        "title": "The Fall Guy",
        "rating": 7.276,
        "overview": "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
        "poster": "https://image.tmdb.org/t/p/w500/aBkqu7EddWK7qmY4grL4I6edx2h.jpg",
        "banner": "https://image.tmdb.org/t/p/original/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 35,
                "name": "Comedy"
            }
        ]
    },
    {
        "id": 929590,
        "title": "Civil War",
        "rating": 7,
        "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
        "poster": "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
        "banner": "https://image.tmdb.org/t/p/original/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10752,
                "name": "War"
            }
        ]
    },
    {
        "id": 967847,
        "title": "Ghostbusters: Frozen Empire",
        "rating": 6.7,
        "overview": "When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
        "poster": "https://image.tmdb.org/t/p/w500/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
        "banner": "https://image.tmdb.org/t/p/original/1r1dWa9yf1LeSLfkOfkSqxmWHdK.jpg",
        "genre": [
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 14,
                "name": "Fantasy"
            }
        ]
    },
    {
        "id": 76341,
        "title": "Mad Max: Fury Road",
        "rating": 7.6,
        "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
        "poster": "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
        "banner": "https://image.tmdb.org/t/p/original/gqrnQA6Xppdl8vIb2eJc58VC1tW.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 1214509,
        "title": "In a Violent Nature",
        "rating": 5.8,
        "overview": "The enigmatic resurrection, rampage, and retribution of an undead monster in a remote wilderness unleashes an iconic new killer after a locket is removed from a collapsed fire tower that entombed its rotting corpse.",
        "poster": "https://image.tmdb.org/t/p/w500/o5pcDZaA9Up0X612os34JNCRX6j.jpg",
        "banner": "https://image.tmdb.org/t/p/original/h7V8yzSnPYkNEvAqmeYHcfJ6rbk.jpg",
        "genre": [
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    }
]

ShuffleGenreList(TrendingNow)

export default TrendingNow