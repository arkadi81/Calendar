to set up git on windows to store credentials:
$ git config --global credential.helper wincred // cache will not work with windows

stuff needed for this project
packages:
-g documentation, yo , bower (have to have it for yo generator)
--save-dev 
local: npm install generator-express (for mvc version)
using mysql (mongo is giant install), gulp, ejs for templating (other options possible), less for css

Yeoman generator used: 
https://github.com/petecoop/generator-express
requires bower


#SETUP

- create calendar directory, cd to directory
- git init / clone or set destination to github
- npm install -g bower yo
- npm install generator-express
- run mysql server locally
- npm install -g mocha
- to connect to db, in config.js set db: 'mysql://user:pass@localhost/calendar'

#Run (development)
$gulp

#test
$mocha or $npm test
 