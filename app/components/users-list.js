import Ember from 'ember';

const UserListComponent = Ember.Component.extend({
  imgClass:"avatar"
});


UserListComponent.reopenClass({
  positionParams:['avatarUrl','email']
})

export default UserListComponent;
