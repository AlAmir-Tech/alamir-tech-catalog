const state={category:"الكل",audience:"retail",query:""};
const products=[
 {name:"أجهزة ألعاب الفيديو",category:"Gaming",icon:"🎮",description:"أجهزة الألعاب وملحقاتها"},
 {name:"لابتوبات جديدة ومستعملة",category:"Laptops",icon:"💻",description:"خيارات متنوعة للأعمال والدراسة والألعاب"},
 {name:"ملحقات اللابتوب",category:"Accessories",icon:"⌨️",description:"ملحقات أساسية وإضافية"},
 {name:"راوترات ومعدات شبكات",category:"Networking",icon:"🌐",description:"حلول الإنترنت والشبكات"},
 {name:"كابلات الشبكة",category:"Networking",icon:"🔌",description:"كابلات ومستلزمات التوصيل"},
 {name:"كاميرات مراقبة",category:"Surveillance",icon:"📹",description:"كاميرات وملحقات أنظمة المراقبة"},
 {name:"الخدمات الرقمية",category:"Digital Services",icon:"🧩",description:"خدمات رقمية متنوعة"}
];
const categoryNames=["الكل","Gaming","Laptops","Accessories","Networking","Surveillance","Digital Services"];
const categories=document.querySelector("#categories"),grid=document.querySelector("#product-grid"),search=document.querySelector("#search");
function renderCategories(){categories.innerHTML=categoryNames.map(c=>`<button class="${state.category===c?"active":""}" data-category="${c}">${c==="الكل"?"الكل":c}</button>`).join("");}
function renderProducts(){const q=state.query.trim().toLowerCase();const list=products.filter(p=>(state.category==="الكل"||p.category===state.category)&&(!q||(p.name+" "+p.description+" "+p.category).toLowerCase().includes(q)));grid.innerHTML=list.length?list.map(p=>`<article class="product-card"><div><div class="product-icon">${p.icon}</div><h3>${p.name}</h3><p>${p.description}</p></div><a class="ask" href="https://wa.me/963989815272?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن: "+p.name+" - "+(state.audience==="wholesale"?"طلب جملة":"طلب مفرق"))}" target="_blank" rel="noopener">استفسر عن ${state.audience==="wholesale"?"سعر الجملة":"السعر والتوفر"} ←</a></article>`).join(""):`<p>لا توجد نتائج مطابقة. جرّب كلمة بحث أخرى.</p>`;}
categories.addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;state.category=b.dataset.category;renderCategories();renderProducts();});
search.addEventListener("input",e=>{state.query=e.target.value;renderProducts();});
document.querySelectorAll("[data-audience]").forEach(b=>b.addEventListener("click",()=>{state.audience=b.dataset.audience;document.querySelectorAll("[data-audience]").forEach(x=>x.classList.toggle("active",x===b));renderProducts();}));
document.querySelector("#year").textContent=new Date().getFullYear();renderCategories();renderProducts();
