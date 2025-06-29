//set timeout function
console.log("Start");
setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}, 2000); 
console.log("End");

//set interval function
const id=setInterval(()=>{
    console.log("This msg will be shown for evry 2 secs");
},2000)
clearInterval(id); // to stop setInterval


//callback function
function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}

fetchData((result) => {
    console.log(result);  // "Data loaded"
});

//using promises
const fetchData2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1500);
    });
};

fetchData2().then((data) => {
    console.log(data);  // "Data received"
});

const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async data loaded");
        }, 1000);
    });
};

async function showData() {
    console.log("Loading...");
    const result = await fetchData3();
    console.log(result);  
}

showData();

