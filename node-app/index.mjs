import fs from 'fs'

fs.appendFile ('my-File.txt','Файл создан Node.js', (err) => {if (err) throw err
    console.log('Файл сохранен')
})
setTimeout(()=> console.log('Конец'),30000)