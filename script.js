
let clock = document.createElement("div")
clock.className="clock"

document.body.appendChild(clock)

function print(){
    setInterval(()=>{
        let date=new Date();
        
        clock.innerText= date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds()
    },1000)
}
print()


