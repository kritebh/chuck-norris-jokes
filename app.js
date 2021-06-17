

const jokes =document.getElementById("j")
const btn=document.getElementById("new")
const tweet = document.getElementById("tweet")

const generatejokes =()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res)=> res.json())
    .then((data)=>{
        jokes.innerHTML=data.value
        tweetJokes(data.value)
    })
    
    
    .catch((error)=>{
        console.log(error);
    })
}

function tweetJokes(j){
    
    tweet.href ='https://twitter.com/intent/tweet?hashtags=jokes&related=chucknorris&text='+j+"&via=kritebh";
    return false
}

btn.addEventListener('click',generatejokes)
generatejokes()