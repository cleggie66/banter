## User Routes

### Get all Users

Reads out a list of all the users that have previously signed up, with all of their information displayed.

* Require Authentification: false
* Request
    * Method: GET
    * URL: /api/users
    * Body: None

* Successful Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:

    ```json
        {
        "about_me": "I am a demo user testintg this application!",
        "email": "demo@aa.io",
        "first_name": "Demo",
        "id": 1,
        "joined_channels": [
            {
                "id": 1,
                "is_channel": true,
                "name": "general",
                "workspace_id": 1
            },
            {
                "id": 3,
                "is_channel": true,
                "name": "2022-11-21-lecture-questions",
                "workspace_id": 1
            },
            {
                "id": 4,
                "is_channel": true,
                "name": "lecture questions",
                "workspace_id": 1
            },
            {
                "id": 5,
                "is_channel": false,
                "name": "direct message",
                "workspace_id": 1
            },
            {
                "id": 6,
                "is_channel": false,
                "name": "direct group message",
                "workspace_id": 1
            }
        ],
        "joined_workspaces": [
            {
                "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
                "id": 1,
                "name": "AppAcademy",
                "owner_id": 1
            },
            {
                "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
                "id": 2,
                "name": "Gamers",
                "owner_id": 1
            },
            {
                "icon": "https://fcbk.su/_data/stickers/executive_business_fish/executive_business_fish_09.png",
                "id": 3,
                "name": "Business",
                "owner_id": 2
            }
        ],
        "last_name": "Lition",
        "owned_workspaces": [
            {
                "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
                "id": 1,
                "name": "AppAcademy",
                "owner_id": 1
            },
            {
                "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
                "id": 2,
                "name": "Gamers",
                "owner_id": 1
            }
        ],
        "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "title": "Demo User",
        "user_messages": [
            {
                "channel_id": 1,
                "content": "I would say that is a good, but not great answer.",
                "id": 1,
                "user_id": 1
            },
            {
                "channel_id": 2,
                "content": "I would say that is a good, but not great answer.",
                "id": 2,
                "user_id": 1
            },
            {
                "channel_id": 3,
                "content": "I would say that is a good, but not great answer.",
                "id": 3,
                "user_id": 1
            },
            {
                "channel_id": 4,
                "content": "I would say that is a good, but not great answer.",
                "id": 4,
                "user_id": 1
            },
            {
                "channel_id": 5,
                "content": "wow, nice direct message",
                "id": 5,
                "user_id": 1
            },
            {
                "channel_id": 6,
                "content": "This group message is very pog",
                "id": 6,
                "user_id": 1
            }
        ],
        "username": "Demo"
    }
    ```

Get single user

Returns the information about a specified User.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/user/<int:id>
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "about_me": "I am a demo user testintg this application!",
    "email": "demo@aa.io",
    "first_name": "Demo",
    "id": 1,
    "joined_channels": [
        {
        "id": 1,
        "is_channel": true,
        "name": "general",
        "workspace_id": 1
        },
        {
        "id": 3,
        "is_channel": true,
        "name": "2022-11-21-lecture-questions",
        "workspace_id": 1
        },
        {
        "id": 4,
        "is_channel": true,
        "name": "lecture questions",
        "workspace_id": 1
        },
        {
        "id": 5,
        "is_channel": false,
        "name": "direct message",
        "workspace_id": 1
        },
        {
        "id": 6,
        "is_channel": false,
        "name": "direct group message",
        "workspace_id": 1
        }
    ],
    "joined_workspaces": [
        {
        "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        "id": 1,
        "name": "AppAcademy",
        "owner_id": 1
        },
        {
        "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
        "id": 2,
        "name": "Gamers",
        "owner_id": 1
        },
        {
        "icon": "https://fcbk.su/_data/stickers/executive_business_fish/executive_business_fish_09.png",
        "id": 3,
        "name": "Business",
        "owner_id": 2
        }
    ],
    "last_name": "Lition",
    "owned_workspaces": [
        {
        "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        "id": 1,
        "name": "AppAcademy",
        "owner_id": 1
        },
        {
        "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
        "id": 2,
        "name": "Gamers",
        "owner_id": 1
        }
    ],
    "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "title": "Demo User",
    "user_messages": [
        {
        "channel_id": 1,
        "content": "I would say that is a good, but not great answer.",
        "id": 1,
        "user_id": 1
        },
        {
        "channel_id": 2,
        "content": "I would say that is a good, but not great answer.",
        "id": 2,
        "user_id": 1
        },
        {
        "channel_id": 3,
        "content": "I would say that is a good, but not great answer.",
        "id": 3,
        "user_id": 1
        },
        {
        "channel_id": 4,
        "content": "I would say that is a good, but not great answer.",
        "id": 4,
        "user_id": 1
        },
        {
        "channel_id": 5,
        "content": "wow, nice direct message",
        "id": 5,
        "user_id": 1
        },
        {
        "channel_id": 6,
        "content": "This group message is very pog",
        "id": 6,
        "user_id": 1
        }
    ],
    "username": "Demo"
    }
    ```


### Get current user

Returns the information for the current user that is logged in.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/user/current
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "about_me": "I am a demo user testintg this application!",
    "email": "demo@aa.io",
    "first_name": "Demo",
    "id": 1,
    "joined_channels": [
        {
        "id": 1,
        "is_channel": true,
        "name": "general",
        "workspace_id": 1
        },
        {
        "id": 3,
        "is_channel": true,
        "name": "2022-11-21-lecture-questions",
        "workspace_id": 1
        },
        {
        "id": 4,
        "is_channel": true,
        "name": "lecture questions",
        "workspace_id": 1
        },
        {
        "id": 5,
        "is_channel": false,
        "name": "direct message",
        "workspace_id": 1
        },
        {
        "id": 6,
        "is_channel": false,
        "name": "direct group message",
        "workspace_id": 1
        }
    ],
    "joined_workspaces": [
        {
        "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        "id": 1,
        "name": "AppAcademy",
        "owner_id": 1
        },
        {
        "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
        "id": 2,
        "name": "Gamers",
        "owner_id": 1
        },
        {
        "icon": "https://fcbk.su/_data/stickers/executive_business_fish/executive_business_fish_09.png",
        "id": 3,
        "name": "Business",
        "owner_id": 2
        }
    ],
    "last_name": "Lition",
    "owned_workspaces": [
        {
        "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        "id": 1,
        "name": "AppAcademy",
        "owner_id": 1
        },
        {
        "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
        "id": 2,
        "name": "Gamers",
        "owner_id": 1
        }
    ],
    "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "title": "Demo User",
    "user_messages": [
        {
        "channel_id": 1,
        "content": "I would say that is a good, but not great answer.",
        "id": 1,
        "user_id": 1
        },
        {
        "channel_id": 2,
        "content": "I would say that is a good, but not great answer.",
        "id": 2,
        "user_id": 1
        },
        {
        "channel_id": 3,
        "content": "I would say that is a good, but not great answer.",
        "id": 3,
        "user_id": 1
        },
        {
        "channel_id": 4,
        "content": "I would say that is a good, but not great answer.",
        "id": 4,
        "user_id": 1
        },
        {
        "channel_id": 5,
        "content": "wow, nice direct message",
        "id": 5,
        "user_id": 1
        },
        {
        "channel_id": 6,
        "content": "This group message is very pog",
        "id": 6,
        "user_id": 1
        }
    ],
    "username": "Demo"
    }
    ```

