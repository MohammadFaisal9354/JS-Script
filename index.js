//this will take a file name a.json, and in the file a.json there is an array of strings(url) and it will take one by one url from the file and call the api after delay of 500ms

const fs = require("fs");

const JSON_FILE_PATH = "./a.json";

const axios = require("axios");

const apiUrl = "https://FAISAL_KHAN.com/queue"; // Replace with the actual API URL

const rawData = fs.readFileSync(JSON_FILE_PATH);
const data = JSON.parse(rawData);
const requestInterval = 500; // Time in milliseconds between requests
const maxRequestsPerInterval = 5; // Maximum number of requests per interval
const maxRetries = 3; // Maximum number of retries for failed requests

async function makeRequests() {
  for (let i = 0; i < data.length; i++) {
    let retries = 0;

    while (retries <= maxRetries) {
      try {
        // Make API request for the current data item
        const response = await axios.post(
          apiUrl,
          {
            url: data[i],
            origin: "manual",
            request_type: "add",
          },
          {
            headers: {
              "x-api-key": "_YOUR_API_KEY_HERE_",
            },
          }
        );

        console.log(
          `Request ${i + 1}/${data.length} successful. Response:`,
          response.data
        );
        break; // Exit the retry loop on success
      } catch (error) {
        console.error(
          `Request ${i + 1}/${data.length} failed. Retrying...`,
          error.message
        );
        retries++;

        if (retries <= maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, requestInterval)); // Backoff
        } else {
          console.error(
            `Max retries reached for request ${i + 1}/${data.length}. Skipping.`
          );
          break; // Exit the retry loop on reaching max retries
        }
      }
    }

    await new Promise((resolve) => setTimeout(resolve, requestInterval)); // Rate limiting
  }
}
console.time("time taken");
makeRequests();
console.timeEnd("time taken");
// main();
