/* eslint arrow-body-style: ["error", "always"] */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises).then((results) => {
    // parcourt chaque élément du tableau results
    /* eslint-disable-next-line arrow-body-style */
    return results.map((result) => ({
      // et pour chaque éléments dans results
      status: result.status, // on stocke le statut de la promesse
      // si la promesse est résolue, on garde la valeur de statut, sinon, raison de l'échec
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}
