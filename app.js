/* wieght Converter */

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbs').addEventListener('input', function(e){
  document.getElementById('output').style.visibility = 'visible';
  var lbs = e.target.value;
  document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
  document.getElementById('kgOutput').innerHTML = lbs/2.2046;
  document.getElementById('ozOutput').innerHTML = lbs*16;
});
