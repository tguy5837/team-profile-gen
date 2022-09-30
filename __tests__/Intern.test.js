const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

const Intern = require('../lib/Intern');

test('for Intern object creation', () => {
    const intern = new Intern('John', '21', 'johndoe@example.com', 'UNC');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('21');
    expect(intern.email).toBe('johndoe@example.com');
    expect(intern.school).toBe('UNC');
});

test('to see if UNC is returned from getSchool()', () => {
    const intern = new Intern('John', '21', 'johndoe@example.com', 'UNC');

    expect(intern.getSchool()).toBe('UNC');
});

test('to see if Intern is returned from getRole()', () => {
    const intern = new Intern('John', '21', 'johndoe@example.com', 'UNC');

    expect(intern.getRole()).toBe('Intern');
})