const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err,res) => {
            if(err) {
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}


// 
const start = async() => {
    try {
        const first = await getText('./tmp.txt');
        console.log(first);
    }
    catch (error) {
        console.log(error)
    }
}

start()

// getText('./tmp.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
