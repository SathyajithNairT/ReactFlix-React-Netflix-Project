import { ShuffleGenreList } from "./utils"


const TvScifiAndHorror = [

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
        "id": 158141,
        "title": "Supacell",
        "rating": 6.5,
        "overview": "When five ordinary South Londoners discover they have extraordinary powers, it's down to one man to bring them together to save the woman he loves.",
        "poster": "https://image.tmdb.org/t/p/w500/iZsQBIobC1oKSBEX0XoWF598j7F.jpg",
        "banner": "https://image.tmdb.org/t/p/original/woMdg6s2RKhf2VEBCBJDkyWfVW0.jpg",
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
        "id": 61664,
        "title": "Sense8",
        "rating": 7.754,
        "overview": "One gunshot, one death, one moment out of time that irrevocably links eight minds in disparate parts of the world, putting them in each other's lives, each other's secrets, and in terrible danger. Ordinary people suddenly reborn as \"Sensates.\"",
        "poster": "https://image.tmdb.org/t/p/w500/kmyvlQ9QKzgdZY31rXaUlgCnzrB.jpg",
        "banner": "https://image.tmdb.org/t/p/original/zPZclFu91i3TEqfyIAK2lLxuI2D.jpg",
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
        "id": 42009,
        "title": "Black Mirror",
        "rating": 8.285,
        "overview": "Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.",
        "poster": "https://image.tmdb.org/t/p/w500/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg",
        "banner": "https://image.tmdb.org/t/p/original/38aCLy0BdFbOAIEfuDladoITHN0.jpg",
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
        "id": 99966,
        "title": "All of Us Are Dead",
        "rating": 8.313,
        "overview": "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.",
        "poster": "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
        "banner": "https://image.tmdb.org/t/p/original/jZAtLKNZbQZZLm9OLcY9rdZZV5F.jpg",
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
        "id": 96648,
        "title": "Sweet Home",
        "rating": 8.348,
        "overview": "As humans turn into savage monsters and the world plunges into terror, a handful of survivors fight for their lives — and to hold on to their humanity.",
        "poster": "https://image.tmdb.org/t/p/w500/owGb1SExjoEZWOvPx6hAVAi2B7D.jpg",
        "banner": "https://image.tmdb.org/t/p/original/mceCXNTny6a5F3rQgShLoyARw4l.jpg",
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
        "id": 111110,
        "title": "ONE PIECE",
        "rating": 8.181,
        "overview": "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure.",
        "poster": "https://image.tmdb.org/t/p/w500/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
        "banner": "https://image.tmdb.org/t/p/original/qD211Hb5XwFxrszzBBe5EUYJerh.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
            {
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 67683,
        "title": "Travelers",
        "rating": 7.6,
        "overview": "Hundreds of years from now, the last surviving humans discover the means of sending consciousness back through time, directly into people in the 21st century. These \"travelers\" assume the lives of seemingly random people, while secretly working as teams to perform missions in order to save humanity from a terrible future.",
        "poster": "https://image.tmdb.org/t/p/w500/aUVeyeyTrQrSFuUkqLCT8FtV7pp.jpg",
        "banner": "https://image.tmdb.org/t/p/original/yUDJ1r0UQdhb904povev5apjTVh.jpg",
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
    }
]

ShuffleGenreList(TvScifiAndHorror)

export default TvScifiAndHorror