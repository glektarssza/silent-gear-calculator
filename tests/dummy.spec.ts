import {hello} from '../src/ts/dummy';

describe('A dummy test', () => {
    it('should pass', () => {
        //-- Given

        //-- When
        const r = hello();

        //-- Then
        expect(r).toEqual('Hello world!');
    });
});
