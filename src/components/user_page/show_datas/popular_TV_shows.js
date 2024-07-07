import { ShuffleGenreList } from "./utils"


const PopularOnNetflix = [

    {
        "id": 94997,
        "title": "House of the Dragon",
        "rating": 8.4,
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
        "id": 2734,
        "title": "Law & Order: Special Victims Unit",
        "rating": 7.922,
        "overview": "In the criminal justice system, sexually-based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Victims Unit. These are their stories.",
        "poster": "https://image.tmdb.org/t/p/w500/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg",
        "banner": "https://image.tmdb.org/t/p/original/hib8MpBPU7GdluS38htXCF4uw0c.jpg",
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
        "id": 76479,
        "title": "The Boys",
        "rating": 8.5,
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
        "id": 1434,
        "title": "Family Guy",
        "rating": 7.338,
        "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
        "poster": "https://image.tmdb.org/t/p/w500/y0HUz4eUNUe3TeEd8fQWYazPaC7.jpg",
        "banner": "https://image.tmdb.org/t/p/original/jbTqU6BJMufoMnPSlO4ThrcXs3Y.jpg",
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
        "id": 1431,
        "title": "CSI: Crime Scene Investigation",
        "rating": 7.621,
        "overview": "A Las Vegas team of forensic investigators are trained to solve criminal cases by scouring the crime scene, collecting irrefutable evidence and finding the missing pieces that solve the mystery.",
        "poster": "https://image.tmdb.org/t/p/w500/i5hmoRjHNWady4AtAGICTUXknKH.jpg",
        "banner": "https://image.tmdb.org/t/p/original/vZePKXaSO3537aJTxifE3Rrwobb.jpg",
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
        "id": 456,
        "title": "The Simpsons",
        "rating": 8.015,
        "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
        "poster": "https://image.tmdb.org/t/p/w500/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
        "banner": "https://image.tmdb.org/t/p/original/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
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
        "id": 209374,
        "title": "Top Chef VIP",
        "rating": 5,
        "overview": "",
        "poster": "https://image.tmdb.org/t/p/w500/cw6M4c2MpLSzqzmrrqpSJlEbwCF.jpg",
        "banner": "https://image.tmdb.org/t/p/original/mZCq3ldk7hUIyDvfZIOvTrxPWYS.jpg",
        "genre": []
    },
    {
        "id": 44006,
        "title": "Chicago Fire",
        "rating": 8.404,
        "overview": "An edge-of-your-seat view into the lives of everyday heroes committed to one of America's noblest professions. For the firefighters, rescue squad and paramedics of Chicago Firehouse 51, no occupation is more stressful or dangerous, yet so rewarding and exhilarating. These courageous men and women are among the elite who forge headfirst into danger when everyone else is running the other way and whose actions make the difference between life and death.",
        "poster": "https://image.tmdb.org/t/p/w500/2yaeYNplMuLGNjBigMFsek7UZmq.jpg",
        "banner": "https://image.tmdb.org/t/p/original/3d0tKO9eUC0aLB4u3LnbKlCcy8y.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 549,
        "title": "Law & Order",
        "rating": 7.351,
        "overview": "In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing the evidence and questioning the suspects until someone is taken into custody. The district attorney's office then builds a case to convict the perpetrator by proving the person guilty beyond a reasonable doubt. Working together, these expert teams navigate all sides of the complex criminal justice system to make New York a safer place.",
        "poster": "https://image.tmdb.org/t/p/w500/m9zTQr4TYS98UFSiA1k0mMfECPe.jpg",
        "banner": "https://image.tmdb.org/t/p/original/jLCuqeDkoSOmnyOoAm4PbiqoUV6.jpg",
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
        "id": 1622,
        "title": "Supernatural",
        "rating": 8.295,
        "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
        "poster": "https://image.tmdb.org/t/p/w500/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
        "banner": "https://image.tmdb.org/t/p/original/nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg",
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
        "id": 235484,
        "title": "Suidooster",
        "rating": 8.273,
        "overview": "Suidooster is a South African television soap opera produced by Suidooster Films which revolves around a matriarch, her family, friends and the people of Suidooster, a small shopping and business centre in the fictional Cape Town suburb of Ruiterbosch.",
        "poster": "https://image.tmdb.org/t/p/w500/naCgSiacvV685kait6fBvhVhdce.jpg",
        "banner": "https://image.tmdb.org/t/p/original/i8iqYtAy9qcO5RSrA1f6fY1n6SN.jpg",
        "genre": [
            {
                "id": 10766,
                "name": "Soap"
            }
        ]
    },
    {
        "id": 4057,
        "title": "Criminal Minds",
        "rating": 8.319,
        "overview": "An elite team of FBI profilers analyze the country's most twisted criminal minds, anticipating their next moves before they strike again. The Behavioral Analysis Unit's most experienced agent is David Rossi, a founding member of the BAU who returns to help the team solve new cases.",
        "poster": "https://image.tmdb.org/t/p/w500/wLMQebhTApmn4F6Fzg6FovdwVvL.jpg",
        "banner": "https://image.tmdb.org/t/p/original/tuMZKK47l6l42lql9fC6PV6S06M.jpg",
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
        "id": 269,
        "title": "One Tree Hill",
        "rating": 7.715,
        "overview": "In Tree Hill, North Carolina two half brothers share a last name and nothing else. Brooding, blue-collar Lucas is a talented street-side basketball player, but his skills are appreciated only by his friends at the river court. Popular, affluent Nathan basks in the hero-worship of the town, as the star of his high school team. And both boys are the son of former college ball player Dan Scott whose long ago choice to abandon Lucas and his mother Karen, will haunt him long into his life with wife Deb and their son Nathan.",
        "poster": "https://image.tmdb.org/t/p/w500/sOrelBaAhp7DZbPTivDwKEyPslC.jpg",
        "banner": "https://image.tmdb.org/t/p/original/eDNSgT1xPMKYcEzJ5GG0PCE3NcN.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 1416,
        "title": "Grey's Anatomy",
        "rating": 8.232,
        "overview": "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
        "poster": "https://image.tmdb.org/t/p/w500/jcEl8SISNfGdlQFwLzeEtsjDvpw.jpg",
        "banner": "https://image.tmdb.org/t/p/original/nmg2lY4QuyXQrAnrC2lRblK5rT6.jpg",
        "genre": [
            {
                "id": 18,
                "name": "Drama"
            }
        ]
    },
    {
        "id": 59941,
        "title": "The Tonight Show Starring Jimmy Fallon",
        "rating": 5.83,
        "overview": "After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York.",
        "poster": "https://image.tmdb.org/t/p/w500/d735cGL2G07Tb0ysLHStu8c0uo8.jpg",
        "banner": "https://image.tmdb.org/t/p/original/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 10767,
                "name": "Talk"
            }
        ]
    },
    {
        "id": 235493,
        "title": "De Bondgenoten",
        "rating": 6.875,
        "overview": "",
        "poster": "https://image.tmdb.org/t/p/w500/wsipinibYxrZhpkQ6MKxIMgL0hv.jpg",
        "banner": "https://image.tmdb.org/t/p/original/2Bkqjc9tNWo3KLr1aRYyJ7vMQtM.jpg",
        "genre": [
            {
                "id": 10764,
                "name": "Reality"
            }
        ]
    },
    {
        "id": 2190,
        "title": "South Park",
        "rating": 8.364,
        "overview": "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
        "poster": "https://image.tmdb.org/t/p/w500/xJnbMTrJ2fl1AXAKx34U4BPvOhs.jpg",
        "banner": "https://image.tmdb.org/t/p/original/41neXsH222hV2zrsTyw8h7javon.jpg",
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
        "id": 4614,
        "title": "NCIS",
        "rating": 7.628,
        "overview": "From murder and espionage to terrorism and stolen submarines, a team of special agents investigates any crime that has a shred of evidence connected to Navy and Marine Corps personnel, regardless of rank or position.",
        "poster": "https://image.tmdb.org/t/p/w500/2exOHePjOTquUsbThPGhuEjYTyA.jpg",
        "banner": "https://image.tmdb.org/t/p/original/euuK8owCrdiz0HMj8iVhhquPhDv.jpg",
        "genre": [
            {
                "id": 10759,
                "name": "Adventure"
            },
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
        "id": 1400,
        "title": "Seinfeld",
        "rating": 8.285,
        "overview": "A stand-up comedian and his three offbeat friends weather the pitfalls and payoffs of life in New York City in the '90s. It's a show about nothing.",
        "poster": "https://image.tmdb.org/t/p/w500/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
        "banner": "https://image.tmdb.org/t/p/original/tMRdEsMg9MyXAkcufK9YJEeIaNW.jpg",
        "genre": [
            {
                "id": 35,
                "name": "Comedy"
            }
        ]
    },
    {
        "id": 57243,
        "title": "Doctor Who",
        "rating": 7.517,
        "overview": "The Doctor is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living—more of a hobby actually, and the Doctor's very, very good at it.",
        "poster": "https://image.tmdb.org/t/p/w500/4edFyasCrkH4MKs6H4mHqlrxA6b.jpg",
        "banner": "https://image.tmdb.org/t/p/original/aVb1JXQMlLT3qq71VPTWTVNhXgC.jpg",
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
    }
]

ShuffleGenreList(PopularOnNetflix)


export default PopularOnNetflix