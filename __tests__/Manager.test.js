const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

const Manager = require('../lib/Manager');

test('check if employee properties are passed to manager', () => {
    const manager = new Manager()

    expect(manager.name).toBe('John');
    expect(manager.id).toBe('21');
    expect(manager.email).toBe('johndoe@example.com');
});

test('make sure officeNumber property is added to manager', () => {
    const manager = new Manager('John', '21', 'johndoe@example.com', '111-111-1111');

    expect(manager.officeNumber).toBe('111-111-1111')
});

test('should return Manager from getRole()', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});

