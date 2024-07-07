import { ShuffleGenreList } from "./utils"


const MysteryMovies = [

    {
        "id": 1001311,
        "title": "Under Paris",
        "rating": 6.029,
        "overview": "In the Summer of 2024, Paris is hosting the World Triathlon Championships on the Seine for the first time. Sophia, a brilliant scientist, learns from Mika, a young environmental activist, that a large shark is swimming deep in the river. To avoid a bloodbath at the heart of the city, they have no choice but to join forces with Adil, the Seine river police commander.",
        "poster": "https://image.tmdb.org/t/p/w500/qZPLK5ktRKa3CL4sKRZtj8UlPYc.jpg",
        "banner": "https://image.tmdb.org/t/p/original/iTWrsOVsUqcwYSxrpINNs3hG2nC.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
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
        "id": 1041613,
        "title": "Immaculate",
        "rating": 6.3,
        "overview": "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
        "poster": "https://image.tmdb.org/t/p/w500/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
        "banner": "https://image.tmdb.org/t/p/original/5Eip60UDiPLASyKjmHPMruggTc4.jpg",
        "genre": [
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    },
    {
        "id": 414906,
        "title": "The Batman",
        "rating": 7.678,
        "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        "banner": "https://image.tmdb.org/t/p/original/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
        "genre": [
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    },
    {
        "id": 720321,
        "title": "Breathe",
        "rating": 5.3,
        "overview": "Air-supply is scarce in the near future, forcing a mother and daughter to fight for survival when two strangers arrive desperate for an oxygenated haven.",
        "poster": "https://image.tmdb.org/t/p/w500/wTW2t8ocWDlHns8I7vQxuqkyK58.jpg",
        "banner": "https://image.tmdb.org/t/p/original/sHJTUdNOxy77MfiwtVIqHxCB2W.jpg",
        "genre": [
            {
                "id": 9648,
                "name": "Mystery"
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
        "id": 996154,
        "title": "Black Lotus",
        "rating": 6.5,
        "overview": "An ex-special forces operative wages a one man war through the streets of Amsterdam to rescue his friend's daughter from the local crime syndicate.",
        "poster": "https://image.tmdb.org/t/p/w500/y3AeW200hqGLxoPyHMDHpzudylz.jpg",
        "banner": "https://image.tmdb.org/t/p/original/hvqNAz3cq48sh9GKxu4lPiogfBo.jpg",
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
                "id": 9648,
                "name": "Mystery"
            }
        ]
    },
    {
        "id": 141,
        "title": "Donnie Darko",
        "rating": 7.78,
        "overview": "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
        "poster": "https://image.tmdb.org/t/p/w500/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg",
        "banner": "https://image.tmdb.org/t/p/original/msCHK5Kh1YbdZ0zPJ2nzPUhhSN9.jpg",
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
                "id": 9648,
                "name": "Mystery"
            }
        ]
    },
    {
        "id": 634521,
        "title": "The Promised Neverland",
        "rating": 7.5,
        "overview": "A number of children are being well fed, taken care of, and pampered at a very meticulate and managed orphanage. The facility and grounds are impressive, but the wall acting as a barrier is high. There is a secret to the place and once revealed to several orphans, they're desperate to escape.",
        "poster": "https://image.tmdb.org/t/p/w500/7tMAledkia9p72zON1nLRlyfHO7.jpg",
        "banner": "https://image.tmdb.org/t/p/original/iy08wTsqcWYT2PFTEWFYcxepLeB.jpg",
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
                "id": 14,
                "name": "Fantasy"
            }
        ]
    },
    {
        "id": 62,
        "title": "2001: A Space Odyssey",
        "rating": 8.076,
        "overview": "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
        "poster": "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
        "banner": "https://image.tmdb.org/t/p/original/w5IDXtifKntw0ajv2co7jFlTQDM.jpg",
        "genre": [
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 838209,
        "title": "Exhuma",
        "rating": 7.505,
        "overview": "After tracing the origin of a disturbing supernatural affliction to a wealthy family's ancestral gravesite, a team of paranormal experts relocates the remains—and soon discovers what happens to those who dare to mess with the wrong grave.",
        "poster": "https://image.tmdb.org/t/p/w500/pQYHouPsDw32FhDLr7E3jmw0WTk.jpg",
        "banner": "https://image.tmdb.org/t/p/original/aINel9503ompOlGKn4sIVMg09Un.jpg",
        "genre": [
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    },
    {
        "id": 198663,
        "title": "The Maze Runner",
        "rating": 7.183,
        "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
        "poster": "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg",
        "banner": "https://image.tmdb.org/t/p/original/eTlcNXGv32zkVI7ZDHhfeaKHXKQ.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 1279433,
        "title": "Inheritance",
        "rating": 5.611,
        "overview": "When their rich uncle passes, his mansion of intricate puzzles becomes the backdrop for his estranged family's quest to secure a portion of his wealth.",
        "poster": "https://image.tmdb.org/t/p/w500/A4UklDW0DYytzK5aydQIM3vw4dL.jpg",
        "banner": "https://image.tmdb.org/t/p/original/dYGJ9cI3pUjCUITfxxsO5kEGKTF.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 9648,
                "name": "Mystery"
            }
        ]
    },
    {
        "id": 1111966,
        "title": "Mercy",
        "rating": 6.289,
        "overview": "An ex-military doctor finds herself in a deadly battle for survival when the Irish mafia seize control of the hospital at which she works. When her son is taken hostage, she is forced to rely upon her battle-hardened past and lethal skills after realizing there’s no one left to save the day but her.",
        "poster": "https://image.tmdb.org/t/p/w500/8voINwqMlscROrjhN97fGkmhvEV.jpg",
        "banner": "https://image.tmdb.org/t/p/original/lUlz0oE3zhAku7QvGoDJCeaFuiO.jpg",
        "genre": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 53,
                "name": "Thriller"
            }
        ]
    },
    {
        "id": 15,
        "title": "Citizen Kane",
        "rating": 8.009,
        "overview": "Newspaper magnate Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
        "poster": "https://image.tmdb.org/t/p/w500/sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
        "banner": "https://image.tmdb.org/t/p/original/vVMh8NK0IqxiRdiEztHfClyRnNw.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 9648,
                "name": "Mystery"
            }
        ]
    },
    {
        "id": 507089,
        "title": "Five Nights at Freddy's",
        "rating": 7.631,
        "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        "poster": "https://image.tmdb.org/t/p/w500/nuv2CzJsG605LMZaifUigDyuOEO.jpg",
        "banner": "https://image.tmdb.org/t/p/original/7NRGAtu8E4343NSKwhkgmVRDINw.jpg",
        "genre": [
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
        "id": 126889,
        "title": "Alien: Covenant",
        "rating": 6.116,
        "overview": "The crew of the colony ship Covenant, bound for a remote planet on the far side of the galaxy, discovers what they think is an uncharted paradise but is actually a dark, dangerous world.",
        "poster": "https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
        "banner": "https://image.tmdb.org/t/p/original/2qluV8y79LnBBHaMpwewCjQ1Htk.jpg",
        "genre": [
            {
                "id": 27,
                "name": "Horror"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    },
    {
        "id": 329865,
        "title": "Arrival",
        "rating": 7.604,
        "overview": "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
        "poster": "https://image.tmdb.org/t/p/w500/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
        "banner": "https://image.tmdb.org/t/p/original/iTyh3hqTUjiRqQo8Uz1w1KtQti9.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ]
    }
]

ShuffleGenreList(MysteryMovies)

export default MysteryMovies