# Backend Routes

## Auth Routes

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/auth/login
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

Response

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

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "errors": [
        "email : Email provided not found.",
        "password : No such user exists."
    ]
    }
    ```

### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/users/signup
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "password": "secret password"
    }
    ```

## Channel Routes

### Get users of a channel by channel id

Gets all the users who are currently in a channel.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/<channel_id>/users
  * Body: None

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "Users": [
        {
            "about_me": "I am a demo user testintg this application!",
            "email": "demo@aa.io",
            "first_name": "Demo",
            "id": 1,
            "last_name": "Lition",
            "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            "title": "Demo User",
            "username": "Demo"
        },
        {
            "about_me": "I am the greatest mod 4 instructor of all time",
            "email": "mod4god@aa.io",
            "first_name": "Alec",
            "id": 2,
            "last_name": "Instructor",
            "profile_picture": "https://i0.wp.com/d37ck3jytu9wl0.cloudfront.net/wp-content/uploads/2022/05/31141519/Neckbeard-BLOG.jpg?fit=1200%2C777&ssl=1",
            "title": "Mod 4 Gate Keeper",
            "username": "Alec"
        }
    ]
    }
    ```

  * Error Response: Channel not found
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```python

    {
        "message": "Channel could not be found",
        "status_code": 404
    }, 404

    ```


### Get details of a channel by its ID

Returns the information pertaining to a channel.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/<channel_id>/users
  * Headers: None
  * Body: None

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:


```json
{
    "channel_in_workspace": {
        "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        "id": 1,
        "name": "AppAcademy",
        "owner_id": 1
    },
    "channel_messages": [
        {
            "channel_id": 1,
            "content": "I would say that is a good, but not great answer.",
            "id": 1,
            "user_id": 1
        },
        {
            "channel_id": 1,
            "content": "Holy Guacamole!",
            "id": 7,
            "user_id": 2
        },
        {
            "channel_id": 1,
            "content": "Just a bit of banter",
            "id": 8,
            "user_id": 3
        }
    ],
    "id": 1,
    "is_channel": true,
    "name": "general",
    "users_in_channels": [
        {
            "about_me": "I am a demo user testintg this application!",
            "email": "demo@aa.io",
            "first_name": "Demo",
            "id": 1,
            "last_name": "Lition",
            "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            "title": "Demo User",
            "username": "Demo"
        },
        {
            "about_me": "I am the greatest mod 4 instructor of all time",
            "email": "mod4god@aa.io",
            "first_name": "Alec",
            "id": 2,
            "last_name": "Instructor",
            "profile_picture": "https://i0.wp.com/d37ck3jytu9wl0.cloudfront.net/wp-content/uploads/2022/05/31141519/Neckbeard-BLOG.jpg?fit=1200%2C777&ssl=1",
            "title": "Mod 4 Gate Keeper",
            "username": "Alec"
        },
        {
            "about_me": "The father of Patches and Blue",
            "email": "Brad@aa.io",
            "first_name": "Brad",
            "id": 3,
            "last_name": "Instructor",
            "profile_picture": "https://cdn.vox-cdn.com/thumbor/qqJR3THHUSgAt2ADTGk6_56hjyQ=/0x0:4059x4051/1400x1400/filters:focal(1964x2333:1965x2334)/cdn.vox-cdn.com/uploads/chorus_asset/file/24018802/ND_Zelda_Lead.jpeg",
            "title": "Food variable master",
            "username": "Brad"
        }
    ],
    "workspace_id": 1
}
```
  * Error Response: Channel not found
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```python

    {
        "message": "Channel could not be found",
        "status_code": 404
    }, 404

    ```


### Get all messages in a channel
Gets all of the messages associated with a channel.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/<channel_id>/messages
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

```json
{
    "Messages": [
        {
            "channel_id": 1,
            "content": "I would say that is a good, but not great answer.",
            "id": 1,
            "user_id": 1
        },
        {
            "channel_id": 1,
            "content": "Holy Guacamole!",
            "id": 7,
            "user_id": 2
        },
        {
            "channel_id": 1,
            "content": "Just a bit of banter",
            "id": 8,
            "user_id": 3
        }
    ]
}
```


  * Error Response: Channel not found
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```python
    {
        "message": "Channel could not be found",
        "status_code": 404
    }, 404

    ```

### Get all channels of a current user
Returns all the channels in the workspaces that the user is currently in

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/channels
  * Body: none


* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:


```json
{
    "Channels": [
        {
            "id": 1,
            "is_channel": true,
            "name": "general",
            "users_in_channels": [
                {
                    "about_me": "I am a demo user testintg this application!",
                    "email": "demo@aa.io",
                    "first_name": "Demo",
                    "id": 1,
                    "last_name": "Lition",
                    "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
                    "title": "Demo User",
                    "username": "Demo"
                },
            ],
            "workspace_id": 1
        },
        {
            "id": 3,
            "is_channel": true,
            "name": "2022-11-21-lecture-questions",
            "users_in_channels": [
                {
                    "about_me": "I am a demo user testintg this application!",
                    "email": "demo@aa.io",
                    "first_name": "Demo",
                    "id": 1,
                    "last_name": "Lition",
                    "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
                    "title": "Demo User",
                    "username": "Demo"
                },
            ],
            "workspace_id": 1
        },
        {
            "id": 4,
            "is_channel": true,
            "name": "lecture questions",
            "users_in_channels": [
                {
                    "about_me": "I am a demo user testintg this application!",
                    "email": "demo@aa.io",
                    "first_name": "Demo",
                    "id": 1,
                    "last_name": "Lition",
                    "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
                    "title": "Demo User",
                    "username": "Demo"
                }
            ],
            "workspace_id": 1
        },
        {
            "id": 5,
            "is_channel": false,
            "name": "direct message",
            "users_in_channels": [
                {
                    "about_me": "I am a demo user testintg this application!",
                    "email": "demo@aa.io",
                    "first_name": "Demo",
                    "id": 1,
                    "last_name": "Lition",
                    "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
                    "title": "Demo User",
                    "username": "Demo"
                },
            ],
            "workspace_id": 1
        },
        {
            "id": 6,
            "is_channel": false,
            "name": "direct group message",
            "users_in_channels": [
                {
                    "about_me": "I am a demo user testintg this application!",
                    "email": "demo@aa.io",
                    "first_name": "Demo",
                    "id": 1,
                    "last_name": "Lition",
                    "profile_picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
                    "title": "Demo User",
                    "username": "Demo"
                },
            ],
            "workspace_id": 1
        }
    ]
}
```

### Add a user to a channel
Add another user to a channel

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/<channel_id>/users
  * Body:

    ```json
    {
        "user_id": 1
    }
    ```

* Successful Response
  * Status Code: 302
  * Headers:
    * Content-Type: application/json
  * Body:

    ```python
    {
        "message": "Added user to channel
    }
    ```


  * Error Response: Channel or user not found
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```python
    {
        "message": "Channel could not be found",
        "status_code": 404
    }, 404

    {
        "message": "User could not be found",
        "status_code": 404
    }, 404
    ```

### Remove a user from a group
Remove an existing user from a channel.

* Require Authentication: true
* Request
  * Method: DELETE
  * URL: /api/<channel_id>/users
  * Body:

    ```json
    {
        "user_id": 1
    }
    ```

* Successful Response
  * Status Code: 302
  * Headers:
    * Content-Type: application/json
  * Body:

    ```python
    {
        "message": "Removed user from channel
    }
    ```

  * Error Response: Channel or user not found
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```python
    {
        "message": "Channel could not be found",
        "status_code": 404
    }, 404

    {
        "message": "User could not be found",
        "status_code": 404
    }, 404
    ```

### Create a channel
Creates a channel, associates it with a workspace, automatically puts user in channel

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/channels
  * Body:

    ```json
    {
        "name": "new channel",
        "workspace_id": 1,
        "is_channel": true
    }
    ```

## Edit Channel
Edit an existing channel

* Require Authentication: true
* Request
  * Method: PUT
  * URL: /api/channels/<channel_id>
  * Body:

    ```json
    {
        "name": "edited channel",
    }
    ```


### Delete Channel
Deletes a channel

* Require Authentication: true
* Request
  * Method: DELETE
  * URL: /api/channels/<channel_id>
  * Body: none


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
        "User successfully deleted"
    ```

