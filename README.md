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

After setting up the folders, files and installing my dependencies, I set up the directory with one table which stores all burgers.

Within the config, folder, with a connection.js file.  I established the connection to my local server.

I then created an orm.js file.  The orm has three functions:

- selecting all burgers from the database.

- inserting a burger into the database.

- updating the burgers devoured condition from false to true.

Within the burger model, I imported the orm that was created and referenced the functions from the orm.

Inside the burger controller, I required, express, router and the burger model  I then have a get route, post route and put route.  The get route stores all burgers into a handlebars object and renders it in the index.html file.  The post route inserts the new burger to the database.  The put route updates the devoured condition of the selected burger.

The handlebars were set up.  A simple main.handlebars file was designed along with the index.handlebars which uses two block handlebar files to return all burgers depending on their "devoured" value.







