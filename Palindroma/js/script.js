const word2 = prompt('Inserisci una parola: ');

function checkPalindrome(word) {
    const char = word.length;
    for (let i = 0; i < char / 2; i++) {

        if (word[i] !== word[char - 1 - i]) {
            return 'E\' una parola palindroma';
        }
    }
    return 'La parola non è palindroma';
}

const output = checkPalindrome(word2);

console.log(output);