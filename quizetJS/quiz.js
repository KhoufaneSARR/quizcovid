
const form = document.getElementById('formulaire');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page après la soumission du formulaire
  
  const temperature = document.getElementById('temperature').value;
  const toux = document.getElementById('toux').checked;
  const fatigue = document.getElementById('fatigue').checked;
  const maux = document.getElementById('maux').checked;
  const respiratoire = document.getElementById('respiratoire').value;
  const malade = document.getElementById('malade'.value);
  const voyage = document.getElementById('voyage').value;

  // Vérification des réponses pour déterminer l'état de santé du patient

  let etat = '';
  if (temperature >= 37.5 && (toux || fatigue || maux || respiratoire === 'grande' || malade === 'Oui' || voyage === 'Oui')) {
    etat = 'Risque élevé. Il est recommandé de contacter un professionnel de santé.';
  } else if (temperature >= 37.5 || (toux && (fatigue || maux)) || respiratoire === 'moyenne' || malade === 'Non' || voyage === 'Non') {
    etat = 'Risque moyen. Il est recommandé de surveiller les symptômes.';
  } else {
    etat = 'Risque faible. Il est recommandé de continuer à respecter les mesures sanitaires.';
  }

  // Affichage du résultat
  const resultDiv = document.createElement('div');
  resultDiv.textContent = etat;
  document.body.appendChild(resultDiv);

});
