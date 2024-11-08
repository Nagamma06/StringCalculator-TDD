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


    
