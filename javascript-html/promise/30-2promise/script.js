function makeAllCaps(wordArr) {
    return new Promise((resolve, reject) => {
        const isString = wordArr.find(value => !(/^[a-z]+$/i.test(value)));
        if (!isString) {
            wordArr = wordArr.map(value => value.toUpperCase());
            resolve({ action: 'success', data: wordArr })
        } else {
            reject({ action: 'error', data: 'the array contains non strings' })
        }
    });
}

function sortWords(wordArr) {
    return new Promise((resolve, reject) => {
        const isString = wordArr.find(value => !(/^[a-z]+$/i.test(value)));
        if (!isString) {
            wordArr = wordArr.sort();
            resolve({ action: 'success', data: wordArr })
        } else {
            reject({ action: 'error', data: 'the array contains non strings' })
        }
    });
}

makeAllCaps(['sss', 'fSgr']).then((data => {
    console.log(data);
})).catch(error => { console.log(error); })

sortWords(['saleh', 'omri', 'wajde']).then((data => {
    console.log(data);
})).catch(error => { console.log(error); })