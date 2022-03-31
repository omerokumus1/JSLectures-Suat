// string replace

/*  TODO:
        1. Find the string's starting and ending indices, that will be replaced with
        2. Take characters of the original string until staring index
        3. Add replacement string
        4. Start with ending index and take all characters to the end

 */

let str = "Java programming is fun"
let toBeReplaced = "programming"
let replaceWith = "coding"

let replace = (str, toBeReplaced, replaceWith) => {
    let indices = findIndices(str, toBeReplaced) // 2 elemanlı array döndürür: 0. index -> startIndex, 1. index -> end index
    let startIndex = indices[0]
    let endIndex = indices[1]
    return str.substring(0, startIndex) + replaceWith + str.substring(endIndex)
}

let findIndices = (str, toBeReplaced) => {
    let indices = []
    for (let i = 0; i < str.length - toBeReplaced.length; i++) {
        if (str.charAt(i) === toBeReplaced.charAt(0)){
            let substr = str.substr(i, toBeReplaced.length)
            if (substr === toBeReplaced){
                indices.push(i)
                indices.push(i+toBeReplaced.length)
            }
        }
    }

    return indices;
}
console.log(findIndices(str, toBeReplaced))
console.log(replace(str, toBeReplaced, replaceWith))