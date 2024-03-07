//-- NPM Packages
import {base, en, en_CA, en_US, Faker} from '@faker-js/faker';

/**
 * The fake data generator.
 */
const fake = new Faker({
    locale: [en_CA, en_US, en, base]
});

describe('A dummy test', () => {
    beforeAll(() => {
        fake.seed(jest.getSeed());
    });
    it('should pass', () => {});
});
