const VerifyFieldFactory = require('../../helpers/VerifyFieldsHelper')

describe('Function Verify Fields', () => {

    const obj = {
        "price": 1234.765, 
        "quantity": 1236, 
        "factory": 3, 
        "description": "Product n° Eight. This a description about a register of a product."
    }

    test('all fields must be the right type of data from request post factory', () => {

        const result = VerifyFieldFactory.VerifyFieldFactory(obj)

        expect(result).not.toBeNull();
        expect(typeof(result)).toBe('object');

        expect(typeof(result.description)).toBe('boolean');
        expect(typeof(result.quantity)).toBe('boolean');
        expect(typeof(result.factory)).toBe('boolean');
        expect(typeof(result.price)).toBe('boolean');

    });

})

