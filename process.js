let navbar = document.querySelector('.navbar');

document.querySelector('#signIn-btn').onclick = () =>{
    document.querySelector('.signInForm-container').classList.toggle('active');
}

document.querySelector('#close-signInForm').onclick = () =>{
    document.querySelector('.signInForm-container').classList.remove('active');
   
}
menubar.classList.toggle('fa-times');
navbar.classList.remove('active');

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.navbar').classList.add('active') ;
    }else{
        document.querySelector('.close-signInForm').classList.remove('active');
    }
}
