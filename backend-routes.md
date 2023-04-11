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


























































































































## User Routes

### Get all users

Reads out a list of all users that have previously signed up and displays all of their information.1000logos
