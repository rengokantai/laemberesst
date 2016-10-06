import Ember from 'ember';

const UserListComponent = Ember.Component.extend({
  imgClass:"avatar",
  click(){
    Ember.Logger.info('test');
    return false;
  }
});


UserListComponent.reopenClass({
  positionParams:['avatarUrl','email']
})

export default UserListComponent;
