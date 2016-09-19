<img src="http://montanacodeschool.com/wp-content/uploads/2016/08/MCS_LOGO_v1-1.png" width="200" align="right"/>

##Pokemon Index

##Purpose
The purpose of this day project is to introduce students to Angular router.

##Directions

###Setup

* Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub.

* Create the files necessary to build your Angular app. Be sure to include index.html, app.js, mainCtrl.js, and mainServ.js. Organize these files in whatever folder structure you are most comfortable with.
cd
* Starting with your index.html, be sure to call in the Angular CDN, the UI-Router CDN, and all of your JavaScript files in script tags.

* Establish your Angular app by associating the index.html file with your ng-app and ng-controller directives. Use the ng-app directive to name your app. Use the ng-controller directive to associate your mainCtrl with your html code.

* Setup your app.js, mainCtrl.js, and mainServ.js using the angular.module method by associating the app name, controller name, and server name. In your controller, inject in the $scope object and the mainServ service file. In your service, inject in $http. The structure for each should look like this.

* Go ahead and test your controller by plugging in a test variable. Make sure that your test value shows up in your view when you run this on live-server or nodemon. If that worked, remove your test code.

###Build App

* The purpose of today's project is to create different views for a Single Page App. That being said, we need to set up your router and the HTML associated with each view, then we can pull data from the Pokemon API.

* In order to setup the router, let's start by plugging in `'ui.router'` into the empty brackets in our app.js. We also need to create a config module in our app.js. After the `angular.module("appName",['ui.router'])`, include `.config(function($urlRouterProvider, $stateProvider){});`. This is setup similarly to our controller and service files. Inside the curly brackets, we will define each of our views.

* Each view will be defined with a name, a url, a template, and a controller, if it requires a special controller. The $stateProvider object is used and references the state method when defining each view. My suggestion for building this app would be to make a landing page (home page), a page where you list out all of the Pokemon, and a page where you can display individual Pokemon.

* The syntax for defining our homepage is below. Note that when adding more views, you can string more states after the state definition is complete. Also, if your template is very simple, you may plug it in line to the definition using the template key.

```
$stateProvider
  .state("home", {
    url: "/",
    templateUrl: "./templates/home.html"
  })
  .state("about", {
    url: "/about",
    template: '<h3>About Me</h3>',
    controller: "aboutCtrl"
  })
```

* After you are done defining each state, use the $urlRouterProvider object to define the default state if no other url extensions are provided. You will use the otherwise method and plug in the default url. So in this case, if we want our app to default to the home page, we will use the following code.

`$urlRouterProvider.otherwise('/');`

* This is all we will need in our app.js file. The next thing that needs to be completed is creating the templates for each state. These templates do not have to be the standard index.html `html --> head --> body` style code. These templates represent exactly the code you want to place into your index.html when you are on a specific view. So for simplicity and to test your app, you can use code as simple as `<h3>Home</h3>`. After everything is connected appropriately, you can update these templates to be whatever you want them to be.

* Now that your templates have been created, lets connect them to your view. In the index.html file, if you want, you can create a nav bar with buttons to navigate across your different views. If you do decide to include a button, instead of href, you should use this syntax `ui-sref="home"`. Also, you will have to place the ui-view Angular directive in your html somewhere. This will be where your templates will be implanted. Place the directive as an html tag, like this `<ui-view></ui-view>`.

* In order to show a list of Pokemon, you will have to do a GET request using the Pokemon API. The get request should look something like this.

```
return $http({
  method: "GET",
  url: "http://pokeapi.co/api/v2/pokemon"
}).then(function(response){
  return response.data.results;
});
```

* The Pokemon API is a little different than some other API's that we have used in the past, so we will have to reference the url given to us to complete another GET request for individual Pokemon. The url will look like http://pokeapi.co/api/v2/pokemon/2/

* Take the information pulled from the get requests and display it on your views.

* So, you have been successful if you are able to see all of the Pokemon on a view, and on a different view, you should be able to see specifically selected Pokemon.

##Continued Practice

If you have more time, style your app or add some new functionality using this link to [Angular Docs](https://docs.angularjs.org/api).

##Copyright

(c) Montana Code School, 2016.
