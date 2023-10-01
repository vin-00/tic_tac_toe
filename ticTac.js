// restart pe ask name again

let h3 = document.querySelector("h3"); // warnings
let divs = document.querySelectorAll(".row div"); // boxes
let p = document.querySelector("p"); // result

let users = document.querySelectorAll("input"); // names


// setInterval(function(){
//     document.body.classList.toggle("bImage");
// },2000)


let arr = [[],[],[]];
let code =0; // 0 means circle , 1 means cross
let markI=0 ;
for(user of users){
    user.addEventListener("change",function(){
        let mark;
        if(markI==0){
            markI++;
            mark ="O";
        }else{
            mark ="X";
        }
        
        let data = this.value +" "+mark;
        let par = this.parentElement;
        par.innerText = data;
    })
}

for(let i=0 ; i<divs.length ; i++){
    divs[i].addEventListener("click",function(){ 
        h3.innerText ="";
        if(users[0].value=="" || users[1].value==""){
            h3.innerText = "First enter the names"
            return;
        }

        if(i%3<arr[0].length || i%3<arr[1].length || i%3<arr[2].length){
            if(arr[Math.floor(i/3)][i%3]=="circle" || arr[Math.floor(i/3)][i%3]=="cross"){
                h3.innerText = "Already filled , choose another block";
                return;
            }
        }
        if(getTurn()==0){
            arr[Math.floor(i/3)][i%3] = "circle";
            this.innerHTML = `<i class="fa-regular fa-circle"></i>`;
            check("circle");
        }
        else{
            arr[Math.floor(i/3)][i%3] = "cross"
            this.innerHTML= `<i class="fa-solid fa-xmark"></i>`;
            check("cross");
        }    
    })
}

function check(s){
    for(let i=0 ; i<3 ; i++){
        if(arr[i][0]==s){
            if(arr[i][1]==s && arr[i][2]==s){
                
                result(s);
                return;
            }
        }
        if(arr[0][i]==s){
            if(arr[1][i]==s && arr[2][i]==s){
                
                result(s);
                return;   
            }
        }
    }

    if(arr[0][0]==s && arr[1][1]==s && arr[2][2]==s){
        
        result(s);
        return;
    }
    
    if(arr[0][2]==s && arr[1][1]==s && arr[2][0]==s){
        
        result(s);
        return;
    }

}

document.body.addEventListener("keypress",function(){
    for(div of divs){
        div.innerHTML = "";
    }
    arr=[[],[],[]];
    h3.innerText = "";
    p.innerHTML="";
})

function result(s){
    if(s=="circle"){
        p.innerText =  `${users[0].value} wins`;
    }else{
        p.innerText= `${users[1].value} wins`;
    }

    h3.innerText = "Press Any key to start again";
}

function getTurn(){
    if(code==0){
        code=1;
        return 0;
    }
    code=0;
    return 1;
}




