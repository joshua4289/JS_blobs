// this is the then syntax which is seen is previous
// js and is not 'modern ' js 

// const fetchData = () => {
//   fetch('https://api.github.com').then(resp => {
//     resp.json().then(data => {
//       console.log(data);
//     });
//   });
// };

const fetchData = async () => {
    const resp = await fetch('https://api.github.com');
    const data = await resp.json();
    console.log(data);
  };
  
  fetchData();
  
  // the async keyword allows you to 
  //use the await syntax 
  // it replaces the then syntax 
  
  const fetchAgain = async () => {
    // because this is in an ansync call I can use await 
    const resp = await fetch ('https://api.github.com');
    const data = await resp.json();
    
    console.log(data);
  }; 
  fetchAgain();