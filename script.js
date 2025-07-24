let user_c=0;
let com_c=0;


let refresh_btn = document.querySelector("#refresh-btn");
let message = document.querySelector("#message");
let user1 = document.querySelector("#user1");
let compuer1 = document.querySelector("#compuer1");
let user_selected= document.querySelector("#user_selected");
let compuer_selected= document.querySelector("#compuer_selected");


refresh_btn.addEventListener("click",()=>{
    user_c=0;
    com_c=0;
    user1.textContent=user_c;
    compuer1.textContent=com_c;
    user_selected.textContent="None";
    compuer_selected.textContent="None";
    
})



function check(user_choice,com_choice)
{



    if(user_choice===com_choice)
    {
        message.style.color = "red";
        message.textContent = "Match is a draw...";

    }
    else
    {
        //rock 
        if(user_choice === "rock")
        {
            if (com_choice == "scissor")
            {
                user_c+=1;
                message.style.color = "black";
                message.textContent = "you are winner....";
            }
            else{
                com_c+=1;
                message.style.color = "black";
                message.textContent = "computer winner....";
            }  

        }
        else if(user_choice === "pepar")
        {
            if (com_choice == "scissor")
            {
                com_c+=1;
                message.style.color = "black";
                message.textContent = "computer winner....";
            }
            else{
                user_c+=1;
                message.style.color = "black";
                message.textContent = "you are winner....";
            }  
        }
        else{
            if (com_choice == "rock")
            {
                com_c+=1;
                 message.style.color = "black";
                message.textContent = "computer winner....";
            }
            else{
                user_c+=1;
                message.style.color = "black";
                message.textContent = "you are winner....";
            }  
        }

    }
    user1.textContent=user_c;
    compuer1.textContent=com_c;
    
    compuer_selected.textContent=com_choice;
    user_selected.textContent=user_choice;
}

function computer(user_choice)
{
    let li =["rock","pepar","scissor"];

    let c_index =Math.floor(Math.random()*3);

    let com_choice = li[c_index];
    check(user_choice,com_choice);
}



let rock = document.querySelector("#rock");

rock.addEventListener("click",()=>{

    computer("rock");
})

let pepar = document.querySelector("#pepar");

pepar.addEventListener("click",()=>{
    
    computer("pepar");
})





let scissor = document.querySelector("#scissor");

scissor.addEventListener("click",()=>{
  
    computer("scissor");
})

