import { ShuffleGenreList } from "./utils"


const Top10 = [

    {
        "id": 85937,
        "title": "Demon Slayer: Kimetsu no Yaiba",
        "rating": 8.673,
        "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
        "poster": "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
        "banner": "https://image.tmdb.org/t/p/original/3GQKYh6Trm8pxd2AypovoYQf4Ay.jpg",
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
        "id": 94997,
        "title": "House of the Dragon",
        "rating": 8.418,
        "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
        "poster": "https://image.tmdb.org/t/p/w500/t9XkeE7HzOsdQcDDDapDYh8Rrmt.jpg",
        "banner": "https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg",
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
        "id": 76479,
        "title": "The Boys",
        "rating": 8.469,
        "overview": "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
        "poster": "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
        "banner": "https://image.tmdb.org/t/p/original/7cqKGQMnNabzOpi7qaIgZvQ7NGV.jpg",
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
        "id": 136315,
        "title": "The Bear",
        "rating": 8.306,
        "overview": "Carmy, a young fine-dining chef, comes home to Chicago to run his family sandwich shop. As he fights to transform the shop and himself, he works alongside a rough-around-the-edges crew that ultimately reveal themselves as his chosen family.",
        "poster": "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg",
        "banner": "https://image.tmdb.org/t/p/original/hFk4olUMNn4YJQQebfiyd1NmJ1S.jpg",
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
        "id": 94664,
        "title": "Mushoku Tensei: Jobless Reincarnation",
        "rating": 8.535,
        "overview": "A 34-year-old hikikomori is kicked out of his home by his family after the death of his parents. After his eviction, he saves a group of teenagers from being killed by a speeding truck, but loses his life in the process. When he comes to, he realizes he has been reborn as Rudeus Greyrat, in a world of swords and sorcery.",
        "poster": "https://image.tmdb.org/t/p/w500/gLKOYIMyKlUHW0SVdskhgf9C0yy.jpg",
        "banner": "https://image.tmdb.org/t/p/original/j9fRIimor0AMFJR9kjZubXcABzZ.jpg",
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
        "id": 114479,
        "title": "The Acolyte",
        "rating": 5.43,
        "overview": "A hundred years before the rise of the Empire, the Jedi Order and the Galactic Republic have prospered for centuries without war. During this time, an investigation into a shocking crime spree pits a Jedi Master against a dangerous warrior from his past.",
        "poster": "https://image.tmdb.org/t/p/w500/mztdt3y6GBsJR69zHtszFezTCLT.jpg",
        "banner": "https://image.tmdb.org/t/p/original/kwronSXO1ogMqHHFvY2eBxfFLdn.jpg",
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
        "id": 37854,
        "title": "One Piece",
        "rating": 8.721,
        "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
        "poster": "https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
        "banner": "https://image.tmdb.org/t/p/original/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
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
        "id": 218342,
        "title": "A Good Girl's Guide to Murder",
        "rating": 0,
        "overview": "Five years after the death of schoolgirl Andie Bell, Pippa Fitz-Amobi sets out to uncover what really happened to her. Sal Singh, Andie's boyfriend, admitted to the murder before taking his own life, but Pip doesn't believe he's responsible and teams up with Sal's brother Ravi to uncover the truth. If Sal Singh isn't a murderer and the real killer is still out there, how far will they go to keep Pip from finding out the truth?",
        "poster": "https://image.tmdb.org/t/p/w500/mzkstyDSsTRswCMRvoBD5ULPnIt.jpg",
        "banner": "https://image.tmdb.org/t/p/original/ft3FNbFzDwM0GyWE2uZ7g3E6tK6.jpg",
        "genre": [
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
        "id": 250598,
        "title": "The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible",
        "rating": 10,
        "overview": "Normally, people choose to become adventurers in their teens. At 30 years old, Rick Gladiator bucks the trend by leaving his job as a guild clerk to become an adventurer. He begins as a novice F-rank with the fighting strength of an S-rank. After two years of brutal training with the continent’s strongest party, Orichalcum Fist, Rick will defeat anyone who underestimates him!",
        "poster": "https://image.tmdb.org/t/p/w500/2JZRQpLVwpmPTgdaKf3dFvhNy8z.jpg",
        "banner": "https://image.tmdb.org/t/p/original/1Jz9C5BOIjKPEWhm3zWcpDHJ0TT.jpg",
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
        "id": 196322,
        "title": "Dark Matter",
        "rating": 7.9,
        "overview": "Jason Dessen is abducted into an alternate version of his life. To get back to his true family, he embarks on a harrowing journey to save them from the most terrifying foe imaginable: himself.",
        "poster": "https://image.tmdb.org/t/p/w500/c6MRUtPk0nEPQ9FBD9RdRKt2rIm.jpg",
        "banner": "https://image.tmdb.org/t/p/original/5fWxvjOUvtUoSmiMEpFl77V6KZV.jpg",
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
        "id": 237853,
        "title": "WondLa",
        "rating": 7.65,
        "overview": "Forced to flee her underground sanctuary for Earth’s surface, Eva discovers a world unlike anything she expected. As she journeys across perilous terrain and unknown civilizations, Eva searches to answer the ultimate question: Is she the last human?",
        "poster": "https://image.tmdb.org/t/p/w500/8kkrmc41lTk6eT2osAMzd4W0cSI.jpg",
        "banner": "https://image.tmdb.org/t/p/original/8FKn2nxbWWRC8S4Y5CuBOICyZJy.jpg",
        "genre": [
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 10751,
                "name": "Family"
            },
            {
                "id": 10762,
                "name": "Kids"
            }
        ]
    },
    {
        "id": 203413,
        "title": "My Lady Jane",
        "rating": 6.909,
        "overview": "Gird your loins for the tragic tale of Lady Jane Grey, the young Tudor noblewoman who was Queen of England for nine days and then beheaded, back in good ol’ 1553. Actually... f*ck that. We’re retelling history the way it should have happened: the damsel in distress saves herself. This is an epic tale of true love and high adventure set in an alt-universe of action, history, fantasy, comedy, romance, and rompy-pompy. Buckle up.",
        "poster": "https://image.tmdb.org/t/p/w500/qX68uGVJwxQ0B0sPZBEGikWRmA6.jpg",
        "banner": "https://image.tmdb.org/t/p/original/oRxMRPh7MEV7blqBDq07sQWG0bY.jpg",
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
                "id": 10765,
                "name": "Sci-Fi & Fantasy"
            }
        ]
    },
    {
        "id": 1399,
        "title": "Game of Thrones",
        "rating": 8.451,
        "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
        "poster": "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
        "banner": "https://image.tmdb.org/t/p/original/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
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
        "id": 207468,
        "title": "Kaiju No. 8",
        "rating": 8.615,
        "overview": "In a world plagued by creatures known as Kaiju, Kafka Hibino aspired to enlist in The Defense Force. He makes a promise to enlist with his childhood friend, Mina Ashiro. Soon, life takes them in separate ways. While employed cleaning up after Kaiju battles, Kafka meets Reno Ichikawa. Reno's determination to join The Defense Force reawakens Kafka's promise to join Mina and protect humanity.",
        "poster": "https://image.tmdb.org/t/p/w500/bJxGs0w5RAhaX4fIUQu511rvm0S.jpg",
        "banner": "https://image.tmdb.org/t/p/original/htGeuCcNhlBe8GTx3izKOsd8frw.jpg",
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
        "id": 223329,
        "title": "The Whirlwind",
        "rating": 7,
        "overview": "A whirlwind power clash between the prime minister and deputy prime minister unravels the day the president suffers an assassination attempt.",
        "poster": "https://image.tmdb.org/t/p/w500/mPgTQpe4ExbfwKZ5JjKtlvW2D50.jpg",
        "banner": "https://image.tmdb.org/t/p/original/tYEglssQT3HMngKm5bQA5mw4n0u.jpg",
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
        "id": 1429,
        "title": "Attack on Titan",
        "rating": 8.664,
        "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
        "poster": "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
        "banner": "https://image.tmdb.org/t/p/original/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
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
        "id": 239770,
        "title": "Doctor Who",
        "rating": 6.4,
        "overview": "The Doctor and his companion travel across time and space encountering incredible friends and foes.",
        "poster": "https://image.tmdb.org/t/p/w500/8FHthx4Vu81J4X5BTLhJYK9Gtbs.jpg",
        "banner": "https://image.tmdb.org/t/p/original/1pmLsPXz5k37BILPH1wq1OV2E7U.jpg",
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
        "id": 229926,
        "title": "Suicide Squad Isekai",
        "rating": 7.806,
        "overview": "In the crime-ridden city of Gotham, Amanda Waller, the head of A.R.G.U.S., assembles a group of notorious criminals—Harley Quinn, Deadshot, Peacemaker, Clayface and King Shark—for a mission into an otherworldly realm that's connected to this world through a gate. It's a realm of swords and magic where orcs rampage and dragons rule the skies. Can Harley Quinn and her crew conquer this perilous realm?",
        "poster": "https://image.tmdb.org/t/p/w500/AbVwsBJnLoqJzPJn8dlGFSGfygy.jpg",
        "banner": "https://image.tmdb.org/t/p/original/vwyRI4hPtM9Wd6JWJh07PNZjIYv.jpg",
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
    }
]

ShuffleGenreList(Top10)

export default Top10