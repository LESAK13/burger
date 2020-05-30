# Eat-Da-Burger

For this assignment, I designed an Eat-Da-Burger app which allows the user to add burgers to the page, devour them and add them to another area of the page.  The burgers are stored in a database, burgers_db.

First, I set up the environment to follow this structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

I added a partials folder with two blocks in the views folder to help with handlebars.

After that, I followed the homework assginment read_me and completed all tasks.

The app works fine locally, but when I try to view the app through heroku, I am getting an error.