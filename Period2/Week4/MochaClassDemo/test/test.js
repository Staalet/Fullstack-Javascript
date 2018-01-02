var assert = require("assert"); //Use Nodes built in assertion libraty
//Mocha without sugar or milk. ☕️
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});