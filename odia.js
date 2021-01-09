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
document.getElementById('output').value = '';
}