## Workspace Routes

### Get all workspaces

Reads out a list of all the workspaces and their information

* Require Authentification: false
* Request
    * Method: GET
    * URL: /api/workspaces
    * Body: None

* Successful Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:

    ```json
        [
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
    ]
    ```


### Get single workspace

Reads out the details of a single workspace

* Require Authentification: false
* Request
    * Method: GET
    * URL: /api/workspaces/<int:id>
    * Body: None

* Successful Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:

    ```json
    {
        "icon": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Appacademylogo.png",
        "id": 1,
        "name": "AppAcademy",
        "owner_id": 1
    }
    ```


### Create a workspace

A user is able to create a new workplace to handle new channesl and users to be added.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /api/workspaces
  * Headers:
    * Content-Type: application/json
  * Body:

    ```js
    {
        "name": "makeupaname",
        "icon": "someicon.jpeg"
    }
    ```

* Successful Response
    * Status Code: 200
    * Headers:
        * Content-Type: application/json
    * Body:

    ```js
    {
        "icon": "someicon.jpeg",
        "id": 4,
        "name": "makeupaname",
        "owner_id": 1
    }
    ```

### Delete a workspace

A user will be able to delete their own workspace

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  * Method: DELETE
  * URL: /api/workspaces/<int:id>
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
        {"message": "successfully deleted"}
    ```
