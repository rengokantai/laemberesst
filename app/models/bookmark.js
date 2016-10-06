// import DS from 'ember-data';

// export default DS.Model.extend({
//   model(){
//     return this.get('store').findAll('bookmark');
//   },renderTemplate(){
//     this.render('about')
//   }
// });

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
export default DS.Model.extend({
  link:DS.attr('string'),
  title:DS.attr('string'),
  about:DS.attr('string'),
  public:DS.attr('boolean'),
  created:DS.attr('date',{
    defaultValue(){
      return new Date();
    }
  }),
  user:DS.belongsTo('user')
})
