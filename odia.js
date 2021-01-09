function odia() {
document.getElementById('scriptname').innerHTML = 'Odia';
//consonants
document.getElementById('switch-ka').innerHTML = 'କ';
document.getElementById('switch-kha').innerHTML = 'ଖ';
document.getElementById('switch-ga').innerHTML = 'ଗ';
document.getElementById('switch-gha').innerHTML = 'ଘ';
document.getElementById('switch-ṅa').innerHTML = 'ଙ';
document.getElementById('switch-ha').innerHTML = 'ହ';
document.getElementById('switch-ca').innerHTML = 'ଚ';
document.getElementById('switch-cha').innerHTML = 'ଛ';
document.getElementById('switch-ja').innerHTML = 'ଜ';
document.getElementById('switch-jha').innerHTML = 'ଝ';
document.getElementById('switch-ña').innerHTML = 'ଞ';
document.getElementById('switch-ya').innerHTML = 'ଯ';
document.getElementById('switch-śa').innerHTML = 'ଶ';
document.getElementById('switch-ṭa').innerHTML = 'ଟ';
document.getElementById('switch-ṭha').innerHTML = 'ଠ';
document.getElementById('switch-ḍa').innerHTML = 'ଡ';
document.getElementById('switch-ḍha').innerHTML = 'ଢ';
document.getElementById('switch-ṇa').innerHTML = 'ଣ';
document.getElementById('switch-ra').innerHTML = 'ର';
document.getElementById('switch-ṣa').innerHTML = 'ଷ';
document.getElementById('switch-ta').innerHTML = 'ତ';
document.getElementById('switch-tha').innerHTML = 'ଥ';
document.getElementById('switch-da').innerHTML = 'ଦ';
document.getElementById('switch-dha').innerHTML = 'ଧ';
document.getElementById('switch-na').innerHTML = 'ନ';
document.getElementById('switch-la').innerHTML = 'ଲ';
document.getElementById('switch-sa').innerHTML = 'ସ';
document.getElementById('switch-pa').innerHTML = 'ପ';
document.getElementById('switch-pha').innerHTML = 'ଫ';
document.getElementById('switch-ba').innerHTML = 'ବ';
document.getElementById('switch-bha').innerHTML = 'ଭ';
document.getElementById('switch-ma').innerHTML = 'ମ';
document.getElementById('switch-va').innerHTML = 'ୱ';
document.getElementById('ce').innerHTML = `
`;
//vowels
document.getElementById('switch-Xa').innerHTML = 'ଅ';
document.getElementById('switch-a').innerHTML = '';
document.getElementById('a-trans').innerHTML = 'a/ɔ/';
document.getElementById('switch-Xā').innerHTML = 'ଆ';
document.getElementById('switch-ā').innerHTML = 'ା';
document.getElementById('ā-trans').innerHTML = 'ā/a/';
document.getElementById('switch-Xi').innerHTML = 'ଇ';
document.getElementById('switch-i').innerHTML = 'ି';
document.getElementById('switch-Xī').innerHTML = 'ଈ';
document.getElementById('switch-ī').innerHTML = 'ୀ';
document.getElementById('switch-Xu').innerHTML = 'ଉ';
document.getElementById('switch-u').innerHTML = 'ୁ';
document.getElementById('switch-Xū').innerHTML = 'ଊ';
document.getElementById('switch-ū').innerHTML = 'ୂ';
document.getElementById('switch-Xṛ').innerHTML = 'ଋ';
document.getElementById('switch-ṛ').innerHTML = 'ୃ';
document.getElementById('switch-Xṝ').innerHTML = 'ୠ';
document.getElementById('switch-ṝ').innerHTML = 'ୄ';
document.getElementById('switch-Xḷ').innerHTML = 'ଌ';
document.getElementById('switch-ḷ').innerHTML = 'ୢ';
document.getElementById('switch-Xḹ').innerHTML = 'ୡ';
document.getElementById('switch-ḹ').innerHTML = 'ୣ';
document.getElementById('switch-Xe').innerHTML = 'ଏ';
document.getElementById('switch-e').innerHTML = 'େ';
document.getElementById('switch-Xai').innerHTML = 'ଐ';
document.getElementById('switch-ai').innerHTML = 'ୈ';
document.getElementById('switch-Xo').innerHTML = 'ଓ';
document.getElementById('switch-o').innerHTML = 'ୋ';
document.getElementById('switch-Xau').innerHTML = 'ଔ';
document.getElementById('switch-au').innerHTML = 'ୌ';
document.getElementById('ve').innerHTML = `
`;
//various signs
document.getElementById('switch-candrabindu').innerHTML = 'ଁ';
document.getElementById('switch-anusvara').innerHTML = 'ଂ';
document.getElementById('switch-visarga').innerHTML = 'ଃ';
document.getElementById('visarga-name').innerHTML = 'halanta';
document.getElementById('switch-virama').innerHTML = '୍';
document.getElementById('switch-om').innerHTML = '';
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
    <td id="switch-0">୦</td>
    <td id="switch-1">୧</td>
    <td id="switch-2">୨</td>
    <td id="switch-3">୩</td>
    <td id="switch-4">୪</td>
    <td id="switch-5">୫</td>
    <td id="switch-6">୬</td>
    <td id="switch-7">୭</td>
    <td id="switch-8">୮</td>
    <td id="switch-9">୯</td>
  </tr>
</tbody>
</table>
`;
//others
document.getElementById('output').value += '\r\n';
}
