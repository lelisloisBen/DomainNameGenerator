var pronoun = ['the','our','your','their','his','Her'];
var adj = ['violent', 'sexy','angry','sticky','frozen','greedy'];
var noun = ['coffee','racoon','sandwich','dragon','pistol','lettuce'];

document.body.querySelector('#domain').innerHTML = '';

for (p in pronoun) {
    for (a in adj) {
        for (n in noun) {
            document.body.querySelector('#domain').innerHTML += "<li class='list-group-item'>" + pronoun[p] + adj[a] + noun[n] + ".com </li>";
        }
    }
}

function moreWords() {
    document.body.querySelector('#domain').innerHTML = '';

    let firstWord = ['the','our'];
    let secondWord = ['grumpy', 'hilarious'];
    let thirdWord = ['turtle','panda'];

    let first = document.body.querySelector('#first').value;
    let second = document.body.querySelector('#second').value;
    let third = document.body.querySelector('#third').value;

    firstWord.unshift(first);
    secondWord.unshift(second);
    thirdWord.unshift(third);

    console.log(firstWord + ' ' + secondWord + ' ' + thirdWord);

    for (f in firstWord) {
        for (s in secondWord) {
            for (t in thirdWord) {
                // console.log(firstWord[f]+secondWord[s]+thirdWord[t]);
                document.body.querySelector('#domain').innerHTML += "<li class='list-group-item'>" + firstWord[f] + secondWord[s] + thirdWord[t] + ".com </li>";
            }
        }
    }

}