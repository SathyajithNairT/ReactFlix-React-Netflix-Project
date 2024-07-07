import { ShuffleGenreList } from "./utils"


const Drama = [
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
        "id": 1016346,
        "title": "MR-9: Do or Die",
        "rating": 6.586,
        "overview": "Masud Rana is a Secret Agent with code name MR-9 of the Bangladesh Counter Intelligence Agency",
        "poster": "https://image.tmdb.org/t/p/w500/geAWZUshBg4hS8TIeLOEhJbglpo.jpg",
        "banner": "https://image.tmdb.org/t/p/original/fZv4EldEPurSz0d2uVIoL4Sng8x.jpg",
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
                "id": 53,
                "name": "Thriller"
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
        "id": 1020896,
        "title": "Handling the Undead",
        "rating": 6.636,
        "overview": "On a hot summer day in Oslo, the dead mysteriously awaken, and three families are thrown into chaos when their deceased loved ones come back to them. Who are they, and what do they want?",
        "poster": "https://image.tmdb.org/t/p/w500/6XlHOx0JQNgYjuJ4YQKbrt4Gd4d.jpg",
        "banner": "https://image.tmdb.org/t/p/original/c2Gd2QwQx7IITMUoJgcckqMniqd.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
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
        "id": 1058638,
        "title": "Birth/Rebirth",
        "rating": 6.403,
        "overview": "A single mother and a childless morgue technician are bound together by their relationship to a little girl they have reanimated from the dead.",
        "poster": "https://image.tmdb.org/t/p/w500/zlEhsNfOKhbnfs5NTJ6zOZtoLBb.jpg",
        "banner": "https://image.tmdb.org/t/p/original/xBgfaCiDwfPH73p2VEo1O4tkHek.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
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
        "id": 1219685,
        "title": "An Ideal Father",
        "rating": 6.3,
        "overview": "Michel, the jovial owner of the only café in a small Normandy town, sees his life turned upside down when his teenage daughter is murdered. The community has his back but soon rumor spreads and Michel is singled out. From the ideal father, he becomes the ideal culprit.",
        "poster": "https://image.tmdb.org/t/p/w500/4xJd3uwtL1vCuZgEfEc8JXI9Uyx.jpg",
        "banner": "https://image.tmdb.org/t/p/original/iafs5DG5fGq7ef0acl3xlX4BFrs.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10770,
                "name": "TV Movie"
            }
        ]
    },
    {
        "id": 1012201,
        "title": "HAIKYU!! The Dumpster Battle",
        "rating": 7.1,
        "overview": "Shoyo Hinata joins Karasuno High's volleyball club to be like his idol, a former Karasuno player known as the 'Little Giant'. But Hinata soon learns that he must team up with his middle school nemesis, Tobio Kageyama. Their clashing styles form a surprising weapon, but can their newfound teamwork defeat their rival Nekoma High in the highly anticipated 'Dumpster Battle', the long awaited ultimate showdown between two opposing underdog teams?",
        "poster": "https://image.tmdb.org/t/p/w500/ntRU0OA4etGGiMMmH1Yw0bnaMdW.jpg",
        "banner": "https://image.tmdb.org/t/p/original/cZmOrIOkJ2SNfVdiO85dUbOAYnL.jpg",
        "genre": [
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
        "id": 1197830,
        "title": "Wild Eyed and Wicked",
        "rating": 4.6,
        "overview": "Lily Pierce is sick of being haunted. She decides to reconnect with her estranged father, a disgraced history professor, and learn how to draw upon a time of steel and blade when armor-clad knights rode out and dueled their monsters to the death.",
        "poster": "https://image.tmdb.org/t/p/w500/nJMNvYZ21bMdB2Pq0qCk88jnQc6.jpg",
        "banner": "https://image.tmdb.org/t/p/original/zs2S0D4sZMNbOKgs4LyZAxiX9eY.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 14,
                "name": "Fantasy"
            },
            {
                "id": 27,
                "name": "Horror"
            }
        ]
    },
    {
        "id": 447332,
        "title": "A Quiet Place",
        "rating": 7.398,
        "overview": "A family is forced to live in silence while hiding from creatures that hunt by sound.",
        "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        "banner": "https://image.tmdb.org/t/p/original/roYyPiQDQKmIKUEhO912693tSja.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 1010581,
        "title": "My Fault",
        "rating": 7.969,
        "overview": "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
        "poster": "https://image.tmdb.org/t/p/w500/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
        "banner": "https://image.tmdb.org/t/p/original/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10749,
                "name": "Romance"
            }
        ]
    },
    {
        "id": 872585,
        "title": "Oppenheimer",
        "rating": 8.092,
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "banner": "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 36,
                "name": "History"
            }
        ]
    },
    {
        "id": 467407,
        "title": "Kokoro to Karada",
        "rating": 7.7,
        "overview": "A few years ago,  when Tomomi (Hiroko Akune) was on the way home from school, she saw her friend Keiko (Misaki Mori) about to be raped by a man. Tomomi hit the man in the head with a stone and saved Keiko.  In the present, Keiko, has buried her past, sells her body in Tokyo. One day, Keiko is contacted by Tomomi. They haven't spoken since their high school graduation. They meet and Keiko lets Tomomi stay at her apartment. Soon, the bizarre lives of the two women begins, with Tomomi also selling her body.",
        "poster": "https://image.tmdb.org/t/p/w500/tJSNalCgcqfI8mbI5xFveJGTQDv.jpg",
        "banner": "https://image.tmdb.org/t/p/original/2d4AzxsouZz65rhM2igBTsz2hXr.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 660360,
        "title": "Noryang: Deadly Sea",
        "rating": 6.258,
        "overview": "The Imjin War reaches its seventh year in December of 1598. Admiral Yi Sun-shin learns that the Wa invaders in Joseon are preparing for a swift withdrawal following the deathbed orders of their leader Toyotomi Hideyoshi. Determined to destroy the enemy once and for all, Admiral Yi leads an allied fleet of Joseon and Ming ships to mount a blockade and annihilate the Wa army. However, once Ming commander Chen Lin is bribed into lifting the blockade, Wa lord Shimazu Yoshihiro and his Satsuma army sail to the Wa army’s rescue at Noryang Strait.",
        "poster": "https://image.tmdb.org/t/p/w500/wFAe7gA513Pi2meI4ECwf6YEKR1.jpg",
        "banner": "https://image.tmdb.org/t/p/original/ksZTspehDCC4PCZN8ci31pFT6yp.jpg",
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
                "id": 36,
                "name": "History"
            }
        ]
    },
    {
        "id": 858017,
        "title": "I Saw the TV Glow",
        "rating": 5.771,
        "overview": "Teenager Owen is just trying to make it through life in the suburbs when his classmate introduces him to a mysterious late-night TV show — a vision of a supernatural world beneath their own. In the pale glow of the television, Owen’s view of reality begins to crack.",
        "poster": "https://image.tmdb.org/t/p/w500/hS4GYkYpN1rfl4GIxyc02sCyfAj.jpg",
        "banner": "https://image.tmdb.org/t/p/original/sNBnCmF1ueoERa4uW5kh929KkRO.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 27,
                "name": "Horror"
            }
        ]
    },
    {
        "id": 59053,
        "title": "The Raffle",
        "rating": 6.656,
        "overview": "Struggling with a financial crisis, a good-looking widow decides to put herself up for grabs. However, going through with it becomes almost impossible with a new love and the legal system thrown into the mix.",
        "poster": "https://image.tmdb.org/t/p/w500/2Jc60w8ZemDMYqyJUStcQKy6syi.jpg",
        "banner": "https://image.tmdb.org/t/p/original/xGhwfRxTsP9VhDSNsfHqBcRvWKY.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 934632,
        "title": "Rebel Moon - Part Two: The Scargiver",
        "rating": 6.119,
        "overview": "The rebels gear up for battle against the ruthless forces of the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.",
        "poster": "https://image.tmdb.org/t/p/w500/cxevDYdeFkiixRShbObdwAHBZry.jpg",
        "banner": "https://image.tmdb.org/t/p/original/tpiqEVTLRz2Mq7eLq5DT8jSrp71.jpg",
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
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 405774,
        "title": "Bird Box",
        "rating": 6.841,
        "overview": "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
        "poster": "https://image.tmdb.org/t/p/w500/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
        "banner": "https://image.tmdb.org/t/p/original/pDKFL1zcHzEpmz4MJA5JJnRbJeD.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    },
    {
        "id": 32629,
        "title": "A Chinese Torture Chamber Story",
        "rating": 5.7,
        "overview": "A corrupt magistrate subjects a innocent young bride to inconceivable physical punishments after convicting her of killing her husband.",
        "poster": "https://image.tmdb.org/t/p/w500/esLJg26gpwQ6sLY5eQufVCLpljV.jpg",
        "banner": "https://image.tmdb.org/t/p/original/vAsO49PpEJQ9iZOMZsyINKY5mOs.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 27,
                "name": "Horror"
            }
        ]
    },
    {
        "id": 843527,
        "title": "The Idea of You",
        "rating": 7.398,
        "overview": "40-year-old single mom Solène begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet. As they begin a whirlwind romance, it isn't long before Hayes' superstar status poses unavoidable challenges to their relationship, and Solène soon discovers that life in the glare of his spotlight might be more than she bargained for.",
        "poster": "https://image.tmdb.org/t/p/w500/zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg",
        "banner": "https://image.tmdb.org/t/p/original/sI6uCeF8mUlZx22mFfHSi9W3XQ9.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10749,
                "name": "Romance"
            }
        ]
    },
    {
        "id": 949701,
        "title": "Inhuman Kiss: The Last Breath",
        "rating": 6.615,
        "overview": "Friends since childhood, two lonely outcasts longing to be loved meet again. However, they must subdue a bloodthirsty demon residing in one of them.",
        "poster": "https://image.tmdb.org/t/p/w500/1nG0NyRIJgDVlKHqrsJFWHMnyKo.jpg",
        "banner": "https://image.tmdb.org/t/p/original/eGKiMZtey0kPJZCJsSbIXe7l9r.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 10749,
                "name": "Romance"
            }
        ]
    }
]

ShuffleGenreList(Drama)

export default Drama