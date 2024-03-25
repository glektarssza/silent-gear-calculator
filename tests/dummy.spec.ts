//-- NPM Packages
import {expect} from 'chai';

//-- Project Code
import {hello} from '../src/ts/dummy';

describe('A dummy test', () => {
    it('should pass', () => {
        //-- Given

        //-- When
        const r = hello();

        //-- Then
        expect(r).to.equal('Hello world!');
    });
});
