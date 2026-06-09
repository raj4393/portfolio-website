new Typed("#typing",{
strings:[
"Frontend Developer",
"Web Designer",
"Problem Solver"
],
typeSpeed:80,
backSpeed:50,
loop:true
});

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll("section").forEach(sec=>{
observer.observe(sec);
});

document.addEventListener("mousemove",(e)=>{
const cursor=document.querySelector(".cursor");
cursor.style.left=e.pageX+"px";
cursor.style.top=e.pageY+"px";
});