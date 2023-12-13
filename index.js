// Code your solution here
function findMatching(drivers, str){
    const toLowerCaseStr = str.toLowerCase()
    const theDriver = drivers.filter(function(position){
        return position.toLowerCase() === toLowerCaseStr
    })
    return theDriver
}

function fuzzyMatch(drivers, str){
    const theDriver = drivers.filter(function(position){
        return position.startsWith(str)
    })
    return theDriver
}

function matchName(drivers, name){
    const theDriver = drivers.filter(function(position){
        return position.name === name
    })
    return theDriver
}