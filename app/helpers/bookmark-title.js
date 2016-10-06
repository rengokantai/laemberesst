import Ember from 'ember';

export function bookmarkTitle([title,about]/*, hash*/) {
  let res=title;
  if(about!=null){
    res+='-'+about;
  }
  return res;
}

export default Ember.Helper.helper(bookmarkTitle);
