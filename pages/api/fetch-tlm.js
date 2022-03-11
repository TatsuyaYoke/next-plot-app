import sqlite3 from 'sqlite3'

const toObjectArray = (records) => {
    const objectArray = {}
    const keys = Object.keys(records[0])
    keys.forEach(key => {
      objectArray[key] = []
    })
    records.forEach(record => {
      keys.forEach(key => {
        objectArray[key].push(record[key])
      })
    })
    return objectArray
}

const FetchTlm = async (_req, res) => {
    const readDbSyns = async (path) => {
        return new Promise((resolve, _reject) => {
            const db = new sqlite3.Database(path)
            db.serialize(() => {
                db.all('select DATE, PCDU_BAT_VOLTAGE from test', (err, records) => {
                    const data = toObjectArray(records)
                    resolve(data)
                })
            })   
        })
    }
    
    const data = await readDbSyns('./db/test.db')
    res.status(200).json(data)
}

export default FetchTlm
  