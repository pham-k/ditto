var conn = require('../service/database')

var model = {}

model.getAll = async () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM Student', (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                // console.log('Student-model.js: ')
                // console.log(rows)
                return resolve(rows)
            }
        })
    })
    
}

model.getById = (id) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM Student where id =?`, [id], (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                // console.log('Student-model.js: ')
                // console.log(rows)
                return resolve(rows)
            }
        })
    })
}

model.create = (name) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO Student SET ?`, {Name: name}, (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(rows.insertId)
            }
        })
    })
}

model.update = (id, name) => {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE Student SET Student.Name = ? WHERE Student.Id = ?`, [name, id], (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(rows)
            }
        })
    })
}

model.delete = (id) => {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM Student WHERE Student.Id = ?`, [id], (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(rows)
            }
        })
    })
}

module.exports = model

