#laemberjsesst
###5 Ember.js component
name must contain dash

###6 Ember.js helper
```
ember g helper bookmark-title
```
the param must be in bracket.
```
//export function bookmarkTitle(title,about/*, hash*/) {   incorrect.
export function bookmarkTitle([title,about]/*, hash*/) {
```
###7 Ember.js and the server
```
ember install ember-cli-mirage
```
then create a folder called `mirage` under project root,and create model
```
ember g mirage-model user
```
then
```
ember g mirage-factory user
```

##4. Ember.js Routes
###1 Explore
```
ember g route bookmarks
```
###2 Createa nested
```
ember g route bookmarks/new
```
index route = no route suffix.
```
ember g route bookmarks/index
```
we can direct visit index by omitting it
###3 Dynamic routes
```
ember g route bookmarks/edit --path /edit/:bookmark_id
```
create 404
```
ember g route page-not-found --path /*wildcard
```
##5. Ember.js Models
###2 Trans
```
ember g model user username:string email:string firstName:string lastName:string avatar:string isAdmin:boolean created:date
```
###3 Find a record
```
return this.get('store').findRecord('bookmark',1);
```
###4 Filter for multiple record
```
ember g route users/list-active
```
query
```
return this.get('store').query('user',{isAdmin:false});
```

##6 Ember.js Temp
##7 Ember.js Comp
###1 Exp
[demo site](http://indexiatech.github.io/ember-components)
```
ember g component users-list
```
##9 Application Configuration
###1 Configure an Ember.js 
uncomment
line 23-line 27
then we can import using
```
import ENV from 'laemberjsesst/config/environment'
```

###2 Build an app
deploy using surge.sh
```
ember build (--environment=development)
```
npm install -g surge
```
then
```
cd dist
cp index.html 200.html
surge
```

##10. Testing
###1 Test
acceptance-verying the reality of app  
unit-test isolated units of code  
integration-in between unit and accepance tests

```
ember test --server
```

###2 Acceptance tests
```
ember g acceptance-test bookmark-delete
```
