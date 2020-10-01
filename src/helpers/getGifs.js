export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1zMAqyreU311t4jS3l2K7wplGVBb35qP`;
    //peticion http
    const resp = await fetch( url ); //devuelve una promesar gracias al async
    const {data} = await resp.json(); //respuesta en formato JSON
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    return gifs;
}