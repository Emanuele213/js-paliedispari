const word = prompt('Inserisci una parola: ');

function checkPalindrome(word) {
    const char = word.length;
    for (let i = 0; i < char / 2; i++) {

        if (word[i] !== word[char - 1 - i]) {
            return 'La parola non è palindroma';
        }
    }
    return 'La parola è palindroma';
}

const output = checkPalindrome(word);

console.log(output);