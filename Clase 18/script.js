let empanadasString =`[
    {
        "id":1,
        "nombre":"carne",
        "precio":100
    },
    {
        "id":2,
        "nombre":"jyq",
        "precio":135
    },
    {
        "id":3,
        "nombre":"cyq",
        "precio": 120
    }
]`
console.log(empanadasString);
console.log(JSON.parse(empanadasString));
let empanadasJSON = JSON.parse(empanadasString);
console.log(empanadasJSON);
empanadasString = JSON.stringify(empanadasJSON);
console.log(empanadasString)
empanadasJSON = JSON.parse(empanadasString)
console.log(empanadasJSON)
const getEmpanadasAsync= ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(empanadasJSON);
        },3500);
    });
}
const waifurl = "https://api.waifu.pics/sfw/bully"
async function fetchempanadas(){
    const getEmpanadasConAwait = await getEmpanadasAsync();
    console.log(getEmpanadasConAwait)
}
fetchempanadas();

async function obtainWaifus(){
    const response = await fetch(waifurl)
    console.log(response);
    const data =     await response.json()
    console.log(data);
    document.getElementById("waifuPic").setAttribute("src",data.url)
}
obtainWaifus();

async function waifuMaka(){
    fetch(waifurl).then(function(waifu){
        return waifu.json();
    }).then(function(waifuJson){
        console.log(waifuJson)
    }).catch(()=>{
        console.log("ya fucked up")
    });
}
waifuMaka();