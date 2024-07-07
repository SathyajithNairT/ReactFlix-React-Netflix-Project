import { ShuffleGenreList } from "./utils"


const OnlyOnNetflix = [
    {
        "id": 91239,
        "title": "Bridgerton",
        "rating": 8.137,
        "overview": "Wealth, lust, and betrayal set in the backdrop of Regency era England, seen through the eyes of the powerful Bridgerton family.",
        "poster": "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",
        "banner": "https://image.tmdb.org/t/p/original/tdlHJ8KoOd9UgUygCWQ3fKRNkAR.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 66732,
        "title": "Stranger Things",
        "rating": 8.611,
        "overview": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
        "poster": "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
        "banner": "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
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
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 63174,
        "title": "Lucifer",
        "rating": 8.47,
        "overview": "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
        "poster": "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
        "banner": "https://image.tmdb.org/t/p/original/aDBRtunw49UF4XmqfyNuD9nlYIu.jpg",
        "genre": [
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 77169,
        "title": "Cobra Kai",
        "rating": 8.212,
        "overview": "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.",
        "poster": "https://image.tmdb.org/t/p/w500/m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
        "banner": "https://image.tmdb.org/t/p/original/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
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
        "id": 38472,
        "title": "Marvel's Jessica Jones",
        "rating": 7.501,
        "overview": "After a tragic ending to her short-lived super hero stint, Jessica Jones is rebuilding her personal life and career as a detective who gets pulled into cases involving people with extraordinary abilities in New York City.",
        "poster": "https://image.tmdb.org/t/p/w500/lwPFyjxAZY6NqHxywgY00Y4MFBx.jpg",
        "banner": "https://image.tmdb.org/t/p/original/fjEOQhzZk2Or7VYUBeMx5ZIwU95.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
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
        "id": 71912,
        "title": "The Witcher",
        "rating": 8.076,
        "overview": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        "poster": "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
        "banner": "https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 78191,
        "title": "You",
        "rating": 8.055,
        "overview": "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        "poster": "https://image.tmdb.org/t/p/w500/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",
        "banner": "https://image.tmdb.org/t/p/original/2ZNFu0hkSVtAI6LRWGIlCPNd1Tj.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 103768,
        "title": "Sweet Tooth",
        "rating": 7.86,
        "overview": "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.",
        "poster": "https://image.tmdb.org/t/p/w500/dBxxtfhC4vYrxB2fLsSxOTY2dQc.jpg",
        "banner": "https://image.tmdb.org/t/p/original/xpba0Dxz3sxV3QgYLR8UIe1LAAX.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 69740,
        "title": "Ozark",
        "rating": 8.209,
        "overview": "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
        "poster": "https://image.tmdb.org/t/p/w500/m73bD8VjibSKuTWg597GQVyVhSb.jpg",
        "banner": "https://image.tmdb.org/t/p/original/gD830J0sf5gEeZvzkRVPdGxJmSR.jpg",
        "genre": [
            {
                "id": 80,
                "name": "Crime"
            },
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 79696,
        "title": "Manifest",
        "rating": 7.697,
        "overview": "After landing from a turbulent but routine flight, the crew and passengers of Montego Air Flight 828 discover five years have passed in what seemed like a few hours. As their new realities become clear, a deeper mystery unfolds and some of the returned passengers soon realize they may be meant for something greater than they ever thought possible.",
        "poster": "https://image.tmdb.org/t/p/w500/eTemCphrglLKrXOsNRhYezHA7H9.jpg",
        "banner": "https://image.tmdb.org/t/p/original/iZu83GB1IM7VXL2X90m7iLHYUHU.jpg",
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
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 2328,
        "title": "Power Rangers",
        "rating": 7.033,
        "overview": "A team of teenagers with attitude are recruited to save Angel Grove from the evil witch, Rita Repulsa, and later, Lord Zedd, Emperor of all he sees, and their horde of monsters.",
        "poster": "https://image.tmdb.org/t/p/w500/qx3SJlAp2RK656TusqKx1qEqVMW.jpg",
        "banner": "https://image.tmdb.org/t/p/original/i01wnWz0Z3rMATqbkAVLHEaGbNP.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
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
        "id": 228958,
        "title": "Joko Anwar's Nightmares and Daydreams",
        "rating": 6.643,
        "overview": "Tales of supernatural sci-fi phenomena unfold in this collection of seven mind-bending, interconnected stories imagined by writer-director Joko Anwar.",
        "poster": "https://image.tmdb.org/t/p/w500/rMKc9TrrHGpmWmWTU6rHX4he5wo.jpg",
        "banner": "https://image.tmdb.org/t/p/original/aiCSg8b7qYFe6lfBsxfljDJ5xGx.jpg",
        "genre": [
            {
                "id": 9648,
                "name": "Mystery"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 67026,
        "title": "Designated Survivor",
        "rating": 7.139,
        "overview": "Tom Kirkman, a low-level cabinet member is suddenly appointed President of the United States after a catastrophic attack during the State of the Union kills everyone above him in the Presidential line of succession.",
        "poster": "https://image.tmdb.org/t/p/w500/5R125JAIh1N38pzHp2dRsBpOVNY.jpg",
        "banner": "https://image.tmdb.org/t/p/original/8UVzqlBMG3azowsi7f8lqZwhcBZ.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10768,
                "name": "War & Politics"
            }
        ]
    },
    {
        "id": 1424,
        "title": "Orange Is the New Black",
        "rating": 7.667,
        "overview": "A crime she committed in her youthful past sends Piper Chapman to a women's prison, where she trades her comfortable New York life for one of unexpected camaraderie and conflict in an eccentric group of fellow inmates.",
        "poster": "https://image.tmdb.org/t/p/w500/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg",
        "banner": "https://image.tmdb.org/t/p/original/z8Mg3YVZGd1iSnoDinEAoh9WTck.jpg",
        "genre": [
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
        "id": 76669,
        "title": "Elite",
        "rating": 8.045,
        "overview": "When three working class kids enroll in the most exclusive school in Spain, the clash between the wealthy and the poor students leads to tragedy.",
        "poster": "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
        "banner": "https://image.tmdb.org/t/p/original/uU6YW3N11qECNfz18LNGAGg3Uir.jpg",
        "genre": [
            {
                "id": 80,
                "name": "Crime"
            },
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
        "id": 63333,
        "title": "The Last Kingdom",
        "rating": 8.259,
        "overview": "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
        "poster": "https://image.tmdb.org/t/p/w500/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
        "banner": "https://image.tmdb.org/t/p/original/QbtctI8EzlhsyFDMUMyG3fli8B.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10768,
                "name": "War & Politics"
            }
        ]
    },
    {
        "id": 116135,
        "title": "Vikings: Valhalla",
        "rating": 7.781,
        "overview": "In this sequel to \"Vikings,\" a hundred years have passed and a new generation of legendary heroes arises to forge its own destiny — and make history.",
        "poster": "https://image.tmdb.org/t/p/w500/uCr7Ov7Rpzx0c0EPqbPcoEruTYl.jpg",
        "banner": "https://image.tmdb.org/t/p/original/k47JEUTQsSMN532HRg6RCzZKBdB.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10768,
                "name": "War & Politics"
            }
        ]
    },
    {
        "id": 75006,
        "title": "The Umbrella Academy",
        "rating": 8.571,
        "overview": "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.",
        "poster": "https://image.tmdb.org/t/p/w500/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg",
        "banner": "https://image.tmdb.org/t/p/original/7sqFEDDmK1hG5m92upolcfQxy7R.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 242876,
        "title": "Raising Voices",
        "rating": 7.857,
        "overview": "When a 17-year-old reports a sexual assault at her high school, an investigation upends her life and tests her relationships.",
        "poster": "https://image.tmdb.org/t/p/w500/lCU77Jp0iWN2e1WuSJvR7M35ebN.jpg",
        "banner": "https://image.tmdb.org/t/p/original/ieiq46OoeTrLkjtclmhii6iRyzP.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    }
]

ShuffleGenreList(OnlyOnNetflix)

export default OnlyOnNetflix