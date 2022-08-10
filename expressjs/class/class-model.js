var conn = require('../service/database')

var model = {}

model.getAll = async () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM Class', (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                // console.log('class-model.js: ')
                // console.log(rows)
                return resolve(rows)
            }
        })
    })
    
}

model.getById = (id) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM Class where id =?`, [id], (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                // console.log('class-model.js: ')
                // console.log(rows)
                return resolve(rows)
            }
        })
    })
}

model.create = (name) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO Class SET ?`, {Name: name}, (err, rows) => {
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
        conn.query(`UPDATE Class SET Class.Name = ? WHERE Class.Id = ?`, [name, id], (err, rows) => {
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
        conn.query(`DELETE FROM Class WHERE Class.Id = ?`, [id], (err, rows) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(rows)
            }
        })
    })
}

module.exports = model

