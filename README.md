# BugsApp

BugsApp is an application for the SoftUni Angular course. 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.
## Domain
 https://angular-firebase-f836c.web.app/
## Features

###	Application Structure
The application  has:
####	Public part (accessible without authentication)

The public part of my project  is visible without authentication. 
The visitors can see the Home page,  Login and Registred  pages, and user's public data on the Catalog page with available Bugs.
####	Private part (available to registered users)

Registered users have personal area in the web application accessible after successful login. This area contains:
-	 User profile management feature - he will add a profile picture.
-	 User can post in bug system - can create new post with favorite bugs.

###	General functionality
•	Dynamic pages:
- Home page - generate Last 3 published Bugs - sorted by data to create;
-	Profile page - generate information of user, and user make upload-change your profile Image;
-	Catalog page - generate information about all publications.
    - if the current user is not logged in, no buttons will be displayed, he just Read information; 
    - if the current user is logged in but not the author of the post, button [Likes] will show;
    - if the current user is the author of the post, he should see the [Delete] and [Edit] buttons. He can delete his post or update it;
-	New bug  page - generate form to Create new publication;

•	Static pages:
-	Not-Found page - for wrong routes;

###	Guards
The SecurityRequirements about which users can access specific functionalities and pages.

-	Guest (not logged in) users can access the Home page.
-	Guest (not logged in) users can access the Login page and functionality.
-	Guest (not logged in) users can access the Register page and functionality.
-	Guest (not logged in) and Users (logged in) can access the Catalog page (Listed all bugs).
-	Users (logged in) can access the Home page.
-	Users (logged in) can access the Catalog page and functionality.
	   - Users (not bugs -post owners) can Like  bugs.
	   - Users(bugs -post owners) can  Edit and  Delete the current bug post.
-	Users (logged in) can access the Profile page and functionality.
-	Users (logged in) can access the  New bug page and functionality.
-	Users (logged in) can access the Logout functionality.
###	Other functionality
####	Error handling and Data validation
#####	Login/Register
-	The email should be required, at least 6 characters long, and must be valid- checked with Regex pattern;
-	The password should be required,  at least 6 characters long;
-	The repeat password should be required,  equal to the password;
-	If forms is invalid add-buttons are disabled;

#####	New bug
-	The title should be required,  at least 3 characters long;
-	The image should be required,  at least 6 characters long;
-	The description should be required,  at least 6 characters long;
-	If forms is invalid add- buttons are disabled;


####	UI and UX - 
I use Angular Animations with  BrowserAnimationsModule - for mobile view  of  Header Component, and more of my stylings are with Angular Material like buttons, sidenavs, forms, icons, spinners  and more.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Tehnologies

Front-end

    Angular CLI version 15.0.2.
    TypeScript
    HTML
    CSS
    SCSS
    Angular Material

Back-end

    Firebase service
   - Firestore Database 
   - Authentication 
   - Storage 


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
"# my-Angular-app" 
