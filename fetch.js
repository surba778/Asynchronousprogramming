    const getAdviceAsync = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(`Advice: ${data.slip.advice}`);
      

    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  
  getAdviceAsync(1);