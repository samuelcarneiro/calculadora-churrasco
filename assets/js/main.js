const homensInput = document.getElementById('homens');
const mulheresInput = document.getElementById('mulheres');
const criancasInput = document.getElementById('criancas');
const calcularButton = document.getElementById('calcular');

const carneBovinaOutput = document.getElementById('carne-bovina');
const frangoOutput = document.getElementById('frango');
const linguiçaOutput = document.getElementById('linguiça');
const refrigeranteOutput = document.getElementById('refrigerante');
const cervejaOutput = document.getElementById('cerveja');

calcularButton.addEventListener('click', () => {
  const homens = parseInt(homensInput.value);
  const mulheres = parseInt(mulheresInput.value);
  const criancas = parseInt(criancasInput.value);

  const carneBovina = ((homens * 500) + (mulheres * 300) + (criancas * 200)) / 1000;
  const frango = ((homens * 200) + (mulheres * 200) + (criancas * 100)) / 1000;
  const linguiça = ((homens * 200) + (mulheres * 200) + (criancas * 200)) / 1000;
  const refrigerante = ((homens * 300) + (mulheres * 400) + (criancas * 200)) / 1000;
  const cerveja = ((homens * 800) + (mulheres * 500)) / 1000;

  carneBovinaOutput.textContent = carneBovina + 'Kg';
  frangoOutput.textContent = frango + 'Kg';
  linguiçaOutput.textContent = linguiça + 'Kg';
  refrigeranteOutput.textContent = refrigerante + 'l';
  cervejaOutput.textContent = cerveja + 'l';
});