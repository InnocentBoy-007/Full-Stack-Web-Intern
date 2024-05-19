const letter = document.getElementById("letter");
const button = document.getElementById("button");
const result = document.getElementById("result");

const counting_letter = function () {
    const sentence_splitter = letter.textContent.split(' ');

    const last_word = sentence_splitter[sentence_splitter.length - 1];

    const counting_last_word = last_word.split('');

    result.innerHTML = `The length of the last word in the given sentence is ${counting_last_word.length} and it is "${last_word}".`;
};

button.onclick = () => {
    console.log(counting_letter());
}
