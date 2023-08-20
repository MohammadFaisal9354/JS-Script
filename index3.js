//this will create a file a.json , and in the file there is an array of strings of the urls

const fs = require("fs");

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

fs.writeFileSync("a.json", jsonArray);
