console.log('js file loaded!');

fetch('http://localhost:3000/weather?address=bengaluru').then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    }, err=>{
        console.log(err)
    })
})