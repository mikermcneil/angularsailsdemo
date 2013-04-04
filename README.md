# angularSailsDemo
### a Sails application with AngularJS

A simple example of using AngularJS with SailsJS.

Partials (inlined)
------------------

Partials can either be inlined into the main html page by dumping partials into the assets/templates folder,
your partial should look like this:

    <script type="text/ng-template" id="partial1.html">
      <h1>View 1</h1>
      <p>foo = {{foo}}</p>
    </script>

then include the line below in your main html body (this will concatenate and inject all the partials into the page):

    <%- assets.templateLibrary() %>

Your when statement in your angular routeprovider would look like this :

    when('/view1', {templateUrl: 'partial1.html'}).
          
where partial1.html would be the id specified in your partial

Partials (remote)
-----------------

Partials can also be served from the server by dumping your plain html partials into assets/templates/partials
(note though that if you include the assets.templateLibrary() line from above - the partials in this folder 
will still be injected into the page)

Your when statement in your angular routeprovider - in this case - would look like this :

    when('/view1', {templateUrl: '/template/find/partial1.html'}).

(this uses the api/controller/TemplateController.js to serve up a partial by name - it does not support 
partials in subdirectories though - I guess TemplateController.js can be made to allow for that)
