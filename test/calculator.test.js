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




    
