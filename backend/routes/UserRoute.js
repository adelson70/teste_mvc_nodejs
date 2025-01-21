const express = require('express')
const router = express.Router()

const users = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 30 },
    { id: 3, nome: 'Charlie', idade: 35 },
    { id: 4, nome: 'David', idade: 28 },
    { id: 5, nome: 'Eve', idade: 22 },
    { id: 6, nome: 'Frank', idade: 33 },
    { id: 7, nome: 'Grace', idade: 27 },
    { id: 8, nome: 'Hank', idade: 31 },
    { id: 9, nome: 'Ivy', idade: 26 },
    { id: 10, nome: 'Jack', idade: 29 }
]

router.get('/', (req, res) => {
    res.json(users)
})

module.exports = router