// let strArr = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
let strArr = ["abc", "a,b,c,d,e,f,g,hi,j,kl,m,n,o"];
// let strArr = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]
function WordSplit() {
    // First Element, with single string
    let compareWord = strArr[0]
    // Second Element, with single string
    let strDic = strArr[1]

    // Array of split strings
    let singleStr = strDic.split(',')
    // Hold Answers
    let answerWords = ""

    singleStr.map((firstWord) => {

        let splitArr = compareWord.split(firstWord)

        if (splitArr.length > 0) {

            splitArr.map((wrd) => {

                let finalWord = firstWord + wrd
                let revWord = [finalWord].reverse().toString()

                if (finalWord === compareWord || revWord === compareWord) {
                    // console.log(firstWord, word, 'winner')
                    answerWords = "" + firstWord + "," + wrd + ""
                } else {
                    return 'Not Possible'
                }

            })
        }

    })

    return answerWords
}


// WordSplit();
console.log(WordSplit());