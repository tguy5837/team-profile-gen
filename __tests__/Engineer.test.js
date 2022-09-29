const Employee = require('../lib/Employee')

jest.mock('../lib/Employee');

const Engineer = require('../lib/Engineer');

test('make sure engineer gets employee properties', () => {
    const engineer = new Engineer('John', '21', 'johndoe@example.com');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('21');
    expect(engineer.email).toBe('johndoe@example.com');
});

test('make sure github property is added', () => {
    const engineer = new Engineer('John', '21', 'johndoe@example.com', 'github');

    expect(engineer.github).toBe('github');
});

test('should return github from getGithub()', () => {
    const engineer = new Engineer('John', '21', 'johndoe@example.com', 'github');

    expect(engineer.getGithub()).toBe('github');
});

test('should return Engineer from getRole()', () => {
    const engineer = new Engineer('John', '21', 'johndoe@example.com', 'github');

    expect(engineer.getRole()).toBe('Engineer');
})