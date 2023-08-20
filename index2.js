const input = `https://www.faisalkhancom/orthodontics/adhesives.html
https://www.faisalkhancom/orthodontics/adhesives/etchent.html
https://www.faisalkhancom/orthodontics/adhesives/light-cure-adhesive.html
https://www.faisalkhancom/orthodontics/adhesives/band-cements.html
https://www.faisalkhancom/orthodontics/adhesives/self-cure-adhesives.html
https://www.faisalkhancom/orthodontics/bands.html
https://www.faisalkhancom/orthodontics/bands/band-material.html
`;

const urls = input.split("\n").filter((url) => url.trim() !== "");

const jsonArray = JSON.stringify(urls, null, 2);

console.log(jsonArray);
//it will create an array of string , in which all the url are present and print on the console
