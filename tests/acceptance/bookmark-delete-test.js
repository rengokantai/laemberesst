import { test } from 'qunit';
import moduleForAcceptance from 'laemberjsesst/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bookmark delete');

test('visiting /bookmark-delete', function(assert) {
  // visit('/bookmark-delete');

  // andThen(function() {
  //   assert.equal(currentURL(), '/bookmark-delete');
  // });

  let user = server.create('user',{

  });

  let bookmark = server.create('bookmark',{
    title:'test',
    userId:user.id
  });
  visit(`/bookmarks/edit/${bookmark.id}`);
  click('button#delete');
  andThen(function(){
    assert.equal(currentURL(),'/bookmarks');
  })
});
