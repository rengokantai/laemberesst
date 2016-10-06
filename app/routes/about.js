import Ember from 'ember';
/*let bookmarks =[{
  id:1,
  title:'js',
  link:'yd.me',
  about:'test'
}]
*/
export default Ember.Route.extend({
  model(){
    return this.get('store').findRecord('bookmark',1);
  }
});
