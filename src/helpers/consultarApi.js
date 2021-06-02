export const consultarApi = async (ciudad, pais) => {

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(ciudad)},${encodeURI(pais)}&appid=04ee0a10734384ca4d576c325178b190`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();

      return(data);
      
    } catch (error) {
      console.log(error)
    }
  }