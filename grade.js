var http = require("http");

function download(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            if (response.statusCode != 200) {
                reject('Invalid status code <' + response.statusCode + '>');
            }
            let rawData = '';
            response.on('data', (chunk) => { rawData += chunk; });
            response.on('end', () => resolve(rawData));            
        });
    });
}

function add_line() {
    const postData = "{'msg': 'Hello World!'}";
    return new Promise((resolve, reject) => {
        req = http.request('http://localhost:3000/add_line', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
              }
        }, (response) => {
            response.on('data', (chunk) => {
            });
            response.on('end', () => resolve(0));
        });
        req.write(postData);
        req.end();
    });
}

function numberOfLines(text) {
    return (text.match(/\<tr/g) || []).length;
}


async function doGrading() {
    try {
        let ocena = 2;
        var html = await download('http://localhost:3000');
        var lines = numberOfLines(html);
        await add_line();
        if (lines == 0) ocena += 1;
        var html = await download('http://localhost:3000');
        var lines = numberOfLines(html);
        if (lines == 1) ocena += 1;
        await add_line();
        var html = await download('http://localhost:3000');
        var lines = numberOfLines(html);
        if (lines == 2) ocena += 1;
        console.log("Ocena ", ocena)
    } catch (error) {
        console.error('ERROR:');
        console.error(error);
    }
}

doGrading();