const getKeyByValue = (object, value) => {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
            return prop;
        }
    }
}
export default getKeyByValue