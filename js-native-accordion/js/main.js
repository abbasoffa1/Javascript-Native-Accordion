var items=document.querySelectorAll(".item");
    for(var i=0;i<items.length;i++){
        items[i].addEventListener("click",function(){
            if( document.querySelector(".itemOpen.open")!=null && document.querySelector(".itemOpen.open")!=this.nextElementSibling){
                document.querySelector(".itemOpen.open").classList.remove("open"); 
            }
            this.nextElementSibling.classList.toggle("open");
        })
    }
