let i = 0;
let message = "Teste rapido, sobre como colocar texto com efeito no JavaScript... utilizei HTML, CSS e JavaScript"

typing();

function typing(){
    if(i <message.length){
        document.getElementById('text').innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 100);
            
        
    }
}