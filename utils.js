function isEmpty (data) {
	if(data === undefined || !Object.keys(data).length ){
		return true
	}
	return false
}

function toPercent (number) {
	return (number.toFixed(2) * 100).toString() + '%'
}

function isEmptyString(string) {
    return (string.length === 0 || !string.trim());
}

module.exports = { isEmpty, toPercent, isEmptyString }

