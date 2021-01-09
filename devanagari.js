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
document.getElementById('switch-Xā').innerHTML = 'आ';
document.getElementById('switch-ā').innerHTML = 'ा';
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
document.getElementById('vs').innerHTML = `
<h2>Various signs</h2>
<table>
<tbody>
  <tr>
    <td id="switch-vs01">ँ</td>
    <td>candrabindu</td>
    <td class="trans"></td>
  </tr>
  <tr>
    <td id="switch-vs02">ं</td>
    <td>anusvara<br>(bindu)</td>
    <td class="trans">ṃ</td>
  </tr>
  <tr>
    <td id="switch-vs03">ः</td>
    <td>visarga</td>
    <td class="trans">ḥ</td>
  </tr>
  <tr>
    <td id="switch-vs04">्</td>
    <td>virama</td>
    <td class="trans"></td>
  </tr>
  <tr>
    <td id="switch-vs05">ॐ</td>
    <td>om</td>
    <td class="trans"></td>
  </tr>
  <tr>
    <td id="switch-vs06">।</td>
    <td>danda</td>
    <td class="trans"></td>
  </tr>
  <tr>
    <td id="switch-vs07">॥</td>
    <td>double danda</td>
    <td class="trans"></td>
  </tr>
</tbody>
</table>
`;
//numerals
document.getElementById('switch-0').innerHTML = '०';
document.getElementById('switch-1').innerHTML = '१';
document.getElementById('switch-2').innerHTML = '२';
document.getElementById('switch-3').innerHTML = '३';
document.getElementById('switch-4').innerHTML = '४';
document.getElementById('switch-5').innerHTML = '५';
document.getElementById('switch-6').innerHTML = '६';
document.getElementById('switch-7').innerHTML = '७';
document.getElementById('switch-8').innerHTML = '८';
document.getElementById('switch-9').innerHTML = '९';
}
