import { expect } from "chai";
import { suite, test} from "mocha";
import { add } from "../src/calculator.js";

//TDD

suite('Suite 1',() => {
  test('should return 0 for empty string',(done) => { 
    expect(add("")).to.equal(0);
    done();
  })
});

suite('Suite 2',() => {
    test('should return number itself if single number is passed',(done) => { 
      expect(add("2")).to.equal(2);
      done();
    })

    test('add("2,2") should return 4', (done) => {
        expect(add("2,2")).to.be.equal(4);
        done();
    });

    test('add("2,4,6") should return 12', (done) => {
        expect(add("2,4,6")).to.be.equal(12);
        done();
    });

  });

  suite('Suite 3',() => {
    test('should handle new line between the numbers',(done) => {
        expect(add("2\n2,3")).to.equal(7);
        done();
    });

    test('should handle different delimiters: "//[delimiter]\n[numbers…]" ', (done) => {
        expect(add("//;\n2;3")).to.equal(5);
        done();
    });

});

suite('Suite 4', () => {
    test('add("2,-2") should throw an error for negative value', (done) => {
        expect(()=>add("2, -2")).to.throw("negative values not allowed: -2");
        done();
    });

    test('add("2,-2,-3") should throw an error for negative values and show all of them in exception message, seperated by commas ', (done) => {
        expect(()=>add("2, -2,-3")).to.throw("negative values not allowed: -2,-3");
        done();
    });
    
});

suite('Suite 5', () => { 

    test('Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2',(done)=>{
        expect(add("2,1001")).to.equal(2);
        done();
    })
});






    
