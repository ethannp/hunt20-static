let answers = {
    'hp': '8fae470ddaabbf2f3990a8a888dc2dbc2443dfcd',
    'mr': '0e471b89df2d0c8b5e2afd478ff072d580819483',
    'lotr': '795563c85abf0b914e5e2e2d1cf664d703b5793f',
    'nf': '03731cad13f4cf7b59703c77529381cdec1632e5',
    'ti': '59644932e34e0a640d4fcb1925ea3e5df1bc4884',
    'mp': '0b9405ae6e1ec14c4559f6636e849fb2d44657b3',
    'soc': 'deef0d33bb22986ba3e268c1c34360967472db43',
    'hg': '1f84ada6772cd2e4279dba48447a05a14ca5c02f',
    'd': '690665db72a6ecd191847abe6604ffdab9b3df1c',
    'mpj': '68440c45ea34b60606059be54fe91a033db2fa6c',
    'm': '9368b015206c89a3f82d1e133db71938a89f4035',
    'hc': '8071339f47b610806edea4d3f519a6fc37dac476',
    'tl': 'a0f2aec105ea9a4ab95e0b5aebc0c43a8d349c4f',
    'is': '5d0217e90a408e0ccb06d74394ad508e40965ea4',
    'fat': '35b16edee54e8cd9c9e70eda3cffe021d99b1b97',
    'gt': '3e88fe66c6cfa645b2eb64cffaf4d6589a9a66d0',
    'tlp': 'c8e19f0da3958b45b1eb2b4adedb2f5f61d67fea',
    'ud': '88a259e53a0c7746eb3549e011d2413825e19ba3',
    'wtwta': '6a4400c700b0fb428fecc9b1013c2afb023c0e39',
    'mjm': '0d24a3a106ccdd0e12e22e2b6d8edc2df16b95c0',
}

function check(submit, puzzle) {
    let cleaned = submit.toUpperCase().replaceAll(/[^A-Z]+/g, "");
    if (cleaned == "") {
        return;
    }
    if (answers[puzzle] == hash(cleaned)) {
        if (puzzle == "mjm") {
            window.location.href = "../victory.html";
        }
        document.getElementById("solved").hidden = false;
        document.getElementById("unsolved").hidden = true;
        document.getElementById("id_answer").value = "";
        document.getElementById("solve-answer").innerHTML = cleaned;
        document.getElementById("guess").hidden = true;
    } else if (puzzle == "fat" && "0dcc950aabb1420b1b2c8c77c0b5297fbd0a8aa0" == hash(cleaned)) {
        document.getElementById("special").hidden = false;
        document.getElementById("unsolved").hidden = true;
        document.getElementById("id_answer").value = "";
        document.getElementById("solve-answer").innerHTML = cleaned;
    } else {
        document.getElementById("solved").hidden = true;
        document.getElementById("unsolved").hidden = false;
        document.getElementById("id_answer").value = "";
    }
}

document.getElementById("id_answer").addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        e.preventDefault();
        document.getElementById("submit-btn").click()
    }
})

function hash(msg) {
    msg = msg.toUpperCase().replaceAll(/[^A-Z]+/g, "");

    function rotate_left(n, s) {
        var t4 = (n << s) | (n >>> (32 - s));
        return t4;
    };

    function lsb_hex(val) {
        var str = '';
        var i;
        var vh;
        var vl;
        for (i = 0; i <= 6; i += 2) {
            vh = (val >>> (i * 4 + 4)) & 0x0f;
            vl = (val >>> (i * 4)) & 0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };

    function cvt_hex(val) {
        var str = '';
        var i;
        var v;
        for (i = 7; i >= 0; i--) {
            v = (val >>> (i * 4)) & 0x0f;
            str += v.toString(16);
        }
        return str;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, '\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for (i = 0; i < msg_len - 3; i += 4) {
        j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 |
            msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
        word_array.push(j);
    }
    switch (msg_len % 4) {
        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;
            break;
        case 2:
            i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;
            break;
        case 3:
            i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;
            break;
    }
    word_array.push(i);
    while ((word_array.length % 16) != 14) word_array.push(0);
    word_array.push(msg_len >>> 29);
    word_array.push((msg_len << 3) & 0x0ffffffff);
    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
        for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
        for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for (i = 0; i <= 19; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 20; i <= 39; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 40; i <= 59; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 60; i <= 79; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return temp.toLowerCase();
}