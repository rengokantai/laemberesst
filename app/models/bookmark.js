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

export default Model.extend({
  link:attr('string'),
  title:attr('string'),
  about:attr('string'),
  public:attr('boolean'),
  created:attr('date',{
    defaultValue(){
      return new Date();
    }
  })
})
