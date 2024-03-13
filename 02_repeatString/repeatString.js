const repeatString = function(string, nrOfRepetitions) {
    if (nrOfRepetitions < 0) 
        return 'ERROR';
    
    let result = '';
    for (let i = 0; i < nrOfRepetitions; i++)
        result += string;

    return result;
};

// Do not edit below this line
module.exports = repeatString;
