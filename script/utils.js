const getNumber = (max, min) => {
    return(Math.floor(Math.random()*(max-min)+min))
}
const getColor = () => {
    return `backgroundColor: ${getNumber(256),getNumber(256),getNumber(256)}`
}