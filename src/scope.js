// global scope
const userName = 'Tyler'
console.log(userName)

function scopeCheck() {
    const userName = 'Cooper'

    console.log('inside scopeCheck', userName)

    for (let i = 0; i < 3; i++) {

        console.log('block scope', userName)
    }
}

scopeCheck()

console.log(userName)