const products=[
["Blue Algorithm",150000,"💠","Fresh · Aquatic · Clean"],
["Midnight Protocol",175000,"🌑","Woody · Bold · Premium"],
["Velvet Circuit",160000,"✨","Sweet · Soft · Cozy"],
["Binary Bloom",155000,"🌸","Floral · Elegant · Fresh"],
["Cyber Oud",200000,"⚡","Oud · Spicy · Luxury"],
["Neon Pulse",145000,"🔷","Citrus · Energetic · Modern"]
];
const rp=n=>"Rp "+n.toLocaleString("id-ID");
const box=document.getElementById("products"), sel=document.getElementById("product");
products.forEach((p,i)=>{box.innerHTML+=`<article class="card reveal bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"><div class="h-52 flex items-center justify-center text-7xl bg-gradient-to-br from-sky-500/20 to-purple-500/10">${p[2]}</div><div class="p-6"><p class="text-sky-400 text-xs">${p[3]}</p><h3 class="font-black text-2xl mt-2">${p[0]}</h3><div class="flex justify-between items-center mt-5"><b>${rp(p[1])}</b><button onclick="choose(${i})" class="bg-sky-400 text-slate-950 px-4 py-2 rounded-xl font-bold">Pilih</button></div></div></article>`;sel.innerHTML+=`<option value="${i}">${p[0]} — ${rp(p[1])}</option>`});
function update(){let p=products[sel.value];let q=Math.max(1,+document.getElementById("qty").value||1);document.getElementById("total").textContent=rp(p[1]*q)}
function choose(i){sel.value=i;update();document.getElementById("order").scrollIntoView({behavior:"smooth"})}
sel.onchange=update;document.getElementById("qty").oninput=update;update();
document.getElementById("form").onsubmit=e=>{e.preventDefault();let f=new FormData(e.target),p=products[sel.value],q=+f.get("qty"),total=p[1]*q;let text=`🛍️ *PESANAN BARU PTI PARFUM*%0A%0A👤 Nama: ${encodeURIComponent(f.get("name"))}%0A📱 WhatsApp: ${encodeURIComponent(f.get("phone"))}%0A🧴 Produk: ${encodeURIComponent(p[0])}%0A🔢 Jumlah: ${q}%0A💰 Total: ${encodeURIComponent(rp(total))}%0A📍 Alamat: ${encodeURIComponent(f.get("address"))}%0A%0ATerima kasih.`;localStorage.setItem("pti_last_order",JSON.stringify({name:f.get("name"),product:p[0],qty:q,total,date:new Date().toLocaleString()}));window.open("https://wa.me/6281234567890?text="+text,"_blank")};
function recommend(){let m=document.getElementById("mood").value,map={fresh:0,bold:1,sweet:2,luxury:4};let p=products[map[m]],r=document.getElementById("recommendation");r.classList.remove("hidden");r.innerHTML=`✨ Rekomendasi untuk kamu: <b class="text-sky-300">${p[0]}</b><br><span class="text-slate-400">${p[3]}</span>`}
document.getElementById("chatBtn").onclick=()=>document.getElementById("chat").classList.toggle("hidden");
document.getElementById("chatForm").onsubmit=e=>{e.preventDefault();let i=document.getElementById("chatInput"),q=i.value.trim();if(!q)return;let m=document.getElementById("msgs");m.innerHTML+=`<div class="bg-sky-400 text-slate-950 p-3 rounded-xl">${q}</div>`;let x=q.toLowerCase(),a=x.includes("promo")?"Promo demo: gratis ongkir minimal Rp300.000.":x.includes("rekom")||x.includes("aroma")?"Fresh: Blue Algorithm. Bold: Midnight Protocol. Luxury: Cyber Oud.":"Saya bisa membantu tentang parfum, promo, dan pemesanan 😊";m.innerHTML+=`<div class="bg-slate-800 p-3 rounded-xl">${a}</div>`;i.value="";m.scrollTop=m.scrollHeight};
document.getElementById("theme").onclick=()=>{document.body.classList.toggle("bg-slate-950");document.body.classList.toggle("bg-white");document.body.classList.toggle("text-white");document.body.classList.toggle("text-slate-900")};
const end=Date.now()+86400000;setInterval(()=>{let d=Math.max(0,end-Date.now()),h=Math.floor(d/36e5),m=Math.floor(d%36e5/6e4),s=Math.floor(d%6e4/1e3);document.getElementById("countdown").textContent=`${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`},1000);
new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.1}).observe(document.querySelector(".reveal"));
document.querySelectorAll(".reveal").forEach(el=>new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.1}).observe(el));
window.onload=()=>setTimeout(()=>document.getElementById("loader").style.display="none",1200);