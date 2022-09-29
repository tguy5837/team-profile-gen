const Employee = require('../lib/Employee')

jest.mock('../lib/Employee');

const Engineer = require('../lib/Engineer');

test('make sure new employee passes properties and methods to engineer', () => {
    const engineer = new Engineer('github');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('21');
    expect(engineer.email).toBe('johndoe@example.com');
});

