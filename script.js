
const myArray=[];


//input leke use list m add krna
const input=document.getElementById('input-box');
const add=document.getElementById('add').onclick=function(){
    const li=document.createElement('li');
    li.innerHTML=input.value;
    const unordered=document.querySelector('.list-container');
    unordered.appendChild(li);
    input.value=""

    //local storage m data store krane k liye
   myArray.push(li.innerText);
   window.localStorage.setItem("toDoData",JSON.stringify(myArray))
    
    
    //click krke use check mark krna
    
        li.addEventListener('click',function(){
            if(li.style.textDecoration==='line-through'){
                li.style.textDecoration='none';
            }
            else{
                li.style.textDecoration="line-through";
            }
        });


    //edit button    
    const edit=document.createElement('button');
    edit.innerHTML='Edit'
    edit.style.position="absolute";
    edit.style.right="120px";
    edit.style.height="20px";
    edit.style.width="90px";
    edit.style.display="flex";
    edit.style.alignItems='center';
    edit.style.justifyContent='center';

    //edit button p click krke uska text input box m chla jaye
    edit.onclick=function(event){
        event.stopPropagation();  //to stop mark check when clicked on edit
        input.value=li.firstChild.textContent.trim();   //trim is to avoid edit and delete from input box
        const save=document.createElement('button')
        save.innerHTML="Save";
        save.style.position="absolute";
        save.style.right="120px";
        save.style.height="20px";
        save.style.width="90px";
        save.style.display="flex";
        save.style.alignItems='center';
        save.style.justifyContent='center';
        save.onclick=function(event){
            event.stopPropagation()
            li.firstChild.textContent=input.value;
            input.value=""
            save.innerHTML="Edit"
        }
        li.appendChild(save);

    };
    li.appendChild(edit);
    



    //delete p click krke us list item ko delete krna
    const delBtn=document.createElement('button');
    delBtn.innerHTML="Delete";
    
    //delete button ko style
    delBtn.style.position="absolute";
    delBtn.style.right="10px";
    delBtn.style.height="20px"
    delBtn.style.display="flex";
    delBtn.style.alignItems='center';
    delBtn.style.justifyContent='center';
    delBtn.style.width="90px";

    delBtn.onclick=function(){
        unordered.removeChild(li);
    };
    //button ko list item k sath align krne k liye
    li.style.display="flex";
    li.style.alignItems='center';
    li.appendChild(delBtn);


}
