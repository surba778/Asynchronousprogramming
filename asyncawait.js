async function flipCoinAsync() {
  return new Promise((resolve, reject) => {
    const result = Math.random() > 0.5 ? 'heads' : 'tails';
    if (result) {
      resolve(result);
    } else {
      reject('Coin flip failed');
    }
  });
}

async function handleCoinFlip() {
  try {
    const result = await flipCoinAsync();
    console.log(`Result: ${result}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

// Call the async function
handleCoinFlip();