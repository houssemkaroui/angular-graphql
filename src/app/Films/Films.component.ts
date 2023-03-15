import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaginationInstance } from 'ng2-pagination';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import {  GET_TODOS } from '../graphql/graphql.queries';

@Component({
    selector: 'app-Films',
    templateUrl: './Films.component.html',
    styleUrls: ['./Films.component.css']
})
export class FilmsComponent implements OnInit {
    liste: any[] = [];
    error: any;
    public data: any[] =
        [
            {
                "id": "ZmlsbXM6MQ==",
                "director": "George Lucas",
                "title": "A New Hope",
                "releaseDate": "1977-05-25",
                "producers": [
                    "Gary Kurtz",
                    "Rick McCallum"
                ],
                "vehicleConnection": {
                    "totalCount": 4,
                    "pageInfo": {
                        "endCursor": "YXJyYXljb25uZWN0aW9uOjM="
                    },
                    "vehicles": [
                        {
                            "model": "Digger Crawler",
                            "vehicleClass": "wheeled",
                            "name": "Sand Crawler",
                            "crew": "46"
                        },
                        {
                            "model": "T-16 skyhopper",
                            "vehicleClass": "repulsorcraft",
                            "name": "T-16 skyhopper",
                            "crew": "1"
                        },
                        {
                            "model": "X-34 landspeeder",
                            "vehicleClass": "repulsorcraft",
                            "name": "X-34 landspeeder",
                            "crew": "1"
                        },
                        {
                            "model": "Twin Ion Engine/Ln Starfighter",
                            "vehicleClass": "starfighter",
                            "name": "TIE/LN starfighter",
                            "crew": "1"
                        }
                    ]
                },
                "characterConnection": {
                    "characters": [
                        {
                            "name": "Luke Skywalker",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "C-3PO",
                            "gender": "n/a",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "gold"
                        },
                        {
                            "name": "R2-D2",
                            "gender": "n/a",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "white, blue"
                        },
                        {
                            "name": "Darth Vader",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "white"
                        },
                        {
                            "name": "Leia Organa",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Owen Lars",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Beru Whitesun lars",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "R5-D4",
                            "gender": "n/a",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "white, red"
                        },
                        {
                            "name": "Biggs Darklighter",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Obi-Wan Kenobi",
                            "gender": "male",
                            "eyeColor": "blue-gray",
                            "homeworld": {
                                "name": "Stewjon"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Wilhuff Tarkin",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Eriadu"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Chewbacca",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Kashyyyk"
                            },
                            "skinColor": "unknown"
                        },
                        {
                            "name": "Han Solo",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Corellia"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Greedo",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Rodia"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Jabba Desilijic Tiure",
                            "gender": "hermaphrodite",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Nal Hutta"
                            },
                            "skinColor": "green-tan, brown"
                        },
                        {
                            "name": "Wedge Antilles",
                            "gender": "male",
                            "eyeColor": "hazel",
                            "homeworld": {
                                "name": "Corellia"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Jek Tono Porkins",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Bestine IV"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Raymus Antilles",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "light"
                        }
                    ]
                }
            },
            {
                "id": "ZmlsbXM6Mg==",
                "director": "Irvin Kershner",
                "title": "The Empire Strikes Back",
                "releaseDate": "1980-05-17",
                "producers": [
                    "Gary Kurtz",
                    "Rick McCallum"
                ],
                "vehicleConnection": {
                    "totalCount": 6,
                    "pageInfo": {
                        "endCursor": "YXJyYXljb25uZWN0aW9uOjU="
                    },
                    "vehicles": [
                        {
                            "model": "Twin Ion Engine/Ln Starfighter",
                            "vehicleClass": "starfighter",
                            "name": "TIE/LN starfighter",
                            "crew": "1"
                        },
                        {
                            "model": "t-47 airspeeder",
                            "vehicleClass": "airspeeder",
                            "name": "Snowspeeder",
                            "crew": "2"
                        },
                        {
                            "model": "TIE/sa bomber",
                            "vehicleClass": "space/planetary bomber",
                            "name": "TIE bomber",
                            "crew": "1"
                        },
                        {
                            "model": "All Terrain Armored Transport",
                            "vehicleClass": "assault walker",
                            "name": "AT-AT",
                            "crew": "5"
                        },
                        {
                            "model": "All Terrain Scout Transport",
                            "vehicleClass": "walker",
                            "name": "AT-ST",
                            "crew": "2"
                        },
                        {
                            "model": "Storm IV Twin-Pod",
                            "vehicleClass": "repulsorcraft",
                            "name": "Storm IV Twin-Pod cloud car",
                            "crew": "2"
                        }
                    ]
                },
                "characterConnection": {
                    "characters": [
                        {
                            "name": "Luke Skywalker",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "C-3PO",
                            "gender": "n/a",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "gold"
                        },
                        {
                            "name": "R2-D2",
                            "gender": "n/a",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "white, blue"
                        },
                        {
                            "name": "Darth Vader",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "white"
                        },
                        {
                            "name": "Leia Organa",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Obi-Wan Kenobi",
                            "gender": "male",
                            "eyeColor": "blue-gray",
                            "homeworld": {
                                "name": "Stewjon"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Chewbacca",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Kashyyyk"
                            },
                            "skinColor": "unknown"
                        },
                        {
                            "name": "Han Solo",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Corellia"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Wedge Antilles",
                            "gender": "male",
                            "eyeColor": "hazel",
                            "homeworld": {
                                "name": "Corellia"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Yoda",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Palpatine",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Boba Fett",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Kamino"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "IG-88",
                            "gender": "none",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "metal"
                        },
                        {
                            "name": "Bossk",
                            "gender": "male",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Trandosha"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Lando Calrissian",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Socorro"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Lobot",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Bespin"
                            },
                            "skinColor": "light"
                        }
                    ]
                }
            },
            {
                "id": "ZmlsbXM6Mw==",
                "director": "Richard Marquand",
                "title": "Return of the Jedi",
                "releaseDate": "1983-05-25",
                "producers": [
                    "Howard G. Kazanjian",
                    "George Lucas",
                    "Rick McCallum"
                ],
                "vehicleConnection": {
                    "totalCount": 8,
                    "pageInfo": {
                        "endCursor": "YXJyYXljb25uZWN0aW9uOjc="
                    },
                    "vehicles": [
                        {
                            "model": "Twin Ion Engine/Ln Starfighter",
                            "vehicleClass": "starfighter",
                            "name": "TIE/LN starfighter",
                            "crew": "1"
                        },
                        {
                            "model": "TIE/sa bomber",
                            "vehicleClass": "space/planetary bomber",
                            "name": "TIE bomber",
                            "crew": "1"
                        },
                        {
                            "model": "All Terrain Armored Transport",
                            "vehicleClass": "assault walker",
                            "name": "AT-AT",
                            "crew": "5"
                        },
                        {
                            "model": "All Terrain Scout Transport",
                            "vehicleClass": "walker",
                            "name": "AT-ST",
                            "crew": "2"
                        },
                        {
                            "model": "Modified Luxury Sail Barge",
                            "vehicleClass": "sail barge",
                            "name": "Sail barge",
                            "crew": "26"
                        },
                        {
                            "model": "Bantha-II",
                            "vehicleClass": "repulsorcraft cargo skiff",
                            "name": "Bantha-II cargo skiff",
                            "crew": "5"
                        },
                        {
                            "model": "Twin Ion Engine Interceptor",
                            "vehicleClass": "starfighter",
                            "name": "TIE/IN interceptor",
                            "crew": "1"
                        },
                        {
                            "model": "74-Z speeder bike",
                            "vehicleClass": "speeder",
                            "name": "Imperial Speeder Bike",
                            "crew": "1"
                        }
                    ]
                },
                "characterConnection": {
                    "characters": [
                        {
                            "name": "Luke Skywalker",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "C-3PO",
                            "gender": "n/a",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "gold"
                        },
                        {
                            "name": "R2-D2",
                            "gender": "n/a",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "white, blue"
                        },
                        {
                            "name": "Darth Vader",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "white"
                        },
                        {
                            "name": "Leia Organa",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Obi-Wan Kenobi",
                            "gender": "male",
                            "eyeColor": "blue-gray",
                            "homeworld": {
                                "name": "Stewjon"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Chewbacca",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Kashyyyk"
                            },
                            "skinColor": "unknown"
                        },
                        {
                            "name": "Han Solo",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Corellia"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Jabba Desilijic Tiure",
                            "gender": "hermaphrodite",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Nal Hutta"
                            },
                            "skinColor": "green-tan, brown"
                        },
                        {
                            "name": "Wedge Antilles",
                            "gender": "male",
                            "eyeColor": "hazel",
                            "homeworld": {
                                "name": "Corellia"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Yoda",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Palpatine",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Boba Fett",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Kamino"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Lando Calrissian",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Socorro"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Ackbar",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Mon Cala"
                            },
                            "skinColor": "brown mottle"
                        },
                        {
                            "name": "Mon Mothma",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Chandrila"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Arvel Crynyd",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Wicket Systri Warrick",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Endor"
                            },
                            "skinColor": "brown"
                        },
                        {
                            "name": "Nien Nunb",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Sullust"
                            },
                            "skinColor": "grey"
                        },
                        {
                            "name": "Bib Fortuna",
                            "gender": "male",
                            "eyeColor": "pink",
                            "homeworld": {
                                "name": "Ryloth"
                            },
                            "skinColor": "pale"
                        }
                    ]
                }
            },
            {
                "id": "ZmlsbXM6NA==",
                "director": "George Lucas",
                "title": "The Phantom Menace",
                "releaseDate": "1999-05-19",
                "producers": [
                    "Rick McCallum"
                ],
                "vehicleConnection": {
                    "totalCount": 7,
                    "pageInfo": {
                        "endCursor": "YXJyYXljb25uZWN0aW9uOjY="
                    },
                    "vehicles": [
                        {
                            "model": "Vulture-class droid starfighter",
                            "vehicleClass": "starfighter",
                            "name": "Vulture Droid",
                            "crew": "0"
                        },
                        {
                            "model": "Multi-Troop Transport",
                            "vehicleClass": "repulsorcraft",
                            "name": "Multi-Troop Transport",
                            "crew": "4"
                        },
                        {
                            "model": "Armoured Assault Tank",
                            "vehicleClass": "repulsorcraft",
                            "name": "Armored Assault Tank",
                            "crew": "4"
                        },
                        {
                            "model": "Single Trooper Aerial Platform",
                            "vehicleClass": "repulsorcraft",
                            "name": "Single Trooper Aerial Platform",
                            "crew": "1"
                        },
                        {
                            "model": "C-9979 landing craft",
                            "vehicleClass": "landing craft",
                            "name": "C-9979 landing craft",
                            "crew": "140"
                        },
                        {
                            "model": "Tribubble bongo",
                            "vehicleClass": "submarine",
                            "name": "Tribubble bongo",
                            "crew": "1"
                        },
                        {
                            "model": "FC-20 speeder bike",
                            "vehicleClass": "speeder",
                            "name": "Sith speeder",
                            "crew": "1"
                        }
                    ]
                },
                "characterConnection": {
                    "characters": [
                        {
                            "name": "C-3PO",
                            "gender": "n/a",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "gold"
                        },
                        {
                            "name": "R2-D2",
                            "gender": "n/a",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "white, blue"
                        },
                        {
                            "name": "Obi-Wan Kenobi",
                            "gender": "male",
                            "eyeColor": "blue-gray",
                            "homeworld": {
                                "name": "Stewjon"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Anakin Skywalker",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Jabba Desilijic Tiure",
                            "gender": "hermaphrodite",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Nal Hutta"
                            },
                            "skinColor": "green-tan, brown"
                        },
                        {
                            "name": "Yoda",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Palpatine",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Qui-Gon Jinn",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Nute Gunray",
                            "gender": "male",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Cato Neimoidia"
                            },
                            "skinColor": "mottled green"
                        },
                        {
                            "name": "Finis Valorum",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Coruscant"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Padmé Amidala",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Jar Jar Binks",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "orange"
                        },
                        {
                            "name": "Roos Tarpals",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "grey"
                        },
                        {
                            "name": "Rugor Nass",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Ric Olié",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Watto",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Toydaria"
                            },
                            "skinColor": "blue, grey"
                        },
                        {
                            "name": "Sebulba",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Malastare"
                            },
                            "skinColor": "grey, red"
                        },
                        {
                            "name": "Quarsh Panaka",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Shmi Skywalker",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Darth Maul",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Dathomir"
                            },
                            "skinColor": "red"
                        },
                        {
                            "name": "Ayla Secura",
                            "gender": "female",
                            "eyeColor": "hazel",
                            "homeworld": {
                                "name": "Ryloth"
                            },
                            "skinColor": "blue"
                        },
                        {
                            "name": "Ratts Tyerel",
                            "gender": "male",
                            "eyeColor": "unknown",
                            "homeworld": {
                                "name": "Aleen Minor"
                            },
                            "skinColor": "grey, blue"
                        },
                        {
                            "name": "Dud Bolt",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Vulpter"
                            },
                            "skinColor": "blue, grey"
                        },
                        {
                            "name": "Gasgano",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Troiken"
                            },
                            "skinColor": "white, blue"
                        },
                        {
                            "name": "Ben Quadinaros",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Tund"
                            },
                            "skinColor": "grey, green, yellow"
                        },
                        {
                            "name": "Mace Windu",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Haruun Kal"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Ki-Adi-Mundi",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Cerea"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Kit Fisto",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Glee Anselm"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Eeth Koth",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Iridonia"
                            },
                            "skinColor": "brown"
                        },
                        {
                            "name": "Adi Gallia",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Coruscant"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Saesee Tiin",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Iktotch"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Yarael Poof",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Quermia"
                            },
                            "skinColor": "white"
                        },
                        {
                            "name": "Plo Koon",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Dorin"
                            },
                            "skinColor": "orange"
                        },
                        {
                            "name": "Mas Amedda",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Champala"
                            },
                            "skinColor": "blue"
                        }
                    ]
                }
            },
            {
                "id": "ZmlsbXM6NQ==",
                "director": "George Lucas",
                "title": "Attack of the Clones",
                "releaseDate": "2002-05-16",
                "producers": [
                    "Rick McCallum"
                ],
                "vehicleConnection": {
                    "totalCount": 11,
                    "pageInfo": {
                        "endCursor": "YXJyYXljb25uZWN0aW9uOjEw"
                    },
                    "vehicles": [
                        {
                            "model": "Digger Crawler",
                            "vehicleClass": "wheeled",
                            "name": "Sand Crawler",
                            "crew": "46"
                        },
                        {
                            "model": "Zephyr-G swoop bike",
                            "vehicleClass": "repulsorcraft",
                            "name": "Zephyr-G swoop bike",
                            "crew": "1"
                        },
                        {
                            "model": "Koro-2 Exodrive airspeeder",
                            "vehicleClass": "airspeeder",
                            "name": "Koro-2 Exodrive airspeeder",
                            "crew": "1"
                        },
                        {
                            "model": "XJ-6 airspeeder",
                            "vehicleClass": "airspeeder",
                            "name": "XJ-6 airspeeder",
                            "crew": "1"
                        },
                        {
                            "model": "Low Altitude Assault Transport/infrantry",
                            "vehicleClass": "gunship",
                            "name": "LAAT/i",
                            "crew": "6"
                        },
                        {
                            "model": "Low Altitude Assault Transport/carrier",
                            "vehicleClass": "gunship",
                            "name": "LAAT/c",
                            "crew": "1"
                        },
                        {
                            "model": "All Terrain Tactical Enforcer",
                            "vehicleClass": "walker",
                            "name": "AT-TE",
                            "crew": "6"
                        },
                        {
                            "model": "Self-Propelled Heavy Artillery",
                            "vehicleClass": "walker",
                            "name": "SPHA",
                            "crew": "25"
                        },
                        {
                            "model": "Flitknot speeder",
                            "vehicleClass": "speeder",
                            "name": "Flitknot speeder",
                            "crew": "1"
                        },
                        {
                            "model": "Sheathipede-class transport shuttle",
                            "vehicleClass": "transport",
                            "name": "Neimoidian shuttle",
                            "crew": "2"
                        },
                        {
                            "model": "Nantex-class territorial defense",
                            "vehicleClass": "starfighter",
                            "name": "Geonosian starfighter",
                            "crew": "1"
                        }
                    ]
                },
                "characterConnection": {
                    "characters": [
                        {
                            "name": "C-3PO",
                            "gender": "n/a",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "gold"
                        },
                        {
                            "name": "R2-D2",
                            "gender": "n/a",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "white, blue"
                        },
                        {
                            "name": "Owen Lars",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Beru Whitesun lars",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Obi-Wan Kenobi",
                            "gender": "male",
                            "eyeColor": "blue-gray",
                            "homeworld": {
                                "name": "Stewjon"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Anakin Skywalker",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Yoda",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Palpatine",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Boba Fett",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Kamino"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Nute Gunray",
                            "gender": "male",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Cato Neimoidia"
                            },
                            "skinColor": "mottled green"
                        },
                        {
                            "name": "Padmé Amidala",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Jar Jar Binks",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "orange"
                        },
                        {
                            "name": "Watto",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Toydaria"
                            },
                            "skinColor": "blue, grey"
                        },
                        {
                            "name": "Shmi Skywalker",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Ayla Secura",
                            "gender": "female",
                            "eyeColor": "hazel",
                            "homeworld": {
                                "name": "Ryloth"
                            },
                            "skinColor": "blue"
                        },
                        {
                            "name": "Mace Windu",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Haruun Kal"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Ki-Adi-Mundi",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Cerea"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Kit Fisto",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Glee Anselm"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Plo Koon",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Dorin"
                            },
                            "skinColor": "orange"
                        },
                        {
                            "name": "Mas Amedda",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Champala"
                            },
                            "skinColor": "blue"
                        },
                        {
                            "name": "Gregar Typho",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Cordé",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Cliegg Lars",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Poggle the Lesser",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Geonosis"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Luminara Unduli",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Mirial"
                            },
                            "skinColor": "yellow"
                        },
                        {
                            "name": "Barriss Offee",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Mirial"
                            },
                            "skinColor": "yellow"
                        },
                        {
                            "name": "Dormé",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Dooku",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Serenno"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Bail Prestor Organa",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "tan"
                        },
                        {
                            "name": "Jango Fett",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Concord Dawn"
                            },
                            "skinColor": "tan"
                        },
                        {
                            "name": "Zam Wesell",
                            "gender": "female",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Zolan"
                            },
                            "skinColor": "fair, green, yellow"
                        },
                        {
                            "name": "Dexter Jettster",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Ojom"
                            },
                            "skinColor": "brown"
                        },
                        {
                            "name": "Lama Su",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Kamino"
                            },
                            "skinColor": "grey"
                        },
                        {
                            "name": "Taun We",
                            "gender": "female",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Kamino"
                            },
                            "skinColor": "grey"
                        },
                        {
                            "name": "Jocasta Nu",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Coruscant"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "R4-P17",
                            "gender": "female",
                            "eyeColor": "red, blue",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "silver, red"
                        },
                        {
                            "name": "Wat Tambor",
                            "gender": "male",
                            "eyeColor": "unknown",
                            "homeworld": {
                                "name": "Skako"
                            },
                            "skinColor": "green, grey"
                        },
                        {
                            "name": "San Hill",
                            "gender": "male",
                            "eyeColor": "gold",
                            "homeworld": {
                                "name": "Muunilinst"
                            },
                            "skinColor": "grey"
                        },
                        {
                            "name": "Shaak Ti",
                            "gender": "female",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Shili"
                            },
                            "skinColor": "red, blue, white"
                        },
                        {
                            "name": "Sly Moore",
                            "gender": "female",
                            "eyeColor": "white",
                            "homeworld": {
                                "name": "Umbara"
                            },
                            "skinColor": "pale"
                        }
                    ]
                }
            },
            {
                "id": "ZmlsbXM6Ng==",
                "director": "George Lucas",
                "title": "Revenge of the Sith",
                "releaseDate": "2005-05-19",
                "producers": [
                    "Rick McCallum"
                ],
                "vehicleConnection": {
                    "totalCount": 13,
                    "pageInfo": {
                        "endCursor": "YXJyYXljb25uZWN0aW9uOjEy"
                    },
                    "vehicles": [
                        {
                            "model": "Vulture-class droid starfighter",
                            "vehicleClass": "starfighter",
                            "name": "Vulture Droid",
                            "crew": "0"
                        },
                        {
                            "model": "Low Altitude Assault Transport/infrantry",
                            "vehicleClass": "gunship",
                            "name": "LAAT/i",
                            "crew": "6"
                        },
                        {
                            "model": "All Terrain Tactical Enforcer",
                            "vehicleClass": "walker",
                            "name": "AT-TE",
                            "crew": "6"
                        },
                        {
                            "model": "Sheathipede-class transport shuttle",
                            "vehicleClass": "transport",
                            "name": "Neimoidian shuttle",
                            "crew": "2"
                        },
                        {
                            "model": "Tsmeu-6 personal wheel bike",
                            "vehicleClass": "wheeled walker",
                            "name": "Tsmeu-6 personal wheel bike",
                            "crew": "1"
                        },
                        {
                            "model": "Fire suppression speeder",
                            "vehicleClass": "fire suppression ship",
                            "name": "Emergency Firespeeder",
                            "crew": "2"
                        },
                        {
                            "model": "tri-fighter",
                            "vehicleClass": "droid starfighter",
                            "name": "Droid tri-fighter",
                            "crew": "1"
                        },
                        {
                            "model": "Oevvaor jet catamaran",
                            "vehicleClass": "airspeeder",
                            "name": "Oevvaor jet catamaran",
                            "crew": "2"
                        },
                        {
                            "model": "Raddaugh Gnasp fluttercraft",
                            "vehicleClass": "air speeder",
                            "name": "Raddaugh Gnasp fluttercraft",
                            "crew": "2"
                        },
                        {
                            "model": "HAVw A6 Juggernaut",
                            "vehicleClass": "wheeled walker",
                            "name": "Clone turbo tank",
                            "crew": "20"
                        },
                        {
                            "model": "NR-N99 Persuader-class droid enforcer",
                            "vehicleClass": "droid tank",
                            "name": "Corporate Alliance tank droid",
                            "crew": "0"
                        },
                        {
                            "model": "HMP droid gunship",
                            "vehicleClass": "airspeeder",
                            "name": "Droid gunship",
                            "crew": "0"
                        },
                        {
                            "model": "All Terrain Recon Transport",
                            "vehicleClass": "walker",
                            "name": "AT-RT",
                            "crew": "1"
                        }
                    ]
                },
                "characterConnection": {
                    "characters": [
                        {
                            "name": "Luke Skywalker",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "C-3PO",
                            "gender": "n/a",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "gold"
                        },
                        {
                            "name": "R2-D2",
                            "gender": "n/a",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "white, blue"
                        },
                        {
                            "name": "Darth Vader",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "white"
                        },
                        {
                            "name": "Leia Organa",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Owen Lars",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Beru Whitesun lars",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Obi-Wan Kenobi",
                            "gender": "male",
                            "eyeColor": "blue-gray",
                            "homeworld": {
                                "name": "Stewjon"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Anakin Skywalker",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Tatooine"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Wilhuff Tarkin",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Eriadu"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Chewbacca",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Kashyyyk"
                            },
                            "skinColor": "unknown"
                        },
                        {
                            "name": "Yoda",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Palpatine",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Nute Gunray",
                            "gender": "male",
                            "eyeColor": "red",
                            "homeworld": {
                                "name": "Cato Neimoidia"
                            },
                            "skinColor": "mottled green"
                        },
                        {
                            "name": "Padmé Amidala",
                            "gender": "female",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Naboo"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Ayla Secura",
                            "gender": "female",
                            "eyeColor": "hazel",
                            "homeworld": {
                                "name": "Ryloth"
                            },
                            "skinColor": "blue"
                        },
                        {
                            "name": "Mace Windu",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Haruun Kal"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Ki-Adi-Mundi",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Cerea"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Kit Fisto",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Glee Anselm"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Eeth Koth",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Iridonia"
                            },
                            "skinColor": "brown"
                        },
                        {
                            "name": "Adi Gallia",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Coruscant"
                            },
                            "skinColor": "dark"
                        },
                        {
                            "name": "Saesee Tiin",
                            "gender": "male",
                            "eyeColor": "orange",
                            "homeworld": {
                                "name": "Iktotch"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Plo Koon",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Dorin"
                            },
                            "skinColor": "orange"
                        },
                        {
                            "name": "Poggle the Lesser",
                            "gender": "male",
                            "eyeColor": "yellow",
                            "homeworld": {
                                "name": "Geonosis"
                            },
                            "skinColor": "green"
                        },
                        {
                            "name": "Luminara Unduli",
                            "gender": "female",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Mirial"
                            },
                            "skinColor": "yellow"
                        },
                        {
                            "name": "Dooku",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Serenno"
                            },
                            "skinColor": "fair"
                        },
                        {
                            "name": "Bail Prestor Organa",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "tan"
                        },
                        {
                            "name": "R4-P17",
                            "gender": "female",
                            "eyeColor": "red, blue",
                            "homeworld": {
                                "name": "unknown"
                            },
                            "skinColor": "silver, red"
                        },
                        {
                            "name": "Shaak Ti",
                            "gender": "female",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Shili"
                            },
                            "skinColor": "red, blue, white"
                        },
                        {
                            "name": "Grievous",
                            "gender": "male",
                            "eyeColor": "green, yellow",
                            "homeworld": {
                                "name": "Kalee"
                            },
                            "skinColor": "brown, white"
                        },
                        {
                            "name": "Tarfful",
                            "gender": "male",
                            "eyeColor": "blue",
                            "homeworld": {
                                "name": "Kashyyyk"
                            },
                            "skinColor": "brown"
                        },
                        {
                            "name": "Raymus Antilles",
                            "gender": "male",
                            "eyeColor": "brown",
                            "homeworld": {
                                "name": "Alderaan"
                            },
                            "skinColor": "light"
                        },
                        {
                            "name": "Sly Moore",
                            "gender": "female",
                            "eyeColor": "white",
                            "homeworld": {
                                "name": "Umbara"
                            },
                            "skinColor": "pale"
                        },
                        {
                            "name": "Tion Medon",
                            "gender": "male",
                            "eyeColor": "black",
                            "homeworld": {
                                "name": "Utapau"
                            },
                            "skinColor": "grey"
                        }
                    ]
                }
            }
        ]
        ;
    constructor(private router: Router, private apollo: Apollo) { }

    public characters!: any[];
    public Vehu!: any[];
    isModalOpen = false;

    public currentPage = 1;
    public pageSize = 5;
    public nextPage() {
        this.currentPage++;
    }

    public prevPage() {
        this.currentPage--;
    }

    public setPage(page: number) {
        this.currentPage = page;
    }
    public config: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 10,
        currentPage: 1
    };
    openModal(item: any) {
        this.isModalOpen = true;
        this.Vehu = item.vehicleConnection.vehicles
        console.log(this.Vehu)
        // Code to open modal
    }
    openModalChracters(item: any) {
        console.log(item)
        this.characters = item.characters
        this.router.navigate(['/Characters'], { queryParams: { data: JSON.stringify(item.characters) } });


    }
    closeModal() {
        this.isModalOpen = false;
    }
    ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_TODOS
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.liste = data.todos;
      console.log(this.liste)
      this.error = error;
  }
  );
    }
}
