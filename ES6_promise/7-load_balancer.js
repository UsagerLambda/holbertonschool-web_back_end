export default function loadBalancer(chinaDownload, USDownload) {
  // renvoie la promesse qui se résout en premier
  return Promise.race([chinaDownload, USDownload]);
}
