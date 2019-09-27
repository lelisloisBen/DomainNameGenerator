var pronoun = ['the','our','your','their','his','Her'];
var adj = ['violent', 'sexy','angry','sticky','frozen','greedy'];
var noun = ['coffee','racoon','sandwich','dragon','pistol','lettuce'];

document.body.querySelector('#domain').innerHTML = '';

// let price = Math.floor(Math.random() * (20 - 10) + 10 );
// let cents = Math.floor(Math.random() * (99 - 80) + 80 );
// console.log("$"+price+"."+cents);

let id = 0;

for (p in pronoun) {
    for (a in adj) {
        for (n in noun) {
            let price = Math.floor(Math.random() * (20 - 10) + 10 );
            let cents = Math.floor(Math.random() * (99 - 80) + 80 );
            let domain = pronoun[p] + adj[a] + noun[n];
            let fullPrice = price+"."+cents;
            id = id + 1;
            if (id % 13 === 0 ) {
                document.body.querySelector('#domain').innerHTML += "<li id='"+id+"' class='list-group-item list-group-item-warning'>" + domain + ".com <span style='font-size: 12px' class='badge badge-pill badge-danger'>Premium</span> <span class='float-right'><span style='text-decoration-line: line-through'>$" + (price +5) +"."+cents + "</span> &nbsp;$" + fullPrice + "&nbsp;<button data-toggle='modal' data-target='#exampleModal' class='btn btn-success'>Add to Cart</button></span></li>";
            } else {
                document.body.querySelector('#domain').innerHTML += "<li id='"+id+"' class='list-group-item'>" + domain + ".com <span class='float-right'>$" + fullPrice + "&nbsp;<button onclick='passValueModal(this)' data-toggle='modal' data-target='#exampleModal' class='btn btn-success'>Add to Cart</button></span></li>";
            }
        }
    }
}

function passValueModal(val) {
    console.log(val);
}

//list-group-item-warning

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
                document.body.querySelector('#domain').innerHTML += "<li class='list-group-item'>" + firstWord[f] + secondWord[s] + thirdWord[t] + ".com <span class='float-right'>hey</span><button>Add to Cart</button></li>";
            }
        }
    }

}