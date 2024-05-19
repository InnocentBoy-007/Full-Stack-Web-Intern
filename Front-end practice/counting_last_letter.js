//gets the element by class name
const word = document.getElementsByClassName("letter");

const counting_letters_last_word = function (word) {
    const splitted_word = word.split(" ");
    console.log(splitted_word);
    const last_word = splitted_word[splitted_word.length - 1];
    return {
        length: last_word.length,
        word: last_word,
    };
}

const control_function = function () {
    for (let i = 0; i < word.length; i++) {
        const words = word[i];
        console.log(counting_letters_last_word(words.textContent));
    }
}

control_function();
