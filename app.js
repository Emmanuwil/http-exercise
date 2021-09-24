console.log("Hello World!\n==========\n");

//Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");
const { getEnabledCategories } = require("trace_events");
const { getEnvironmentData } = require("worker_threads");




http.createServer(function (request, response) {
    let { url } = request;
    let chuncks = [];
    request.on("data", function(chunk){
        chunks.push(chunk);
    });
    request.on("end", function() {
        const body = Buffer.concat(chuncks).toString();

        if (url === "/") {
            response.write(JSON.stringify(wildcard));
        } else if(url === "/about") {
            const self = {
                name:  "Emmanuwl",
                city:  "Raliegh",
            };
            const wildcard ={
                favTeam: "Eagles",
                favColor: "Green",
            }
            response.write(body);
        } else if(url === "echo") {
            response.write(body);
        }
        response.end();
    });
})
.listen(3000, function () {
    console.log("Server listening on port 3000...");
});