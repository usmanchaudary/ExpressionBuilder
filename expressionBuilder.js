var obj = [
    {
        "name": {
            "myName": "usman"
        },
        "id": "1",
        "addr": "23"
    },
    {
        "name": {
            "myName": "shakir"
        },
        "id": "2",
        "addr": "24"
    },
    {
        "name": {
            "myName": "hafiz"
        },
        "id": "3",
        "addr": "25"
    },
    {
        "name": {
            "myName": "shakir"
        },
        "id": "4",
        "addr": "26"
    },
    {
        "name": {
            "myName": "asd"
        },
        "id": "5",
        "addr": "27"
    },
];
var string = "mera naam {name.myName} or identity {id *1 +2} ha or address {addr}";
String.prototype.insert = function (index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substr(index);
    }
    return string + this;
};

obj.forEach(item => {
    var variable = "";
    let nextStartingSearchIndex = 0;
    let nextEndingSearchIndex = 0;
    var index = 0;
    var tempstr = string;
    for (const character of string) {
        if (character === '{') {
            let startingIndex = string.indexOf('{', nextStartingSearchIndex > 0 ? nextStartingSearchIndex + 1 : 0);
            let endingIndex = string.indexOf('}', nextEndingSearchIndex > 0 ? nextEndingSearchIndex + 1 : 0);
            var expression = "item." + string.substring(startingIndex + 1, endingIndex);

            nextStartingSearchIndex = startingIndex;
            nextEndingSearchIndex = endingIndex;
            let evaluatedExpression = eval(expression);

            tempstr = tempstr.replace('{'+string.substring(startingIndex + 1, endingIndex)+'}',evaluatedExpression);
        }
        index++;
    }
    console.log(tempstr);
});
//console.log(modulus(3));


