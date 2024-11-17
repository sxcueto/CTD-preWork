// fetch('https://api.sampleapis.com/coffee/hot')
//want to display title, ingredients, and image

   const getHot = async () => {
    const url = 'https://api.sampleapis.com/coffee/hot';
    const reponse = await fetch (url);
    return await response.json();
   };

   const render = (hot) => {
    return hot.map(({}))
   }