### Update current user

Allows for the current user to edit their account information.

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  * Method: PUT
  * URL: /api/users/<int:id>
  * Headers:
    * Content-Type: application/json
  * Body:

    (You can input any one of these requests or all of them)
    ```json
    {
        "username": "DemoUpdateTest3",
        "email": "random@aa.io",
        "first_name": "omeDemo",
        "last_name": "noitiL",
        "profile_picture": "fake-pic.jpeg",
        "title": "fake-title",
        "about-me": "what do you want to know about me?"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {
        "about_me": "I am a demo user testintg this application!",
        "email": "demo@aa.io",
        "first_name": "omeDemo",
        "id": 1,
        "joined_channels": [
            {
                "id": 1,
                "is_channel": true,
                "name": "general",
                "workspace_id": 1
            },
            {
                "id": 2,
                "is_channel": true,
                "name": "2022-11-21-online",
                "workspace_id": 1
            },
            {
                "id": 3,
                "is_channel": true,
                "name": "2022-11-21-lecture-questions",
                "workspace_id": 1
            },
            {
                "id": 4,
                "is_channel": true,
                "name": "lecture questions",
                "workspace_id": 1
            },
            {
                "id": 5,
                "is_channel": false,
                "name": "direct message",
                "workspace_id": 1
            },
            {
                "id": 6,
                "is_channel": false,
                "name": "direct group message",
                "workspace_id": 1
            }
        ],
        "joined_workspaces": [
            {
                "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
                "id": 1,
                "name": "AppAcademy",
                "owner_id": 1
            },
            {
                "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
                "id": 2,
                "name": "Gamers",
                "owner_id": 1
            },
            {
                "icon": "https://fcbk.su/_data/stickers/executive_business_fish/executive_business_fish_09.png",
                "id": 3,
                "name": "Business",
                "owner_id": 2
            }
        ],
        "last_name": "Lition",
        "owned_workspaces": [
            {
                "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
                "id": 1,
                "name": "AppAcademy",
                "owner_id": 1
            },
            {
                "icon": "https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg",
                "id": 2,
                "name": "Gamers",
                "owner_id": 1
            }
        ],
        "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "title": "Demo User",
        "user_messages": [
            {
                "channel_id": 1,
                "content": "I would say that is a good, but not great answer.",
                "id": 1,
                "user_id": 1
            },
            {
                "channel_id": 2,
                "content": "I would say that is a good, but not great answer.",
                "id": 2,
                "user_id": 1
            },
            {
                "channel_id": 3,
                "content": "I would say that is a good, but not great answer.",
                "id": 3,
                "user_id": 1
            },
            {
                "channel_id": 4,
                "content": "I would say that is a good, but not great answer.",
                "id": 4,
                "user_id": 1
            },
            {
                "channel_id": 5,
                "content": "wow, nice direct message",
                "id": 5,
                "user_id": 1
            },
            {
                "channel_id": 6,
                "content": "This group message is very pog",
                "id": 6,
                "user_id": 1
            }
        ],
        "username": "DemoUpdateTest3"
    }
    ```

### DELETE A USER

Deletes an existing user

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/users/<int:id>
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    
    ```



