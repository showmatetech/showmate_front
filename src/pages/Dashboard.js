import React, { useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import InformativeLayout from '../layouts/dashboard/InformativeLayout';
import MapLayout from '../layouts/dashboard/MapLayout';
import EventsCarouselLayout from '../layouts/dashboard/EventsCarouselLayout';
import { startAI, getUserInfo, setUserSelection } from '../services/server/server'
import NavBarDashboard from '../components/NavBarDashboard';
import ArtistsCarouselLayout from '../layouts/dashboard/ArtistsCarouselLayout';
import _ from "lodash";

function Dashboard() {
  const [loading, setLoading] = useState(false)
  const [calculating, setCalculating] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubTitle] = useState('')
  const [userInfo, setUserInfo] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [artistsToAsk, setArtistsToAsk] = useState(false)
  const [userSelectionObject, setUserSelectionObject] = useState(false)
  const [eventsToAsk, setEventsToAsk] = useState(false)

  const result = [
    {
        "_id": "62f433b8c9ce02289742f15e",
        "artistId": "6RRpZz1uPqY9E28kmSPAhw",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6RRpZz1uPqY9E28kmSPAhw"
        },
        "genres": [
            "dayton indie",
            "melodic metalcore",
            "metalcore",
            "post-screamo"
        ],
        "href": "https://api.spotify.com/v1/artists/6RRpZz1uPqY9E28kmSPAhw",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb59c81df09380f1000f52c5f5",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517459c81df09380f1000f52c5f5",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17859c81df09380f1000f52c5f5",
                "width": 160
            }
        ],
        "name": "Like Moths To Flames",
        "popularity": 47,
        "relatedArtists": [],
        "topTracks": [
            "1JhNaEvVubRXy3wnOv10Ic",
            "6Z2E1DcjN6GusBOw9B8xAS",
            "22ukl1QrvD95MlnSSw22QS",
            "6Hcndog0AsDvnZDyLF7WwS",
            "4CsHLbH7ndQsgGkDEnsicY",
            "1pXq5WSNCbRvUJ5VnqAjIk",
            "1SQGfWHPlTYNpUA9Fwvs7X",
            "3TS5EQyEEyMaYZ9hdWpQZg",
            "5Omlm9J7eSJcbB01VibYAY",
            "1qnnY5msd8GlkUqiFgOeBO"
        ],
        "uri": "spotify:artist:6RRpZz1uPqY9E28kmSPAhw",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6RRpZz1uPqY9E28kmSPAhw"
                        },
                        "href": "https://api.spotify.com/v1/artists/6RRpZz1uPqY9E28kmSPAhw",
                        "id": "6RRpZz1uPqY9E28kmSPAhw",
                        "name": "Like Moths To Flames",
                        "type": "artist",
                        "uri": "spotify:artist:6RRpZz1uPqY9E28kmSPAhw"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4gvOFUSuHalNkZVrpDeYCc"
                },
                "href": "https://api.spotify.com/v1/albums/4gvOFUSuHalNkZVrpDeYCc",
                "id": "4gvOFUSuHalNkZVrpDeYCc",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273daeae888c640c837b4a3dd5f",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02daeae888c640c837b4a3dd5f",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851daeae888c640c837b4a3dd5f",
                        "width": 64
                    }
                ],
                "name": "The Dream Is Dead",
                "release_date": "2015-04-06",
                "release_date_precision": "day",
                "total_tracks": 2,
                "type": "album",
                "uri": "spotify:album:4gvOFUSuHalNkZVrpDeYCc"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6RRpZz1uPqY9E28kmSPAhw"
                    },
                    "href": "https://api.spotify.com/v1/artists/6RRpZz1uPqY9E28kmSPAhw",
                    "id": "6RRpZz1uPqY9E28kmSPAhw",
                    "name": "Like Moths To Flames",
                    "type": "artist",
                    "uri": "spotify:artist:6RRpZz1uPqY9E28kmSPAhw"
                }
            ],
            "disc_number": 1,
            "duration_ms": 220202,
            "explicit": false,
            "external_ids": {
                "isrc": "USEK71528101"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1JhNaEvVubRXy3wnOv10Ic"
            },
            "href": "https://api.spotify.com/v1/tracks/1JhNaEvVubRXy3wnOv10Ic",
            "id": "1JhNaEvVubRXy3wnOv10Ic",
            "is_local": false,
            "is_playable": true,
            "name": "Bury Your Pain",
            "popularity": 48,
            "preview_url": "https://p.scdn.co/mp3-preview/958bb611c0f67745f9b1a709abbd876e3f2c0e1e?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:1JhNaEvVubRXy3wnOv10Ic"
        }
    },
    {
        "_id": "62f434d8c9ce022897435352",
        "artistId": "4zfTcqK4VudzZgd0T8g1Fi",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4zfTcqK4VudzZgd0T8g1Fi"
        },
        "genres": [
            "deep dance pop",
            "electropop",
            "post-teen pop"
        ],
        "href": "https://api.spotify.com/v1/artists/4zfTcqK4VudzZgd0T8g1Fi",
        "images": [
            {
                "height": 667,
                "url": "https://i.scdn.co/image/a37fd7bed65b18cc81d90e9ce3cffdc6e225bd1c",
                "width": 1000
            },
            {
                "height": 427,
                "url": "https://i.scdn.co/image/437af8ac3c480712d0f441af51a93ae0a87b231c",
                "width": 640
            },
            {
                "height": 133,
                "url": "https://i.scdn.co/image/b4d9dadb7d3c3760326d3fc78d5d4b68fe078795",
                "width": 200
            },
            {
                "height": 43,
                "url": "https://i.scdn.co/image/19eea09b8e141be25414de1e6f31291749369caf",
                "width": 64
            }
        ],
        "name": "School Gyrls",
        "popularity": 27,
        "relatedArtists": [],
        "topTracks": [
            "2I3q8GEOXKu6tVPTdpSngV",
            "4oaPGrSvN7HjermkjpHZi5",
            "6buCu8iJPftzodQuZFiX1J",
            "26V3gb9KpzWSGsLViBtI9F",
            "4kf5mzD2e21MlN39u9UV3M",
            "2CgzZgqTt636mTXE7Zg4xV",
            "0eSI69l9iudptW1ND2CYAZ",
            "5cFUoiSeQ3mVAFuyIgSuKe",
            "1Ei9UnnYwfMLFWoKtUP4eQ",
            "2ZjOEi3tMI26tqOOHnaERG"
        ],
        "uri": "spotify:artist:4zfTcqK4VudzZgd0T8g1Fi",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4zfTcqK4VudzZgd0T8g1Fi"
                        },
                        "href": "https://api.spotify.com/v1/artists/4zfTcqK4VudzZgd0T8g1Fi",
                        "id": "4zfTcqK4VudzZgd0T8g1Fi",
                        "name": "School Gyrls",
                        "type": "artist",
                        "uri": "spotify:artist:4zfTcqK4VudzZgd0T8g1Fi"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6g0sQTBS4M5OOIkqVJxa6s"
                },
                "href": "https://api.spotify.com/v1/albums/6g0sQTBS4M5OOIkqVJxa6s",
                "id": "6g0sQTBS4M5OOIkqVJxa6s",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273e5681106185a1ebadefcbf0a",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02e5681106185a1ebadefcbf0a",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851e5681106185a1ebadefcbf0a",
                        "width": 64
                    }
                ],
                "name": "School Gyrls (Exclusive Edition)",
                "release_date": "2010-01-01",
                "release_date_precision": "day",
                "total_tracks": 11,
                "type": "album",
                "uri": "spotify:album:6g0sQTBS4M5OOIkqVJxa6s"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4zfTcqK4VudzZgd0T8g1Fi"
                    },
                    "href": "https://api.spotify.com/v1/artists/4zfTcqK4VudzZgd0T8g1Fi",
                    "id": "4zfTcqK4VudzZgd0T8g1Fi",
                    "name": "School Gyrls",
                    "type": "artist",
                    "uri": "spotify:artist:4zfTcqK4VudzZgd0T8g1Fi"
                }
            ],
            "disc_number": 1,
            "duration_ms": 259079,
            "explicit": false,
            "external_ids": {
                "isrc": "USUM71000205"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2I3q8GEOXKu6tVPTdpSngV"
            },
            "href": "https://api.spotify.com/v1/tracks/2I3q8GEOXKu6tVPTdpSngV",
            "id": "2I3q8GEOXKu6tVPTdpSngV",
            "is_local": false,
            "is_playable": true,
            "name": "Something Like A Party",
            "popularity": 26,
            "preview_url": "https://p.scdn.co/mp3-preview/f9b5ecc0e730703ccc59b7712e2dd1e2847939ae?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2I3q8GEOXKu6tVPTdpSngV"
        }
    },
    {
        "_id": "62f43407c9ce022897431780",
        "artistId": "5vIOGcdmx1eIkq3ZtuS12U",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5vIOGcdmx1eIkq3ZtuS12U"
        },
        "genres": [
            "britpop",
            "madchester",
            "mod revival",
            "modern rock"
        ],
        "href": "https://api.spotify.com/v1/artists/5vIOGcdmx1eIkq3ZtuS12U",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebf14b4d7a984c82aa2dd401be",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174f14b4d7a984c82aa2dd401be",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178f14b4d7a984c82aa2dd401be",
                "width": 160
            }
        ],
        "name": "Ocean Colour Scene",
        "popularity": 49,
        "relatedArtists": [],
        "topTracks": [
            "1HkgXusDtcdUch40stX4vp",
            "6Ykk0PRL8VMQb6h13CxH31",
            "0EgOQEj1fHUyoPAkkp03Hp",
            "61SVJX0TWSSHU0wgqL2RT0",
            "09nOcKwXlmIz4BHikHgzu9",
            "0k7AYarupFQ2RHN1niWSAD",
            "4LKfBFQNSeUYQx8NIQPic8",
            "4mn68aoJKDzAioJERt0wZC",
            "2ZFx5m9wQ49YgZcCqagNWw",
            "4Z9Ih62cvVUg24Y53Jfj7R"
        ],
        "uri": "spotify:artist:5vIOGcdmx1eIkq3ZtuS12U",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5vIOGcdmx1eIkq3ZtuS12U"
                        },
                        "href": "https://api.spotify.com/v1/artists/5vIOGcdmx1eIkq3ZtuS12U",
                        "id": "5vIOGcdmx1eIkq3ZtuS12U",
                        "name": "Ocean Colour Scene",
                        "type": "artist",
                        "uri": "spotify:artist:5vIOGcdmx1eIkq3ZtuS12U"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4PNGCsIJUFlEoDFhzcu9Il"
                },
                "href": "https://api.spotify.com/v1/albums/4PNGCsIJUFlEoDFhzcu9Il",
                "id": "4PNGCsIJUFlEoDFhzcu9Il",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27351d999a5abe49d96ffd7280b",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0251d999a5abe49d96ffd7280b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485151d999a5abe49d96ffd7280b",
                        "width": 64
                    }
                ],
                "name": "Moseley Shoals",
                "release_date": "1996-01-01",
                "release_date_precision": "day",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:4PNGCsIJUFlEoDFhzcu9Il"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5vIOGcdmx1eIkq3ZtuS12U"
                    },
                    "href": "https://api.spotify.com/v1/artists/5vIOGcdmx1eIkq3ZtuS12U",
                    "id": "5vIOGcdmx1eIkq3ZtuS12U",
                    "name": "Ocean Colour Scene",
                    "type": "artist",
                    "uri": "spotify:artist:5vIOGcdmx1eIkq3ZtuS12U"
                }
            ],
            "disc_number": 1,
            "duration_ms": 186066,
            "explicit": false,
            "external_ids": {
                "isrc": "GBBBY9610057"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1HkgXusDtcdUch40stX4vp"
            },
            "href": "https://api.spotify.com/v1/tracks/1HkgXusDtcdUch40stX4vp",
            "id": "1HkgXusDtcdUch40stX4vp",
            "is_local": false,
            "is_playable": true,
            "name": "The Day We Caught The Train",
            "popularity": 57,
            "preview_url": "https://p.scdn.co/mp3-preview/18811737f95aa9240d70878411fe13227368ca42?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:1HkgXusDtcdUch40stX4vp"
        }
    },
    {
        "_id": "62f52772c9ce022897799889",
        "artistId": "1LbG3aDUf8mRBgZjvx8516",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1LbG3aDUf8mRBgZjvx8516"
        },
        "genres": [
            "electro jazz",
            "nu jazz"
        ],
        "href": "https://api.spotify.com/v1/artists/1LbG3aDUf8mRBgZjvx8516",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735edd35c75f3b3ce8e12c1f56",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025edd35c75f3b3ce8e12c1f56",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515edd35c75f3b3ce8e12c1f56",
                "width": 64
            }
        ],
        "name": "Karuan",
        "popularity": 33,
        "relatedArtists": [],
        "topTracks": [
            "45pd3YrtTMYkzVvCDtH1VP",
            "0ov1IOdz5kR8XMr61JDkFU",
            "2K1fd8AHponiC3ZQsIkOIn",
            "5OjcEWS5o3IHM1V4G8sjjn",
            "2faexiffpoA7ifAYsk9yLe",
            "4WCBHVQzwOpu5apqYfes7o",
            "0v17pk8t0gnsJpGfyCtXpK",
            "6ZJ1ptQ50W7IGyA4qzz4FR",
            "1tW3WFln9oSnmqi2XDa6x7",
            "1eAGbhqB3FfEDV4SrLFOpG"
        ],
        "uri": "spotify:artist:1LbG3aDUf8mRBgZjvx8516",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1LbG3aDUf8mRBgZjvx8516"
                        },
                        "href": "https://api.spotify.com/v1/artists/1LbG3aDUf8mRBgZjvx8516",
                        "id": "1LbG3aDUf8mRBgZjvx8516",
                        "name": "Karuan",
                        "type": "artist",
                        "uri": "spotify:artist:1LbG3aDUf8mRBgZjvx8516"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0bwhZChMIKjyWdh7iDyEvP"
                },
                "href": "https://api.spotify.com/v1/albums/0bwhZChMIKjyWdh7iDyEvP",
                "id": "0bwhZChMIKjyWdh7iDyEvP",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2735edd35c75f3b3ce8e12c1f56",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e025edd35c75f3b3ce8e12c1f56",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048515edd35c75f3b3ce8e12c1f56",
                        "width": 64
                    }
                ],
                "name": "Pop Arif",
                "release_date": "2007-04-29",
                "release_date_precision": "day",
                "total_tracks": 13,
                "type": "album",
                "uri": "spotify:album:0bwhZChMIKjyWdh7iDyEvP"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1LbG3aDUf8mRBgZjvx8516"
                    },
                    "href": "https://api.spotify.com/v1/artists/1LbG3aDUf8mRBgZjvx8516",
                    "id": "1LbG3aDUf8mRBgZjvx8516",
                    "name": "Karuan",
                    "type": "artist",
                    "uri": "spotify:artist:1LbG3aDUf8mRBgZjvx8516"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3WaZLAgidOJ2O6cXgsmKHy"
                    },
                    "href": "https://api.spotify.com/v1/artists/3WaZLAgidOJ2O6cXgsmKHy",
                    "id": "3WaZLAgidOJ2O6cXgsmKHy",
                    "name": "Metin Yilmaz Kendal",
                    "type": "artist",
                    "uri": "spotify:artist:3WaZLAgidOJ2O6cXgsmKHy"
                }
            ],
            "disc_number": 1,
            "duration_ms": 313922,
            "explicit": false,
            "external_ids": {
                "isrc": "ATX790770040"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/45pd3YrtTMYkzVvCDtH1VP"
            },
            "href": "https://api.spotify.com/v1/tracks/45pd3YrtTMYkzVvCDtH1VP",
            "id": "45pd3YrtTMYkzVvCDtH1VP",
            "is_local": false,
            "is_playable": true,
            "name": "Chocolate Distance (Hypnotized)",
            "popularity": 43,
            "preview_url": "https://p.scdn.co/mp3-preview/b0a224bec7da44f8e24d3b1c59313a4945a70c50?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 4,
            "type": "track",
            "uri": "spotify:track:45pd3YrtTMYkzVvCDtH1VP"
        }
    },
    {
        "_id": "630de73b2fd7f69f1b41f69c",
        "artistId": "2NXIymIIep2hfxN3RPUSRA",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/2NXIymIIep2hfxN3RPUSRA"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/2NXIymIIep2hfxN3RPUSRA",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27323da68eedaef1c0585788027",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0223da68eedaef1c0585788027",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485123da68eedaef1c0585788027",
                "width": 64
            }
        ],
        "name": "Dark Colors",
        "popularity": 31,
        "relatedArtists": [],
        "topTracks": [
            "3Pbrm3NUkmiddKwfMgU0iN",
            "0m2MmTLNE1edkVJt4Q1BrT",
            "1vgcShqIulqPjXcI4F25zY",
            "2wjIlOqlyz9mmO2KZIkdug",
            "1XBrQj2xp2bQUPFKKweg4q",
            "3KesoXePc2eiTlMm16SbOV",
            "2wEOfcM4sYim03lmMFy26h",
            "5TXcTkUVOMmudvh6xbJgXo",
            "1jEy7kiKGbvgy6ljlXumxZ",
            "21tVCcHW320hiN0t2GUxVn"
        ],
        "uri": "spotify:artist:2NXIymIIep2hfxN3RPUSRA",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2NXIymIIep2hfxN3RPUSRA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2NXIymIIep2hfxN3RPUSRA",
                        "id": "2NXIymIIep2hfxN3RPUSRA",
                        "name": "Dark Colors",
                        "type": "artist",
                        "uri": "spotify:artist:2NXIymIIep2hfxN3RPUSRA"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0ydQaigz4EP0W7aMS91NYn"
                },
                "href": "https://api.spotify.com/v1/albums/0ydQaigz4EP0W7aMS91NYn",
                "id": "0ydQaigz4EP0W7aMS91NYn",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27323da68eedaef1c0585788027",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0223da68eedaef1c0585788027",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485123da68eedaef1c0585788027",
                        "width": 64
                    }
                ],
                "name": "Intro",
                "release_date": "2021-06-11",
                "release_date_precision": "day",
                "total_tracks": 3,
                "type": "album",
                "uri": "spotify:album:0ydQaigz4EP0W7aMS91NYn"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2NXIymIIep2hfxN3RPUSRA"
                    },
                    "href": "https://api.spotify.com/v1/artists/2NXIymIIep2hfxN3RPUSRA",
                    "id": "2NXIymIIep2hfxN3RPUSRA",
                    "name": "Dark Colors",
                    "type": "artist",
                    "uri": "spotify:artist:2NXIymIIep2hfxN3RPUSRA"
                }
            ],
            "disc_number": 1,
            "duration_ms": 278130,
            "explicit": false,
            "external_ids": {
                "isrc": "FRX202111674"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3Pbrm3NUkmiddKwfMgU0iN"
            },
            "href": "https://api.spotify.com/v1/tracks/3Pbrm3NUkmiddKwfMgU0iN",
            "id": "3Pbrm3NUkmiddKwfMgU0iN",
            "is_local": false,
            "is_playable": true,
            "name": "Baila",
            "popularity": 40,
            "preview_url": "https://p.scdn.co/mp3-preview/09e3b28249318e29847298b753eaa2c25c1c2b4b?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:3Pbrm3NUkmiddKwfMgU0iN"
        }
    },
    {
        "_id": "62f433b8c9ce02289742f09b",
        "artistId": "3BwbgahlwovSpRfctWi8zY",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/3BwbgahlwovSpRfctWi8zY"
        },
        "genres": [
            "metalcore",
            "post-screamo"
        ],
        "href": "https://api.spotify.com/v1/artists/3BwbgahlwovSpRfctWi8zY",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebf37987c2ff053387f06d660a",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174f37987c2ff053387f06d660a",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178f37987c2ff053387f06d660a",
                "width": 160
            }
        ],
        "name": "Awaken I Am",
        "popularity": 41,
        "relatedArtists": [],
        "topTracks": [
            "7kX56S5T5acyvFmEWwDait",
            "6iOY5ZM2rWT6xOCE5LOp9y",
            "3OD0lTKi03sZGRHd6p0FI7",
            "7boKU3tmkPov82ONTE9ZaJ",
            "0D4VJVvDOhRK1ZTeU9B5c9",
            "0N4Chp5oSV5c1PVAyX4A25",
            "6SqGZSj8fkJ7UwglhW4HtK",
            "13GNLuBwPMjJ7Y1iz0EdB7",
            "479495aooI8ytUwwzLpx4E",
            "4qnyCUTQD98WNlFgC9DOHr"
        ],
        "uri": "spotify:artist:3BwbgahlwovSpRfctWi8zY",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3BwbgahlwovSpRfctWi8zY"
                        },
                        "href": "https://api.spotify.com/v1/artists/3BwbgahlwovSpRfctWi8zY",
                        "id": "3BwbgahlwovSpRfctWi8zY",
                        "name": "Awaken I Am",
                        "type": "artist",
                        "uri": "spotify:artist:3BwbgahlwovSpRfctWi8zY"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3iS9EWmQ4rZRIMK45RQSBx"
                },
                "href": "https://api.spotify.com/v1/albums/3iS9EWmQ4rZRIMK45RQSBx",
                "id": "3iS9EWmQ4rZRIMK45RQSBx",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273c364c42199e5af962bc11848",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02c364c42199e5af962bc11848",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851c364c42199e5af962bc11848",
                        "width": 64
                    }
                ],
                "name": "Roses",
                "release_date": "2020-04-24",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:3iS9EWmQ4rZRIMK45RQSBx"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3BwbgahlwovSpRfctWi8zY"
                    },
                    "href": "https://api.spotify.com/v1/artists/3BwbgahlwovSpRfctWi8zY",
                    "id": "3BwbgahlwovSpRfctWi8zY",
                    "name": "Awaken I Am",
                    "type": "artist",
                    "uri": "spotify:artist:3BwbgahlwovSpRfctWi8zY"
                }
            ],
            "disc_number": 1,
            "duration_ms": 193309,
            "explicit": false,
            "external_ids": {
                "isrc": "QM6MZ2007272"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7kX56S5T5acyvFmEWwDait"
            },
            "href": "https://api.spotify.com/v1/tracks/7kX56S5T5acyvFmEWwDait",
            "id": "7kX56S5T5acyvFmEWwDait",
            "is_local": false,
            "is_playable": true,
            "name": "Roses",
            "popularity": 52,
            "preview_url": "https://p.scdn.co/mp3-preview/c12ec0c116321211bd9845b624bc1672c0e37d96?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:7kX56S5T5acyvFmEWwDait"
        }
    },
    {
        "_id": "62f43407c9ce0228974315cb",
        "artistId": "5G49Sq5mMzAkGL4ZP6eVPY",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5G49Sq5mMzAkGL4ZP6eVPY"
        },
        "genres": [
            "indie folk",
            "indie pop",
            "new americana",
            "stomp and holler",
            "uk americana"
        ],
        "href": "https://api.spotify.com/v1/artists/5G49Sq5mMzAkGL4ZP6eVPY",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebd9a85e13f94a9e6df87e9a34",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174d9a85e13f94a9e6df87e9a34",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178d9a85e13f94a9e6df87e9a34",
                "width": 160
            }
        ],
        "name": "The Staves",
        "popularity": 52,
        "relatedArtists": [],
        "topTracks": [
            "14WxdK01IyDl3bumvqufxH",
            "4UZOq2XyfLk3Yl5ip4fwm7",
            "4WM5HfHQZ0N4o8HDNwRmRk",
            "5xxHfQuaXGEBHtsGbSXwI7",
            "1jQoqq9UMkt4IASvOYe6TU",
            "1oOERjLzZ95dCH0uzAt4ck",
            "1z5caKH6SJoofqTGVy17HY",
            "2U6nxowQwbu5SvMC7N2D3H",
            "6LcnSb0jXuhbdA7EFevKgv",
            "6aIDKjD8xOEEd6xcNnINw2"
        ],
        "uri": "spotify:artist:5G49Sq5mMzAkGL4ZP6eVPY",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5G49Sq5mMzAkGL4ZP6eVPY"
                        },
                        "href": "https://api.spotify.com/v1/artists/5G49Sq5mMzAkGL4ZP6eVPY",
                        "id": "5G49Sq5mMzAkGL4ZP6eVPY",
                        "name": "The Staves",
                        "type": "artist",
                        "uri": "spotify:artist:5G49Sq5mMzAkGL4ZP6eVPY"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2VxNr0ZeGhWJ8rQNe4d8vS"
                },
                "href": "https://api.spotify.com/v1/albums/2VxNr0ZeGhWJ8rQNe4d8vS",
                "id": "2VxNr0ZeGhWJ8rQNe4d8vS",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273ebe645854c82a1c1c8811646",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02ebe645854c82a1c1c8811646",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851ebe645854c82a1c1c8811646",
                        "width": 64
                    }
                ],
                "name": "If I Was (Deluxe Edition)",
                "release_date": "2014-10-20",
                "release_date_precision": "day",
                "total_tracks": 17,
                "type": "album",
                "uri": "spotify:album:2VxNr0ZeGhWJ8rQNe4d8vS"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5G49Sq5mMzAkGL4ZP6eVPY"
                    },
                    "href": "https://api.spotify.com/v1/artists/5G49Sq5mMzAkGL4ZP6eVPY",
                    "id": "5G49Sq5mMzAkGL4ZP6eVPY",
                    "name": "The Staves",
                    "type": "artist",
                    "uri": "spotify:artist:5G49Sq5mMzAkGL4ZP6eVPY"
                }
            ],
            "disc_number": 1,
            "duration_ms": 192053,
            "explicit": false,
            "external_ids": {
                "isrc": "GBAHS1500446"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/14WxdK01IyDl3bumvqufxH"
            },
            "href": "https://api.spotify.com/v1/tracks/14WxdK01IyDl3bumvqufxH",
            "id": "14WxdK01IyDl3bumvqufxH",
            "is_local": false,
            "is_playable": true,
            "name": "I'm on Fire",
            "popularity": 59,
            "preview_url": "https://p.scdn.co/mp3-preview/5a0b6a852e2ed974df91671514e439ae0697eefb?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 15,
            "type": "track",
            "uri": "spotify:track:14WxdK01IyDl3bumvqufxH"
        }
    },
    {
        "_id": "62f434e7c9ce02289743627d",
        "artistId": "4YFBzXjMSL5zHMlUDyocli",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4YFBzXjMSL5zHMlUDyocli"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/4YFBzXjMSL5zHMlUDyocli",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebbb09619e4ec42de7a77c5274",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174bb09619e4ec42de7a77c5274",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178bb09619e4ec42de7a77c5274",
                "width": 160
            }
        ],
        "name": "james king",
        "popularity": 38,
        "relatedArtists": [],
        "topTracks": [
            "6DUH8iEfX2hqVe7iHsS7xJ",
            "3Yf61qBDL0y5pVSGANYifS",
            "587Zmn5QiaXNnFIehtk5rk",
            "2mKNR1pWgiHKP4ufbE8Tmt",
            "67VhYJA5GwCUZD3oSn3blp",
            "4WJTl3TgIVdmOp5QeAgojx",
            "2MgcVt6WdKXPvJ8f7vMVEo",
            "16yN85iIhp2DskvHyKJbeI",
            "4TK0LiFyDboLw70e70qwYF",
            "7Cn6JWTTErRBDQLl6L0k9I"
        ],
        "uri": "spotify:artist:4YFBzXjMSL5zHMlUDyocli",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4YFBzXjMSL5zHMlUDyocli"
                        },
                        "href": "https://api.spotify.com/v1/artists/4YFBzXjMSL5zHMlUDyocli",
                        "id": "4YFBzXjMSL5zHMlUDyocli",
                        "name": "james king",
                        "type": "artist",
                        "uri": "spotify:artist:4YFBzXjMSL5zHMlUDyocli"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1eCGj5XvDvL0robzpjph9p"
                },
                "href": "https://api.spotify.com/v1/albums/1eCGj5XvDvL0robzpjph9p",
                "id": "1eCGj5XvDvL0robzpjph9p",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bea8bb47c3bc62fb5b40aaae",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02bea8bb47c3bc62fb5b40aaae",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851bea8bb47c3bc62fb5b40aaae",
                        "width": 64
                    }
                ],
                "name": "time to time",
                "release_date": "2022-04-01",
                "release_date_precision": "day",
                "total_tracks": 15,
                "type": "album",
                "uri": "spotify:album:1eCGj5XvDvL0robzpjph9p"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4YFBzXjMSL5zHMlUDyocli"
                    },
                    "href": "https://api.spotify.com/v1/artists/4YFBzXjMSL5zHMlUDyocli",
                    "id": "4YFBzXjMSL5zHMlUDyocli",
                    "name": "james king",
                    "type": "artist",
                    "uri": "spotify:artist:4YFBzXjMSL5zHMlUDyocli"
                }
            ],
            "disc_number": 1,
            "duration_ms": 94246,
            "explicit": false,
            "external_ids": {
                "isrc": "US3DF2236156"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6DUH8iEfX2hqVe7iHsS7xJ"
            },
            "href": "https://api.spotify.com/v1/tracks/6DUH8iEfX2hqVe7iHsS7xJ",
            "id": "6DUH8iEfX2hqVe7iHsS7xJ",
            "is_local": false,
            "is_playable": true,
            "name": "i hate this",
            "popularity": 49,
            "preview_url": "https://p.scdn.co/mp3-preview/94fabcbc58770e9726d9f2e4e26202ba48d81add?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 8,
            "type": "track",
            "uri": "spotify:track:6DUH8iEfX2hqVe7iHsS7xJ"
        }
    },
    {
        "_id": "62f43426c9ce0228974324db",
        "artistId": "4D42J3IJpcTm3zxzmZ7TCV",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4D42J3IJpcTm3zxzmZ7TCV"
        },
        "genres": [
            "neo-psychedelic",
            "vapor soul"
        ],
        "href": "https://api.spotify.com/v1/artists/4D42J3IJpcTm3zxzmZ7TCV",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb95ea31adef91d72e0e804190",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517495ea31adef91d72e0e804190",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17895ea31adef91d72e0e804190",
                "width": 160
            }
        ],
        "name": "The Undercover Dream Lovers",
        "popularity": 47,
        "relatedArtists": [],
        "topTracks": [
            "1FJYX0a18UBzFOWzec43Ih",
            "6O6ZLs5VuJ6wOSiIBVLbzQ",
            "4wriWlPkFFZaUmbwdtPxkk",
            "2sf9WlBq7ZJjjTPYly04hk",
            "6qbuc0dEDg6itQMlOy3Q5j",
            "5Ut32sBUoltcj0o1UTh9zP",
            "6hLruWJrsiVewSsWWM052u",
            "3Ad7e4EdSpnjdLwHVucDyC",
            "6XDr7AK2tZA6vdr7oGZvrO",
            "6VLVtEjPx5bza9cvVvAKRw"
        ],
        "uri": "spotify:artist:4D42J3IJpcTm3zxzmZ7TCV",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/587PA35pRGL1JwQr6idJbb"
                        },
                        "href": "https://api.spotify.com/v1/artists/587PA35pRGL1JwQr6idJbb",
                        "id": "587PA35pRGL1JwQr6idJbb",
                        "name": "NEIL FRANCES",
                        "type": "artist",
                        "uri": "spotify:artist:587PA35pRGL1JwQr6idJbb"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4D42J3IJpcTm3zxzmZ7TCV"
                        },
                        "href": "https://api.spotify.com/v1/artists/4D42J3IJpcTm3zxzmZ7TCV",
                        "id": "4D42J3IJpcTm3zxzmZ7TCV",
                        "name": "The Undercover Dream Lovers",
                        "type": "artist",
                        "uri": "spotify:artist:4D42J3IJpcTm3zxzmZ7TCV"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3yjqJkHqnGlO6wpE9GPxV3"
                },
                "href": "https://api.spotify.com/v1/albums/3yjqJkHqnGlO6wpE9GPxV3",
                "id": "3yjqJkHqnGlO6wpE9GPxV3",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2730967a47406c103d45264fe70",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e020967a47406c103d45264fe70",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048510967a47406c103d45264fe70",
                        "width": 64
                    }
                ],
                "name": "Tell Me",
                "release_date": "2020-04-24",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:3yjqJkHqnGlO6wpE9GPxV3"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/587PA35pRGL1JwQr6idJbb"
                    },
                    "href": "https://api.spotify.com/v1/artists/587PA35pRGL1JwQr6idJbb",
                    "id": "587PA35pRGL1JwQr6idJbb",
                    "name": "NEIL FRANCES",
                    "type": "artist",
                    "uri": "spotify:artist:587PA35pRGL1JwQr6idJbb"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4D42J3IJpcTm3zxzmZ7TCV"
                    },
                    "href": "https://api.spotify.com/v1/artists/4D42J3IJpcTm3zxzmZ7TCV",
                    "id": "4D42J3IJpcTm3zxzmZ7TCV",
                    "name": "The Undercover Dream Lovers",
                    "type": "artist",
                    "uri": "spotify:artist:4D42J3IJpcTm3zxzmZ7TCV"
                }
            ],
            "disc_number": 1,
            "duration_ms": 198000,
            "explicit": false,
            "external_ids": {
                "isrc": "USANG2049723"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1FJYX0a18UBzFOWzec43Ih"
            },
            "href": "https://api.spotify.com/v1/tracks/1FJYX0a18UBzFOWzec43Ih",
            "id": "1FJYX0a18UBzFOWzec43Ih",
            "is_local": false,
            "is_playable": true,
            "name": "Tell Me",
            "popularity": 57,
            "preview_url": "https://p.scdn.co/mp3-preview/88fda8c7cf4a2756e9e6a54d747b7d9a0f27731f?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:1FJYX0a18UBzFOWzec43Ih"
        }
    },
    {
        "_id": "62f434d8c9ce022897434fc8",
        "artistId": "6IdzKFOGtbNz84qbJUMM4x",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6IdzKFOGtbNz84qbJUMM4x"
        },
        "genres": [
            "australian alternative pop",
            "australian pop"
        ],
        "href": "https://api.spotify.com/v1/artists/6IdzKFOGtbNz84qbJUMM4x",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb1fee6c6a6f1c51ef7b876095",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051741fee6c6a6f1c51ef7b876095",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1781fee6c6a6f1c51ef7b876095",
                "width": 160
            }
        ],
        "name": "Hope D",
        "popularity": 35,
        "relatedArtists": [],
        "topTracks": [
            "4n1OJIo6JGMAx2NHhPQSyw",
            "0xEMcHaMejo1kbCbg5smvZ",
            "0VFTu28EqKK73St4rqFQBT",
            "2ovMN9YsNrqqpufiyMmxWK",
            "3ZJl1SIywHZqVrriDKn7fl",
            "61J4B8F73DhVILhtKtTEcA",
            "17kSbRnryebCzRs4ykGPZC",
            "7zEHnKKQD0FOjukqzfNYW1",
            "2YISqiRS06TIXooOQpEDVQ",
            "2vvdmuJbquZZMlhoGlFR6a"
        ],
        "uri": "spotify:artist:6IdzKFOGtbNz84qbJUMM4x",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6IdzKFOGtbNz84qbJUMM4x"
                        },
                        "href": "https://api.spotify.com/v1/artists/6IdzKFOGtbNz84qbJUMM4x",
                        "id": "6IdzKFOGtbNz84qbJUMM4x",
                        "name": "Hope D",
                        "type": "artist",
                        "uri": "spotify:artist:6IdzKFOGtbNz84qbJUMM4x"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0RUGw8mQtGDPHVYkhA7MFK"
                },
                "href": "https://api.spotify.com/v1/albums/0RUGw8mQtGDPHVYkhA7MFK",
                "id": "0RUGw8mQtGDPHVYkhA7MFK",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273b16d26b7cb799876ec62c55f",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02b16d26b7cb799876ec62c55f",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851b16d26b7cb799876ec62c55f",
                        "width": 64
                    }
                ],
                "name": "Second",
                "release_date": "2020-03-12",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0RUGw8mQtGDPHVYkhA7MFK"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6IdzKFOGtbNz84qbJUMM4x"
                    },
                    "href": "https://api.spotify.com/v1/artists/6IdzKFOGtbNz84qbJUMM4x",
                    "id": "6IdzKFOGtbNz84qbJUMM4x",
                    "name": "Hope D",
                    "type": "artist",
                    "uri": "spotify:artist:6IdzKFOGtbNz84qbJUMM4x"
                }
            ],
            "disc_number": 1,
            "duration_ms": 272278,
            "explicit": true,
            "external_ids": {
                "isrc": "AUMEV2012634"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4n1OJIo6JGMAx2NHhPQSyw"
            },
            "href": "https://api.spotify.com/v1/tracks/4n1OJIo6JGMAx2NHhPQSyw",
            "id": "4n1OJIo6JGMAx2NHhPQSyw",
            "is_local": false,
            "is_playable": true,
            "name": "Second",
            "popularity": 42,
            "preview_url": "https://p.scdn.co/mp3-preview/cc8129faafd654e7d0fefb15b7067aabfd169bbf?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:4n1OJIo6JGMAx2NHhPQSyw"
        }
    },
    {
        "_id": "62f52824c9ce02289779c6c8",
        "artistId": "5n0Tm7OJks1DHTg67p5lAa",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5n0Tm7OJks1DHTg67p5lAa"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5n0Tm7OJks1DHTg67p5lAa",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebe17bd9174512798a04c1987b",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174e17bd9174512798a04c1987b",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178e17bd9174512798a04c1987b",
                "width": 160
            }
        ],
        "name": "AKRONIMO HHL",
        "popularity": 3,
        "relatedArtists": [],
        "topTracks": [
            "7E2ISlHNSPtR4kSLnDH332",
            "3fDujRyogESTvdynJDBwDi",
            "3cLu4VEse64k9A3JB6gB4s",
            "58KWcRGfURxioj6z6NR7Kc",
            "0nAZYTZAVYFtvYykj5cCU3",
            "1B9nFM5ctvhZW6nfVJTSk2",
            "60pOs35TY4cLGUTIM5otMf",
            "57geE0IKxzQrjbcbbkWaUZ",
            "3cpr3DpVUPUSblnnbGnDNN",
            "6d6tRqzDYaPLa4v3JdN6MO"
        ],
        "uri": "spotify:artist:5n0Tm7OJks1DHTg67p5lAa",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5n0Tm7OJks1DHTg67p5lAa"
                        },
                        "href": "https://api.spotify.com/v1/artists/5n0Tm7OJks1DHTg67p5lAa",
                        "id": "5n0Tm7OJks1DHTg67p5lAa",
                        "name": "AKRONIMO HHL",
                        "type": "artist",
                        "uri": "spotify:artist:5n0Tm7OJks1DHTg67p5lAa"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0p5knMJnqYmF64f9Gv9zYH"
                },
                "href": "https://api.spotify.com/v1/albums/0p5knMJnqYmF64f9Gv9zYH",
                "id": "0p5knMJnqYmF64f9Gv9zYH",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273af7a062316e4ef9dea8bd7b6",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02af7a062316e4ef9dea8bd7b6",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851af7a062316e4ef9dea8bd7b6",
                        "width": 64
                    }
                ],
                "name": "Codigos",
                "release_date": "2022-06-04",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0p5knMJnqYmF64f9Gv9zYH"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5n0Tm7OJks1DHTg67p5lAa"
                    },
                    "href": "https://api.spotify.com/v1/artists/5n0Tm7OJks1DHTg67p5lAa",
                    "id": "5n0Tm7OJks1DHTg67p5lAa",
                    "name": "AKRONIMO HHL",
                    "type": "artist",
                    "uri": "spotify:artist:5n0Tm7OJks1DHTg67p5lAa"
                }
            ],
            "disc_number": 1,
            "duration_ms": 217800,
            "explicit": true,
            "external_ids": {
                "isrc": "QZHZ62296823"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7E2ISlHNSPtR4kSLnDH332"
            },
            "href": "https://api.spotify.com/v1/tracks/7E2ISlHNSPtR4kSLnDH332",
            "id": "7E2ISlHNSPtR4kSLnDH332",
            "is_local": false,
            "is_playable": true,
            "name": "Codigos",
            "popularity": 10,
            "preview_url": "https://p.scdn.co/mp3-preview/be5f72957dccdffa86ab0e060e53966ebec1e723?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:7E2ISlHNSPtR4kSLnDH332"
        }
    },
    {
        "_id": "62f52824c9ce02289779c7a2",
        "artistId": "1Vr9NCbc1sYiPDeZmFjOTS",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1Vr9NCbc1sYiPDeZmFjOTS"
        },
        "genres": [
            "chanson",
            "french pop",
            "french rock",
            "histoire pour enfants",
            "nouvelle chanson francaise"
        ],
        "href": "https://api.spotify.com/v1/artists/1Vr9NCbc1sYiPDeZmFjOTS",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb85e9582c3476c2eadac2ceda",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517485e9582c3476c2eadac2ceda",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17885e9582c3476c2eadac2ceda",
                "width": 160
            }
        ],
        "name": "Aldebert",
        "popularity": 48,
        "relatedArtists": [],
        "topTracks": [
            "2ApNTgwQpO1X64nCT8sXWn",
            "0XW5XY9LcCw6hpS7EuORkj",
            "2A3ACg2u3qEa0mItJG9F9Y",
            "2Uj8DFlM0dkIvoTMTCk7NT",
            "5dK9RgKZKxBVpiQdJBA0VT",
            "6c1DNEvUjbMZZlAZiwEcxx",
            "4Sd1N5Xm3QTM6tzk0Yvyam",
            "2GhUobhaC3fa0Wc0OykaUb",
            "7s8gFjV5L9tVvZ8d3LHYgw",
            "0M0hZqiGurnW4ZPrBBKPQL"
        ],
        "uri": "spotify:artist:1Vr9NCbc1sYiPDeZmFjOTS",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1Vr9NCbc1sYiPDeZmFjOTS"
                        },
                        "href": "https://api.spotify.com/v1/artists/1Vr9NCbc1sYiPDeZmFjOTS",
                        "id": "1Vr9NCbc1sYiPDeZmFjOTS",
                        "name": "Aldebert",
                        "type": "artist",
                        "uri": "spotify:artist:1Vr9NCbc1sYiPDeZmFjOTS"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/77kv2o5PJeW3mim1yWPiMA"
                },
                "href": "https://api.spotify.com/v1/albums/77kv2o5PJeW3mim1yWPiMA",
                "id": "77kv2o5PJeW3mim1yWPiMA",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2733e1d4a90bc0e186b9d798422",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e023e1d4a90bc0e186b9d798422",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048513e1d4a90bc0e186b9d798422",
                        "width": 64
                    }
                ],
                "name": "Enfantillages 3",
                "release_date": "2017-09-22",
                "release_date_precision": "day",
                "total_tracks": 14,
                "type": "album",
                "uri": "spotify:album:77kv2o5PJeW3mim1yWPiMA"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1Vr9NCbc1sYiPDeZmFjOTS"
                    },
                    "href": "https://api.spotify.com/v1/artists/1Vr9NCbc1sYiPDeZmFjOTS",
                    "id": "1Vr9NCbc1sYiPDeZmFjOTS",
                    "name": "Aldebert",
                    "type": "artist",
                    "uri": "spotify:artist:1Vr9NCbc1sYiPDeZmFjOTS"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6ttO3F8QBMsaaEA7NCPLTI"
                    },
                    "href": "https://api.spotify.com/v1/artists/6ttO3F8QBMsaaEA7NCPLTI",
                    "id": "6ttO3F8QBMsaaEA7NCPLTI",
                    "name": "Malou Harel",
                    "type": "artist",
                    "uri": "spotify:artist:6ttO3F8QBMsaaEA7NCPLTI"
                }
            ],
            "disc_number": 1,
            "duration_ms": 184466,
            "explicit": false,
            "external_ids": {
                "isrc": "FRZ051700410"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2ApNTgwQpO1X64nCT8sXWn"
            },
            "href": "https://api.spotify.com/v1/tracks/2ApNTgwQpO1X64nCT8sXWn",
            "id": "2ApNTgwQpO1X64nCT8sXWn",
            "is_local": false,
            "is_playable": true,
            "name": "La vie c'est quoi ? (with Malou Harel)",
            "popularity": 45,
            "preview_url": "https://p.scdn.co/mp3-preview/beecf6bcd7bba2bb7dff8fe094c71499adbb0c40?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 8,
            "type": "track",
            "uri": "spotify:track:2ApNTgwQpO1X64nCT8sXWn"
        }
    },
    {
        "_id": "62f433d7c9ce02289743021f",
        "artistId": "6PXiPeUVFrlaC1n8511ijT",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6PXiPeUVFrlaC1n8511ijT"
        },
        "genres": [
            "italian hip hop",
            "trap italiana"
        ],
        "href": "https://api.spotify.com/v1/artists/6PXiPeUVFrlaC1n8511ijT",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebf9c0f0e360a049c6f21fae2f",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174f9c0f0e360a049c6f21fae2f",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178f9c0f0e360a049c6f21fae2f",
                "width": 160
            }
        ],
        "name": "Side Baby",
        "popularity": 52,
        "relatedArtists": [],
        "topTracks": [
            "7xwOv1FJd8iqnCoj3BDjpV",
            "3FHQwJN2JL6x9pgmTILnMB",
            "7ybjsX4wC7oSBYYjEGqbHh",
            "3peOFu7a5f0bez49JI6DDa",
            "44C7ihQd3BiGiBQDxkWrd0",
            "3fqVnLPhTvtqLNfa9pITFZ",
            "5tAZWIV2ADm9WI2VTp440C",
            "3FeivzOuUq5Crg9VTnciIX",
            "3ju5ga918R7mZhtUrbTd2E",
            "5Fku3IPAE2ojorISmnuBH6"
        ],
        "uri": "spotify:artist:6PXiPeUVFrlaC1n8511ijT",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6PXiPeUVFrlaC1n8511ijT"
                        },
                        "href": "https://api.spotify.com/v1/artists/6PXiPeUVFrlaC1n8511ijT",
                        "id": "6PXiPeUVFrlaC1n8511ijT",
                        "name": "Side Baby",
                        "type": "artist",
                        "uri": "spotify:artist:6PXiPeUVFrlaC1n8511ijT"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2qiTCSlmzwhS4tUkRxfJG3"
                },
                "href": "https://api.spotify.com/v1/albums/2qiTCSlmzwhS4tUkRxfJG3",
                "id": "2qiTCSlmzwhS4tUkRxfJG3",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2737471cbf2077d1b7ef6b3742c",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e027471cbf2077d1b7ef6b3742c",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048517471cbf2077d1b7ef6b3742c",
                        "width": 64
                    }
                ],
                "name": "Arturo",
                "release_date": "2019-06-19",
                "release_date_precision": "day",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:2qiTCSlmzwhS4tUkRxfJG3"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6PXiPeUVFrlaC1n8511ijT"
                    },
                    "href": "https://api.spotify.com/v1/artists/6PXiPeUVFrlaC1n8511ijT",
                    "id": "6PXiPeUVFrlaC1n8511ijT",
                    "name": "Side Baby",
                    "type": "artist",
                    "uri": "spotify:artist:6PXiPeUVFrlaC1n8511ijT"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2K5nCggbhSZ00YCYP5qkZS"
                    },
                    "href": "https://api.spotify.com/v1/artists/2K5nCggbhSZ00YCYP5qkZS",
                    "id": "2K5nCggbhSZ00YCYP5qkZS",
                    "name": "Shiva",
                    "type": "artist",
                    "uri": "spotify:artist:2K5nCggbhSZ00YCYP5qkZS"
                }
            ],
            "disc_number": 1,
            "duration_ms": 159767,
            "explicit": true,
            "external_ids": {
                "isrc": "ITUM71900680"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7xwOv1FJd8iqnCoj3BDjpV"
            },
            "href": "https://api.spotify.com/v1/tracks/7xwOv1FJd8iqnCoj3BDjpV",
            "id": "7xwOv1FJd8iqnCoj3BDjpV",
            "is_local": false,
            "is_playable": true,
            "name": "Rip RMX (feat. Shiva)",
            "popularity": 50,
            "preview_url": "https://p.scdn.co/mp3-preview/b40619d523e4a3b2578a373b48905dd082dfa4c4?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:7xwOv1FJd8iqnCoj3BDjpV"
        }
    },
    {
        "_id": "630de73b2fd7f69f1b41f4b5",
        "artistId": "4uwJ3NRArTb8VlKbuAFyFG",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4uwJ3NRArTb8VlKbuAFyFG"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/4uwJ3NRArTb8VlKbuAFyFG",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebe49ea6e7d88c424ea93cc5d4",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174e49ea6e7d88c424ea93cc5d4",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178e49ea6e7d88c424ea93cc5d4",
                "width": 160
            }
        ],
        "name": "Jamie Fine",
        "popularity": 43,
        "relatedArtists": [],
        "topTracks": [
            "3OKJAstFWfrwCBj5gfrmFn",
            "0FZI4FaJlgmfwJn5LuStDE",
            "1vW6daDWuHrfyNw5K5t5EJ",
            "0bY2tkX7hNj1dfND914KBb",
            "09m37OH1O6YVqL25jziNfJ",
            "7qCI5w6NgPBS7icUoSBtpt",
            "20R2rF8szcx4VNA6FDRKwo",
            "0HMwS5qRtbq9o8tDph2cbt",
            "2YOWnfkuy86OXUwlENsdJM",
            "5XbbiBmEZpvuG9dWZLnnNl"
        ],
        "uri": "spotify:artist:4uwJ3NRArTb8VlKbuAFyFG",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4uwJ3NRArTb8VlKbuAFyFG"
                        },
                        "href": "https://api.spotify.com/v1/artists/4uwJ3NRArTb8VlKbuAFyFG",
                        "id": "4uwJ3NRArTb8VlKbuAFyFG",
                        "name": "Jamie Fine",
                        "type": "artist",
                        "uri": "spotify:artist:4uwJ3NRArTb8VlKbuAFyFG"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0O5cH8y61PgPeeMOiiUDu7"
                },
                "href": "https://api.spotify.com/v1/albums/0O5cH8y61PgPeeMOiiUDu7",
                "id": "0O5cH8y61PgPeeMOiiUDu7",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2738dbeeb1afa2d46a7667ab1b0",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e028dbeeb1afa2d46a7667ab1b0",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048518dbeeb1afa2d46a7667ab1b0",
                        "width": 64
                    }
                ],
                "name": "Hate Me Love Me",
                "release_date": "2022-07-14",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0O5cH8y61PgPeeMOiiUDu7"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4uwJ3NRArTb8VlKbuAFyFG"
                    },
                    "href": "https://api.spotify.com/v1/artists/4uwJ3NRArTb8VlKbuAFyFG",
                    "id": "4uwJ3NRArTb8VlKbuAFyFG",
                    "name": "Jamie Fine",
                    "type": "artist",
                    "uri": "spotify:artist:4uwJ3NRArTb8VlKbuAFyFG"
                }
            ],
            "disc_number": 1,
            "duration_ms": 154285,
            "explicit": true,
            "external_ids": {
                "isrc": "CAUM72200281"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3OKJAstFWfrwCBj5gfrmFn"
            },
            "href": "https://api.spotify.com/v1/tracks/3OKJAstFWfrwCBj5gfrmFn",
            "id": "3OKJAstFWfrwCBj5gfrmFn",
            "is_local": false,
            "is_playable": true,
            "name": "Hate Me Love Me",
            "popularity": 54,
            "preview_url": "https://p.scdn.co/mp3-preview/92f8d142db74122eb1e0c58d147e5ee4e5a45963?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:3OKJAstFWfrwCBj5gfrmFn"
        }
    },
    {
        "_id": "62f52765c9ce022897798f4f",
        "artistId": "6pOq4fiJPukim20wFrSMR7",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6pOq4fiJPukim20wFrSMR7"
        },
        "genres": [
            "norwegian indie",
            "norwegian pop"
        ],
        "href": "https://api.spotify.com/v1/artists/6pOq4fiJPukim20wFrSMR7",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb81cd75f63ba9057f84f549d8",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517481cd75f63ba9057f84f549d8",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17881cd75f63ba9057f84f549d8",
                "width": 160
            }
        ],
        "name": "DØSSI",
        "popularity": 22,
        "relatedArtists": [],
        "topTracks": [
            "7bM1XMvbOvJGZ0wz8zBUc7",
            "3PCwgZJic0tGj0rgKNJ8x0",
            "09FCUDdI1r11CoEe4SWSsP",
            "6URDtWcaagv07QIoX9EIIm",
            "2jjl2m5q3ilGuMdkLamRR4",
            "1anJCXfEtoYgO2e68rN0Gz",
            "0quYUpTC10bmcvojj1Ok8N",
            "5EYA9zRIqij6wWAOJsy3WD",
            "6lBh4JLWR0H1GVIaGR8jTE",
            "1j0WwanIu12NMzpKMZWBJG"
        ],
        "uri": "spotify:artist:6pOq4fiJPukim20wFrSMR7",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6pOq4fiJPukim20wFrSMR7"
                        },
                        "href": "https://api.spotify.com/v1/artists/6pOq4fiJPukim20wFrSMR7",
                        "id": "6pOq4fiJPukim20wFrSMR7",
                        "name": "DØSSI",
                        "type": "artist",
                        "uri": "spotify:artist:6pOq4fiJPukim20wFrSMR7"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3j8zcAZ4hWrIjvXyFgFR0Z"
                },
                "href": "https://api.spotify.com/v1/albums/3j8zcAZ4hWrIjvXyFgFR0Z",
                "id": "3j8zcAZ4hWrIjvXyFgFR0Z",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2731650288f9f94f08818e331f3",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e021650288f9f94f08818e331f3",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048511650288f9f94f08818e331f3",
                        "width": 64
                    }
                ],
                "name": "wildflower",
                "release_date": "2022-05-06",
                "release_date_precision": "day",
                "total_tracks": 2,
                "type": "album",
                "uri": "spotify:album:3j8zcAZ4hWrIjvXyFgFR0Z"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6pOq4fiJPukim20wFrSMR7"
                    },
                    "href": "https://api.spotify.com/v1/artists/6pOq4fiJPukim20wFrSMR7",
                    "id": "6pOq4fiJPukim20wFrSMR7",
                    "name": "DØSSI",
                    "type": "artist",
                    "uri": "spotify:artist:6pOq4fiJPukim20wFrSMR7"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3DzvldYcKG83XYhYC0wfLn"
                    },
                    "href": "https://api.spotify.com/v1/artists/3DzvldYcKG83XYhYC0wfLn",
                    "id": "3DzvldYcKG83XYhYC0wfLn",
                    "name": "dePresno",
                    "type": "artist",
                    "uri": "spotify:artist:3DzvldYcKG83XYhYC0wfLn"
                }
            ],
            "disc_number": 1,
            "duration_ms": 202138,
            "explicit": false,
            "external_ids": {
                "isrc": "NOTF62215020"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7bM1XMvbOvJGZ0wz8zBUc7"
            },
            "href": "https://api.spotify.com/v1/tracks/7bM1XMvbOvJGZ0wz8zBUc7",
            "id": "7bM1XMvbOvJGZ0wz8zBUc7",
            "is_local": false,
            "is_playable": true,
            "name": "wildflower",
            "popularity": 29,
            "preview_url": "https://p.scdn.co/mp3-preview/bba26543ce798443c01e0bff84a16e984aecf66f?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:7bM1XMvbOvJGZ0wz8zBUc7"
        }
    },
    {
        "_id": "62f433b8c9ce02289742f0e0",
        "artistId": "68tKVjVvcqUfKFFLr2j0Ek",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/68tKVjVvcqUfKFFLr2j0Ek"
        },
        "genres": [
            "lexington ky indie",
            "metalcore",
            "pop punk",
            "post-hardcore",
            "progressive post-hardcore",
            "screamo"
        ],
        "href": "https://api.spotify.com/v1/artists/68tKVjVvcqUfKFFLr2j0Ek",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb8938c31ef228e67c763bd1e3",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051748938c31ef228e67c763bd1e3",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1788938c31ef228e67c763bd1e3",
                "width": 160
            }
        ],
        "name": "Emarosa",
        "popularity": 50,
        "relatedArtists": [],
        "topTracks": [
            "1Z7DlH9AeV59TyD0LQTvNi",
            "3GjsZVKwde52rkDtI9xCHR",
            "3ybttms1Zl5kfsSl2QxIbP",
            "7jDZIM59S1utHXZcmYSEYx",
            "3OGCLzbyXelm14YFR3GVk7",
            "1KK7lFmSM1lZnEy2Y6EsrX",
            "50QvPX0gNbb4nFrE8iUrNW",
            "1ffNKr5A2uIG9cP1SU7NcN",
            "2PXeCxg47XlG3Vj4FXBPLU",
            "3XyYv0hnYx5rBycXg30ANV"
        ],
        "uri": "spotify:artist:68tKVjVvcqUfKFFLr2j0Ek",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/68tKVjVvcqUfKFFLr2j0Ek"
                        },
                        "href": "https://api.spotify.com/v1/artists/68tKVjVvcqUfKFFLr2j0Ek",
                        "id": "68tKVjVvcqUfKFFLr2j0Ek",
                        "name": "Emarosa",
                        "type": "artist",
                        "uri": "spotify:artist:68tKVjVvcqUfKFFLr2j0Ek"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5QJllrmYgOY5k5qWegblAX"
                },
                "href": "https://api.spotify.com/v1/albums/5QJllrmYgOY5k5qWegblAX",
                "id": "5QJllrmYgOY5k5qWegblAX",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2739b99d9650530e72b042e4c31",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e029b99d9650530e72b042e4c31",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048519b99d9650530e72b042e4c31",
                        "width": 64
                    }
                ],
                "name": "Peach Club",
                "release_date": "2019-02-08",
                "release_date_precision": "day",
                "total_tracks": 11,
                "type": "album",
                "uri": "spotify:album:5QJllrmYgOY5k5qWegblAX"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/68tKVjVvcqUfKFFLr2j0Ek"
                    },
                    "href": "https://api.spotify.com/v1/artists/68tKVjVvcqUfKFFLr2j0Ek",
                    "id": "68tKVjVvcqUfKFFLr2j0Ek",
                    "name": "Emarosa",
                    "type": "artist",
                    "uri": "spotify:artist:68tKVjVvcqUfKFFLr2j0Ek"
                }
            ],
            "disc_number": 1,
            "duration_ms": 195133,
            "explicit": false,
            "external_ids": {
                "isrc": "USHR21810503"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1Z7DlH9AeV59TyD0LQTvNi"
            },
            "href": "https://api.spotify.com/v1/tracks/1Z7DlH9AeV59TyD0LQTvNi",
            "id": "1Z7DlH9AeV59TyD0LQTvNi",
            "is_local": false,
            "is_playable": true,
            "name": "Cautious",
            "popularity": 51,
            "preview_url": "https://p.scdn.co/mp3-preview/ecafe57d934d2585c996e166dcc9d3ca1cacecea?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:1Z7DlH9AeV59TyD0LQTvNi"
        }
    },
    {
        "_id": "62f52766c9ce0228977990d6",
        "artistId": "6t7U7sYlVCtlMWzbecJcHd",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6t7U7sYlVCtlMWzbecJcHd"
        },
        "genres": [
            "albanian hip hop",
            "frauenrap"
        ],
        "href": "https://api.spotify.com/v1/artists/6t7U7sYlVCtlMWzbecJcHd",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb86912f3d98f1dd6e70f7d72b",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517486912f3d98f1dd6e70f7d72b",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17886912f3d98f1dd6e70f7d72b",
                "width": 160
            }
        ],
        "name": "Dhurata Dora",
        "popularity": 63,
        "relatedArtists": [],
        "topTracks": [
            "5dj7Il9BkdU1gMfIveNrVH",
            "61FijN1FYn7PxXTH6yAZFC",
            "68av1mZz0VsIYXJWATZWUW",
            "1XQSLHs0XR2wdAya1pmaER",
            "5zUAncNzilbPGxFGWBuCNB",
            "19Z0ArxbSjmzYRvOIxv4Y2",
            "5pfzb7BxAQReEjkEtIwt4J",
            "08ZjfnTiFRtW2EyJP4gWcX",
            "3ianV3NQ5o4EGZJnEBn4NN",
            "0K5vPCPPPQYzrKHc17qB1I"
        ],
        "uri": "spotify:artist:6t7U7sYlVCtlMWzbecJcHd",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6t7U7sYlVCtlMWzbecJcHd"
                        },
                        "href": "https://api.spotify.com/v1/artists/6t7U7sYlVCtlMWzbecJcHd",
                        "id": "6t7U7sYlVCtlMWzbecJcHd",
                        "name": "Dhurata Dora",
                        "type": "artist",
                        "uri": "spotify:artist:6t7U7sYlVCtlMWzbecJcHd"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3CJKkU0XuElRT1z8rEtIYg"
                        },
                        "href": "https://api.spotify.com/v1/artists/3CJKkU0XuElRT1z8rEtIYg",
                        "id": "3CJKkU0XuElRT1z8rEtIYg",
                        "name": "Luciano",
                        "type": "artist",
                        "uri": "spotify:artist:3CJKkU0XuElRT1z8rEtIYg"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/67bLwGrXGnZrC1YUdsLzle"
                },
                "href": "https://api.spotify.com/v1/albums/67bLwGrXGnZrC1YUdsLzle",
                "id": "67bLwGrXGnZrC1YUdsLzle",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273edbbecb93ce813988c7a2397",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02edbbecb93ce813988c7a2397",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851edbbecb93ce813988c7a2397",
                        "width": 64
                    }
                ],
                "name": "Adrenalina",
                "release_date": "2022-07-22",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:67bLwGrXGnZrC1YUdsLzle"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6t7U7sYlVCtlMWzbecJcHd"
                    },
                    "href": "https://api.spotify.com/v1/artists/6t7U7sYlVCtlMWzbecJcHd",
                    "id": "6t7U7sYlVCtlMWzbecJcHd",
                    "name": "Dhurata Dora",
                    "type": "artist",
                    "uri": "spotify:artist:6t7U7sYlVCtlMWzbecJcHd"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3CJKkU0XuElRT1z8rEtIYg"
                    },
                    "href": "https://api.spotify.com/v1/artists/3CJKkU0XuElRT1z8rEtIYg",
                    "id": "3CJKkU0XuElRT1z8rEtIYg",
                    "name": "Luciano",
                    "type": "artist",
                    "uri": "spotify:artist:3CJKkU0XuElRT1z8rEtIYg"
                }
            ],
            "disc_number": 1,
            "duration_ms": 177371,
            "explicit": false,
            "external_ids": {
                "isrc": "DEKF22200609"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5dj7Il9BkdU1gMfIveNrVH"
            },
            "href": "https://api.spotify.com/v1/tracks/5dj7Il9BkdU1gMfIveNrVH",
            "id": "5dj7Il9BkdU1gMfIveNrVH",
            "is_local": false,
            "is_playable": true,
            "name": "Adrenalina",
            "popularity": 73,
            "preview_url": "https://p.scdn.co/mp3-preview/aa7d3714c46faa6a70e81d05850b68e207150cc3?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:5dj7Il9BkdU1gMfIveNrVH"
        }
    },
    {
        "_id": "62f52825c9ce02289779c882",
        "artistId": "74CsbgI3oYJcNJM3ealhBY",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/74CsbgI3oYJcNJM3ealhBY"
        },
        "genres": [
            "portuguese pop"
        ],
        "href": "https://api.spotify.com/v1/artists/74CsbgI3oYJcNJM3ealhBY",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebf64df509bf130e364bb97d82",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174f64df509bf130e364bb97d82",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178f64df509bf130e364bb97d82",
                "width": 160
            }
        ],
        "name": "EU.CLIDES",
        "popularity": 36,
        "relatedArtists": [],
        "topTracks": [
            "1TThW3zpCjFpucjqVfkr3k",
            "35uEEDQB3th2F41HobgjAG",
            "0qs1ykRkjyP6DYOorkBCUc",
            "4tJxByVieqlr0ISjKH0Bgi",
            "5gZ7FojfULFkp4Y9MAvrdv",
            "6DxIKI2NW0v59daYm2uqB4",
            "60z6QyxtPqMrWG0fxMvpPv",
            "1sLBUupNhMJB3wKm0JgA8T",
            "0eddm9rbWKBpEOcav9lrEj",
            "5PmB5ZlNpHyPktnCvoEHJG"
        ],
        "uri": "spotify:artist:74CsbgI3oYJcNJM3ealhBY",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/74CsbgI3oYJcNJM3ealhBY"
                        },
                        "href": "https://api.spotify.com/v1/artists/74CsbgI3oYJcNJM3ealhBY",
                        "id": "74CsbgI3oYJcNJM3ealhBY",
                        "name": "EU.CLIDES",
                        "type": "artist",
                        "uri": "spotify:artist:74CsbgI3oYJcNJM3ealhBY"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3xzbO3ft6AhP7pRm1L5QO3"
                },
                "href": "https://api.spotify.com/v1/albums/3xzbO3ft6AhP7pRm1L5QO3",
                "id": "3xzbO3ft6AhP7pRm1L5QO3",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bf1ee376204a7e48aee1c7bb",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02bf1ee376204a7e48aee1c7bb",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851bf1ee376204a7e48aee1c7bb",
                        "width": 64
                    }
                ],
                "name": "Venham Mais 7",
                "release_date": "2022-05-06",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:3xzbO3ft6AhP7pRm1L5QO3"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/74CsbgI3oYJcNJM3ealhBY"
                    },
                    "href": "https://api.spotify.com/v1/artists/74CsbgI3oYJcNJM3ealhBY",
                    "id": "74CsbgI3oYJcNJM3ealhBY",
                    "name": "EU.CLIDES",
                    "type": "artist",
                    "uri": "spotify:artist:74CsbgI3oYJcNJM3ealhBY"
                }
            ],
            "disc_number": 1,
            "duration_ms": 176250,
            "explicit": false,
            "external_ids": {
                "isrc": "PT2DY2200148"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1TThW3zpCjFpucjqVfkr3k"
            },
            "href": "https://api.spotify.com/v1/tracks/1TThW3zpCjFpucjqVfkr3k",
            "id": "1TThW3zpCjFpucjqVfkr3k",
            "is_local": false,
            "is_playable": true,
            "name": "Venham Mais 7",
            "popularity": 44,
            "preview_url": "https://p.scdn.co/mp3-preview/421c16eb7d4d75b23c0f099d951b5396b3429441?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:1TThW3zpCjFpucjqVfkr3k"
        }
    },
    {
        "_id": "62f4339bc9ce02289742e12b",
        "artistId": "6NCzIETK1gIdvfjbpQEvSE",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6NCzIETK1gIdvfjbpQEvSE"
        },
        "genres": [
            "rap espanol"
        ],
        "href": "https://api.spotify.com/v1/artists/6NCzIETK1gIdvfjbpQEvSE",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebc65734da140fc51978dfba54",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174c65734da140fc51978dfba54",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178c65734da140fc51978dfba54",
                "width": 160
            }
        ],
        "name": "LANE",
        "popularity": 37,
        "relatedArtists": [],
        "topTracks": [
            "2FafQK71iOZd1nOiz8ge2U",
            "1rEVH7o40hg9UFjv7aSA1L",
            "2mtez77mLoYE6hgqYIarqW",
            "6bW0YFLe6RFscsRP7jgqB7",
            "0737vhDWS1yaxTipJeJgTZ",
            "18BiCliKp0euGrYoY925Oz",
            "3EqiRM3kR2iNXYWIDOJHWZ",
            "6HbAhlZzgxNg7rXRCRm1J2",
            "6yCZ7aqHGlupw9n1OUDZWK",
            "6XPldQYNwSYMtIH3ydxw3h"
        ],
        "uri": "spotify:artist:6NCzIETK1gIdvfjbpQEvSE",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6NCzIETK1gIdvfjbpQEvSE"
                        },
                        "href": "https://api.spotify.com/v1/artists/6NCzIETK1gIdvfjbpQEvSE",
                        "id": "6NCzIETK1gIdvfjbpQEvSE",
                        "name": "LANE",
                        "type": "artist",
                        "uri": "spotify:artist:6NCzIETK1gIdvfjbpQEvSE"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4jrP5M98FZIh2M9ywsPoaQ"
                },
                "href": "https://api.spotify.com/v1/albums/4jrP5M98FZIh2M9ywsPoaQ",
                "id": "4jrP5M98FZIh2M9ywsPoaQ",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273f45c3913f2b4b1835ecbe8ee",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02f45c3913f2b4b1835ecbe8ee",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851f45c3913f2b4b1835ecbe8ee",
                        "width": 64
                    }
                ],
                "name": "comoquieroquemequiera",
                "release_date": "2021-06-25",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:4jrP5M98FZIh2M9ywsPoaQ"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6NCzIETK1gIdvfjbpQEvSE"
                    },
                    "href": "https://api.spotify.com/v1/artists/6NCzIETK1gIdvfjbpQEvSE",
                    "id": "6NCzIETK1gIdvfjbpQEvSE",
                    "name": "LANE",
                    "type": "artist",
                    "uri": "spotify:artist:6NCzIETK1gIdvfjbpQEvSE"
                }
            ],
            "disc_number": 1,
            "duration_ms": 142794,
            "explicit": false,
            "external_ids": {
                "isrc": "ES60D2100048"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2FafQK71iOZd1nOiz8ge2U"
            },
            "href": "https://api.spotify.com/v1/tracks/2FafQK71iOZd1nOiz8ge2U",
            "id": "2FafQK71iOZd1nOiz8ge2U",
            "is_local": false,
            "is_playable": true,
            "name": "comoquieroquemequiera",
            "popularity": 46,
            "preview_url": "https://p.scdn.co/mp3-preview/15b4c5f5118394863acb21ba635a6bbe6267d68b?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2FafQK71iOZd1nOiz8ge2U"
        }
    },
    {
        "_id": "62f43426c9ce022897432433",
        "artistId": "2We7vKruiEweV984BdrxGA",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/2We7vKruiEweV984BdrxGA"
        },
        "genres": [
            "indie garage rock"
        ],
        "href": "https://api.spotify.com/v1/artists/2We7vKruiEweV984BdrxGA",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebbbdb06bbcd56342b428c86b2",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174bbdb06bbcd56342b428c86b2",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178bbdb06bbcd56342b428c86b2",
                "width": 160
            }
        ],
        "name": "Jerkcurb",
        "popularity": 34,
        "relatedArtists": [],
        "topTracks": [
            "26uu6uxVb5ck1vYhXDIrPR",
            "4tCKMfURF9Uc364YtIuZKi",
            "7BjsFj9SJ2NBqH9edlo1Au",
            "6KRn10ju4gnOh3TeGmPoSg",
            "310LExrT3JBvZ0PewiuyWi",
            "1VmSbHoqLBGrdlgHBXduYe",
            "4c7VAzPJi7DrXH5xG1MM9D",
            "5t5grON4EsGwpQsU5bsUle",
            "5sB9g3LmDnI8TdNOMXezHs",
            "3jII5BNlU4M6HoLHRf8a7O"
        ],
        "uri": "spotify:artist:2We7vKruiEweV984BdrxGA",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2We7vKruiEweV984BdrxGA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2We7vKruiEweV984BdrxGA",
                        "id": "2We7vKruiEweV984BdrxGA",
                        "name": "Jerkcurb",
                        "type": "artist",
                        "uri": "spotify:artist:2We7vKruiEweV984BdrxGA"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0ZGJ6N2TbWJwUKHTBLxK7H"
                },
                "href": "https://api.spotify.com/v1/albums/0ZGJ6N2TbWJwUKHTBLxK7H",
                "id": "0ZGJ6N2TbWJwUKHTBLxK7H",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273133265e744cf977263d1fd3b",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02133265e744cf977263d1fd3b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851133265e744cf977263d1fd3b",
                        "width": 64
                    }
                ],
                "name": "Air Con Eden",
                "release_date": "2019-09-13",
                "release_date_precision": "day",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:0ZGJ6N2TbWJwUKHTBLxK7H"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2We7vKruiEweV984BdrxGA"
                    },
                    "href": "https://api.spotify.com/v1/artists/2We7vKruiEweV984BdrxGA",
                    "id": "2We7vKruiEweV984BdrxGA",
                    "name": "Jerkcurb",
                    "type": "artist",
                    "uri": "spotify:artist:2We7vKruiEweV984BdrxGA"
                }
            ],
            "disc_number": 1,
            "duration_ms": 340768,
            "explicit": false,
            "external_ids": {
                "isrc": "GBGCA1600270"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/26uu6uxVb5ck1vYhXDIrPR"
            },
            "href": "https://api.spotify.com/v1/tracks/26uu6uxVb5ck1vYhXDIrPR",
            "id": "26uu6uxVb5ck1vYhXDIrPR",
            "is_local": false,
            "is_playable": true,
            "name": "Night on Earth",
            "popularity": 46,
            "preview_url": "https://p.scdn.co/mp3-preview/0d6f99cb953f0007885a13cfc5ee82949f75f642?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:26uu6uxVb5ck1vYhXDIrPR"
        }
    },
    {
        "_id": "62f4339bc9ce02289742e08d",
        "artistId": "5q2ehaRqAFmM6tLl4vaVwP",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5q2ehaRqAFmM6tLl4vaVwP"
        },
        "genres": [
            "dark wave",
            "dream pop",
            "ethereal wave",
            "gothic rock",
            "nu gaze",
            "shoegaze"
        ],
        "href": "https://api.spotify.com/v1/artists/5q2ehaRqAFmM6tLl4vaVwP",
        "images": [
            {
                "height": 1003,
                "url": "https://i.scdn.co/image/9b689a91a8f948afb1a2e12ac72e6a4204c4c0b8",
                "width": 1000
            },
            {
                "height": 642,
                "url": "https://i.scdn.co/image/99fa000d260af58c492710a0c5bfb5af272ac8f4",
                "width": 640
            },
            {
                "height": 201,
                "url": "https://i.scdn.co/image/a4760a6f982b903dff44ec3a52c9e42a3a7817b2",
                "width": 200
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/81107a09e35612902253d681a9d4a6b92a984d80",
                "width": 64
            }
        ],
        "name": "Cranes",
        "popularity": 35,
        "relatedArtists": [],
        "topTracks": [
            "3Mp4lDIGyCBVWDSF6ALaEd",
            "60kgQtJNMGRaFfzwy18XUY",
            "6sqVAbU5ghe076ecYhImXG",
            "1DNbcm11P2H1NUjbyI07nz",
            "5Gyr938nGDm9K0dD7iUYjf",
            "68IJOv8uPaZ3ak2dOozQEz",
            "6zxUrOZXdFZydJDQG35gbj",
            "1bNIxazV1cUZXmOPcPIHuQ",
            "6LReaJLVK7XMVqRDUjZ4UH",
            "4A2x7aCCJ74KkuzZQY6rIT"
        ],
        "uri": "spotify:artist:5q2ehaRqAFmM6tLl4vaVwP",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5q2ehaRqAFmM6tLl4vaVwP"
                        },
                        "href": "https://api.spotify.com/v1/artists/5q2ehaRqAFmM6tLl4vaVwP",
                        "id": "5q2ehaRqAFmM6tLl4vaVwP",
                        "name": "Cranes",
                        "type": "artist",
                        "uri": "spotify:artist:5q2ehaRqAFmM6tLl4vaVwP"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3nFSPWRHULzYNWGQoDzjKV"
                },
                "href": "https://api.spotify.com/v1/albums/3nFSPWRHULzYNWGQoDzjKV",
                "id": "3nFSPWRHULzYNWGQoDzjKV",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273946fad9d880742e0ca24acb3",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02946fad9d880742e0ca24acb3",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851946fad9d880742e0ca24acb3",
                        "width": 64
                    }
                ],
                "name": "Forever (Expanded Edition)",
                "release_date": "1993",
                "release_date_precision": "year",
                "total_tracks": 17,
                "type": "album",
                "uri": "spotify:album:3nFSPWRHULzYNWGQoDzjKV"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5q2ehaRqAFmM6tLl4vaVwP"
                    },
                    "href": "https://api.spotify.com/v1/artists/5q2ehaRqAFmM6tLl4vaVwP",
                    "id": "5q2ehaRqAFmM6tLl4vaVwP",
                    "name": "Cranes",
                    "type": "artist",
                    "uri": "spotify:artist:5q2ehaRqAFmM6tLl4vaVwP"
                }
            ],
            "disc_number": 1,
            "duration_ms": 185226,
            "explicit": false,
            "external_ids": {
                "isrc": "GBARL9300285"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3Mp4lDIGyCBVWDSF6ALaEd"
            },
            "href": "https://api.spotify.com/v1/tracks/3Mp4lDIGyCBVWDSF6ALaEd",
            "id": "3Mp4lDIGyCBVWDSF6ALaEd",
            "is_local": false,
            "is_playable": true,
            "name": "Jewel",
            "popularity": 43,
            "preview_url": "https://p.scdn.co/mp3-preview/b7b98e0b59b69152c942bdd99ef4b715f03d78a2?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:3Mp4lDIGyCBVWDSF6ALaEd"
        }
    },
    {
        "_id": "62f43407c9ce022897431929",
        "artistId": "7e3FtKBIPLrIVm8g1FJMVg",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/7e3FtKBIPLrIVm8g1FJMVg"
        },
        "genres": [
            "abstract beats",
            "alternative r&b",
            "indie soul"
        ],
        "href": "https://api.spotify.com/v1/artists/7e3FtKBIPLrIVm8g1FJMVg",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb172841a17025d5c4270af180",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174172841a17025d5c4270af180",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178172841a17025d5c4270af180",
                "width": 160
            }
        ],
        "name": "Sango",
        "popularity": 49,
        "relatedArtists": [],
        "topTracks": [
            "5cHdOuER9BztlOcbUNBmrQ",
            "0BVaNH5prNNveWy81VIC6S",
            "1OjmLuc3Kf34WcEAasCjsO",
            "5kBDtZCd2AfdumMJgqk5QM",
            "6iCFFLe0WjnKUkf0PMD3xO",
            "0cj7s0kGaVmFPWP898eTbx",
            "0qoORhCUrlq6zEsvldBDaD",
            "67sHZvyNVEP6JIpiCJznsZ",
            "2NahLrPNy0tK7K97Nu8SFj",
            "3D93OQLw3qrD3q61uW7vjX"
        ],
        "uri": "spotify:artist:7e3FtKBIPLrIVm8g1FJMVg",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3UjPnt2nRmw10N58bBeNOg"
                        },
                        "href": "https://api.spotify.com/v1/artists/3UjPnt2nRmw10N58bBeNOg",
                        "id": "3UjPnt2nRmw10N58bBeNOg",
                        "name": "Xavier Omär",
                        "type": "artist",
                        "uri": "spotify:artist:3UjPnt2nRmw10N58bBeNOg"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7e3FtKBIPLrIVm8g1FJMVg"
                        },
                        "href": "https://api.spotify.com/v1/artists/7e3FtKBIPLrIVm8g1FJMVg",
                        "id": "7e3FtKBIPLrIVm8g1FJMVg",
                        "name": "Sango",
                        "type": "artist",
                        "uri": "spotify:artist:7e3FtKBIPLrIVm8g1FJMVg"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2m8sIT1YP8YBQm2MAliBAH"
                },
                "href": "https://api.spotify.com/v1/albums/2m8sIT1YP8YBQm2MAliBAH",
                "id": "2m8sIT1YP8YBQm2MAliBAH",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273dc6474af51185f072f67767b",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02dc6474af51185f072f67767b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851dc6474af51185f072f67767b",
                        "width": 64
                    }
                ],
                "name": "Moments Spent Loving You",
                "release_date": "2019-10-25",
                "release_date_precision": "day",
                "total_tracks": 11,
                "type": "album",
                "uri": "spotify:album:2m8sIT1YP8YBQm2MAliBAH"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3UjPnt2nRmw10N58bBeNOg"
                    },
                    "href": "https://api.spotify.com/v1/artists/3UjPnt2nRmw10N58bBeNOg",
                    "id": "3UjPnt2nRmw10N58bBeNOg",
                    "name": "Xavier Omär",
                    "type": "artist",
                    "uri": "spotify:artist:3UjPnt2nRmw10N58bBeNOg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7e3FtKBIPLrIVm8g1FJMVg"
                    },
                    "href": "https://api.spotify.com/v1/artists/7e3FtKBIPLrIVm8g1FJMVg",
                    "id": "7e3FtKBIPLrIVm8g1FJMVg",
                    "name": "Sango",
                    "type": "artist",
                    "uri": "spotify:artist:7e3FtKBIPLrIVm8g1FJMVg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/67nwj3Y5sZQLl72VNUHEYE"
                    },
                    "href": "https://api.spotify.com/v1/artists/67nwj3Y5sZQLl72VNUHEYE",
                    "id": "67nwj3Y5sZQLl72VNUHEYE",
                    "name": "Wale",
                    "type": "artist",
                    "uri": "spotify:artist:67nwj3Y5sZQLl72VNUHEYE"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0Ek89uaJyo6NfWK22awFvI"
                    },
                    "href": "https://api.spotify.com/v1/artists/0Ek89uaJyo6NfWK22awFvI",
                    "id": "0Ek89uaJyo6NfWK22awFvI",
                    "name": "VanJess",
                    "type": "artist",
                    "uri": "spotify:artist:0Ek89uaJyo6NfWK22awFvI"
                }
            ],
            "disc_number": 1,
            "duration_ms": 329693,
            "explicit": false,
            "external_ids": {
                "isrc": "USRC11902482"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5cHdOuER9BztlOcbUNBmrQ"
            },
            "href": "https://api.spotify.com/v1/tracks/5cHdOuER9BztlOcbUNBmrQ",
            "id": "5cHdOuER9BztlOcbUNBmrQ",
            "is_local": false,
            "is_playable": true,
            "name": "Just Get Here (feat. Wale & VanJess)",
            "popularity": 50,
            "preview_url": "https://p.scdn.co/mp3-preview/e5d5cefe590625fe80d49407f12a0ab99ec573c9?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:5cHdOuER9BztlOcbUNBmrQ"
        }
    },
    {
        "_id": "62f52777c9ce022897799d93",
        "artistId": "4Xo7tUJvKYjHrgnY1aKKFm",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4Xo7tUJvKYjHrgnY1aKKFm"
        },
        "genres": [
            "chill r&b",
            "uk pop"
        ],
        "href": "https://api.spotify.com/v1/artists/4Xo7tUJvKYjHrgnY1aKKFm",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb68ff84b44639850138d3789c",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517468ff84b44639850138d3789c",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17868ff84b44639850138d3789c",
                "width": 160
            }
        ],
        "name": "Star Alien",
        "popularity": 20,
        "relatedArtists": [],
        "topTracks": [
            "3o1ZjYbELerWEhnS9vi24Z"
        ],
        "uri": "spotify:artist:4Xo7tUJvKYjHrgnY1aKKFm",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4Xo7tUJvKYjHrgnY1aKKFm"
                        },
                        "href": "https://api.spotify.com/v1/artists/4Xo7tUJvKYjHrgnY1aKKFm",
                        "id": "4Xo7tUJvKYjHrgnY1aKKFm",
                        "name": "Star Alien",
                        "type": "artist",
                        "uri": "spotify:artist:4Xo7tUJvKYjHrgnY1aKKFm"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4YRP8IsXEMOsl5Ik8E8pgP"
                },
                "href": "https://api.spotify.com/v1/albums/4YRP8IsXEMOsl5Ik8E8pgP",
                "id": "4YRP8IsXEMOsl5Ik8E8pgP",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273df08a50c26f967d221c2af00",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02df08a50c26f967d221c2af00",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851df08a50c26f967d221c2af00",
                        "width": 64
                    }
                ],
                "name": "Kawaii",
                "release_date": "2019-04-09",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:4YRP8IsXEMOsl5Ik8E8pgP"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4Xo7tUJvKYjHrgnY1aKKFm"
                    },
                    "href": "https://api.spotify.com/v1/artists/4Xo7tUJvKYjHrgnY1aKKFm",
                    "id": "4Xo7tUJvKYjHrgnY1aKKFm",
                    "name": "Star Alien",
                    "type": "artist",
                    "uri": "spotify:artist:4Xo7tUJvKYjHrgnY1aKKFm"
                }
            ],
            "disc_number": 1,
            "duration_ms": 195441,
            "explicit": false,
            "external_ids": {
                "isrc": "QZES61920931"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3o1ZjYbELerWEhnS9vi24Z"
            },
            "href": "https://api.spotify.com/v1/tracks/3o1ZjYbELerWEhnS9vi24Z",
            "id": "3o1ZjYbELerWEhnS9vi24Z",
            "is_local": false,
            "is_playable": true,
            "name": "Kawaii",
            "popularity": 38,
            "preview_url": "https://p.scdn.co/mp3-preview/7ee4b10a8fc3e4f353cffa62f78da5816fed86c2?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:3o1ZjYbELerWEhnS9vi24Z"
        }
    },
    {
        "_id": "62f52766c9ce022897799097",
        "artistId": "1ilspVTrsMkslg3s50DT0w",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1ilspVTrsMkslg3s50DT0w"
        },
        "genres": [
            "albanian pop",
            "kosovan pop"
        ],
        "href": "https://api.spotify.com/v1/artists/1ilspVTrsMkslg3s50DT0w",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb589a887e1c5269abe90f772f",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174589a887e1c5269abe90f772f",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178589a887e1c5269abe90f772f",
                "width": 160
            }
        ],
        "name": "Genta Ismajli",
        "popularity": 28,
        "relatedArtists": [],
        "topTracks": [
            "2bRSY0GtswDCftAcEmXpzF",
            "7mGfbaoXCuWlXaAfM8RbVu",
            "0VFrmr10zgJ34gnfMoV8uY",
            "74jk2lHgeUPlNDaTn7bozJ",
            "6sbww2cJhU2QrxP9JDM71N",
            "3crRxAAUMHEbZPzsf3Edic",
            "60VXK8cvPZQKRS74sAPeZa",
            "0Hu4yVnqj5oDKjhzM6mrg3",
            "2uYsPFmjDjvbrB9cUj8wem",
            "6nxxixQxG5PG6R0vrcdGDn"
        ],
        "uri": "spotify:artist:1ilspVTrsMkslg3s50DT0w",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1ilspVTrsMkslg3s50DT0w"
                        },
                        "href": "https://api.spotify.com/v1/artists/1ilspVTrsMkslg3s50DT0w",
                        "id": "1ilspVTrsMkslg3s50DT0w",
                        "name": "Genta Ismajli",
                        "type": "artist",
                        "uri": "spotify:artist:1ilspVTrsMkslg3s50DT0w"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2c0sQVTJ9hidjfcb1ONnvA"
                },
                "href": "https://api.spotify.com/v1/albums/2c0sQVTJ9hidjfcb1ONnvA",
                "id": "2c0sQVTJ9hidjfcb1ONnvA",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27339b78fd4792045f50e66b731",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0239b78fd4792045f50e66b731",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485139b78fd4792045f50e66b731",
                        "width": 64
                    }
                ],
                "name": "Dy Dashni",
                "release_date": "2017-08-09",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:2c0sQVTJ9hidjfcb1ONnvA"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1ilspVTrsMkslg3s50DT0w"
                    },
                    "href": "https://api.spotify.com/v1/artists/1ilspVTrsMkslg3s50DT0w",
                    "id": "1ilspVTrsMkslg3s50DT0w",
                    "name": "Genta Ismajli",
                    "type": "artist",
                    "uri": "spotify:artist:1ilspVTrsMkslg3s50DT0w"
                }
            ],
            "disc_number": 1,
            "duration_ms": 208000,
            "explicit": false,
            "external_ids": {
                "isrc": "QZ8LD1734607"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2bRSY0GtswDCftAcEmXpzF"
            },
            "href": "https://api.spotify.com/v1/tracks/2bRSY0GtswDCftAcEmXpzF",
            "id": "2bRSY0GtswDCftAcEmXpzF",
            "is_local": false,
            "is_playable": true,
            "name": "Dy Dashni",
            "popularity": 33,
            "preview_url": "https://p.scdn.co/mp3-preview/be18ebe4c447753053f0657ac890cab5fd0c356a?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2bRSY0GtswDCftAcEmXpzF"
        }
    },
    {
        "_id": "62f52777c9ce022897799d96",
        "artistId": "2GZNHvjlxnJsei5BJFRto7",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/2GZNHvjlxnJsei5BJFRto7"
        },
        "genres": [
            "alt z"
        ],
        "href": "https://api.spotify.com/v1/artists/2GZNHvjlxnJsei5BJFRto7",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebd21d306fd3cdb69b66d4a4d6",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174d21d306fd3cdb69b66d4a4d6",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178d21d306fd3cdb69b66d4a4d6",
                "width": 160
            }
        ],
        "name": "Taylor Felt",
        "popularity": 26,
        "relatedArtists": [],
        "topTracks": [
            "2yFD85aGXfJT603rhhQOce",
            "6Eogr2KihzBwcFHRhcnMQO",
            "3Q4Cz0YTwP6Da3FikfsLV7",
            "2JQSpTJJn4XEAyrCuBpQxG"
        ],
        "uri": "spotify:artist:2GZNHvjlxnJsei5BJFRto7",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2GZNHvjlxnJsei5BJFRto7"
                        },
                        "href": "https://api.spotify.com/v1/artists/2GZNHvjlxnJsei5BJFRto7",
                        "id": "2GZNHvjlxnJsei5BJFRto7",
                        "name": "Taylor Felt",
                        "type": "artist",
                        "uri": "spotify:artist:2GZNHvjlxnJsei5BJFRto7"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2O1bQvU6aqNtYYdjowmxlQ"
                },
                "href": "https://api.spotify.com/v1/albums/2O1bQvU6aqNtYYdjowmxlQ",
                "id": "2O1bQvU6aqNtYYdjowmxlQ",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2736748dbfb4bd880f5139d941a",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e026748dbfb4bd880f5139d941a",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048516748dbfb4bd880f5139d941a",
                        "width": 64
                    }
                ],
                "name": "Once In A Blue Moon",
                "release_date": "2021-05-21",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:2O1bQvU6aqNtYYdjowmxlQ"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2GZNHvjlxnJsei5BJFRto7"
                    },
                    "href": "https://api.spotify.com/v1/artists/2GZNHvjlxnJsei5BJFRto7",
                    "id": "2GZNHvjlxnJsei5BJFRto7",
                    "name": "Taylor Felt",
                    "type": "artist",
                    "uri": "spotify:artist:2GZNHvjlxnJsei5BJFRto7"
                }
            ],
            "disc_number": 1,
            "duration_ms": 114024,
            "explicit": true,
            "external_ids": {
                "isrc": "QZQAY2159611"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2yFD85aGXfJT603rhhQOce"
            },
            "href": "https://api.spotify.com/v1/tracks/2yFD85aGXfJT603rhhQOce",
            "id": "2yFD85aGXfJT603rhhQOce",
            "is_local": false,
            "is_playable": true,
            "name": "Once In A Blue Moon",
            "popularity": 40,
            "preview_url": "https://p.scdn.co/mp3-preview/fa1f2350a0877d6823a1a712cdcd3e3a77096ffc?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2yFD85aGXfJT603rhhQOce"
        }
    },
    {
        "_id": "62f52764c9ce022897798e5a",
        "artistId": "5gcDZA9xXCOspWgQilUYIu",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5gcDZA9xXCOspWgQilUYIu"
        },
        "genres": [
            "australian indie",
            "australian indie rock",
            "australian pop"
        ],
        "href": "https://api.spotify.com/v1/artists/5gcDZA9xXCOspWgQilUYIu",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb93b812df38d5d3b160de0f5b",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517493b812df38d5d3b160de0f5b",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17893b812df38d5d3b160de0f5b",
                "width": 160
            }
        ],
        "name": "The Preatures",
        "popularity": 43,
        "relatedArtists": [],
        "topTracks": [
            "5pCIWe8tcm2dSJzqIhaTtf",
            "4DLVznHqwQ5R8nkLpTWa8y",
            "4HaMsaMCwOsLoyGc9hDQyF",
            "17Dm8An6U1pPTspssXtTjk",
            "6irdJFegr5fHW2166JuWvg",
            "232uQfqdrSPAXlXX2yQara",
            "6wko5hIPB6nlQusgZxX7da",
            "0ZHKfnlcV1YNOm3pDemgay",
            "2Kg4W4AcLDavg6ysr5Q6q2",
            "59rtemrl93kPSdybviUthJ"
        ],
        "uri": "spotify:artist:5gcDZA9xXCOspWgQilUYIu",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5gcDZA9xXCOspWgQilUYIu"
                        },
                        "href": "https://api.spotify.com/v1/artists/5gcDZA9xXCOspWgQilUYIu",
                        "id": "5gcDZA9xXCOspWgQilUYIu",
                        "name": "The Preatures",
                        "type": "artist",
                        "uri": "spotify:artist:5gcDZA9xXCOspWgQilUYIu"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6gvAXHiXqM75T1i79F8ABa"
                },
                "href": "https://api.spotify.com/v1/albums/6gvAXHiXqM75T1i79F8ABa",
                "id": "6gvAXHiXqM75T1i79F8ABa",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2737f87e5500c6319907a641b20",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e027f87e5500c6319907a641b20",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048517f87e5500c6319907a641b20",
                        "width": 64
                    }
                ],
                "name": "Blue Planet Eyes",
                "release_date": "2015-02-23",
                "release_date_precision": "day",
                "total_tracks": 10,
                "type": "album",
                "uri": "spotify:album:6gvAXHiXqM75T1i79F8ABa"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5gcDZA9xXCOspWgQilUYIu"
                    },
                    "href": "https://api.spotify.com/v1/artists/5gcDZA9xXCOspWgQilUYIu",
                    "id": "5gcDZA9xXCOspWgQilUYIu",
                    "name": "The Preatures",
                    "type": "artist",
                    "uri": "spotify:artist:5gcDZA9xXCOspWgQilUYIu"
                }
            ],
            "disc_number": 1,
            "duration_ms": 214093,
            "explicit": false,
            "external_ids": {
                "isrc": "AUUM71401125"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5pCIWe8tcm2dSJzqIhaTtf"
            },
            "href": "https://api.spotify.com/v1/tracks/5pCIWe8tcm2dSJzqIhaTtf",
            "id": "5pCIWe8tcm2dSJzqIhaTtf",
            "is_local": false,
            "is_playable": true,
            "name": "Is This How You Feel?",
            "popularity": 38,
            "preview_url": "https://p.scdn.co/mp3-preview/6147c468840d802f3518134abbd4754a6c247610?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:5pCIWe8tcm2dSJzqIhaTtf"
        }
    },
    {
        "_id": "62f434e4c9ce022897435a0e",
        "artistId": "3YebotmWYFiED1bx82XBmB",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/3YebotmWYFiED1bx82XBmB"
        },
        "genres": [
            "trap soul"
        ],
        "href": "https://api.spotify.com/v1/artists/3YebotmWYFiED1bx82XBmB",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb35d7144fe5f220acddcbbaa7",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517435d7144fe5f220acddcbbaa7",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17835d7144fe5f220acddcbbaa7",
                "width": 160
            }
        ],
        "name": "Norman Perry",
        "popularity": 40,
        "relatedArtists": [],
        "topTracks": [
            "3eSe6xsgvVM7nd55klcGN4",
            "2NWfDAmNmFutzFrLNstTjy",
            "48x33TeSrL0h7kn21o2suO",
            "3GEk7y0iWAP5rKa9O6KMUE",
            "1YVDJNR76l4VodYsjQN1OQ",
            "5cJy2jd6aPoPLYcNy1JjoR",
            "6wM1atku9wXDgiYfxU8l0X",
            "6ou4s6ejFgHcjpA1uPRoeN",
            "5Oa0Z43bWldGzShzq5yo7T",
            "7lLxUo4x4JOQ5BD8TKBSGl"
        ],
        "uri": "spotify:artist:3YebotmWYFiED1bx82XBmB",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3YebotmWYFiED1bx82XBmB"
                        },
                        "href": "https://api.spotify.com/v1/artists/3YebotmWYFiED1bx82XBmB",
                        "id": "3YebotmWYFiED1bx82XBmB",
                        "name": "Norman Perry",
                        "type": "artist",
                        "uri": "spotify:artist:3YebotmWYFiED1bx82XBmB"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5S2yGe73tsqt9ZW46aMZOt"
                },
                "href": "https://api.spotify.com/v1/albums/5S2yGe73tsqt9ZW46aMZOt",
                "id": "5S2yGe73tsqt9ZW46aMZOt",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27364a645befebe82ed1ad6eae6",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0264a645befebe82ed1ad6eae6",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485164a645befebe82ed1ad6eae6",
                        "width": 64
                    }
                ],
                "name": "Way Darker This Time",
                "release_date": "2020-04-10",
                "release_date_precision": "day",
                "total_tracks": 10,
                "type": "album",
                "uri": "spotify:album:5S2yGe73tsqt9ZW46aMZOt"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3YebotmWYFiED1bx82XBmB"
                    },
                    "href": "https://api.spotify.com/v1/artists/3YebotmWYFiED1bx82XBmB",
                    "id": "3YebotmWYFiED1bx82XBmB",
                    "name": "Norman Perry",
                    "type": "artist",
                    "uri": "spotify:artist:3YebotmWYFiED1bx82XBmB"
                }
            ],
            "disc_number": 1,
            "duration_ms": 192000,
            "explicit": true,
            "external_ids": {
                "isrc": "CA5KR2032350"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3eSe6xsgvVM7nd55klcGN4"
            },
            "href": "https://api.spotify.com/v1/tracks/3eSe6xsgvVM7nd55klcGN4",
            "id": "3eSe6xsgvVM7nd55klcGN4",
            "is_local": false,
            "is_playable": true,
            "name": "Sainted",
            "popularity": 47,
            "preview_url": "https://p.scdn.co/mp3-preview/b7a6173a4e9a9ea991c83018163925add9bf93c9?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 4,
            "type": "track",
            "uri": "spotify:track:3eSe6xsgvVM7nd55klcGN4"
        }
    },
    {
        "_id": "62f433d7c9ce022897430091",
        "artistId": "7fqX79zrGOAWU1TJ9ozntW",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/7fqX79zrGOAWU1TJ9ozntW"
        },
        "genres": [
            "hyperpop en espanol"
        ],
        "href": "https://api.spotify.com/v1/artists/7fqX79zrGOAWU1TJ9ozntW",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb96dfc2c817c1df56854d5c1e",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517496dfc2c817c1df56854d5c1e",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17896dfc2c817c1df56854d5c1e",
                "width": 160
            }
        ],
        "name": "Drew K.",
        "popularity": 26,
        "relatedArtists": [],
        "topTracks": [
            "6nxW6h6HnFaqfsmOuv0hyG",
            "0fhErcjjlKsQOVlkeBrKse",
            "3qUxsdN9jht0O7pt1GiQZI",
            "4Vak23ltMANJLNBZV9iW3g",
            "7zVWsWV4MmS1K72NoL6RCw",
            "433IQL5vgqIwM6B52ndhvj",
            "0w2s0NKM9zEAcuHKhiogUU",
            "1BhpEejZ2s9I6kQknRMzli",
            "4jZbbtBnz8yl5mGUyoasul",
            "5QHqNJAvFMbYk9zBE6Vpbh"
        ],
        "uri": "spotify:artist:7fqX79zrGOAWU1TJ9ozntW",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7fqX79zrGOAWU1TJ9ozntW"
                        },
                        "href": "https://api.spotify.com/v1/artists/7fqX79zrGOAWU1TJ9ozntW",
                        "id": "7fqX79zrGOAWU1TJ9ozntW",
                        "name": "Drew K.",
                        "type": "artist",
                        "uri": "spotify:artist:7fqX79zrGOAWU1TJ9ozntW"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4sqItYVnvoPu7SXvOEzutV"
                        },
                        "href": "https://api.spotify.com/v1/artists/4sqItYVnvoPu7SXvOEzutV",
                        "id": "4sqItYVnvoPu7SXvOEzutV",
                        "name": "Piru",
                        "type": "artist",
                        "uri": "spotify:artist:4sqItYVnvoPu7SXvOEzutV"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/54sYuSAu90RlmyCE5HwGNZ"
                },
                "href": "https://api.spotify.com/v1/albums/54sYuSAu90RlmyCE5HwGNZ",
                "id": "54sYuSAu90RlmyCE5HwGNZ",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27312ec3c703d864430a248b0f0",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0212ec3c703d864430a248b0f0",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485112ec3c703d864430a248b0f0",
                        "width": 64
                    }
                ],
                "name": "Main Chapter",
                "release_date": "2021-11-26",
                "release_date_precision": "day",
                "total_tracks": 9,
                "type": "album",
                "uri": "spotify:album:54sYuSAu90RlmyCE5HwGNZ"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7fqX79zrGOAWU1TJ9ozntW"
                    },
                    "href": "https://api.spotify.com/v1/artists/7fqX79zrGOAWU1TJ9ozntW",
                    "id": "7fqX79zrGOAWU1TJ9ozntW",
                    "name": "Drew K.",
                    "type": "artist",
                    "uri": "spotify:artist:7fqX79zrGOAWU1TJ9ozntW"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4sqItYVnvoPu7SXvOEzutV"
                    },
                    "href": "https://api.spotify.com/v1/artists/4sqItYVnvoPu7SXvOEzutV",
                    "id": "4sqItYVnvoPu7SXvOEzutV",
                    "name": "Piru",
                    "type": "artist",
                    "uri": "spotify:artist:4sqItYVnvoPu7SXvOEzutV"
                }
            ],
            "disc_number": 1,
            "duration_ms": 141183,
            "explicit": false,
            "external_ids": {
                "isrc": "QMDA72150699"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6nxW6h6HnFaqfsmOuv0hyG"
            },
            "href": "https://api.spotify.com/v1/tracks/6nxW6h6HnFaqfsmOuv0hyG",
            "id": "6nxW6h6HnFaqfsmOuv0hyG",
            "is_local": false,
            "is_playable": true,
            "name": "Ninfa",
            "popularity": 36,
            "preview_url": "https://p.scdn.co/mp3-preview/d3ea217ae26486084a257a4ebe124c47ca4a1788?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:6nxW6h6HnFaqfsmOuv0hyG"
        }
    },
    {
        "_id": "62f52764c9ce022897798e50",
        "artistId": "1oJolWh3meHLWUcyIijst7",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1oJolWh3meHLWUcyIijst7"
        },
        "genres": [
            "alternative dance",
            "dance-punk",
            "indie rock",
            "jacksonville indie",
            "new rave"
        ],
        "href": "https://api.spotify.com/v1/artists/1oJolWh3meHLWUcyIijst7",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb93e91fa89267c69f23ccf001",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517493e91fa89267c69f23ccf001",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17893e91fa89267c69f23ccf001",
                "width": 160
            }
        ],
        "name": "Black Kids",
        "popularity": 39,
        "relatedArtists": [],
        "topTracks": [
            "6fcZNs8sOkLwMK2NPzfVWC",
            "6i5TjPi3OBBj4RhAIWOY0I",
            "5ckWUzRPGp4Fv2zJoaGTTf",
            "1NYJpnnb1NXD01Vi5NwyZz",
            "0JOkVoNMwgzPpENwW7Xl5p",
            "7mnMrnNU0K0EPFPagkgjKw",
            "3eU7KmwMeY9OotCtPE8yjF",
            "5iZHyEl1eM1dZ75UWoTOs1",
            "1Gep5mWzVFNDXZ7aHUm1kN",
            "721pqMxHXKRdiuByo1zF7d"
        ],
        "uri": "spotify:artist:1oJolWh3meHLWUcyIijst7",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1oJolWh3meHLWUcyIijst7"
                        },
                        "href": "https://api.spotify.com/v1/artists/1oJolWh3meHLWUcyIijst7",
                        "id": "1oJolWh3meHLWUcyIijst7",
                        "name": "Black Kids",
                        "type": "artist",
                        "uri": "spotify:artist:1oJolWh3meHLWUcyIijst7"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5VrF6FtM8ZJcA3NcGN2AM1"
                },
                "href": "https://api.spotify.com/v1/albums/5VrF6FtM8ZJcA3NcGN2AM1",
                "id": "5VrF6FtM8ZJcA3NcGN2AM1",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2731589d106b36507934794a3d9",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e021589d106b36507934794a3d9",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048511589d106b36507934794a3d9",
                        "width": 64
                    }
                ],
                "name": "Partie Traumatic",
                "release_date": "2008-01-01",
                "release_date_precision": "day",
                "total_tracks": 10,
                "type": "album",
                "uri": "spotify:album:5VrF6FtM8ZJcA3NcGN2AM1"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1oJolWh3meHLWUcyIijst7"
                    },
                    "href": "https://api.spotify.com/v1/artists/1oJolWh3meHLWUcyIijst7",
                    "id": "1oJolWh3meHLWUcyIijst7",
                    "name": "Black Kids",
                    "type": "artist",
                    "uri": "spotify:artist:1oJolWh3meHLWUcyIijst7"
                }
            ],
            "disc_number": 1,
            "duration_ms": 217733,
            "explicit": false,
            "external_ids": {
                "isrc": "GBUM70801873"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6fcZNs8sOkLwMK2NPzfVWC"
            },
            "href": "https://api.spotify.com/v1/tracks/6fcZNs8sOkLwMK2NPzfVWC",
            "id": "6fcZNs8sOkLwMK2NPzfVWC",
            "is_local": false,
            "is_playable": true,
            "name": "I'm Not Gonna Teach Your Boyfriend How To Dance With You",
            "popularity": 46,
            "preview_url": "https://p.scdn.co/mp3-preview/59a888c2570dadf3dea62515b7b504ed7f58a8d9?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 7,
            "type": "track",
            "uri": "spotify:track:6fcZNs8sOkLwMK2NPzfVWC"
        }
    },
    {
        "_id": "62f433d6c9ce02289742fec9",
        "artistId": "3BbLQNj5OTxm4AZcwyREFF",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/3BbLQNj5OTxm4AZcwyREFF"
        },
        "genres": [
            "mexican hip hop",
            "mexican indie",
            "perreo",
            "rap underground mexicano",
            "trap mexicano"
        ],
        "href": "https://api.spotify.com/v1/artists/3BbLQNj5OTxm4AZcwyREFF",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb59e138dc917af5309413f9de",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517459e138dc917af5309413f9de",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17859e138dc917af5309413f9de",
                "width": 160
            }
        ],
        "name": "Tino El Pingüino",
        "popularity": 47,
        "relatedArtists": [],
        "topTracks": [
            "5BNZcuyCkcBNIhF2DmQlWf",
            "166T5iL97Xaxb35mCV6abl",
            "3i1il3IAhDOnm7IXd22BnP",
            "7uXrV8mdjGDBd3zl5ktD7q",
            "4U09Dsa20zQ5ducUTJEmB8",
            "3p9FRmpziWDcwdBFLJ8orj",
            "0Ghjx5UhZjI19MltKvBTQd",
            "4qdXwB87WRfDaMcfVpD44G",
            "55Aw3srmgD51R6zptIOWNG",
            "2wn1DN0iXyXre2FCvPbZWU"
        ],
        "uri": "spotify:artist:3BbLQNj5OTxm4AZcwyREFF",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3BbLQNj5OTxm4AZcwyREFF"
                        },
                        "href": "https://api.spotify.com/v1/artists/3BbLQNj5OTxm4AZcwyREFF",
                        "id": "3BbLQNj5OTxm4AZcwyREFF",
                        "name": "Tino El Pingüino",
                        "type": "artist",
                        "uri": "spotify:artist:3BbLQNj5OTxm4AZcwyREFF"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2bcCoVonJSVHk4Q7IYMRyf"
                },
                "href": "https://api.spotify.com/v1/albums/2bcCoVonJSVHk4Q7IYMRyf",
                "id": "2bcCoVonJSVHk4Q7IYMRyf",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273844cc5ba704c915f50f13aae",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02844cc5ba704c915f50f13aae",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851844cc5ba704c915f50f13aae",
                        "width": 64
                    }
                ],
                "name": "Fractúbela",
                "release_date": "2017-05-05",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:2bcCoVonJSVHk4Q7IYMRyf"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3BbLQNj5OTxm4AZcwyREFF"
                    },
                    "href": "https://api.spotify.com/v1/artists/3BbLQNj5OTxm4AZcwyREFF",
                    "id": "3BbLQNj5OTxm4AZcwyREFF",
                    "name": "Tino El Pingüino",
                    "type": "artist",
                    "uri": "spotify:artist:3BbLQNj5OTxm4AZcwyREFF"
                }
            ],
            "disc_number": 1,
            "duration_ms": 258901,
            "explicit": false,
            "external_ids": {
                "isrc": "US7VG1748991"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5BNZcuyCkcBNIhF2DmQlWf"
            },
            "href": "https://api.spotify.com/v1/tracks/5BNZcuyCkcBNIhF2DmQlWf",
            "id": "5BNZcuyCkcBNIhF2DmQlWf",
            "is_local": false,
            "is_playable": true,
            "name": "Fractúbela",
            "popularity": 51,
            "preview_url": "https://p.scdn.co/mp3-preview/14862114973c8f6fc6f3935d95f48b180029d526?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:5BNZcuyCkcBNIhF2DmQlWf"
        }
    },
    {
        "_id": "62f43407c9ce0228974316de",
        "artistId": "6UEYawMcp2M4JFoXVOtZEq",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6UEYawMcp2M4JFoXVOtZEq"
        },
        "genres": [
            "compositional ambient",
            "neo-classical"
        ],
        "href": "https://api.spotify.com/v1/artists/6UEYawMcp2M4JFoXVOtZEq",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb9fa10970821c5a5406c03e0e",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051749fa10970821c5a5406c03e0e",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1789fa10970821c5a5406c03e0e",
                "width": 160
            }
        ],
        "name": "Dustin O'Halloran",
        "popularity": 53,
        "relatedArtists": [],
        "topTracks": [
            "321kAwKSTFjsQznjLpbfD9",
            "4d5g8281I07iaIevSsP1ge",
            "7eTDwpm5XKKssoMhMbo67y",
            "18jxPJ0aA7zq0ijztjSvTY",
            "5Gm2tHCFTzb0vHZfReSr5f",
            "122EWbjLx9gYysvIscsZRe",
            "6CngZA32wwYDbfY0f3pVj2",
            "2ZtQgrIztmjQwyewLyvDmm",
            "1BDEDuqxCvqGMda7R2VBI0",
            "3Og6m4ltVGu3OteMm1Qw5F"
        ],
        "uri": "spotify:artist:6UEYawMcp2M4JFoXVOtZEq",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6UEYawMcp2M4JFoXVOtZEq"
                        },
                        "href": "https://api.spotify.com/v1/artists/6UEYawMcp2M4JFoXVOtZEq",
                        "id": "6UEYawMcp2M4JFoXVOtZEq",
                        "name": "Dustin O'Halloran",
                        "type": "artist",
                        "uri": "spotify:artist:6UEYawMcp2M4JFoXVOtZEq"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1Va8CigySsDYYoQiRneEwb"
                },
                "href": "https://api.spotify.com/v1/albums/1Va8CigySsDYYoQiRneEwb",
                "id": "1Va8CigySsDYYoQiRneEwb",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273b25771724eb869e109670b49",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02b25771724eb869e109670b49",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851b25771724eb869e109670b49",
                        "width": 64
                    }
                ],
                "name": "Other Lights",
                "release_date": "2019-06-28",
                "release_date_precision": "day",
                "total_tracks": 7,
                "type": "album",
                "uri": "spotify:album:1Va8CigySsDYYoQiRneEwb"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6UEYawMcp2M4JFoXVOtZEq"
                    },
                    "href": "https://api.spotify.com/v1/artists/6UEYawMcp2M4JFoXVOtZEq",
                    "id": "6UEYawMcp2M4JFoXVOtZEq",
                    "name": "Dustin O'Halloran",
                    "type": "artist",
                    "uri": "spotify:artist:6UEYawMcp2M4JFoXVOtZEq"
                }
            ],
            "disc_number": 1,
            "duration_ms": 128773,
            "explicit": false,
            "external_ids": {
                "isrc": "US8571900019"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/321kAwKSTFjsQznjLpbfD9"
            },
            "href": "https://api.spotify.com/v1/tracks/321kAwKSTFjsQznjLpbfD9",
            "id": "321kAwKSTFjsQznjLpbfD9",
            "is_local": false,
            "is_playable": true,
            "name": "An Ending, a Beginning",
            "popularity": 52,
            "preview_url": "https://p.scdn.co/mp3-preview/70d6c35720f114c9f1003892b8613f5aba5d3bea?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:321kAwKSTFjsQznjLpbfD9"
        }
    },
    {
        "_id": "62f433b8c9ce02289742f14a",
        "artistId": "5Rc75vGFBWZPgL7EXb4k89",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5Rc75vGFBWZPgL7EXb4k89"
        },
        "genres": [
            "pop punk",
            "progressive post-hardcore"
        ],
        "href": "https://api.spotify.com/v1/artists/5Rc75vGFBWZPgL7EXb4k89",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb2e7e20adb334d7ddef3cc710",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051742e7e20adb334d7ddef3cc710",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1782e7e20adb334d7ddef3cc710",
                "width": 160
            }
        ],
        "name": "Bilmuri",
        "popularity": 50,
        "relatedArtists": [],
        "topTracks": [
            "0rnCdgLTJNh23XJBIMLpDq",
            "0ICNCIl4m3g4xC8zvxCq5f",
            "7ruEpQsbYWT9VIWfELzMFF",
            "58NXzeA8zItIXVswwmfZC7",
            "5gBQmRUJa29eBwgLMF4wTP",
            "0dj1yT3MNh2xpdBCsSkmFa",
            "3mVEXbJL6gabLrU4BRBs4m",
            "3akkA8iMHlemz2PRtTvqXp",
            "2dLv6YwZtcmoHKbeBHyAYH",
            "6FIitX8ZEMZL6HaNr9eYbs"
        ],
        "uri": "spotify:artist:5Rc75vGFBWZPgL7EXb4k89",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5Rc75vGFBWZPgL7EXb4k89"
                        },
                        "href": "https://api.spotify.com/v1/artists/5Rc75vGFBWZPgL7EXb4k89",
                        "id": "5Rc75vGFBWZPgL7EXb4k89",
                        "name": "Bilmuri",
                        "type": "artist",
                        "uri": "spotify:artist:5Rc75vGFBWZPgL7EXb4k89"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4zMAfDf1c1yTAnm3bKDVSv"
                },
                "href": "https://api.spotify.com/v1/albums/4zMAfDf1c1yTAnm3bKDVSv",
                "id": "4zMAfDf1c1yTAnm3bKDVSv",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2738256995458d7bf61d7c3bc8d",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e028256995458d7bf61d7c3bc8d",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048518256995458d7bf61d7c3bc8d",
                        "width": 64
                    }
                ],
                "name": "Letters",
                "release_date": "2016-11-21",
                "release_date_precision": "day",
                "total_tracks": 9,
                "type": "album",
                "uri": "spotify:album:4zMAfDf1c1yTAnm3bKDVSv"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5Rc75vGFBWZPgL7EXb4k89"
                    },
                    "href": "https://api.spotify.com/v1/artists/5Rc75vGFBWZPgL7EXb4k89",
                    "id": "5Rc75vGFBWZPgL7EXb4k89",
                    "name": "Bilmuri",
                    "type": "artist",
                    "uri": "spotify:artist:5Rc75vGFBWZPgL7EXb4k89"
                }
            ],
            "disc_number": 1,
            "duration_ms": 128869,
            "explicit": false,
            "external_ids": {
                "isrc": "TCACS1662078"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0rnCdgLTJNh23XJBIMLpDq"
            },
            "href": "https://api.spotify.com/v1/tracks/0rnCdgLTJNh23XJBIMLpDq",
            "id": "0rnCdgLTJNh23XJBIMLpDq",
            "is_local": false,
            "is_playable": true,
            "name": "Near",
            "popularity": 49,
            "preview_url": "https://p.scdn.co/mp3-preview/eadbd155a081bfecd404aaedcf14259dafa1d9f4?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 9,
            "type": "track",
            "uri": "spotify:track:0rnCdgLTJNh23XJBIMLpDq"
        }
    },
    {
        "_id": "62f52766c9ce02289779913c",
        "artistId": "6zFvShngxbE2EspCNBWkHI",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6zFvShngxbE2EspCNBWkHI"
        },
        "genres": [
            "albanian pop"
        ],
        "href": "https://api.spotify.com/v1/artists/6zFvShngxbE2EspCNBWkHI",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebc02c5e40293d399e1857a1e0",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174c02c5e40293d399e1857a1e0",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178c02c5e40293d399e1857a1e0",
                "width": 160
            }
        ],
        "name": "Bes Kallaku",
        "popularity": 37,
        "relatedArtists": [],
        "topTracks": [
            "0vnas7YbvAlrqJonsD1sOk",
            "4CyHg6qNRdhQA8XAYeQDCD",
            "1tesKYJitn8xwq2WTHM07E",
            "69DeectiCgTsgy2ebG8Qil",
            "2WfCvOds8ACnWqJFogBAZQ",
            "3KP4BbuFF5CTgOCrs9taLr",
            "0OwcsJUoycclwlgDqmUCGk",
            "2Bet94ijMvonB4gvNdnpHJ",
            "24zSMoy09vTxdDi4zk8OsM",
            "6RypQOE88jkdYg1BjoVnEu"
        ],
        "uri": "spotify:artist:6zFvShngxbE2EspCNBWkHI",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6zFvShngxbE2EspCNBWkHI"
                        },
                        "href": "https://api.spotify.com/v1/artists/6zFvShngxbE2EspCNBWkHI",
                        "id": "6zFvShngxbE2EspCNBWkHI",
                        "name": "Bes Kallaku",
                        "type": "artist",
                        "uri": "spotify:artist:6zFvShngxbE2EspCNBWkHI"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/68Kfb0ForXK2Kfjzzpk9Me"
                },
                "href": "https://api.spotify.com/v1/albums/68Kfb0ForXK2Kfjzzpk9Me",
                "id": "68Kfb0ForXK2Kfjzzpk9Me",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27321bb32a867f240aab77f10b9",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0221bb32a867f240aab77f10b9",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485121bb32a867f240aab77f10b9",
                        "width": 64
                    }
                ],
                "name": "Skifterja Zemres",
                "release_date": "2019-01-12",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:68Kfb0ForXK2Kfjzzpk9Me"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6zFvShngxbE2EspCNBWkHI"
                    },
                    "href": "https://api.spotify.com/v1/artists/6zFvShngxbE2EspCNBWkHI",
                    "id": "6zFvShngxbE2EspCNBWkHI",
                    "name": "Bes Kallaku",
                    "type": "artist",
                    "uri": "spotify:artist:6zFvShngxbE2EspCNBWkHI"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0nRwbKRsrWuehEbJ8SBb2j"
                    },
                    "href": "https://api.spotify.com/v1/artists/0nRwbKRsrWuehEbJ8SBb2j",
                    "id": "0nRwbKRsrWuehEbJ8SBb2j",
                    "name": "Klajdi Haruni",
                    "type": "artist",
                    "uri": "spotify:artist:0nRwbKRsrWuehEbJ8SBb2j"
                }
            ],
            "disc_number": 1,
            "duration_ms": 171312,
            "explicit": false,
            "external_ids": {
                "isrc": "QZ8LD1916791"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0vnas7YbvAlrqJonsD1sOk"
            },
            "href": "https://api.spotify.com/v1/tracks/0vnas7YbvAlrqJonsD1sOk",
            "id": "0vnas7YbvAlrqJonsD1sOk",
            "is_local": false,
            "is_playable": true,
            "name": "Skifterja Zemres",
            "popularity": 45,
            "preview_url": "https://p.scdn.co/mp3-preview/c31ddcfec4e911ac3dffaddd2d33e2a8a35f4646?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:0vnas7YbvAlrqJonsD1sOk"
        }
    },
    {
        "_id": "62f52772c9ce0228977998b2",
        "artistId": "1RzwDDPsg9uiMt7qFo1OdU",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1RzwDDPsg9uiMt7qFo1OdU"
        },
        "genres": [
            "ukrainian folk rock",
            "ukrainian pop",
            "ukrainian rock"
        ],
        "href": "https://api.spotify.com/v1/artists/1RzwDDPsg9uiMt7qFo1OdU",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27361a7899bc4b6e426f5e45db8",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0261a7899bc4b6e426f5e45db8",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485161a7899bc4b6e426f5e45db8",
                "width": 64
            }
        ],
        "name": "Tartak",
        "popularity": 39,
        "relatedArtists": [],
        "topTracks": [
            "3MS0envCzNVFMdxk373PGI",
            "43WEpBdHTvLwNgXhtgSTQ0",
            "0dzMDaN0aXS7BHyTxaA6B5",
            "1Xjc2TbrkJFIldR6iXIoHl",
            "2j7qYCz7xCuDpm0yxElqAX",
            "08bJFABVPOd5YfC4o5yfJe",
            "3V18eQEIcX9efcjAfmDDm2",
            "5hGrkAfZ6hQF8DRjUys5Sl",
            "1cYj15He9QaLwAJe2pC3do",
            "1u9aaGX7zKlK4ImBZzDAui"
        ],
        "uri": "spotify:artist:1RzwDDPsg9uiMt7qFo1OdU",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1RzwDDPsg9uiMt7qFo1OdU"
                        },
                        "href": "https://api.spotify.com/v1/artists/1RzwDDPsg9uiMt7qFo1OdU",
                        "id": "1RzwDDPsg9uiMt7qFo1OdU",
                        "name": "Tartak",
                        "type": "artist",
                        "uri": "spotify:artist:1RzwDDPsg9uiMt7qFo1OdU"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6ia241wLMIRkKQHhdyFeGD"
                },
                "href": "https://api.spotify.com/v1/albums/6ia241wLMIRkKQHhdyFeGD",
                "id": "6ia241wLMIRkKQHhdyFeGD",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27361a7899bc4b6e426f5e45db8",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0261a7899bc4b6e426f5e45db8",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485161a7899bc4b6e426f5e45db8",
                        "width": 64
                    }
                ],
                "name": "Ввічність",
                "release_date": "2015-11-23",
                "release_date_precision": "day",
                "total_tracks": 15,
                "type": "album",
                "uri": "spotify:album:6ia241wLMIRkKQHhdyFeGD"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1RzwDDPsg9uiMt7qFo1OdU"
                    },
                    "href": "https://api.spotify.com/v1/artists/1RzwDDPsg9uiMt7qFo1OdU",
                    "id": "1RzwDDPsg9uiMt7qFo1OdU",
                    "name": "Tartak",
                    "type": "artist",
                    "uri": "spotify:artist:1RzwDDPsg9uiMt7qFo1OdU"
                }
            ],
            "disc_number": 1,
            "duration_ms": 216177,
            "explicit": false,
            "external_ids": {
                "isrc": "UABG11500148"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3MS0envCzNVFMdxk373PGI"
            },
            "href": "https://api.spotify.com/v1/tracks/3MS0envCzNVFMdxk373PGI",
            "id": "3MS0envCzNVFMdxk373PGI",
            "is_local": false,
            "is_playable": true,
            "name": "Мене вже немає",
            "popularity": 48,
            "preview_url": "https://p.scdn.co/mp3-preview/0167653660578670be83bf1f3a37264740d55832?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 14,
            "type": "track",
            "uri": "spotify:track:3MS0envCzNVFMdxk373PGI"
        }
    },
    {
        "_id": "62f434e5c9ce022897435d22",
        "artistId": "1XkoF8ryArs86LZvFOkbyr",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1XkoF8ryArs86LZvFOkbyr"
        },
        "genres": [
            "dance pop",
            "hip pop",
            "neo soul",
            "r&b",
            "urban contemporary"
        ],
        "href": "https://api.spotify.com/v1/artists/1XkoF8ryArs86LZvFOkbyr",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb59f9f1ee5a9d2d917813e70f",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517459f9f1ee5a9d2d917813e70f",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17859f9f1ee5a9d2d917813e70f",
                "width": 160
            }
        ],
        "name": "Mary J. Blige",
        "popularity": 70,
        "relatedArtists": [],
        "topTracks": [
            "3aw9iWUQ3VrPQltgwvN9Xu",
            "6Y3WvyUG9iE5bQYg38SPtQ",
            "3Lk7RWStfLaHG7lXsuS87j",
            "3XG801WWhqC753dekEBkMt",
            "33vzOPcd9FRirYGlCu32x4",
            "2zwmugV2IbUwKq5JgOWEpv",
            "7nWsh14AHpnTzq1Xejz90U",
            "7r3KzVwHtr2iMZtqJvFn9A",
            "7mwLsFXNBWbtFzA032tUbx",
            "4MTHIKGWNTBoubzDMkXFfa"
        ],
        "uri": "spotify:artist:1XkoF8ryArs86LZvFOkbyr",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1XkoF8ryArs86LZvFOkbyr"
                        },
                        "href": "https://api.spotify.com/v1/artists/1XkoF8ryArs86LZvFOkbyr",
                        "id": "1XkoF8ryArs86LZvFOkbyr",
                        "name": "Mary J. Blige",
                        "type": "artist",
                        "uri": "spotify:artist:1XkoF8ryArs86LZvFOkbyr"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5QJmKwPveBV4IwLlo4OcG4"
                },
                "href": "https://api.spotify.com/v1/albums/5QJmKwPveBV4IwLlo4OcG4",
                "id": "5QJmKwPveBV4IwLlo4OcG4",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273096a7fc9668305db9d3175fc",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02096a7fc9668305db9d3175fc",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851096a7fc9668305db9d3175fc",
                        "width": 64
                    }
                ],
                "name": "No More Drama",
                "release_date": "2001-01-01",
                "release_date_precision": "day",
                "total_tracks": 17,
                "type": "album",
                "uri": "spotify:album:5QJmKwPveBV4IwLlo4OcG4"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1XkoF8ryArs86LZvFOkbyr"
                    },
                    "href": "https://api.spotify.com/v1/artists/1XkoF8ryArs86LZvFOkbyr",
                    "id": "1XkoF8ryArs86LZvFOkbyr",
                    "name": "Mary J. Blige",
                    "type": "artist",
                    "uri": "spotify:artist:1XkoF8ryArs86LZvFOkbyr"
                }
            ],
            "disc_number": 1,
            "duration_ms": 265866,
            "explicit": false,
            "external_ids": {
                "isrc": "USMC10111369"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3aw9iWUQ3VrPQltgwvN9Xu"
            },
            "href": "https://api.spotify.com/v1/tracks/3aw9iWUQ3VrPQltgwvN9Xu",
            "id": "3aw9iWUQ3VrPQltgwvN9Xu",
            "is_local": false,
            "is_playable": true,
            "name": "Family Affair",
            "popularity": 76,
            "preview_url": "https://p.scdn.co/mp3-preview/cfe053e190c34b4aaf06d0b75aebcdb2ad941b7e?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:3aw9iWUQ3VrPQltgwvN9Xu"
        }
    },
    {
        "_id": "62f433d6c9ce02289742fe70",
        "artistId": "4xEDJHMQ8PN1U2pEldwI6O",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4xEDJHMQ8PN1U2pEldwI6O"
        },
        "genres": [
            "rap chileno",
            "trap argentino",
            "trap chileno"
        ],
        "href": "https://api.spotify.com/v1/artists/4xEDJHMQ8PN1U2pEldwI6O",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb60b45a053561137b73c56e7e",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517460b45a053561137b73c56e7e",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17860b45a053561137b73c56e7e",
                "width": 160
            }
        ],
        "name": "Easykid",
        "popularity": 48,
        "relatedArtists": [],
        "topTracks": [
            "191Xa90UTHzIVmyj19EOUt",
            "3UUyA5Vdjt0PhefSszy5CN",
            "6DrsuIC4Xe9x5Jk2N05YQh",
            "1B8wZ7BnYSFBgoEp1B09UV",
            "63dkqvnlnNY7zcVZLbdcD7",
            "0FQs7mjiXIJW0d0VQkH0Vs",
            "4PIBJwsKlqtXmxOITtgJ9A",
            "1ZQ8b8VoFidc7WVEtozWeU",
            "2HoNsjfiv7zaVNL0Ie7g22",
            "6T9l7yPRAeH96SBY8KbGoy"
        ],
        "uri": "spotify:artist:4xEDJHMQ8PN1U2pEldwI6O",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4xEDJHMQ8PN1U2pEldwI6O"
                        },
                        "href": "https://api.spotify.com/v1/artists/4xEDJHMQ8PN1U2pEldwI6O",
                        "id": "4xEDJHMQ8PN1U2pEldwI6O",
                        "name": "Easykid",
                        "type": "artist",
                        "uri": "spotify:artist:4xEDJHMQ8PN1U2pEldwI6O"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/77YrroGP4OhT1SCsoTWkxr"
                },
                "href": "https://api.spotify.com/v1/albums/77YrroGP4OhT1SCsoTWkxr",
                "id": "77YrroGP4OhT1SCsoTWkxr",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2730f64fec0a9950ec7b0c5ec99",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e020f64fec0a9950ec7b0c5ec99",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048510f64fec0a9950ec7b0c5ec99",
                        "width": 64
                    }
                ],
                "name": "+XQA",
                "release_date": "2021-08-19",
                "release_date_precision": "day",
                "total_tracks": 7,
                "type": "album",
                "uri": "spotify:album:77YrroGP4OhT1SCsoTWkxr"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4xEDJHMQ8PN1U2pEldwI6O"
                    },
                    "href": "https://api.spotify.com/v1/artists/4xEDJHMQ8PN1U2pEldwI6O",
                    "id": "4xEDJHMQ8PN1U2pEldwI6O",
                    "name": "Easykid",
                    "type": "artist",
                    "uri": "spotify:artist:4xEDJHMQ8PN1U2pEldwI6O"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5pughe5rcsOq3GF0utMOs5"
                    },
                    "href": "https://api.spotify.com/v1/artists/5pughe5rcsOq3GF0utMOs5",
                    "id": "5pughe5rcsOq3GF0utMOs5",
                    "name": "DrefQuila",
                    "type": "artist",
                    "uri": "spotify:artist:5pughe5rcsOq3GF0utMOs5"
                }
            ],
            "disc_number": 1,
            "duration_ms": 195000,
            "explicit": false,
            "external_ids": {
                "isrc": "QZK6J2124723"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/191Xa90UTHzIVmyj19EOUt"
            },
            "href": "https://api.spotify.com/v1/tracks/191Xa90UTHzIVmyj19EOUt",
            "id": "191Xa90UTHzIVmyj19EOUt",
            "is_local": false,
            "is_playable": true,
            "name": "Bellakera",
            "popularity": 58,
            "preview_url": "https://p.scdn.co/mp3-preview/120adbb3c6a57e876cdc1a819f34f583666c4b29?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:191Xa90UTHzIVmyj19EOUt"
        }
    },
    {
        "_id": "62f43407c9ce0228974318ab",
        "artistId": "5yPVuutf3WAXUt1VqDaN1t",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5yPVuutf3WAXUt1VqDaN1t"
        },
        "genres": [
            "bass house",
            "deep groove house",
            "house",
            "uk tech house"
        ],
        "href": "https://api.spotify.com/v1/artists/5yPVuutf3WAXUt1VqDaN1t",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb67d42ea83964ef51373a4151",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517467d42ea83964ef51373a4151",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17867d42ea83964ef51373a4151",
                "width": 160
            }
        ],
        "name": "Chapter & Verse",
        "popularity": 48,
        "relatedArtists": [],
        "topTracks": [
            "18KVIouF8klKE9HdqdpUxd",
            "4eadst9pPSuPYa6ZC79DBj",
            "3l3RsIHCP7WkjxeBGSy3ep",
            "2rqgrjE3T96UvvQ0MheJ8T",
            "6zRBMIDHnuuvWyaumNNcQF",
            "0jFA5OQVrpRfBt9hTKQxv7",
            "01xowIJrmShI6X9Q1WXqAd",
            "2QR9IKSoGwcIYBMw5iUlwN",
            "1CX73iXs4CVUKESOG8BpwT",
            "4hTCMB2JXvKvWDxjoye7xI"
        ],
        "uri": "spotify:artist:5yPVuutf3WAXUt1VqDaN1t",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5yPVuutf3WAXUt1VqDaN1t"
                        },
                        "href": "https://api.spotify.com/v1/artists/5yPVuutf3WAXUt1VqDaN1t",
                        "id": "5yPVuutf3WAXUt1VqDaN1t",
                        "name": "Chapter & Verse",
                        "type": "artist",
                        "uri": "spotify:artist:5yPVuutf3WAXUt1VqDaN1t"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2JhLwfCqWdJaRCJ9d6gVdh"
                },
                "href": "https://api.spotify.com/v1/albums/2JhLwfCqWdJaRCJ9d6gVdh",
                "id": "2JhLwfCqWdJaRCJ9d6gVdh",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2736f095d1812951e50ab33fa04",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e026f095d1812951e50ab33fa04",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048516f095d1812951e50ab33fa04",
                        "width": 64
                    }
                ],
                "name": "Lights Go Out",
                "release_date": "2021-04-30",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:2JhLwfCqWdJaRCJ9d6gVdh"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5yPVuutf3WAXUt1VqDaN1t"
                    },
                    "href": "https://api.spotify.com/v1/artists/5yPVuutf3WAXUt1VqDaN1t",
                    "id": "5yPVuutf3WAXUt1VqDaN1t",
                    "name": "Chapter & Verse",
                    "type": "artist",
                    "uri": "spotify:artist:5yPVuutf3WAXUt1VqDaN1t"
                }
            ],
            "disc_number": 1,
            "duration_ms": 226666,
            "explicit": false,
            "external_ids": {
                "isrc": "GBKQU2130713"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/18KVIouF8klKE9HdqdpUxd"
            },
            "href": "https://api.spotify.com/v1/tracks/18KVIouF8klKE9HdqdpUxd",
            "id": "18KVIouF8klKE9HdqdpUxd",
            "is_local": false,
            "is_playable": true,
            "name": "Lights Go Out",
            "popularity": 60,
            "preview_url": "https://p.scdn.co/mp3-preview/9ec9a18232a65c03ab495926f2fcdfa20cb46843?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:18KVIouF8klKE9HdqdpUxd"
        }
    },
    {
        "_id": "62f434d8c9ce022897435398",
        "artistId": "0BMhfbeiOrNMBzjELzbyNg",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/0BMhfbeiOrNMBzjELzbyNg"
        },
        "genres": [
            "disco house",
            "edm",
            "electro house",
            "progressive electro house"
        ],
        "href": "https://api.spotify.com/v1/artists/0BMhfbeiOrNMBzjELzbyNg",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebd6e01579771237487401923b",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174d6e01579771237487401923b",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178d6e01579771237487401923b",
                "width": 160
            }
        ],
        "name": "Arno Cost",
        "popularity": 37,
        "relatedArtists": [],
        "topTracks": [
            "2SbAcN6cMTrtGeTFA5rqDe",
            "4x31kCr9thRVRhmlq1AaLF",
            "5e82nY6zdUrUMRr3nmSrE4",
            "32EkWfqZiDOkRyMLeDcSnr",
            "0KyLL2qLZLB7BAx8hoBKfF",
            "5LrajO3fDwchb7jpwoUyhw",
            "2wxWRYgk8iTQ7vFFB7zT6j",
            "2bqef1Dhm2Y1sVwIA9gAxl",
            "0JmBD9G5z5Q1g9oBRA9rLO",
            "4HAVKJ1VNXXUtPsShxO9mN"
        ],
        "uri": "spotify:artist:0BMhfbeiOrNMBzjELzbyNg",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0BMhfbeiOrNMBzjELzbyNg"
                        },
                        "href": "https://api.spotify.com/v1/artists/0BMhfbeiOrNMBzjELzbyNg",
                        "id": "0BMhfbeiOrNMBzjELzbyNg",
                        "name": "Arno Cost",
                        "type": "artist",
                        "uri": "spotify:artist:0BMhfbeiOrNMBzjELzbyNg"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1UmLUPNgy8HS6oI05zdGjD"
                        },
                        "href": "https://api.spotify.com/v1/artists/1UmLUPNgy8HS6oI05zdGjD",
                        "id": "1UmLUPNgy8HS6oI05zdGjD",
                        "name": "Norman Doray",
                        "type": "artist",
                        "uri": "spotify:artist:1UmLUPNgy8HS6oI05zdGjD"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6iXb2uU9PSmzwve2zaJ28O"
                },
                "href": "https://api.spotify.com/v1/albums/6iXb2uU9PSmzwve2zaJ28O",
                "id": "6iXb2uU9PSmzwve2zaJ28O",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27338742582dcb21e9eca0e53bb",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0238742582dcb21e9eca0e53bb",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485138742582dcb21e9eca0e53bb",
                        "width": 64
                    }
                ],
                "name": "Show Luv",
                "release_date": "2021-06-11",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:6iXb2uU9PSmzwve2zaJ28O"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0BMhfbeiOrNMBzjELzbyNg"
                    },
                    "href": "https://api.spotify.com/v1/artists/0BMhfbeiOrNMBzjELzbyNg",
                    "id": "0BMhfbeiOrNMBzjELzbyNg",
                    "name": "Arno Cost",
                    "type": "artist",
                    "uri": "spotify:artist:0BMhfbeiOrNMBzjELzbyNg"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1UmLUPNgy8HS6oI05zdGjD"
                    },
                    "href": "https://api.spotify.com/v1/artists/1UmLUPNgy8HS6oI05zdGjD",
                    "id": "1UmLUPNgy8HS6oI05zdGjD",
                    "name": "Norman Doray",
                    "type": "artist",
                    "uri": "spotify:artist:1UmLUPNgy8HS6oI05zdGjD"
                }
            ],
            "disc_number": 1,
            "duration_ms": 173523,
            "explicit": false,
            "external_ids": {
                "isrc": "NLZ542100879"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2SbAcN6cMTrtGeTFA5rqDe"
            },
            "href": "https://api.spotify.com/v1/tracks/2SbAcN6cMTrtGeTFA5rqDe",
            "id": "2SbAcN6cMTrtGeTFA5rqDe",
            "is_local": false,
            "is_playable": true,
            "name": "Show Luv",
            "popularity": 47,
            "preview_url": "https://p.scdn.co/mp3-preview/834cc0396f231dcbe9a32cdf32f19880fcb91601?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2SbAcN6cMTrtGeTFA5rqDe"
        }
    },
    {
        "_id": "62f434e5c9ce022897435cea",
        "artistId": "3U1jsFYwwJHv7VB4Frf3F4",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/3U1jsFYwwJHv7VB4Frf3F4"
        },
        "genres": [
            "vapor trap"
        ],
        "href": "https://api.spotify.com/v1/artists/3U1jsFYwwJHv7VB4Frf3F4",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb334e5f8399b1eccaad454828",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174334e5f8399b1eccaad454828",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178334e5f8399b1eccaad454828",
                "width": 160
            }
        ],
        "name": "TyFontaine",
        "popularity": 47,
        "relatedArtists": [],
        "topTracks": [
            "6htZCLDzCJUePPPjVCDBEv",
            "0rFNu0G170Z6wgakWF9Sdv",
            "3rahkSYrtJdTqUVK9NiHt0",
            "1wPFZVwN68ElYcJAPH4exX",
            "24rdY7YxaEBcOGOtkDEKVe",
            "49hnFcK2lUddlkLLvJipdm",
            "2xZflr4wh7rGugEKzXaLak",
            "58vc09ciurxYQQKGZNbwbC",
            "52pbLOAaN6hrooorlexamG",
            "76dwa2dQdnKiZ3V0zzPrfj"
        ],
        "uri": "spotify:artist:3U1jsFYwwJHv7VB4Frf3F4",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3U1jsFYwwJHv7VB4Frf3F4"
                        },
                        "href": "https://api.spotify.com/v1/artists/3U1jsFYwwJHv7VB4Frf3F4",
                        "id": "3U1jsFYwwJHv7VB4Frf3F4",
                        "name": "TyFontaine",
                        "type": "artist",
                        "uri": "spotify:artist:3U1jsFYwwJHv7VB4Frf3F4"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/58QPTOR2nMzNFsfWX7iAEB"
                },
                "href": "https://api.spotify.com/v1/albums/58QPTOR2nMzNFsfWX7iAEB",
                "id": "58QPTOR2nMzNFsfWX7iAEB",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273c22bab08b387fd67455a1413",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02c22bab08b387fd67455a1413",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851c22bab08b387fd67455a1413",
                        "width": 64
                    }
                ],
                "name": "By MySelf",
                "release_date": "2022-06-15",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:58QPTOR2nMzNFsfWX7iAEB"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3U1jsFYwwJHv7VB4Frf3F4"
                    },
                    "href": "https://api.spotify.com/v1/artists/3U1jsFYwwJHv7VB4Frf3F4",
                    "id": "3U1jsFYwwJHv7VB4Frf3F4",
                    "name": "TyFontaine",
                    "type": "artist",
                    "uri": "spotify:artist:3U1jsFYwwJHv7VB4Frf3F4"
                }
            ],
            "disc_number": 1,
            "duration_ms": 161578,
            "explicit": true,
            "external_ids": {
                "isrc": "QZAKB2166976"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6htZCLDzCJUePPPjVCDBEv"
            },
            "href": "https://api.spotify.com/v1/tracks/6htZCLDzCJUePPPjVCDBEv",
            "id": "6htZCLDzCJUePPPjVCDBEv",
            "is_local": false,
            "is_playable": true,
            "name": "By MySelf",
            "popularity": 42,
            "preview_url": "https://p.scdn.co/mp3-preview/166ce7eb8cccedf24c777cd1e4763bb08aebdb5d?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:6htZCLDzCJUePPPjVCDBEv"
        }
    },
    {
        "_id": "62f43426c9ce0228974326ce",
        "artistId": "3FNauFXOs09Shm47H71Nsg",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/3FNauFXOs09Shm47H71Nsg"
        },
        "genres": [
            "eurovision"
        ],
        "href": "https://api.spotify.com/v1/artists/3FNauFXOs09Shm47H71Nsg",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb83c42bdc47c9b9011088ca34",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517483c42bdc47c9b9011088ca34",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17883c42bdc47c9b9011088ca34",
                "width": 160
            }
        ],
        "name": "Elina Nechayeva",
        "popularity": 23,
        "relatedArtists": [],
        "topTracks": [
            "32GxSibwrYAGW4ZZ45CGHA",
            "4ikPsZj72A6VuDd7PJvkef",
            "1dFCzosBlHJWBxn9zYdEps",
            "1sm1Hmq0ks9Ih71Fludd0J",
            "2dX1Br8oqWqojvA8WiQDUh",
            "7kFx9YTvfQnxxAOimAtLds",
            "17ublZLjW5xioPhcpK87pV",
            "0ad0iVmfheXBWlRvM0fhyc",
            "6W4j5XB7yRsZxHvrLveu3L",
            "03wGiqYQOIkGhuZLtMcEVa"
        ],
        "uri": "spotify:artist:3FNauFXOs09Shm47H71Nsg",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3FNauFXOs09Shm47H71Nsg"
                        },
                        "href": "https://api.spotify.com/v1/artists/3FNauFXOs09Shm47H71Nsg",
                        "id": "3FNauFXOs09Shm47H71Nsg",
                        "name": "Elina Nechayeva",
                        "type": "artist",
                        "uri": "spotify:artist:3FNauFXOs09Shm47H71Nsg"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0aUdGDHC6bllUPXVA9b5NI"
                },
                "href": "https://api.spotify.com/v1/albums/0aUdGDHC6bllUPXVA9b5NI",
                "id": "0aUdGDHC6bllUPXVA9b5NI",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273657bcd18fd51e7e44bc88a5e",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02657bcd18fd51e7e44bc88a5e",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851657bcd18fd51e7e44bc88a5e",
                        "width": 64
                    }
                ],
                "name": "La Forza",
                "release_date": "2018-01-22",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0aUdGDHC6bllUPXVA9b5NI"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3FNauFXOs09Shm47H71Nsg"
                    },
                    "href": "https://api.spotify.com/v1/artists/3FNauFXOs09Shm47H71Nsg",
                    "id": "3FNauFXOs09Shm47H71Nsg",
                    "name": "Elina Nechayeva",
                    "type": "artist",
                    "uri": "spotify:artist:3FNauFXOs09Shm47H71Nsg"
                }
            ],
            "disc_number": 1,
            "duration_ms": 184883,
            "explicit": false,
            "external_ids": {
                "isrc": "EEMS11800001"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/32GxSibwrYAGW4ZZ45CGHA"
            },
            "href": "https://api.spotify.com/v1/tracks/32GxSibwrYAGW4ZZ45CGHA",
            "id": "32GxSibwrYAGW4ZZ45CGHA",
            "is_local": false,
            "is_playable": true,
            "name": "La Forza",
            "popularity": 36,
            "preview_url": "https://p.scdn.co/mp3-preview/c3374e8ad7644627fe3776413280ebca304e67f7?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:32GxSibwrYAGW4ZZ45CGHA"
        }
    },
    {
        "_id": "62f433f4c9ce022897430c90",
        "artistId": "0wGzciem2JUvglxX6Hr3E9",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/0wGzciem2JUvglxX6Hr3E9"
        },
        "genres": [
            "indie pop"
        ],
        "href": "https://api.spotify.com/v1/artists/0wGzciem2JUvglxX6Hr3E9",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebaa5e89b445e9e7c6f45e1891",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174aa5e89b445e9e7c6f45e1891",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178aa5e89b445e9e7c6f45e1891",
                "width": 160
            }
        ],
        "name": "Hot Freaks",
        "popularity": 55,
        "relatedArtists": [],
        "topTracks": [
            "7dyi7AorhfCTJvGFjXwpyU",
            "58wjGqSPMBTPV9Pnhru46G",
            "0OoT7JehdxGaaUmjDVknik",
            "3QzOzcfmHK22OFVxX5Zfcl",
            "3AyDIUIfQ65Q7wD9SCrMg2",
            "4XV1DjAjdXm1vVjoFaFkrN",
            "2XH8XtE6svadUFcAzFmPlH",
            "3ekj6f0YPw77tnf2JQEY5p",
            "5EVxrgsvZqNbL8xtp778vg",
            "4QQHZ7i5huvzWdPOLIediN"
        ],
        "uri": "spotify:artist:0wGzciem2JUvglxX6Hr3E9",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0wGzciem2JUvglxX6Hr3E9"
                        },
                        "href": "https://api.spotify.com/v1/artists/0wGzciem2JUvglxX6Hr3E9",
                        "id": "0wGzciem2JUvglxX6Hr3E9",
                        "name": "Hot Freaks",
                        "type": "artist",
                        "uri": "spotify:artist:0wGzciem2JUvglxX6Hr3E9"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1yXAYcuyEvKKc8SKJVnmyM"
                },
                "href": "https://api.spotify.com/v1/albums/1yXAYcuyEvKKc8SKJVnmyM",
                "id": "1yXAYcuyEvKKc8SKJVnmyM",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273ca524491f772ff47e4ab7584",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02ca524491f772ff47e4ab7584",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851ca524491f772ff47e4ab7584",
                        "width": 64
                    }
                ],
                "name": "Puppy Princess",
                "release_date": "2021-08-30",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:1yXAYcuyEvKKc8SKJVnmyM"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0wGzciem2JUvglxX6Hr3E9"
                    },
                    "href": "https://api.spotify.com/v1/artists/0wGzciem2JUvglxX6Hr3E9",
                    "id": "0wGzciem2JUvglxX6Hr3E9",
                    "name": "Hot Freaks",
                    "type": "artist",
                    "uri": "spotify:artist:0wGzciem2JUvglxX6Hr3E9"
                }
            ],
            "disc_number": 1,
            "duration_ms": 255733,
            "explicit": false,
            "external_ids": {
                "isrc": "USHM81375767"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7dyi7AorhfCTJvGFjXwpyU"
            },
            "href": "https://api.spotify.com/v1/tracks/7dyi7AorhfCTJvGFjXwpyU",
            "id": "7dyi7AorhfCTJvGFjXwpyU",
            "is_local": false,
            "is_playable": true,
            "name": "Puppy Princess",
            "popularity": 68,
            "preview_url": "https://p.scdn.co/mp3-preview/ce04a0d4c6afc0d48082a41e8f00435b3f20f867?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:7dyi7AorhfCTJvGFjXwpyU"
        }
    },
    {
        "_id": "62f43426c9ce0228974324ce",
        "artistId": "4evVEvE5p9WsdXQKBPmAxT",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4evVEvE5p9WsdXQKBPmAxT"
        },
        "genres": [
            "indie garage rock"
        ],
        "href": "https://api.spotify.com/v1/artists/4evVEvE5p9WsdXQKBPmAxT",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebe861b0001d0579995e9847f4",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174e861b0001d0579995e9847f4",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178e861b0001d0579995e9847f4",
                "width": 160
            }
        ],
        "name": "Mellow Fellow",
        "popularity": 44,
        "relatedArtists": [],
        "topTracks": [
            "57asCheDC0X1S9QnyTsmOQ",
            "2E01rRrzaz6TuwCdm27m4m",
            "26mM36KDga2uHuqc8hRw7W",
            "7EYPiPZx49CZ73yvt4vm2x",
            "72ZGqxhnmLuBoGyASwPV2A",
            "5dqGatHLdYh7k6E6QtRPbc",
            "3YX6KmLlpZhmWm7fqtHqAv",
            "2Bf9wpg79TeZip0lqEl9UX",
            "0E012qfhASNhcwwvXa31AR",
            "1QbjXe3W9BNr9lpBD2RRn9"
        ],
        "uri": "spotify:artist:4evVEvE5p9WsdXQKBPmAxT",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4evVEvE5p9WsdXQKBPmAxT"
                        },
                        "href": "https://api.spotify.com/v1/artists/4evVEvE5p9WsdXQKBPmAxT",
                        "id": "4evVEvE5p9WsdXQKBPmAxT",
                        "name": "Mellow Fellow",
                        "type": "artist",
                        "uri": "spotify:artist:4evVEvE5p9WsdXQKBPmAxT"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6VM71S8PxikYbwHQ9CIjhR"
                },
                "href": "https://api.spotify.com/v1/albums/6VM71S8PxikYbwHQ9CIjhR",
                "id": "6VM71S8PxikYbwHQ9CIjhR",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273e7f2a73b70759dbded43fa72",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02e7f2a73b70759dbded43fa72",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851e7f2a73b70759dbded43fa72",
                        "width": 64
                    }
                ],
                "name": "Dancing",
                "release_date": "2017-07-18",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:6VM71S8PxikYbwHQ9CIjhR"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4evVEvE5p9WsdXQKBPmAxT"
                    },
                    "href": "https://api.spotify.com/v1/artists/4evVEvE5p9WsdXQKBPmAxT",
                    "id": "4evVEvE5p9WsdXQKBPmAxT",
                    "name": "Mellow Fellow",
                    "type": "artist",
                    "uri": "spotify:artist:4evVEvE5p9WsdXQKBPmAxT"
                }
            ],
            "disc_number": 1,
            "duration_ms": 282671,
            "explicit": false,
            "external_ids": {
                "isrc": "UST8K1773579"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/57asCheDC0X1S9QnyTsmOQ"
            },
            "href": "https://api.spotify.com/v1/tracks/57asCheDC0X1S9QnyTsmOQ",
            "id": "57asCheDC0X1S9QnyTsmOQ",
            "is_local": false,
            "is_playable": true,
            "name": "Dancing",
            "popularity": 56,
            "preview_url": "https://p.scdn.co/mp3-preview/90f91169eb2a217edd0846345f03a0ccdaaadd43?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:57asCheDC0X1S9QnyTsmOQ"
        }
    },
    {
        "_id": "62f52771c9ce0228977997f3",
        "artistId": "1e4ICc9TtOUGHrhS4LX59z",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1e4ICc9TtOUGHrhS4LX59z"
        },
        "genres": [
            "entehno"
        ],
        "href": "https://api.spotify.com/v1/artists/1e4ICc9TtOUGHrhS4LX59z",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb920c360d6a096fe7bed38d4a",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174920c360d6a096fe7bed38d4a",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178920c360d6a096fe7bed38d4a",
                "width": 160
            }
        ],
        "name": "Fivos Delivorias",
        "popularity": 41,
        "relatedArtists": [],
        "topTracks": [
            "3Pg5vjXhk1Q1hwirpc9paB",
            "03y6aWSO1otOxjEyDjaZTH",
            "3P2yUMHfVoRHr2Ka7TNUfd",
            "5FUDMc0Ub7EU6Gk1bjb3nT",
            "0UYNmtsgkzkRz1NbKTyg8p",
            "3a62LVn4eOXAVcwHs4hTbX",
            "6Xj67tZFWlC3mFZeqU3Nyj",
            "4SCQ7wkoaiM1UGkYUGiKCx",
            "07PxlJB2UsR25jtmH8c6St",
            "6WfQohqoTRMtZHZZGO3GKu"
        ],
        "uri": "spotify:artist:1e4ICc9TtOUGHrhS4LX59z",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1vhL7DQsMAxapgKbSJEYJM"
                        },
                        "href": "https://api.spotify.com/v1/artists/1vhL7DQsMAxapgKbSJEYJM",
                        "id": "1vhL7DQsMAxapgKbSJEYJM",
                        "name": "Lakis Papadopoulos",
                        "type": "artist",
                        "uri": "spotify:artist:1vhL7DQsMAxapgKbSJEYJM"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3yy7893BAP890vS3OyfJLc"
                },
                "href": "https://api.spotify.com/v1/albums/3yy7893BAP890vS3OyfJLc",
                "id": "3yy7893BAP890vS3OyfJLc",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273d223ccb97031b7e2d89af88b",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02d223ccb97031b7e2d89af88b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851d223ccb97031b7e2d89af88b",
                        "width": 64
                    }
                ],
                "name": "Lakis Papadopoulos - Live Odio Irodou Attikou",
                "release_date": "2016-07-04",
                "release_date_precision": "day",
                "total_tracks": 32,
                "type": "album",
                "uri": "spotify:album:3yy7893BAP890vS3OyfJLc"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1vhL7DQsMAxapgKbSJEYJM"
                    },
                    "href": "https://api.spotify.com/v1/artists/1vhL7DQsMAxapgKbSJEYJM",
                    "id": "1vhL7DQsMAxapgKbSJEYJM",
                    "name": "Lakis Papadopoulos",
                    "type": "artist",
                    "uri": "spotify:artist:1vhL7DQsMAxapgKbSJEYJM"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1deuEciNd2QknFNH0CikJ6"
                    },
                    "href": "https://api.spotify.com/v1/artists/1deuEciNd2QknFNH0CikJ6",
                    "id": "1deuEciNd2QknFNH0CikJ6",
                    "name": "Giannis Zouganelis",
                    "type": "artist",
                    "uri": "spotify:artist:1deuEciNd2QknFNH0CikJ6"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1kJDew8PqYeDB4TT4QLMpI"
                    },
                    "href": "https://api.spotify.com/v1/artists/1kJDew8PqYeDB4TT4QLMpI",
                    "id": "1kJDew8PqYeDB4TT4QLMpI",
                    "name": "Giannis Giokarinis",
                    "type": "artist",
                    "uri": "spotify:artist:1kJDew8PqYeDB4TT4QLMpI"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7byYRTzcmi0J2EnoVgvNyt"
                    },
                    "href": "https://api.spotify.com/v1/artists/7byYRTzcmi0J2EnoVgvNyt",
                    "id": "7byYRTzcmi0J2EnoVgvNyt",
                    "name": "Panos Mouzourakis",
                    "type": "artist",
                    "uri": "spotify:artist:7byYRTzcmi0J2EnoVgvNyt"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6SOMaN66Jh9mcvapEdTiJt"
                    },
                    "href": "https://api.spotify.com/v1/artists/6SOMaN66Jh9mcvapEdTiJt",
                    "id": "6SOMaN66Jh9mcvapEdTiJt",
                    "name": "Vassilikos",
                    "type": "artist",
                    "uri": "spotify:artist:6SOMaN66Jh9mcvapEdTiJt"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1e4ICc9TtOUGHrhS4LX59z"
                    },
                    "href": "https://api.spotify.com/v1/artists/1e4ICc9TtOUGHrhS4LX59z",
                    "id": "1e4ICc9TtOUGHrhS4LX59z",
                    "name": "Fivos Delivorias",
                    "type": "artist",
                    "uri": "spotify:artist:1e4ICc9TtOUGHrhS4LX59z"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0vLoXqcGEpgOgmCYshRsKt"
                    },
                    "href": "https://api.spotify.com/v1/artists/0vLoXqcGEpgOgmCYshRsKt",
                    "id": "0vLoXqcGEpgOgmCYshRsKt",
                    "name": "Eleonora Zouganeli",
                    "type": "artist",
                    "uri": "spotify:artist:0vLoXqcGEpgOgmCYshRsKt"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4UivkNzFA9XPTr0coJ3x0y"
                    },
                    "href": "https://api.spotify.com/v1/artists/4UivkNzFA9XPTr0coJ3x0y",
                    "id": "4UivkNzFA9XPTr0coJ3x0y",
                    "name": "Filippos Pliatsikas",
                    "type": "artist",
                    "uri": "spotify:artist:4UivkNzFA9XPTr0coJ3x0y"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5z7uDSNrMNmtg7eikmaaau"
                    },
                    "href": "https://api.spotify.com/v1/artists/5z7uDSNrMNmtg7eikmaaau",
                    "id": "5z7uDSNrMNmtg7eikmaaau",
                    "name": "Lavrentis Machairitsas",
                    "type": "artist",
                    "uri": "spotify:artist:5z7uDSNrMNmtg7eikmaaau"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6KVMKVZCXarNNhwKxhjCmo"
                    },
                    "href": "https://api.spotify.com/v1/artists/6KVMKVZCXarNNhwKxhjCmo",
                    "id": "6KVMKVZCXarNNhwKxhjCmo",
                    "name": "Arleta",
                    "type": "artist",
                    "uri": "spotify:artist:6KVMKVZCXarNNhwKxhjCmo"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5PBgnkHTjFwVM3eAhmh2EU"
                    },
                    "href": "https://api.spotify.com/v1/artists/5PBgnkHTjFwVM3eAhmh2EU",
                    "id": "5PBgnkHTjFwVM3eAhmh2EU",
                    "name": "Maraveyas",
                    "type": "artist",
                    "uri": "spotify:artist:5PBgnkHTjFwVM3eAhmh2EU"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/41VO6F1Bl9jOBTCevwZmMR"
                    },
                    "href": "https://api.spotify.com/v1/artists/41VO6F1Bl9jOBTCevwZmMR",
                    "id": "41VO6F1Bl9jOBTCevwZmMR",
                    "name": "Nikos Ziogalas",
                    "type": "artist",
                    "uri": "spotify:artist:41VO6F1Bl9jOBTCevwZmMR"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4hw4chBwI0fvJltPiQxPPD"
                    },
                    "href": "https://api.spotify.com/v1/artists/4hw4chBwI0fvJltPiQxPPD",
                    "id": "4hw4chBwI0fvJltPiQxPPD",
                    "name": "Natasa Theodoridou",
                    "type": "artist",
                    "uri": "spotify:artist:4hw4chBwI0fvJltPiQxPPD"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6VzFvK9yRRZkT0L8kMmOXV"
                    },
                    "href": "https://api.spotify.com/v1/artists/6VzFvK9yRRZkT0L8kMmOXV",
                    "id": "6VzFvK9yRRZkT0L8kMmOXV",
                    "name": "Miltos Pashalidis",
                    "type": "artist",
                    "uri": "spotify:artist:6VzFvK9yRRZkT0L8kMmOXV"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1FACRUcwaH22BgumTWHEg3"
                    },
                    "href": "https://api.spotify.com/v1/artists/1FACRUcwaH22BgumTWHEg3",
                    "id": "1FACRUcwaH22BgumTWHEg3",
                    "name": "Evdokia Rapti",
                    "type": "artist",
                    "uri": "spotify:artist:1FACRUcwaH22BgumTWHEg3"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5k4qa4Lc6BybES4R3Uc9rD"
                    },
                    "href": "https://api.spotify.com/v1/artists/5k4qa4Lc6BybES4R3Uc9rD",
                    "id": "5k4qa4Lc6BybES4R3Uc9rD",
                    "name": "Katerina Morena",
                    "type": "artist",
                    "uri": "spotify:artist:5k4qa4Lc6BybES4R3Uc9rD"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0xP7gTMFElcSoYxVSdqFWz"
                    },
                    "href": "https://api.spotify.com/v1/artists/0xP7gTMFElcSoYxVSdqFWz",
                    "id": "0xP7gTMFElcSoYxVSdqFWz",
                    "name": "Penny Baltatzi",
                    "type": "artist",
                    "uri": "spotify:artist:0xP7gTMFElcSoYxVSdqFWz"
                }
            ],
            "disc_number": 2,
            "duration_ms": 208525,
            "explicit": false,
            "external_ids": {
                "isrc": "GRUM71601220"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3Pg5vjXhk1Q1hwirpc9paB"
            },
            "href": "https://api.spotify.com/v1/tracks/3Pg5vjXhk1Q1hwirpc9paB",
            "id": "3Pg5vjXhk1Q1hwirpc9paB",
            "is_local": false,
            "is_playable": true,
            "name": "Ta Isiha Vradia - Live",
            "popularity": 38,
            "preview_url": "https://p.scdn.co/mp3-preview/186f1db3e156b76652af8bbe6f64491e346d65b6?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 14,
            "type": "track",
            "uri": "spotify:track:3Pg5vjXhk1Q1hwirpc9paB"
        }
    },
    {
        "_id": "62f433b8c9ce02289742f056",
        "artistId": "3LpiSWTWydGuQb2kyLfEpW",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/3LpiSWTWydGuQb2kyLfEpW"
        },
        "genres": [
            "pixie",
            "post-screamo"
        ],
        "href": "https://api.spotify.com/v1/artists/3LpiSWTWydGuQb2kyLfEpW",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebad52ab37ffcc693987767f46",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174ad52ab37ffcc693987767f46",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178ad52ab37ffcc693987767f46",
                "width": 160
            }
        ],
        "name": "Fifth Dawn",
        "popularity": 34,
        "relatedArtists": [],
        "topTracks": [
            "6kr5VBRfu95Ji2e8zExFxS",
            "4u6jy0d7yARYLza2Xh8KC9",
            "2i6BjcZDK2kYtyXEm9tKQQ",
            "5f9Y58XL12VgZmjC3O4p3A",
            "08ZS9UTT9XvqL1sfozlxwG",
            "7f1nSdE8h8SmPLafjXU5pJ",
            "6XVo6NcBq0ipyHXQRj3TES",
            "7MuP1Dlxdsp7dc7is6so2P",
            "7wvo1QyEqYeR6P7FT8zT3O",
            "7pdV3xuCFQwv6EivnZDPuX"
        ],
        "uri": "spotify:artist:3LpiSWTWydGuQb2kyLfEpW",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3LpiSWTWydGuQb2kyLfEpW"
                        },
                        "href": "https://api.spotify.com/v1/artists/3LpiSWTWydGuQb2kyLfEpW",
                        "id": "3LpiSWTWydGuQb2kyLfEpW",
                        "name": "Fifth Dawn",
                        "type": "artist",
                        "uri": "spotify:artist:3LpiSWTWydGuQb2kyLfEpW"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6fMYqdnpGtVtMVmDpSLYZv"
                },
                "href": "https://api.spotify.com/v1/albums/6fMYqdnpGtVtMVmDpSLYZv",
                "id": "6fMYqdnpGtVtMVmDpSLYZv",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27361d88a72a6ac01c752d825fe",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0261d88a72a6ac01c752d825fe",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485161d88a72a6ac01c752d825fe",
                        "width": 64
                    }
                ],
                "name": "Duality",
                "release_date": "2018",
                "release_date_precision": "year",
                "total_tracks": 10,
                "type": "album",
                "uri": "spotify:album:6fMYqdnpGtVtMVmDpSLYZv"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3LpiSWTWydGuQb2kyLfEpW"
                    },
                    "href": "https://api.spotify.com/v1/artists/3LpiSWTWydGuQb2kyLfEpW",
                    "id": "3LpiSWTWydGuQb2kyLfEpW",
                    "name": "Fifth Dawn",
                    "type": "artist",
                    "uri": "spotify:artist:3LpiSWTWydGuQb2kyLfEpW"
                }
            ],
            "disc_number": 1,
            "duration_ms": 252925,
            "explicit": false,
            "external_ids": {
                "isrc": "AUWFL1700009"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6kr5VBRfu95Ji2e8zExFxS"
            },
            "href": "https://api.spotify.com/v1/tracks/6kr5VBRfu95Ji2e8zExFxS",
            "id": "6kr5VBRfu95Ji2e8zExFxS",
            "is_local": false,
            "is_playable": true,
            "name": "High Towers",
            "popularity": 43,
            "preview_url": "https://p.scdn.co/mp3-preview/0d76db82a7a82dd5025d8de8064578d7efcfd359?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 9,
            "type": "track",
            "uri": "spotify:track:6kr5VBRfu95Ji2e8zExFxS"
        }
    },
    {
        "_id": "62f43407c9ce022897431776",
        "artistId": "5xKp3UyavIBUsGy3DQdXeF",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5xKp3UyavIBUsGy3DQdXeF"
        },
        "genres": [
            "neo mellow",
            "piano rock",
            "pop",
            "pop rock",
            "viral pop"
        ],
        "href": "https://api.spotify.com/v1/artists/5xKp3UyavIBUsGy3DQdXeF",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb46416642da7b30327821d26e",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517446416642da7b30327821d26e",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17846416642da7b30327821d26e",
                "width": 160
            }
        ],
        "name": "A Great Big World",
        "popularity": 62,
        "relatedArtists": [],
        "topTracks": [
            "5TvE3pk05pyFIGdSY9j4DJ",
            "2SkJKMfjpYsNv0KWOxiegX",
            "7xLhousIHDxoGgeJNhO4Ye",
            "7oyFihJppZYPP7o0NfoHnZ",
            "71vcffc4Yfz0pt9AbaL386",
            "1o0yFkUycTAWIIWFOlhDcV",
            "0jJqIi0uMG8IhGlLx7U85J",
            "1qHiDbTJI7GB62W3BBFigx",
            "1KIP5vXGQ58K0At66KZFU3",
            "6zvgsXd9oSMgt58voSnJbE"
        ],
        "uri": "spotify:artist:5xKp3UyavIBUsGy3DQdXeF",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5xKp3UyavIBUsGy3DQdXeF"
                        },
                        "href": "https://api.spotify.com/v1/artists/5xKp3UyavIBUsGy3DQdXeF",
                        "id": "5xKp3UyavIBUsGy3DQdXeF",
                        "name": "A Great Big World",
                        "type": "artist",
                        "uri": "spotify:artist:5xKp3UyavIBUsGy3DQdXeF"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3kwbwO3wtwyNo7zCFzWkcW"
                },
                "href": "https://api.spotify.com/v1/albums/3kwbwO3wtwyNo7zCFzWkcW",
                "id": "3kwbwO3wtwyNo7zCFzWkcW",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2739e2acbb00244d6da17edb0cf",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e029e2acbb00244d6da17edb0cf",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048519e2acbb00244d6da17edb0cf",
                        "width": 64
                    }
                ],
                "name": "Is There Anybody Out There? - Track by Track Commentary",
                "release_date": "2014-01-13",
                "release_date_precision": "day",
                "total_tracks": 25,
                "type": "album",
                "uri": "spotify:album:3kwbwO3wtwyNo7zCFzWkcW"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5xKp3UyavIBUsGy3DQdXeF"
                    },
                    "href": "https://api.spotify.com/v1/artists/5xKp3UyavIBUsGy3DQdXeF",
                    "id": "5xKp3UyavIBUsGy3DQdXeF",
                    "name": "A Great Big World",
                    "type": "artist",
                    "uri": "spotify:artist:5xKp3UyavIBUsGy3DQdXeF"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS"
                    },
                    "href": "https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS",
                    "id": "1l7ZsJRRS8wlW3WfJfPfNS",
                    "name": "Christina Aguilera",
                    "type": "artist",
                    "uri": "spotify:artist:1l7ZsJRRS8wlW3WfJfPfNS"
                }
            ],
            "disc_number": 1,
            "duration_ms": 229400,
            "explicit": false,
            "external_ids": {
                "isrc": "USSM11306713"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5TvE3pk05pyFIGdSY9j4DJ"
            },
            "href": "https://api.spotify.com/v1/tracks/5TvE3pk05pyFIGdSY9j4DJ",
            "id": "5TvE3pk05pyFIGdSY9j4DJ",
            "is_local": false,
            "is_playable": true,
            "name": "Say Something",
            "popularity": 69,
            "preview_url": "https://p.scdn.co/mp3-preview/24ca5de29a9f36302d19e85527fb68368cba7c3a?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 25,
            "type": "track",
            "uri": "spotify:track:5TvE3pk05pyFIGdSY9j4DJ"
        }
    },
    {
        "_id": "62f52824c9ce02289779c6dc",
        "artistId": "6coWgzgAtYVhqntFZu6Bui",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6coWgzgAtYVhqntFZu6Bui"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/6coWgzgAtYVhqntFZu6Bui",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273a4164283a461cd25bc175d19",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02a4164283a461cd25bc175d19",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851a4164283a461cd25bc175d19",
                "width": 64
            }
        ],
        "name": "DJ Rada",
        "popularity": 34,
        "relatedArtists": [],
        "topTracks": [
            "0hWhijBiPNUqWSBN7dkKKl",
            "2DKdVrwELnxZSLiNUPdioE",
            "6Fhfo70naBdykqjjYivsLF",
            "33emDXgfWX7x0rtETk88vC",
            "2prVKWOlpNyCuVc1GHtHlF",
            "3jyJ6GAqSQAvM7K9l5MZMt",
            "4csCbxIMGH3Mlf4qpfy07k",
            "1pYj589MaJQR2zI0KE9abv",
            "66pksZlHyJ3woQpD1jNNOK"
        ],
        "uri": "spotify:artist:6coWgzgAtYVhqntFZu6Bui",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6coWgzgAtYVhqntFZu6Bui"
                        },
                        "href": "https://api.spotify.com/v1/artists/6coWgzgAtYVhqntFZu6Bui",
                        "id": "6coWgzgAtYVhqntFZu6Bui",
                        "name": "DJ Rada",
                        "type": "artist",
                        "uri": "spotify:artist:6coWgzgAtYVhqntFZu6Bui"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0cqWUiW1iUBYvWoWpv9oFa"
                },
                "href": "https://api.spotify.com/v1/albums/0cqWUiW1iUBYvWoWpv9oFa",
                "id": "0cqWUiW1iUBYvWoWpv9oFa",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273a4164283a461cd25bc175d19",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02a4164283a461cd25bc175d19",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851a4164283a461cd25bc175d19",
                        "width": 64
                    }
                ],
                "name": "My Name",
                "release_date": "2022-01-28",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0cqWUiW1iUBYvWoWpv9oFa"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6coWgzgAtYVhqntFZu6Bui"
                    },
                    "href": "https://api.spotify.com/v1/artists/6coWgzgAtYVhqntFZu6Bui",
                    "id": "6coWgzgAtYVhqntFZu6Bui",
                    "name": "DJ Rada",
                    "type": "artist",
                    "uri": "spotify:artist:6coWgzgAtYVhqntFZu6Bui"
                }
            ],
            "disc_number": 1,
            "duration_ms": 194186,
            "explicit": false,
            "external_ids": {
                "isrc": "ES09C2200007"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0hWhijBiPNUqWSBN7dkKKl"
            },
            "href": "https://api.spotify.com/v1/tracks/0hWhijBiPNUqWSBN7dkKKl",
            "id": "0hWhijBiPNUqWSBN7dkKKl",
            "is_local": false,
            "is_playable": true,
            "name": "My Name",
            "popularity": 43,
            "preview_url": "https://p.scdn.co/mp3-preview/bee2b07060434ee91e5c96cd107f53b81c9ed81a?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:0hWhijBiPNUqWSBN7dkKKl"
        }
    },
    {
        "_id": "62f434d8c9ce02289743510f",
        "artistId": "1vBn5Puz4mdZopZEHq1QDq",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1vBn5Puz4mdZopZEHq1QDq"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/1vBn5Puz4mdZopZEHq1QDq",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebeb5c25dae6e1027f7c687578",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174eb5c25dae6e1027f7c687578",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178eb5c25dae6e1027f7c687578",
                "width": 160
            }
        ],
        "name": "La Maravillosa Orquesta del Alcohol",
        "popularity": 54,
        "relatedArtists": [],
        "topTracks": [
            "5Wcz0MyZQa7tgPu62WMqzl",
            "7qSYymHEX6i0hHof9EjqWW",
            "78CVgSm8s9pfpwCqvqzEYB",
            "2uhTEPAQvGHa69xwEEFEpE",
            "1AzebkgGPRx8bTXuJv0dmw",
            "5EskUV4Rg1VMNVPB32xUme",
            "4jDnHToLAvPlAPB9aiMx3z",
            "78CC6Od9HAoF0wy16X3gzr",
            "0fZgVsd0Bk64cAUOcUnQ0X",
            "4VHio1B1PaxL99Qk7ESX9B"
        ],
        "uri": "spotify:artist:1vBn5Puz4mdZopZEHq1QDq",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1vBn5Puz4mdZopZEHq1QDq"
                        },
                        "href": "https://api.spotify.com/v1/artists/1vBn5Puz4mdZopZEHq1QDq",
                        "id": "1vBn5Puz4mdZopZEHq1QDq",
                        "name": "La Maravillosa Orquesta del Alcohol",
                        "type": "artist",
                        "uri": "spotify:artist:1vBn5Puz4mdZopZEHq1QDq"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/7d8wuHnJtTlLflpNySeDgp"
                },
                "href": "https://api.spotify.com/v1/albums/7d8wuHnJtTlLflpNySeDgp",
                "id": "7d8wuHnJtTlLflpNySeDgp",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273660ba0de4659103b19ea8e5f",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02660ba0de4659103b19ea8e5f",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851660ba0de4659103b19ea8e5f",
                        "width": 64
                    }
                ],
                "name": "Salvavida (de las Balas Perdidas)",
                "release_date": "2017-09-29",
                "release_date_precision": "day",
                "total_tracks": 11,
                "type": "album",
                "uri": "spotify:album:7d8wuHnJtTlLflpNySeDgp"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1vBn5Puz4mdZopZEHq1QDq"
                    },
                    "href": "https://api.spotify.com/v1/artists/1vBn5Puz4mdZopZEHq1QDq",
                    "id": "1vBn5Puz4mdZopZEHq1QDq",
                    "name": "La Maravillosa Orquesta del Alcohol",
                    "type": "artist",
                    "uri": "spotify:artist:1vBn5Puz4mdZopZEHq1QDq"
                }
            ],
            "disc_number": 1,
            "duration_ms": 244767,
            "explicit": false,
            "external_ids": {
                "isrc": "ES71G1740040"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5Wcz0MyZQa7tgPu62WMqzl"
            },
            "href": "https://api.spotify.com/v1/tracks/5Wcz0MyZQa7tgPu62WMqzl",
            "id": "5Wcz0MyZQa7tgPu62WMqzl",
            "is_local": false,
            "is_playable": true,
            "name": "Héroes del Sábado",
            "popularity": 55,
            "preview_url": "https://p.scdn.co/mp3-preview/46489be710753b43404da658440b41f0eb74a3b2?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 5,
            "type": "track",
            "uri": "spotify:track:5Wcz0MyZQa7tgPu62WMqzl"
        }
    },
    {
        "_id": "62f52772c9ce0228977998c1",
        "artistId": "70MEj6TnbVEjYdKgE8ZRGC",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/70MEj6TnbVEjYdKgE8ZRGC"
        },
        "genres": [
            "ukrainian pop",
            "ukrainian rock"
        ],
        "href": "https://api.spotify.com/v1/artists/70MEj6TnbVEjYdKgE8ZRGC",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb9da347f0c838cb89b6ff4713",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051749da347f0c838cb89b6ff4713",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1789da347f0c838cb89b6ff4713",
                "width": 160
            }
        ],
        "name": "Схожа",
        "popularity": 38,
        "relatedArtists": [],
        "topTracks": [
            "5x6ZWNVYuGnaiyFRw61fvH",
            "6wATvZ1kvjCP3gkgEwHTQf",
            "2MS5eqxwUbxRZWLsKSRkTE",
            "4Pc7RZVLfGHFGe9ToNFMCP",
            "7ntn407Mq9gefC9q0ZnUp2",
            "1E7HHL5KBhEEhjwjcg0Iyt",
            "3dotSs9qAt5NAqRSPoMSBD",
            "17UktkqkHi3YcMMuMayQG6",
            "62K9obTfYalVTbhoPHBNJP",
            "2O4o693pHZVJxvShD4fckq"
        ],
        "uri": "spotify:artist:70MEj6TnbVEjYdKgE8ZRGC",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/70MEj6TnbVEjYdKgE8ZRGC"
                        },
                        "href": "https://api.spotify.com/v1/artists/70MEj6TnbVEjYdKgE8ZRGC",
                        "id": "70MEj6TnbVEjYdKgE8ZRGC",
                        "name": "Схожа",
                        "type": "artist",
                        "uri": "spotify:artist:70MEj6TnbVEjYdKgE8ZRGC"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/7AaVokfiGux3nDKy5HCziz"
                },
                "href": "https://api.spotify.com/v1/albums/7AaVokfiGux3nDKy5HCziz",
                "id": "7AaVokfiGux3nDKy5HCziz",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27329f55995e389225a9aa2e8cd",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0229f55995e389225a9aa2e8cd",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485129f55995e389225a9aa2e8cd",
                        "width": 64
                    }
                ],
                "name": "Очерет",
                "release_date": "2021-07-02",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:7AaVokfiGux3nDKy5HCziz"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/70MEj6TnbVEjYdKgE8ZRGC"
                    },
                    "href": "https://api.spotify.com/v1/artists/70MEj6TnbVEjYdKgE8ZRGC",
                    "id": "70MEj6TnbVEjYdKgE8ZRGC",
                    "name": "Схожа",
                    "type": "artist",
                    "uri": "spotify:artist:70MEj6TnbVEjYdKgE8ZRGC"
                }
            ],
            "disc_number": 1,
            "duration_ms": 186500,
            "explicit": false,
            "external_ids": {
                "isrc": "FRX202182860"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5x6ZWNVYuGnaiyFRw61fvH"
            },
            "href": "https://api.spotify.com/v1/tracks/5x6ZWNVYuGnaiyFRw61fvH",
            "id": "5x6ZWNVYuGnaiyFRw61fvH",
            "is_local": false,
            "is_playable": true,
            "name": "Очерет",
            "popularity": 49,
            "preview_url": "https://p.scdn.co/mp3-preview/1544dd9efe9695312541671fa1a3234b346f308c?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:5x6ZWNVYuGnaiyFRw61fvH"
        }
    },
    {
        "_id": "62f43426c9ce022897432601",
        "artistId": "5A0cSJUARw9f1zSFW35Ue4",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/5A0cSJUARw9f1zSFW35Ue4"
        },
        "genres": [
            "eurovision"
        ],
        "href": "https://api.spotify.com/v1/artists/5A0cSJUARw9f1zSFW35Ue4",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb18af35ad4f44c90994f0a733",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517418af35ad4f44c90994f0a733",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17818af35ad4f44c90994f0a733",
                "width": 160
            }
        ],
        "name": "Justs Sirmais",
        "popularity": 26,
        "relatedArtists": [],
        "topTracks": [
            "59YDuvEyFGZaId3dyFu8RN"
        ],
        "uri": "spotify:artist:5A0cSJUARw9f1zSFW35Ue4",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5A0cSJUARw9f1zSFW35Ue4"
                        },
                        "href": "https://api.spotify.com/v1/artists/5A0cSJUARw9f1zSFW35Ue4",
                        "id": "5A0cSJUARw9f1zSFW35Ue4",
                        "name": "Justs Sirmais",
                        "type": "artist",
                        "uri": "spotify:artist:5A0cSJUARw9f1zSFW35Ue4"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4wCRT0pIr1E6VgTaUdrElr"
                },
                "href": "https://api.spotify.com/v1/albums/4wCRT0pIr1E6VgTaUdrElr",
                "id": "4wCRT0pIr1E6VgTaUdrElr",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273aaa462b0902ce35a70a63850",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02aaa462b0902ce35a70a63850",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851aaa462b0902ce35a70a63850",
                        "width": 64
                    }
                ],
                "name": "Heartbeat",
                "release_date": "2016-02-03",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:4wCRT0pIr1E6VgTaUdrElr"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5A0cSJUARw9f1zSFW35Ue4"
                    },
                    "href": "https://api.spotify.com/v1/artists/5A0cSJUARw9f1zSFW35Ue4",
                    "id": "5A0cSJUARw9f1zSFW35Ue4",
                    "name": "Justs Sirmais",
                    "type": "artist",
                    "uri": "spotify:artist:5A0cSJUARw9f1zSFW35Ue4"
                }
            ],
            "disc_number": 1,
            "duration_ms": 176352,
            "explicit": false,
            "external_ids": {
                "isrc": "TCACL1688649"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/59YDuvEyFGZaId3dyFu8RN"
            },
            "href": "https://api.spotify.com/v1/tracks/59YDuvEyFGZaId3dyFu8RN",
            "id": "59YDuvEyFGZaId3dyFu8RN",
            "is_local": false,
            "is_playable": true,
            "name": "Heartbeat",
            "popularity": 33,
            "preview_url": "https://p.scdn.co/mp3-preview/98fd8692303c4dd4f365f7babf67d67e3c0095d9?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:59YDuvEyFGZaId3dyFu8RN"
        }
    },
    {
        "_id": "630de73b2fd7f69f1b41f48c",
        "artistId": "2a0uxJgbvvIRI4GX8pYfcr",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/2a0uxJgbvvIRI4GX8pYfcr"
        },
        "genres": [
            "afroswing",
            "grime",
            "uk hip hop"
        ],
        "href": "https://api.spotify.com/v1/artists/2a0uxJgbvvIRI4GX8pYfcr",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebf47531be2cd6117f18afb3e3",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174f47531be2cd6117f18afb3e3",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178f47531be2cd6117f18afb3e3",
                "width": 160
            }
        ],
        "name": "J Hus",
        "popularity": 64,
        "relatedArtists": [],
        "topTracks": [
            "0cE68B5sCz9f3snJ5ueTGZ",
            "6DXEZzM4wBa3EOl0NCNSvz",
            "3R60ekRcGXuaoZmnbdlf3n",
            "3rqmxZNh2BRgJ3BiCPFTSG",
            "4YLzVD32aMH4qgSsSPtNbl",
            "28qdL1yHti3BSu6AdLzWbg",
            "6Yblv6BbZHIkyrpYl4E0Zk",
            "0D3bX53KP5VsPWLjCOU2fA",
            "2vKVaAoTG6ag83gW3RHwIn",
            "0RIMrAUyLGBF7zAPdvgE73"
        ],
        "uri": "spotify:artist:2a0uxJgbvvIRI4GX8pYfcr",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa"
                        },
                        "href": "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
                        "id": "3wcj11K77LjEY1PkEazffa",
                        "name": "Burna Boy",
                        "type": "artist",
                        "uri": "spotify:artist:3wcj11K77LjEY1PkEazffa"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6kgDkAupBVRSqbJPUaTJwQ"
                },
                "href": "https://api.spotify.com/v1/albums/6kgDkAupBVRSqbJPUaTJwQ",
                "id": "6kgDkAupBVRSqbJPUaTJwQ",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27312ebde47882280b814275600",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0212ebde47882280b814275600",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485112ebde47882280b814275600",
                        "width": 64
                    }
                ],
                "name": "Love, Damini",
                "release_date": "2022-07-07",
                "release_date_precision": "day",
                "total_tracks": 19,
                "type": "album",
                "uri": "spotify:album:6kgDkAupBVRSqbJPUaTJwQ"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa"
                    },
                    "href": "https://api.spotify.com/v1/artists/3wcj11K77LjEY1PkEazffa",
                    "id": "3wcj11K77LjEY1PkEazffa",
                    "name": "Burna Boy",
                    "type": "artist",
                    "uri": "spotify:artist:3wcj11K77LjEY1PkEazffa"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2a0uxJgbvvIRI4GX8pYfcr"
                    },
                    "href": "https://api.spotify.com/v1/artists/2a0uxJgbvvIRI4GX8pYfcr",
                    "id": "2a0uxJgbvvIRI4GX8pYfcr",
                    "name": "J Hus",
                    "type": "artist",
                    "uri": "spotify:artist:2a0uxJgbvvIRI4GX8pYfcr"
                }
            ],
            "disc_number": 1,
            "duration_ms": 211050,
            "explicit": false,
            "external_ids": {
                "isrc": "USAT22205414"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0cE68B5sCz9f3snJ5ueTGZ"
            },
            "href": "https://api.spotify.com/v1/tracks/0cE68B5sCz9f3snJ5ueTGZ",
            "id": "0cE68B5sCz9f3snJ5ueTGZ",
            "is_local": false,
            "is_playable": true,
            "name": "Cloak & Dagger (feat. J Hus)",
            "popularity": 69,
            "preview_url": "https://p.scdn.co/mp3-preview/2b073e9f6a2deaad25242eaf0ea8c120b40be383?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:0cE68B5sCz9f3snJ5ueTGZ"
        }
    },
    {
        "_id": "62f4339cc9ce02289742e461",
        "artistId": "44drVL4jbdo6T6llD5cMgx",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/44drVL4jbdo6T6llD5cMgx"
        },
        "genres": [
            "alternative r&b",
            "chill r&b",
            "indie r&b",
            "indie soul",
            "neo r&b"
        ],
        "href": "https://api.spotify.com/v1/artists/44drVL4jbdo6T6llD5cMgx",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebca2271831e13bc9360048ca2",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174ca2271831e13bc9360048ca2",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178ca2271831e13bc9360048ca2",
                "width": 160
            }
        ],
        "name": "McClenney",
        "popularity": 42,
        "relatedArtists": [],
        "topTracks": [
            "0Dcv1cRaS8sEUYzjHNhHBr",
            "7N1pNarCpfPFkI1Q9OwUvk",
            "7td13K8PfRT9j2MI6WGwMA",
            "4KyCV8JfbknCNM9MqiuKMv",
            "66OnrYhhEXxjQIbf0v3yLY",
            "6Dsz2y35zOt5XRw1TbVgbF",
            "4gWnIoKUqnaWuzvGumd2rp",
            "7qUsTlk0PuRtkA3daJTMWf",
            "15QUhFPdX8tR4067m73K3X",
            "4hBHZUJnyY5kzIWhgjdcZG"
        ],
        "uri": "spotify:artist:44drVL4jbdo6T6llD5cMgx",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/44drVL4jbdo6T6llD5cMgx"
                        },
                        "href": "https://api.spotify.com/v1/artists/44drVL4jbdo6T6llD5cMgx",
                        "id": "44drVL4jbdo6T6llD5cMgx",
                        "name": "McClenney",
                        "type": "artist",
                        "uri": "spotify:artist:44drVL4jbdo6T6llD5cMgx"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3NLjnYRxFNzByIaoCSugQl"
                },
                "href": "https://api.spotify.com/v1/albums/3NLjnYRxFNzByIaoCSugQl",
                "id": "3NLjnYRxFNzByIaoCSugQl",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273204fa4e54f1dc2d3dfb2b1d4",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02204fa4e54f1dc2d3dfb2b1d4",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851204fa4e54f1dc2d3dfb2b1d4",
                        "width": 64
                    }
                ],
                "name": "SOS",
                "release_date": "2019-02-19",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:3NLjnYRxFNzByIaoCSugQl"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/44drVL4jbdo6T6llD5cMgx"
                    },
                    "href": "https://api.spotify.com/v1/artists/44drVL4jbdo6T6llD5cMgx",
                    "id": "44drVL4jbdo6T6llD5cMgx",
                    "name": "McClenney",
                    "type": "artist",
                    "uri": "spotify:artist:44drVL4jbdo6T6llD5cMgx"
                }
            ],
            "disc_number": 1,
            "duration_ms": 187241,
            "explicit": false,
            "external_ids": {
                "isrc": "QM24S1904295"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0Dcv1cRaS8sEUYzjHNhHBr"
            },
            "href": "https://api.spotify.com/v1/tracks/0Dcv1cRaS8sEUYzjHNhHBr",
            "id": "0Dcv1cRaS8sEUYzjHNhHBr",
            "is_local": false,
            "is_playable": true,
            "name": "SOS",
            "popularity": 48,
            "preview_url": "https://p.scdn.co/mp3-preview/499f48af24856e480ed9ccff5ee4ebe79c838255?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:0Dcv1cRaS8sEUYzjHNhHBr"
        }
    },
    {
        "_id": "62f433d6c9ce02289742ff45",
        "artistId": "3B4TvnYT0aJDlsblp1aBwE",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/3B4TvnYT0aJDlsblp1aBwE"
        },
        "genres": [
            "euskal indie",
            "rap euskera"
        ],
        "href": "https://api.spotify.com/v1/artists/3B4TvnYT0aJDlsblp1aBwE",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730f9bc3ec0e348e27d3b0031e",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020f9bc3ec0e348e27d3b0031e",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048510f9bc3ec0e348e27d3b0031e",
                "width": 64
            }
        ],
        "name": "Glaukoma",
        "popularity": 32,
        "relatedArtists": [],
        "topTracks": [
            "2Ntx6CLy2f0C4tDkBrGmLu",
            "6TBC4fzq9EfIxme2NFicew",
            "4wJzlLtDI7ucAYjxmza0xc",
            "1Q32GRLGYv0zkjszOTpOB4",
            "0Y0ylSRmrsZIQ5B4uYocxA",
            "6fLqtFsKDvFe0AhBggAa1h",
            "4wjen2ioSYPjE1Kaz5FB8k",
            "6EL5JRNehSzTBdhaBQAXtu",
            "1nObYgNEmOAuKh54gR0reh",
            "4z71So2rdaFbKbVKNdch0T"
        ],
        "uri": "spotify:artist:3B4TvnYT0aJDlsblp1aBwE",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3B4TvnYT0aJDlsblp1aBwE"
                        },
                        "href": "https://api.spotify.com/v1/artists/3B4TvnYT0aJDlsblp1aBwE",
                        "id": "3B4TvnYT0aJDlsblp1aBwE",
                        "name": "Glaukoma",
                        "type": "artist",
                        "uri": "spotify:artist:3B4TvnYT0aJDlsblp1aBwE"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6hDSNEAl1WvXDd5WFhA3G1"
                },
                "href": "https://api.spotify.com/v1/albums/6hDSNEAl1WvXDd5WFhA3G1",
                "id": "6hDSNEAl1WvXDd5WFhA3G1",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2730f9bc3ec0e348e27d3b0031e",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e020f9bc3ec0e348e27d3b0031e",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048510f9bc3ec0e348e27d3b0031e",
                        "width": 64
                    }
                ],
                "name": "Kalima",
                "release_date": "2017-08-31",
                "release_date_precision": "day",
                "total_tracks": 14,
                "type": "album",
                "uri": "spotify:album:6hDSNEAl1WvXDd5WFhA3G1"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3B4TvnYT0aJDlsblp1aBwE"
                    },
                    "href": "https://api.spotify.com/v1/artists/3B4TvnYT0aJDlsblp1aBwE",
                    "id": "3B4TvnYT0aJDlsblp1aBwE",
                    "name": "Glaukoma",
                    "type": "artist",
                    "uri": "spotify:artist:3B4TvnYT0aJDlsblp1aBwE"
                }
            ],
            "disc_number": 1,
            "duration_ms": 270812,
            "explicit": false,
            "external_ids": {
                "isrc": "TCADG1713310"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2Ntx6CLy2f0C4tDkBrGmLu"
            },
            "href": "https://api.spotify.com/v1/tracks/2Ntx6CLy2f0C4tDkBrGmLu",
            "id": "2Ntx6CLy2f0C4tDkBrGmLu",
            "is_local": false,
            "is_playable": true,
            "name": "Gure Kaiola",
            "popularity": 38,
            "preview_url": "https://p.scdn.co/mp3-preview/cf1ede4a698330dc7a2fd6be1a8e321c90186ea1?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:2Ntx6CLy2f0C4tDkBrGmLu"
        }
    },
    {
        "_id": "62f4339bc9ce02289742e124",
        "artistId": "6qyklgt2wzPT7KRdu15ZFL",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6qyklgt2wzPT7KRdu15ZFL"
        },
        "genres": [
            "rap espanol",
            "urbano espanol"
        ],
        "href": "https://api.spotify.com/v1/artists/6qyklgt2wzPT7KRdu15ZFL",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb066e9ac0c79cea19b3b68a46",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174066e9ac0c79cea19b3b68a46",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178066e9ac0c79cea19b3b68a46",
                "width": 160
            }
        ],
        "name": "Love Yi",
        "popularity": 46,
        "relatedArtists": [],
        "topTracks": [
            "3vWSiEjU8RBgEaYJeE2i8j",
            "4rEXT5xBIhARzf16JCh6ji",
            "5OHFuqSFkdQ7PA5pMBD7ML",
            "47c8Hx4DWdIXaJ9DIUeYIe",
            "45wK2Y5OjVLILJ5IGrvleB",
            "0wffV1qFuhOttfgJbGywHW",
            "6rLUEwaF2t8REkR7LiBTtD",
            "60Xq104dahklh2LSciVGEs",
            "4QdBgKijMTJEbusnNXvsX9",
            "1cPKEh0C52G4Afopp1YVZj"
        ],
        "uri": "spotify:artist:6qyklgt2wzPT7KRdu15ZFL",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4rO00pQq33bIv73QyJdivX"
                        },
                        "href": "https://api.spotify.com/v1/artists/4rO00pQq33bIv73QyJdivX",
                        "id": "4rO00pQq33bIv73QyJdivX",
                        "name": "Kabasaki",
                        "type": "artist",
                        "uri": "spotify:artist:4rO00pQq33bIv73QyJdivX"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0WIh8i8JJUH8gIXsosWa0w"
                },
                "href": "https://api.spotify.com/v1/albums/0WIh8i8JJUH8gIXsosWa0w",
                "id": "0WIh8i8JJUH8gIXsosWa0w",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27350caf1589aabb4aac808c850",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0250caf1589aabb4aac808c850",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485150caf1589aabb4aac808c850",
                        "width": 64
                    }
                ],
                "name": "Temperatura",
                "release_date": "2022-06-09",
                "release_date_precision": "day",
                "total_tracks": 14,
                "type": "album",
                "uri": "spotify:album:0WIh8i8JJUH8gIXsosWa0w"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4rO00pQq33bIv73QyJdivX"
                    },
                    "href": "https://api.spotify.com/v1/artists/4rO00pQq33bIv73QyJdivX",
                    "id": "4rO00pQq33bIv73QyJdivX",
                    "name": "Kabasaki",
                    "type": "artist",
                    "uri": "spotify:artist:4rO00pQq33bIv73QyJdivX"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5kgDdP7a4TsvkF08gpJGX0"
                    },
                    "href": "https://api.spotify.com/v1/artists/5kgDdP7a4TsvkF08gpJGX0",
                    "id": "5kgDdP7a4TsvkF08gpJGX0",
                    "name": "Juseph",
                    "type": "artist",
                    "uri": "spotify:artist:5kgDdP7a4TsvkF08gpJGX0"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2O8vbr4RYPpk6MRA4fio7u"
                    },
                    "href": "https://api.spotify.com/v1/artists/2O8vbr4RYPpk6MRA4fio7u",
                    "id": "2O8vbr4RYPpk6MRA4fio7u",
                    "name": "Saiko",
                    "type": "artist",
                    "uri": "spotify:artist:2O8vbr4RYPpk6MRA4fio7u"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/52iwsT98xCoGgiGntTiR7K"
                    },
                    "href": "https://api.spotify.com/v1/artists/52iwsT98xCoGgiGntTiR7K",
                    "id": "52iwsT98xCoGgiGntTiR7K",
                    "name": "Quevedo",
                    "type": "artist",
                    "uri": "spotify:artist:52iwsT98xCoGgiGntTiR7K"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6qyklgt2wzPT7KRdu15ZFL"
                    },
                    "href": "https://api.spotify.com/v1/artists/6qyklgt2wzPT7KRdu15ZFL",
                    "id": "6qyklgt2wzPT7KRdu15ZFL",
                    "name": "Love Yi",
                    "type": "artist",
                    "uri": "spotify:artist:6qyklgt2wzPT7KRdu15ZFL"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3ok6Is9hlTaZszhCaPEQv6"
                    },
                    "href": "https://api.spotify.com/v1/artists/3ok6Is9hlTaZszhCaPEQv6",
                    "id": "3ok6Is9hlTaZszhCaPEQv6",
                    "name": "Jader Mantilla",
                    "type": "artist",
                    "uri": "spotify:artist:3ok6Is9hlTaZszhCaPEQv6"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1etnyde2WY88gYflxPABE2"
                    },
                    "href": "https://api.spotify.com/v1/artists/1etnyde2WY88gYflxPABE2",
                    "id": "1etnyde2WY88gYflxPABE2",
                    "name": "Yago Roche",
                    "type": "artist",
                    "uri": "spotify:artist:1etnyde2WY88gYflxPABE2"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0qKIWMnkTnpE06eoKG7Pf4"
                    },
                    "href": "https://api.spotify.com/v1/artists/0qKIWMnkTnpE06eoKG7Pf4",
                    "id": "0qKIWMnkTnpE06eoKG7Pf4",
                    "name": "Fabbio",
                    "type": "artist",
                    "uri": "spotify:artist:0qKIWMnkTnpE06eoKG7Pf4"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0IEzMvarfVycBJAXjjEZOL"
                    },
                    "href": "https://api.spotify.com/v1/artists/0IEzMvarfVycBJAXjjEZOL",
                    "id": "0IEzMvarfVycBJAXjjEZOL",
                    "name": "La Pantera",
                    "type": "artist",
                    "uri": "spotify:artist:0IEzMvarfVycBJAXjjEZOL"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0MqIfXyd1cxF5dUJwzaw9F"
                    },
                    "href": "https://api.spotify.com/v1/artists/0MqIfXyd1cxF5dUJwzaw9F",
                    "id": "0MqIfXyd1cxF5dUJwzaw9F",
                    "name": "bless",
                    "type": "artist",
                    "uri": "spotify:artist:0MqIfXyd1cxF5dUJwzaw9F"
                }
            ],
            "disc_number": 1,
            "duration_ms": 438571,
            "explicit": true,
            "external_ids": {
                "isrc": "ES5702200465"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3vWSiEjU8RBgEaYJeE2i8j"
            },
            "href": "https://api.spotify.com/v1/tracks/3vWSiEjU8RBgEaYJeE2i8j",
            "id": "3vWSiEjU8RBgEaYJeE2i8j",
            "is_local": false,
            "is_playable": true,
            "name": "Turbulencias",
            "popularity": 43,
            "preview_url": "https://p.scdn.co/mp3-preview/a354c16e575a934196846b0890aac38a56c03ef4?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 9,
            "type": "track",
            "uri": "spotify:track:3vWSiEjU8RBgEaYJeE2i8j"
        }
    },
    {
        "_id": "62f52824c9ce02289779c771",
        "artistId": "1eTRyiHsWMoWKPD6s4Kiqt",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/1eTRyiHsWMoWKPD6s4Kiqt"
        },
        "genres": [
            "french hip hop",
            "rap calme"
        ],
        "href": "https://api.spotify.com/v1/artists/1eTRyiHsWMoWKPD6s4Kiqt",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebb13315f19359c786817e7bf2",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174b13315f19359c786817e7bf2",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178b13315f19359c786817e7bf2",
                "width": 160
            }
        ],
        "name": "Lujipeka",
        "popularity": 58,
        "relatedArtists": [],
        "topTracks": [
            "1zNGngJpT00C7fMRTwcJhQ",
            "08Wp4lUKmtyAgX6w9KhTeM",
            "6Uk6MCdcT025QBTcXRFKDL",
            "7inCeq8nQ5RMnbNU5Beu3g",
            "4SuKsJHOsE4yE27yCJd71e",
            "0tfLnCPLAFQs00cZE9JFPV",
            "4LIpZpeg3HchPoNm5dLC3k",
            "6iPQT2GS7gmQuereTIzk3G",
            "4oU9USbUzCBg3FLWeiCsBN",
            "4r3o96B3pGDf5LiMWcGCaL"
        ],
        "uri": "spotify:artist:1eTRyiHsWMoWKPD6s4Kiqt",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1eTRyiHsWMoWKPD6s4Kiqt"
                        },
                        "href": "https://api.spotify.com/v1/artists/1eTRyiHsWMoWKPD6s4Kiqt",
                        "id": "1eTRyiHsWMoWKPD6s4Kiqt",
                        "name": "Lujipeka",
                        "type": "artist",
                        "uri": "spotify:artist:1eTRyiHsWMoWKPD6s4Kiqt"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/01FvUhPKSiGylm8coBbWZN"
                },
                "href": "https://api.spotify.com/v1/albums/01FvUhPKSiGylm8coBbWZN",
                "id": "01FvUhPKSiGylm8coBbWZN",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273561c4488fdf595fcf74a8c77",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02561c4488fdf595fcf74a8c77",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851561c4488fdf595fcf74a8c77",
                        "width": 64
                    }
                ],
                "name": "Montagnes Russes",
                "release_date": "2021-11-05",
                "release_date_precision": "day",
                "total_tracks": 16,
                "type": "album",
                "uri": "spotify:album:01FvUhPKSiGylm8coBbWZN"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1eTRyiHsWMoWKPD6s4Kiqt"
                    },
                    "href": "https://api.spotify.com/v1/artists/1eTRyiHsWMoWKPD6s4Kiqt",
                    "id": "1eTRyiHsWMoWKPD6s4Kiqt",
                    "name": "Lujipeka",
                    "type": "artist",
                    "uri": "spotify:artist:1eTRyiHsWMoWKPD6s4Kiqt"
                }
            ],
            "disc_number": 1,
            "duration_ms": 175253,
            "explicit": true,
            "external_ids": {
                "isrc": "FRUM72101426"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1zNGngJpT00C7fMRTwcJhQ"
            },
            "href": "https://api.spotify.com/v1/tracks/1zNGngJpT00C7fMRTwcJhQ",
            "id": "1zNGngJpT00C7fMRTwcJhQ",
            "is_local": false,
            "is_playable": true,
            "name": "Pas à ma place",
            "popularity": 62,
            "preview_url": "https://p.scdn.co/mp3-preview/e71129fe6b09cd2144e70f47e5aa4e3baec871d4?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 2,
            "type": "track",
            "uri": "spotify:track:1zNGngJpT00C7fMRTwcJhQ"
        }
    },
    {
        "_id": "62f52766c9ce02289779917c",
        "artistId": "176vGOyEcucm3rfDCXwtkT",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/176vGOyEcucm3rfDCXwtkT"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/176vGOyEcucm3rfDCXwtkT",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273d8e8392c5e9fabb3eaf79bfe",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02d8e8392c5e9fabb3eaf79bfe",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851d8e8392c5e9fabb3eaf79bfe",
                "width": 64
            }
        ],
        "name": "Kushtrim Kelani",
        "popularity": 25,
        "relatedArtists": [],
        "topTracks": [
            "7nI3NGM31pTdHjtVAQcYs2",
            "30GZD41EKhNzqhaJ56bOmD",
            "4jvQtdxNWc12XhrFUUT0Xo",
            "3MnMcDxhk0MHlsLTf3hdfA",
            "2haf89LfPlkyHFjedRTfby",
            "2RYcWVkEowtTV3tuwHJUoV",
            "29Iq9A7GuQVWyI99Eqe4PF",
            "2TIsPrDI7NAj1TG1BHA4fM",
            "7kizJmCrGDHVZjlcHeT2LM",
            "68SPMcqm41uYLPcHnT3LgW"
        ],
        "uri": "spotify:artist:176vGOyEcucm3rfDCXwtkT",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/176vGOyEcucm3rfDCXwtkT"
                        },
                        "href": "https://api.spotify.com/v1/artists/176vGOyEcucm3rfDCXwtkT",
                        "id": "176vGOyEcucm3rfDCXwtkT",
                        "name": "Kushtrim Kelani",
                        "type": "artist",
                        "uri": "spotify:artist:176vGOyEcucm3rfDCXwtkT"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3cA8JG8AeGYAyLAGIkxeNH"
                },
                "href": "https://api.spotify.com/v1/albums/3cA8JG8AeGYAyLAGIkxeNH",
                "id": "3cA8JG8AeGYAyLAGIkxeNH",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273d8e8392c5e9fabb3eaf79bfe",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02d8e8392c5e9fabb3eaf79bfe",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851d8e8392c5e9fabb3eaf79bfe",
                        "width": 64
                    }
                ],
                "name": "Veq Lem",
                "release_date": "2022-05-24",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:3cA8JG8AeGYAyLAGIkxeNH"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/176vGOyEcucm3rfDCXwtkT"
                    },
                    "href": "https://api.spotify.com/v1/artists/176vGOyEcucm3rfDCXwtkT",
                    "id": "176vGOyEcucm3rfDCXwtkT",
                    "name": "Kushtrim Kelani",
                    "type": "artist",
                    "uri": "spotify:artist:176vGOyEcucm3rfDCXwtkT"
                }
            ],
            "disc_number": 1,
            "duration_ms": 128000,
            "explicit": false,
            "external_ids": {
                "isrc": "QZMHN2201369"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7nI3NGM31pTdHjtVAQcYs2"
            },
            "href": "https://api.spotify.com/v1/tracks/7nI3NGM31pTdHjtVAQcYs2",
            "id": "7nI3NGM31pTdHjtVAQcYs2",
            "is_local": false,
            "is_playable": true,
            "name": "Veq Lem",
            "popularity": 35,
            "preview_url": "https://p.scdn.co/mp3-preview/3d6a2abf6dba0fa5326f3be3b43ad6edf5bfd347?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:7nI3NGM31pTdHjtVAQcYs2"
        }
    },
    {
        "_id": "62f433b8c9ce02289742efb8",
        "artistId": "2VzzhmEHXT4nGim8nBw4ij",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/2VzzhmEHXT4nGim8nBw4ij"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/2VzzhmEHXT4nGim8nBw4ij",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb77fe0e13f16a8f57e24b6c2f",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517477fe0e13f16a8f57e24b6c2f",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17877fe0e13f16a8f57e24b6c2f",
                "width": 160
            }
        ],
        "name": "OCULA",
        "popularity": 43,
        "relatedArtists": [],
        "topTracks": [
            "2XPCDlgbo43NwC4QYjcfQd",
            "2qEUwn7wOYwecjpQbrCvjB",
            "1U5zq5VFaptRO4Jj1uNUns",
            "1oy8h3GJbmVn8JA1AedBpW",
            "3IeLJ5OLr0tCHsr7SDnfi8",
            "2PtssgaplWt6pf8x5AzyNi",
            "4lOsvJRwwcrNVBVQDdeyfJ",
            "1ywIrbGuUkwHADbRcgTHZI",
            "4PqolfdZrqHtmWbuPwgUik",
            "3YG6wI7G4e8ZKS9eK0mqdS"
        ],
        "uri": "spotify:artist:2VzzhmEHXT4nGim8nBw4ij",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1Zz6NBe8UIZjm88TvehFtx"
                        },
                        "href": "https://api.spotify.com/v1/artists/1Zz6NBe8UIZjm88TvehFtx",
                        "id": "1Zz6NBe8UIZjm88TvehFtx",
                        "name": "Le Youth",
                        "type": "artist",
                        "uri": "spotify:artist:1Zz6NBe8UIZjm88TvehFtx"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2VzzhmEHXT4nGim8nBw4ij"
                        },
                        "href": "https://api.spotify.com/v1/artists/2VzzhmEHXT4nGim8nBw4ij",
                        "id": "2VzzhmEHXT4nGim8nBw4ij",
                        "name": "OCULA",
                        "type": "artist",
                        "uri": "spotify:artist:2VzzhmEHXT4nGim8nBw4ij"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0xeddBsa52hpZFEc988Smk"
                },
                "href": "https://api.spotify.com/v1/albums/0xeddBsa52hpZFEc988Smk",
                "id": "0xeddBsa52hpZFEc988Smk",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2733723116b4c9ed2ab6e4a5f7b",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e023723116b4c9ed2ab6e4a5f7b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048513723116b4c9ed2ab6e4a5f7b",
                        "width": 64
                    }
                ],
                "name": "Feel Around You (OCULA Remix)",
                "release_date": "2022-07-14",
                "release_date_precision": "day",
                "total_tracks": 2,
                "type": "album",
                "uri": "spotify:album:0xeddBsa52hpZFEc988Smk"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1Zz6NBe8UIZjm88TvehFtx"
                    },
                    "href": "https://api.spotify.com/v1/artists/1Zz6NBe8UIZjm88TvehFtx",
                    "id": "1Zz6NBe8UIZjm88TvehFtx",
                    "name": "Le Youth",
                    "type": "artist",
                    "uri": "spotify:artist:1Zz6NBe8UIZjm88TvehFtx"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1qo3qvulyeKNNWjFCPXwwb"
                    },
                    "href": "https://api.spotify.com/v1/artists/1qo3qvulyeKNNWjFCPXwwb",
                    "id": "1qo3qvulyeKNNWjFCPXwwb",
                    "name": "LeyeT",
                    "type": "artist",
                    "uri": "spotify:artist:1qo3qvulyeKNNWjFCPXwwb"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2VzzhmEHXT4nGim8nBw4ij"
                    },
                    "href": "https://api.spotify.com/v1/artists/2VzzhmEHXT4nGim8nBw4ij",
                    "id": "2VzzhmEHXT4nGim8nBw4ij",
                    "name": "OCULA",
                    "type": "artist",
                    "uri": "spotify:artist:2VzzhmEHXT4nGim8nBw4ij"
                }
            ],
            "disc_number": 1,
            "duration_ms": 239644,
            "explicit": false,
            "external_ids": {
                "isrc": "GBEWA2203740"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2XPCDlgbo43NwC4QYjcfQd"
            },
            "href": "https://api.spotify.com/v1/tracks/2XPCDlgbo43NwC4QYjcfQd",
            "id": "2XPCDlgbo43NwC4QYjcfQd",
            "is_local": false,
            "is_playable": true,
            "name": "Feel Around You - OCULA Remix",
            "popularity": 46,
            "preview_url": "https://p.scdn.co/mp3-preview/0d55d35ed255374fb3ace572aa5c9db94d4e3219?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2XPCDlgbo43NwC4QYjcfQd"
        }
    },
    {
        "_id": "62f433d6c9ce02289742ffdf",
        "artistId": "6qJFpsoo6UNlHtmmkkvaOm",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/6qJFpsoo6UNlHtmmkkvaOm"
        },
        "genres": [
            "rap underground espanol"
        ],
        "href": "https://api.spotify.com/v1/artists/6qJFpsoo6UNlHtmmkkvaOm",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eba51f516760783ec0751fbce0",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174a51f516760783ec0751fbce0",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178a51f516760783ec0751fbce0",
                "width": 160
            }
        ],
        "name": "El Hombre Viento",
        "popularity": 39,
        "relatedArtists": [],
        "topTracks": [
            "7lE2GYjO8ogh2a7yTV2kUk",
            "6md6ifLq30SicfDSyMumjd",
            "0zvVsiQUbqBL6ZAoDoD1tw",
            "2VFJJXMlXDdymmRPWIBQb6",
            "3akbKtlFcYJ1PvYzzsoodq",
            "2mFbEDd61ZEwQwPRRwbP6J",
            "4w2XKh2OdFH07f1mVuHlig",
            "1iPjrrmOkciaphsKXaeALs",
            "5LoluUdLEUk98pgU9FPAVJ",
            "6YsgBlxdxOAAU5g4zgQo2v"
        ],
        "uri": "spotify:artist:6qJFpsoo6UNlHtmmkkvaOm",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3v2sYzsuZVd0gAhMWgl9I7"
                        },
                        "href": "https://api.spotify.com/v1/artists/3v2sYzsuZVd0gAhMWgl9I7",
                        "id": "3v2sYzsuZVd0gAhMWgl9I7",
                        "name": "Xavibo",
                        "type": "artist",
                        "uri": "spotify:artist:3v2sYzsuZVd0gAhMWgl9I7"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6qJFpsoo6UNlHtmmkkvaOm"
                        },
                        "href": "https://api.spotify.com/v1/artists/6qJFpsoo6UNlHtmmkkvaOm",
                        "id": "6qJFpsoo6UNlHtmmkkvaOm",
                        "name": "El Hombre Viento",
                        "type": "artist",
                        "uri": "spotify:artist:6qJFpsoo6UNlHtmmkkvaOm"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2ZAx9OCUUo2CN4nRB3uD07"
                },
                "href": "https://api.spotify.com/v1/albums/2ZAx9OCUUo2CN4nRB3uD07",
                "id": "2ZAx9OCUUo2CN4nRB3uD07",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2732339c1056cc80d2096641ca1",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e022339c1056cc80d2096641ca1",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048512339c1056cc80d2096641ca1",
                        "width": 64
                    }
                ],
                "name": "El Viaje de Trece",
                "release_date": "2021-02-19",
                "release_date_precision": "day",
                "total_tracks": 13,
                "type": "album",
                "uri": "spotify:album:2ZAx9OCUUo2CN4nRB3uD07"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3v2sYzsuZVd0gAhMWgl9I7"
                    },
                    "href": "https://api.spotify.com/v1/artists/3v2sYzsuZVd0gAhMWgl9I7",
                    "id": "3v2sYzsuZVd0gAhMWgl9I7",
                    "name": "Xavibo",
                    "type": "artist",
                    "uri": "spotify:artist:3v2sYzsuZVd0gAhMWgl9I7"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6qJFpsoo6UNlHtmmkkvaOm"
                    },
                    "href": "https://api.spotify.com/v1/artists/6qJFpsoo6UNlHtmmkkvaOm",
                    "id": "6qJFpsoo6UNlHtmmkkvaOm",
                    "name": "El Hombre Viento",
                    "type": "artist",
                    "uri": "spotify:artist:6qJFpsoo6UNlHtmmkkvaOm"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5nP79s99csrvcOiXTGjVfg"
                    },
                    "href": "https://api.spotify.com/v1/artists/5nP79s99csrvcOiXTGjVfg",
                    "id": "5nP79s99csrvcOiXTGjVfg",
                    "name": "Babi",
                    "type": "artist",
                    "uri": "spotify:artist:5nP79s99csrvcOiXTGjVfg"
                }
            ],
            "disc_number": 1,
            "duration_ms": 179278,
            "explicit": true,
            "external_ids": {
                "isrc": "ES5152100106"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7lE2GYjO8ogh2a7yTV2kUk"
            },
            "href": "https://api.spotify.com/v1/tracks/7lE2GYjO8ogh2a7yTV2kUk",
            "id": "7lE2GYjO8ogh2a7yTV2kUk",
            "is_local": false,
            "is_playable": true,
            "name": "Tregua (feat. Babi)",
            "popularity": 49,
            "preview_url": "https://p.scdn.co/mp3-preview/29ca8ed65a61838cbcfd1df1afced7a0e654fd13?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 8,
            "type": "track",
            "uri": "spotify:track:7lE2GYjO8ogh2a7yTV2kUk"
        }
    },
    {
        "_id": "62f52765c9ce022897798f12",
        "artistId": "4BwqDlOuXOJSy9CrvPJQIg",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4BwqDlOuXOJSy9CrvPJQIg"
        },
        "genres": [
            "shimmer pop",
            "shiver pop",
            "southampton indie"
        ],
        "href": "https://api.spotify.com/v1/artists/4BwqDlOuXOJSy9CrvPJQIg",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5ebf45ca07f49a9e1d3dfe9c2d8",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174f45ca07f49a9e1d3dfe9c2d8",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178f45ca07f49a9e1d3dfe9c2d8",
                "width": 160
            }
        ],
        "name": "Pale Seas",
        "popularity": 24,
        "relatedArtists": [],
        "topTracks": [
            "5TG4PLHEIZPiUlK4osfFcm",
            "2JvaRB3fZ1c9YIy767V1yf",
            "1m9Y0ylmK6lByLFLrp2FwZ",
            "5Cu5P3aO2UVnsI2nr9I8yj",
            "4sAu4jZU0z3nSHSccMjxQm",
            "4mYbMKWWGIDNOhst1V907f",
            "2mDUJpE6JiYa0PTz5TDpal",
            "0JH7NNdytRpZwG42hc1eb6",
            "514gOiLLacVHvlzQioy6lg",
            "28VdyiClEutuvct6Ov1z2R"
        ],
        "uri": "spotify:artist:4BwqDlOuXOJSy9CrvPJQIg",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4BwqDlOuXOJSy9CrvPJQIg"
                        },
                        "href": "https://api.spotify.com/v1/artists/4BwqDlOuXOJSy9CrvPJQIg",
                        "id": "4BwqDlOuXOJSy9CrvPJQIg",
                        "name": "Pale Seas",
                        "type": "artist",
                        "uri": "spotify:artist:4BwqDlOuXOJSy9CrvPJQIg"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1eVQadtgk65NtaglgNfwc7"
                },
                "href": "https://api.spotify.com/v1/albums/1eVQadtgk65NtaglgNfwc7",
                "id": "1eVQadtgk65NtaglgNfwc7",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273f191ccab1473e2d8baf3c92d",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02f191ccab1473e2d8baf3c92d",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851f191ccab1473e2d8baf3c92d",
                        "width": 64
                    }
                ],
                "name": "Stargazing for Beginners",
                "release_date": "2017-10-06",
                "release_date_precision": "day",
                "total_tracks": 10,
                "type": "album",
                "uri": "spotify:album:1eVQadtgk65NtaglgNfwc7"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4BwqDlOuXOJSy9CrvPJQIg"
                    },
                    "href": "https://api.spotify.com/v1/artists/4BwqDlOuXOJSy9CrvPJQIg",
                    "id": "4BwqDlOuXOJSy9CrvPJQIg",
                    "name": "Pale Seas",
                    "type": "artist",
                    "uri": "spotify:artist:4BwqDlOuXOJSy9CrvPJQIg"
                }
            ],
            "disc_number": 1,
            "duration_ms": 217026,
            "explicit": false,
            "external_ids": {
                "isrc": "UKJ951700106"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5TG4PLHEIZPiUlK4osfFcm"
            },
            "href": "https://api.spotify.com/v1/tracks/5TG4PLHEIZPiUlK4osfFcm",
            "id": "5TG4PLHEIZPiUlK4osfFcm",
            "is_local": false,
            "is_playable": true,
            "name": "Bodies",
            "popularity": 33,
            "preview_url": "https://p.scdn.co/mp3-preview/7ee7cae1a0b3d3bd934feacda9f42201a6990fd7?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:5TG4PLHEIZPiUlK4osfFcm"
        }
    },
    {
        "_id": "62f433b9c9ce02289742f3c9",
        "artistId": "4jexux4vGKbxY329ccd55L",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/4jexux4vGKbxY329ccd55L"
        },
        "genres": [
            "escape room",
            "lgbtq+ hip hop"
        ],
        "href": "https://api.spotify.com/v1/artists/4jexux4vGKbxY329ccd55L",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb9a6f01c7d477601c9e9eb1dd",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051749a6f01c7d477601c9e9eb1dd",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1789a6f01c7d477601c9e9eb1dd",
                "width": 160
            }
        ],
        "name": "Big Momma",
        "popularity": 10,
        "relatedArtists": [],
        "topTracks": [
            "7xYQZD2VdtntwHdeXLy36x",
            "0GO0myny1VWiJTImOrO2Li",
            "7lUJlKTZvlKiUe0maZ1qUc",
            "1IKFmW0J1rJyO1yuckT20o",
            "1B7ANtUFnLpFd1rNmaIEz4",
            "2ARbFBvnYNWQChNFs849bP",
            "6o3rbol4Gka6FIBiqVsZ7I",
            "4VvJAmOoGHKEZsptiBwuyD",
            "6xQHjZNII7dEDvoILPETyg",
            "7aZl7wo5bbVl6lLV1XWrhR"
        ],
        "uri": "spotify:artist:4jexux4vGKbxY329ccd55L",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4jexux4vGKbxY329ccd55L"
                        },
                        "href": "https://api.spotify.com/v1/artists/4jexux4vGKbxY329ccd55L",
                        "id": "4jexux4vGKbxY329ccd55L",
                        "name": "Big Momma",
                        "type": "artist",
                        "uri": "spotify:artist:4jexux4vGKbxY329ccd55L"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/55bz5X5oHVjCWbkQzmmy3k"
                },
                "href": "https://api.spotify.com/v1/albums/55bz5X5oHVjCWbkQzmmy3k",
                "id": "55bz5X5oHVjCWbkQzmmy3k",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bd67a20f1713ad3a7dc3d4eb",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02bd67a20f1713ad3a7dc3d4eb",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851bd67a20f1713ad3a7dc3d4eb",
                        "width": 64
                    }
                ],
                "name": "Milf",
                "release_date": "2019-07-10",
                "release_date_precision": "day",
                "total_tracks": 12,
                "type": "album",
                "uri": "spotify:album:55bz5X5oHVjCWbkQzmmy3k"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4jexux4vGKbxY329ccd55L"
                    },
                    "href": "https://api.spotify.com/v1/artists/4jexux4vGKbxY329ccd55L",
                    "id": "4jexux4vGKbxY329ccd55L",
                    "name": "Big Momma",
                    "type": "artist",
                    "uri": "spotify:artist:4jexux4vGKbxY329ccd55L"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/76SlrtEaq2oViRXulxjfuM"
                    },
                    "href": "https://api.spotify.com/v1/artists/76SlrtEaq2oViRXulxjfuM",
                    "id": "76SlrtEaq2oViRXulxjfuM",
                    "name": "cupcakKe",
                    "type": "artist",
                    "uri": "spotify:artist:76SlrtEaq2oViRXulxjfuM"
                }
            ],
            "disc_number": 1,
            "duration_ms": 180528,
            "explicit": true,
            "external_ids": {
                "isrc": "CAGOO1942804"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7xYQZD2VdtntwHdeXLy36x"
            },
            "href": "https://api.spotify.com/v1/tracks/7xYQZD2VdtntwHdeXLy36x",
            "id": "7xYQZD2VdtntwHdeXLy36x",
            "is_local": false,
            "is_playable": true,
            "name": "No Fats, No Femmes",
            "popularity": 16,
            "preview_url": "https://p.scdn.co/mp3-preview/f8d4c87d10af3e565b61e4d930df5c44e45e7bf7?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 8,
            "type": "track",
            "uri": "spotify:track:7xYQZD2VdtntwHdeXLy36x"
        }
    },
    {
        "_id": "62f43407c9ce02289743155f",
        "artistId": "0oSlbrFxx4zSZPSYPeQYDP",
        "externalUrls": {
            "spotify": "https://open.spotify.com/artist/0oSlbrFxx4zSZPSYPeQYDP"
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/0oSlbrFxx4zSZPSYPeQYDP",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27398729ba437187cd487a11423",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0298729ba437187cd487a11423",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485198729ba437187cd487a11423",
                "width": 64
            }
        ],
        "name": "Los Zvfiros",
        "popularity": 14,
        "relatedArtists": [],
        "topTracks": [
            "2Y1zxfhh6APlAKdpMhSPed",
            "2ya3eJY3NjcevmTslYp4R1",
            "1lEoZ2OBdvog3bptdjMnsB",
            "3hSyRCV2CGlgQnEJiHwhJm",
            "5BRJHmP3NU3y0CUT5UfEQW",
            "5zO9pAK3c45Lq6sU6Zco49",
            "5Bqsk4jUbtHKF3p0PDJmyU",
            "6evtBpng1OtASHfDCL24y6",
            "5Fv7yUQZ5NZUUTISA0krOD",
            "1lz1rxatCjevPfHeDzhSbk"
        ],
        "uri": "spotify:artist:0oSlbrFxx4zSZPSYPeQYDP",
        "notSave": true,
        "topTrack": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5PTf3CTYbKbzH785tmu3WK"
                        },
                        "href": "https://api.spotify.com/v1/artists/5PTf3CTYbKbzH785tmu3WK",
                        "id": "5PTf3CTYbKbzH785tmu3WK",
                        "name": "Massi Nada Mas",
                        "type": "artist",
                        "uri": "spotify:artist:5PTf3CTYbKbzH785tmu3WK"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2a3t7z8U1cpR0PEq1WB68d"
                        },
                        "href": "https://api.spotify.com/v1/artists/2a3t7z8U1cpR0PEq1WB68d",
                        "id": "2a3t7z8U1cpR0PEq1WB68d",
                        "name": "Diamante Ayala",
                        "type": "artist",
                        "uri": "spotify:artist:2a3t7z8U1cpR0PEq1WB68d"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0oSlbrFxx4zSZPSYPeQYDP"
                        },
                        "href": "https://api.spotify.com/v1/artists/0oSlbrFxx4zSZPSYPeQYDP",
                        "id": "0oSlbrFxx4zSZPSYPeQYDP",
                        "name": "Los Zvfiros",
                        "type": "artist",
                        "uri": "spotify:artist:0oSlbrFxx4zSZPSYPeQYDP"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0ym11rmtqXkIZF4aFQEqxO"
                },
                "href": "https://api.spotify.com/v1/albums/0ym11rmtqXkIZF4aFQEqxO",
                "id": "0ym11rmtqXkIZF4aFQEqxO",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27398729ba437187cd487a11423",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0298729ba437187cd487a11423",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485198729ba437187cd487a11423",
                        "width": 64
                    }
                ],
                "name": "La Manteca",
                "release_date": "2019-05-10",
                "release_date_precision": "day",
                "total_tracks": 1,
                "type": "album",
                "uri": "spotify:album:0ym11rmtqXkIZF4aFQEqxO"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5PTf3CTYbKbzH785tmu3WK"
                    },
                    "href": "https://api.spotify.com/v1/artists/5PTf3CTYbKbzH785tmu3WK",
                    "id": "5PTf3CTYbKbzH785tmu3WK",
                    "name": "Massi Nada Mas",
                    "type": "artist",
                    "uri": "spotify:artist:5PTf3CTYbKbzH785tmu3WK"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2a3t7z8U1cpR0PEq1WB68d"
                    },
                    "href": "https://api.spotify.com/v1/artists/2a3t7z8U1cpR0PEq1WB68d",
                    "id": "2a3t7z8U1cpR0PEq1WB68d",
                    "name": "Diamante Ayala",
                    "type": "artist",
                    "uri": "spotify:artist:2a3t7z8U1cpR0PEq1WB68d"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0oSlbrFxx4zSZPSYPeQYDP"
                    },
                    "href": "https://api.spotify.com/v1/artists/0oSlbrFxx4zSZPSYPeQYDP",
                    "id": "0oSlbrFxx4zSZPSYPeQYDP",
                    "name": "Los Zvfiros",
                    "type": "artist",
                    "uri": "spotify:artist:0oSlbrFxx4zSZPSYPeQYDP"
                }
            ],
            "disc_number": 1,
            "duration_ms": 240005,
            "explicit": true,
            "external_ids": {
                "isrc": "AR8TN1900185"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2Y1zxfhh6APlAKdpMhSPed"
            },
            "href": "https://api.spotify.com/v1/tracks/2Y1zxfhh6APlAKdpMhSPed",
            "id": "2Y1zxfhh6APlAKdpMhSPed",
            "is_local": false,
            "is_playable": true,
            "name": "La Manteca",
            "popularity": 29,
            "preview_url": "https://p.scdn.co/mp3-preview/9dd5eef5a1bf28c99fc463555ce6dddd9821536b?cid=beef0c582be34e1e98048f15cc3e7090",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:2Y1zxfhh6APlAKdpMhSPed"
        }
    }
]

  function startProcessing() {
    const fetchData = async () => {
      const result = await startAI()
      setArtistsToAsk(result.data.artistsToAsk)
      setCalculating(false)
    }
    setCalculating(true)
    fetchData()
  }

  function seeResults() {
    setShowEvents(true)
  }

  function sendLatLong(latLong) {
    console.log('LATLONG')
    console.log(latLong)
  }

  useEffect(() => {
    const saveUserSelection = async () => {
      await setUserSelection(userSelectionObject)
    }
    
    if (userSelectionObject) {
      setArtistsToAsk(false)
      saveUserSelection()
    }

    const fetchData = async () => {
      const result = await getUserInfo()
      setUserInfo(result.data)

      if (result.data) {
        const status = result.data.status

        if (status === 'INITIAL_STATE') {
          setTitle("Click to start the magic")
          setCalculating(false)
        }

        if (status === 'COLLECTING_DATA') {
          setTitle("Our system is looking for the best events for you")
          setSubTitle(`Este proceso puede tardar. Te enviaremos un correo electrónico a ${result.data.email} cuando nuestra AI haya terminado.`)
          setCalculating(true)
        }

        if (status === 'DATA_COLLECTED') {
          setTitle("Estamos a nada de ofercerte los resultados")
          setSubTitle(`Este proceso puede tardar. Te enviaremos un correo electrónico a ${result.data.email} cuando nuestra AI haya terminado.`)
          setCalculating(true)
        }

        if (status === 'AVAILABLE_RESULTS') {
          const events = result.data.recommendedEvents
          console.log(events)
          const eventsParsed = events.map(function (event) {
            return {
              title: _.get(event, 'info.displayName', ''),
              artist: _.get(event, 'artistInfo.name', ''),
              location: _.get(event, 'info.location.city', ''),
              date: _.get(event, 'info.start.date', ''),
              venue: _.get(event, 'info.venue.displayName', ''),
              type: _.get(event, 'info.type', ''),
              image: _.get(event, 'artistInfo.images[0].url', ''),
              trackUrl: _.get(event, 'trackInfo.preview_url', '')
            }
        })
        console.log(eventsParsed)
          setTitle("Ya tenemos los resultados")
          setSubTitle('')
          setCalculating(false)
          setEventsToAsk(eventsParsed)
        }
        setLoading(false)
      }
    }
    fetchData()
  }, [userSelectionObject])

  return (
    <MainLayout>
      <NavBarDashboard />
      {!showEvents ?
        artistsToAsk ?
        <ArtistsCarouselLayout items={artistsToAsk} setUserSelection={setUserSelectionObject} />
        :
        //<MapLayout loading={loading} withBackground={true}  title={title} sendLatLong={sendLatLong}/>
        <InformativeLayout loading={loading} withBackground={true}  title={title} subtitle={subtitle} calculating={calculating} eventsToAsk={eventsToAsk} startProcessing={startProcessing} seeResults={seeResults}/>
        :
        <EventsCarouselLayout items={eventsToAsk}/>
      }
    </MainLayout>
  )
}

export default Dashboard