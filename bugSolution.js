function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  } else {
    ethereum.request({ method: 'eth_requestAccounts' })
      .then(() => {
        console.log('Wallet is connected!');
      })
      .catch((error) => {
        if (error.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error('An error occurred:', error);
        }
      });
  }
}