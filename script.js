const share_btn=document.querySelector(".share_btn");
const modal=document.querySelector(".wrapper");
const overlayer=document.querySelector(".overlay");
const openModal=()=>{
    overlayer.classList.add("open_overlay");
    modal.classList.add("open_modal");
}
const closeModal=()=>{
    overlayer.classList.remove("open_overlay");
    modal.classList.remove("open_modal");
    
}