function devanagari() {
document.getElementById('scriptname').innerHTML = 'Devanagari';
//consonants
document.getElementById('switch-ka').innerHTML = 'क';
document.getElementById('switch-kha').innerHTML = 'ख';
document.getElementById('switch-ga').innerHTML = 'ग';
document.getElementById('switch-gha').innerHTML = 'घ';
document.getElementById('switch-ṅa').innerHTML = 'ङ';
document.getElementById('switch-ha').innerHTML = 'ह';
document.getElementById('switch-ca').innerHTML = 'च';
document.getElementById('switch-cha').innerHTML = 'छ';
document.getElementById('switch-ja').innerHTML = 'ज';
document.getElementById('switch-jha').innerHTML = 'झ';
document.getElementById('switch-ña').innerHTML = 'ञ';
document.getElementById('switch-ya').innerHTML = 'य';
document.getElementById('switch-śa').innerHTML = 'श';
document.getElementById('switch-ṭa').innerHTML = 'ट';
document.getElementById('switch-ṭha').innerHTML = 'ठ';
document.getElementById('switch-ḍa').innerHTML = 'ड';
document.getElementById('switch-ḍha').innerHTML = 'ढ';
document.getElementById('switch-ṇa').innerHTML = 'ण';
document.getElementById('switch-ra').innerHTML = 'र';
document.getElementById('switch-ṣa').innerHTML = 'ष';
document.getElementById('switch-ta').innerHTML = 'त';
document.getElementById('switch-tha').innerHTML = 'थ';
document.getElementById('switch-da').innerHTML = 'द';
document.getElementById('switch-dha').innerHTML = 'ध';
document.getElementById('switch-na').innerHTML = 'न';
document.getElementById('switch-la').innerHTML = 'ल';
document.getElementById('switch-sa').innerHTML = 'स';
document.getElementById('switch-pa').innerHTML = 'प';
document.getElementById('switch-pha').innerHTML = 'फ';
document.getElementById('switch-ba').innerHTML = 'ब';
document.getElementById('switch-bha').innerHTML = 'भ';
document.getElementById('switch-ma').innerHTML = 'म';
document.getElementById('switch-va').innerHTML = 'व';
document.getElementById('ce').innerHTML = `
`;
//vowels
document.getElementById('switch-Xa').innerHTML = 'अ';
document.getElementById('switch-a').innerHTML = '';
document.getElementById('a-trans').innerHTML = 'a';
document.getElementById('switch-Xā').innerHTML = 'आ';
document.getElementById('switch-ā').innerHTML = 'ा';
document.getElementById('ā-trans').innerHTML = 'ā';
document.getElementById('switch-Xi').innerHTML = 'इ';
document.getElementById('switch-i').innerHTML = 'ि';
document.getElementById('switch-Xī').innerHTML = 'ई';
document.getElementById('switch-ī').innerHTML = 'ी';
document.getElementById('switch-Xu').innerHTML = 'उ';
document.getElementById('switch-u').innerHTML = 'ु';
document.getElementById('switch-Xū').innerHTML = 'ऊ';
document.getElementById('switch-ū').innerHTML = 'ू';
document.getElementById('switch-Xṛ').innerHTML = 'ऋ';
document.getElementById('switch-ṛ').innerHTML = 'ृ';
document.getElementById('switch-Xṝ').innerHTML = 'ॠ';
document.getElementById('switch-ṝ').innerHTML = 'ॄ';
document.getElementById('switch-Xḷ').innerHTML = 'ऌ';
document.getElementById('switch-ḷ').innerHTML = 'ॢ';
document.getElementById('switch-Xḹ').innerHTML = 'ॡ';
document.getElementById('switch-ḹ').innerHTML = 'ॣ';
document.getElementById('switch-Xe').innerHTML = 'ए';
document.getElementById('switch-e').innerHTML = 'े';
document.getElementById('switch-Xai').innerHTML = 'ऐ';
document.getElementById('switch-ai').innerHTML = 'ै';
document.getElementById('switch-Xo').innerHTML = 'ओ';
document.getElementById('switch-o').innerHTML = 'ो';
document.getElementById('switch-Xau').innerHTML = 'औ';
document.getElementById('switch-au').innerHTML = 'ौ';
document.getElementById('ve').innerHTML = `
`;
//various signs
document.getElementById('switch-candrabindu').innerHTML = 'ँ';
document.getElementById('switch-anusvara').innerHTML = 'ं';
document.getElementById('switch-visarga').innerHTML = 'ः';
document.getElementById('visarga-name').innerHTML = 'visarga';
document.getElementById('switch-virama').innerHTML = '्';
document.getElementById('switch-om').innerHTML = 'ॐ';
document.getElementById('switch-danda').innerHTML = '।';
document.getElementById('switch-doubledanda').innerHTML = '॥';
document.getElementById('vse').innerHTML = `
`;
//numerals
document.getElementById('n').innerHTML = `
<h2>Numerals</h2>
<table>
<thead>
<tr>
    <th>0</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>6</th>
    <th>7</th>
    <th>8</th>
    <th>9</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td id="switch-0">०</td>
    <td id="switch-1">१</td>
    <td id="switch-2">२</td>
    <td id="switch-3">३</td>
    <td id="switch-4">४</td>
    <td id="switch-5">५</td>
    <td id="switch-6">६</td>
    <td id="switch-7">७</td>
    <td id="switch-8">८</td>
    <td id="switch-9">९</td>
  </tr>
</tbody>
</table>
`;
//link
document.getElementById('link').innerHTML = `
full list: <a href="https://www.unicode.org/charts/PDF/U0900.pdf" target="_blank">https://www.unicode.org/charts/PDF/U0900.pdf</a>
`;
//others
document.getElementById('output').value += '\r\n';
}
