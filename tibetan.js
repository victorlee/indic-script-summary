function tibetan() {
document.getElementById('scriptname').innerHTML = 'Tietan';
//consonants
document.getElementById('switch-ka').innerHTML = 'ཀ';
document.getElementById('switch-kha').innerHTML = 'ཁ';
document.getElementById('switch-ga').innerHTML = 'ག';
document.getElementById('switch-gha').innerHTML = '';
document.getElementById('switch-ṅa').innerHTML = 'ང';
document.getElementById('switch-ha').innerHTML = 'ཧ';
document.getElementById('switch-ca').innerHTML = 'ཅ';
document.getElementById('switch-cha').innerHTML = 'ཆ';
document.getElementById('switch-ja').innerHTML = 'ཇ';
document.getElementById('switch-jha').innerHTML = '';
document.getElementById('switch-ña').innerHTML = 'ཉ';
document.getElementById('switch-ya').innerHTML = 'ཡ';
document.getElementById('switch-śa').innerHTML = 'ཤ';
document.getElementById('switch-ṭa').innerHTML = 'ཊ';
document.getElementById('switch-ṭha').innerHTML = 'ཋ';
document.getElementById('switch-ḍa').innerHTML = 'ཌ';
document.getElementById('switch-ḍha').innerHTML = '';
document.getElementById('switch-ṇa').innerHTML = 'ཎ';
document.getElementById('switch-ra').innerHTML = 'ར';
document.getElementById('switch-ṣa').innerHTML = 'ཥ';
document.getElementById('switch-ta').innerHTML = 'ཏ';
document.getElementById('switch-tha').innerHTML = 'ཐ';
document.getElementById('switch-da').innerHTML = 'ད';
document.getElementById('switch-dha').innerHTML = '';
document.getElementById('switch-na').innerHTML = 'ན';
document.getElementById('switch-la').innerHTML = 'ལ';
document.getElementById('switch-sa').innerHTML = 'ས';
document.getElementById('switch-pa').innerHTML = 'པ';
document.getElementById('switch-pha').innerHTML = 'ཕ';
document.getElementById('switch-ba').innerHTML = 'བ';
document.getElementById('switch-bha').innerHTML = '';
document.getElementById('switch-ma').innerHTML = 'མ';
document.getElementById('switch-va').innerHTML = 'ཝ';
document.getElementById('ce').innerHTML = `
`;
//vowels
document.getElementById('switch-Xa').innerHTML = 'ཨ';
document.getElementById('switch-a').innerHTML = '';
document.getElementById('a-trans').innerHTML = 'a';
document.getElementById('switch-Xā').innerHTML = '';
document.getElementById('switch-ā').innerHTML = '';
document.getElementById('ā-trans').innerHTML = 'ā';
document.getElementById('switch-Xi').innerHTML = '';
document.getElementById('switch-i').innerHTML = 'ི';
document.getElementById('switch-Xī').innerHTML = '';
document.getElementById('switch-ī').innerHTML = '';
document.getElementById('switch-Xu').innerHTML = '';
document.getElementById('switch-u').innerHTML = 'ུ';
document.getElementById('switch-Xū').innerHTML = '';
document.getElementById('switch-ū').innerHTML = '';
document.getElementById('switch-Xṛ').innerHTML = '';
document.getElementById('switch-ṛ').innerHTML = '';
document.getElementById('switch-Xṝ').innerHTML = '';
document.getElementById('switch-ṝ').innerHTML = '';
document.getElementById('switch-Xḷ').innerHTML = '';
document.getElementById('switch-ḷ').innerHTML = '';
document.getElementById('switch-Xḹ').innerHTML = '';
document.getElementById('switch-ḹ').innerHTML = '';
document.getElementById('switch-Xe').innerHTML = '';
document.getElementById('switch-e').innerHTML = 'ེ';
document.getElementById('switch-Xai').innerHTML = '';
document.getElementById('switch-ai').innerHTML = 'ཻ';
document.getElementById('switch-Xo').innerHTML = '';
document.getElementById('switch-o').innerHTML = 'ོ';
document.getElementById('switch-Xau').innerHTML = '';
document.getElementById('switch-au').innerHTML = 'ཽ';
document.getElementById('ve').innerHTML = `
`;
//various signs
document.getElementById('switch-candrabindu').innerHTML = 'ྃ';
document.getElementById('switch-anusvara').innerHTML = 'ཾ';
document.getElementById('switch-visarga').innerHTML = 'ཿ';
document.getElementById('visarga-name').innerHTML = 'visarga';
document.getElementById('switch-virama').innerHTML = '྄';
document.getElementById('switch-om').innerHTML = 'ༀ';
document.getElementById('switch-danda').innerHTML = '།';
document.getElementById('switch-doubledanda').innerHTML = '༎';
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
    <td id="switch-0">༠</td>
    <td id="switch-1">༡</td>
    <td id="switch-2">༢</td>
    <td id="switch-3">༣</td>
    <td id="switch-4">༤</td>
    <td id="switch-5">༥</td>
    <td id="switch-6">༦</td>
    <td id="switch-7">༧</td>
    <td id="switch-8">༨</td>
    <td id="switch-9">༩</td>
  </tr>
</tbody>
</table>
`;
//link
document.getElementById('link').innerHTML = `
full list: <a href="https://www.unicode.org/charts/PDF/U0F00.pdf" target="_blank">https://www.unicode.org/charts/PDF/U0F00.pdf</a>
`;
//others
}
