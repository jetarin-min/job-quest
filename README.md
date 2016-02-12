Welcome to TakeMeTour's Job Quest
===

Thank you for your application. First, we would like to take a simple test on your JavaScript skill. 

Choose to do one (or both) of frontend and backend tasks. Please fork me and submit your repository at [WantToWork@takemetour.com](mailto:WantToWork@takemetour.com) by **Monday February 8th, 2016 23:59 GMT+7**. 

Frontend Task
---
![Designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png)

- Given the [designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png), please write HTML and CSS accordingly
- Font used is [Roboto](https://www.google.com/fonts#UsePlace:use/Collection:Roboto)
- Please take a look at API [https://www.takemetour.com/api/home](https://www.takemetour.com/api/home) and use data from the API to display the inspiration section using JavaScript

**Bonus points**

- Write the stylesheet in SASS
- Support mobile screen (responsive)
- Use Browserify or Webpack

**Question**

Please explain what is single-page application and how it work. Give examples of tools used to make SPAs.

Single Page application is web application that load HTML and Javascript program in the first time. Once the user make an interactive, browser just make an AJAX request to the server and get only JSON data and then render by itself. The server don't have to render all stuff, just do some API or RPC and serve the data that client (browser) needs. It's better for the user's experience, they won't see any browser flash/refresh.
Frameworks that can make SPAs are AngularJS, BackboneJS, EmberJS.
SPAs can even made from some libraries that isn't framework like ReactJS, JQuery and HandlebarJS.

Backend Task
---
- Develop a simple API to serve trip information
- API endpoints consists of
  - `GET /trips` list all trips (only trip `name` and `_id`)
  - `POST /trips` create new trip
  - `GET /trips/:id` get trip detail (all fields)
  - `PUT /trips/:id` update trip
  - `DELETE /trips/:id` delete trip
- Trip data consists of
  - `String` name
  - `Number` price
  - `String` description

**Bonus points**

- Use promise instead of async callback
- Use ES2015 syntax

**Question**

What is the difference between MongoDB and MySql?

MySql is RDBMS (Relational database). It needs pre design for all data structure difficult to maintain. Schema is required and all tables should be normalized in order to conserve storage space. Use SQL command to manipulate the data. In order to use database on new computer, database required migration to adjust schema first.

MongoDB is NoSQL. Usually use for big data structure like social network. Faster and more flexible. Schema is not required; howerver, it required Key-Value just like JSON format (actually it's BSON, contain more data type). Collection should keep all the data necessary to use (Should not make a relation between collections, otherwise it will be slow). Normally use Javascript to manipulate the data. No need to migrate or prepare collection/dabase first, if it is not exist MongoDB will create. 
