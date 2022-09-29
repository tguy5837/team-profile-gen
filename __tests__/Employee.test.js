const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('John', '21', 'johndoe@example.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('21');
    expect(employee.email).toBe('johndoe@example.com');
});

test('checks if name is returned from getName()', () => {
    const employee = new Employee('John', '21', 'johndoe@example.com')

    expect(employee.getName()).toBe('John');
});

test('should return 21 from getId()', () => {
    const employee = new Employee('John', '21', 'johndoe@example.com');

    expect(employee.getId()).toBe('21');
});

test('should return johndoe@example.com from getEmail()', () => {
    const employee = new Employee('John', '21', 'johndoe@example.com');

    expect(employee.getEmail()).toBe('johndoe@example.com')
});

test('should return "Employee" from getRole()', () => {
    const employee = new Employee('John', '21', 'johndoe@example.com');

    expect(employee.getRole()).toBe('Employee');
})