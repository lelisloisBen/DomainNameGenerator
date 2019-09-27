var pronoun = ['the','our','your','their','his','Her'];
var adj = ['violent', 'sexy','angry','sticky','frozen','greedy'];
var noun = ['coffee','racoon','sandwich','dragon','pistol','lettuce'];

document.body.querySelector('#domain').innerHTML = '';

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
                document.body.querySelector('#domain').innerHTML += "<li id='"+id+"' data-wasprice='"+(price +5+"."+cents)+"' data-price='"+fullPrice+"' data-domain='"+domain+"' class='list-group-item list-group-item-warning'>" + domain + ".com <span style='font-size: 12px' class='badge badge-pill badge-danger'>Premium</span> <span class='float-right'><span style='text-decoration-line: line-through'>$" + (price +5) +"."+cents + "</span> &nbsp;$" + fullPrice + "&nbsp;<button onclick='passValueModal("+id+")' data-toggle='modal' data-target='#exampleModal' class='btn btn-success'>Add to Cart</button></span></li>";
            } else {
                document.body.querySelector('#domain').innerHTML += "<li id='"+id+"' data-wasprice='' data-price='"+fullPrice+"' data-domain='"+domain+"' class='list-group-item'><span>" + domain + ".com </span><span class='float-right'>$<span>" + fullPrice + "</span>&nbsp;<button onclick='passValueModal("+id+")' data-toggle='modal' data-target='#exampleModal' class='btn btn-success'>Add to Cart</button></span></li>";
            }
        }
    }
}

function passValueModal(elemId) {
    let priceNumber = document.getElementById(elemId).dataset.price;
    let domainName = document.getElementById(elemId).dataset.domain;
    let oldPrice = document.getElementById(elemId).dataset.wasprice;
    console.log(priceNumber + " - " +domainName);

    document.body.querySelector('#name').innerHTML = `<h4>${domainName}.com</h4>`;
    document.body.querySelector('#price').innerHTML = `<h4 class="text-success">$${priceNumber}</h4>`;
    if (oldPrice === '') {
        document.body.querySelector('#wasPrice').innerHTML = '';
    } else {
        document.body.querySelector('#wasPrice').innerHTML = `<h4>was at: <span style='text-decoration-line: line-through'>$${oldPrice}</span></h4>`;
    }


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

    for (f in firstWord) {
        for (s in secondWord) {
            for (t in thirdWord) {
                let newDomain = firstWord[f] + secondWord[s] + thirdWord[t];
                let price = Math.floor(Math.random() * (20 - 10) + 10 );
                let cents = Math.floor(Math.random() * (99 - 80) + 80 );
                let fullPrice = price+"."+cents;

                id = id + 1;
                if (id % 13 === 0 ) {
                    document.body.querySelector('#domain').innerHTML += "<li id='"+id+"' data-wasprice='"+(price +5+"."+cents)+"' data-price='"+fullPrice+"' data-domain='"+newDomain+"' class='list-group-item list-group-item-warning'>" + newDomain + ".com <span style='font-size: 12px' class='badge badge-pill badge-danger'>Premium</span> <span class='float-right'><span style='text-decoration-line: line-through'>$" + (price +5) +"."+cents + "</span> &nbsp;$" + fullPrice + "&nbsp;<button onclick='passValueModal("+id+")' data-toggle='modal' data-target='#exampleModal' class='btn btn-success'>Add to Cart</button></span></li>";
                } else {
                    document.body.querySelector('#domain').innerHTML += "<li id='"+id+"' data-wasprice='' data-price='"+fullPrice+"' data-domain='"+newDomain+"' class='list-group-item'><span>" + newDomain + ".com </span><span class='float-right'>$<span>" + fullPrice + "</span>&nbsp;<button onclick='passValueModal("+id+")' data-toggle='modal' data-target='#exampleModal' class='btn btn-success'>Add to Cart</button></span></li>";
                }
            }
        }
    }

}