import Ember from 'ember';

export default Ember.Component.extend({
 bookmark:null,
 router:Ember.inject.service('-routing'),
  actions:{,
    save(bookmark){Ember.Logger.info('bookmark');
bookmark.save().then((value)=>{
  Ember.Logger.info(value);
  this.get('router').transitionTo('bookmarks');
}).catch(()=>Ember.Logger.info('saved')

)

  },
    cancel(){},
    delete(bookmark){
      bookmark.destroyRecord();
      this.get('router').transitionTo('bookmarks');
    }
  }
});
