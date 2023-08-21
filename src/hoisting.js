console.log('hoisting.js')

const userName = 'Tyler'
chocolate()
// printNameExpression()
printNameArrow()

// function declaration gets hoisted to the top when we run the file
function chocolate() {
    console.log('chocolate', userName)
}

// function expressions / arrow functions do NOT get hoisted so you can't access them before they're defined
const printNameExpression = function() {
    console.log('printNameExpression', userName)
}

const printNameArrow = () => {
    console.log('printNameArrow', userName)
}


