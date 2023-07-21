const counter = document.getElementById('counter')

setInterval(()=>{
     counter.textContent = '0'+ (Number(counter.textContent)+1)%10
    
}, 1000)