function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  }
  else {
    console.log('Wallet is connected!');
  }
}