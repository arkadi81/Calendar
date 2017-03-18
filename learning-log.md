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
- yo express
- run mysql server locally
- npm install -g mocha
- npm install chai (has to be local!!)
- to connect to db, in config.js set db: 'mysql://user:pass@localhost/calendar'

#Run (development)
$gulp

#test
$mocha or $npm test

#questions so far:
how do fancy git repos get the icons which check report on build status, downloads etc? travis? istanbull?

added example.spec.js to test directory as sample of working tests
$mocha --watch to run ongoing testing now functional.
server also running and updates views on save.]

- need to learn how to write code for expresss routing.

// CRUD functionality
create read update delete
 
 ## express generator is now installed globally, so minimal scaffolding can just be done using 
 $ express [dirname]

 - chai must be installed locally to work 