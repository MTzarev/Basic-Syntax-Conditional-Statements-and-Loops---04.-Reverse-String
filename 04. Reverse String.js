function reverseString (word){
    let reverseWord = ""
    for (let i = word.length - 1; i >= 0; i--) {
    reverseWord +=word[i]
        
    }

    console.log(reverseWord);
}
reverseString("Hello")
