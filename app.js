

const jokes =document.getElementById("j")
const btn=document.getElementById("new")

const generatejokes =()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res)=> res.json())
    .then((data)=>{
        jokes.innerHTML=data.value
    })
    
    
    .catch((error)=>{
        console.log(error);
    })
}

btn.addEventListener('click',generatejokes)
generatejokes()