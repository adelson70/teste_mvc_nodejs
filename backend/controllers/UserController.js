// apenas teste
const users = [
    { id: 1, nome: 'Alice', idade: 25, email: 'alice@example.com' },
    { id: 2, nome: 'Bob', idade: 30, email: 'bob@example.com' },
    { id: 3, nome: 'Charlie', idade: 35, email: 'charlie@example.com' },
    { id: 4, nome: 'Diana', idade: 28, email: 'diana@example.com' },
    { id: 5, nome: 'Eve', idade: 22, email: 'eve@example.com' },
    { id: 6, nome: 'Frank', idade: 33, email: 'frank@example.com' },
    { id: 7, nome: 'Grace', idade: 27, email: 'grace@example.com' },
    { id: 8, nome: 'Hank', idade: 40, email: 'hank@example.com' },
    { id: 9, nome: 'Ivy', idade: 26, email: 'ivy@example.com' },
    { id: 10, nome: 'Jack', idade: 32, email: 'jack@example.com' }
];

const getUsers = (req, res) => {
    res.send(users);
}

module.exports = {
    getUsers
}