
const state = {
  category: "الكل",
  audience: "retail",
  query: ""
};

// لا توجد منتجات معتمدة حالياً
const products = [];

// لا نظهر أي فئات قبل تجهيز منتجاتها
const categoryNames = [];

const categories = document.querySelector("#categories");
const grid = document.querySelector("#product-grid");
const search = document.querySelector("#search");

function renderCategories() {
  categories.innerHTML = "";
}

function renderProducts() {
  grid.innerHTML = `
    <div class="empty-state">
      <h3>نعمل على تجهيز المنتجات</h3>
      <p>سيتم عرض المنتجات هنا فور اعتماد بياناتها وأسعارها.</p>
      <p>للاستفسار عن المنتجات المتوفرة، تواصل معنا عبر واتساب.</p>
      <a class="ask"
         href="https://wa.me/963989815272"
         target="_blank"
         rel="noopener">
        تواصل معنا عبر واتساب ←
      </a>
    </div>
  `;
}

if (search) {
  search.addEventListener("input", e => {
    state.query = e.target.value;
    renderProducts();
  });
}

document.querySelectorAll("[data-audience]").forEach(b => {
  b.addEventListener("click", () => {
    state.audience = b.dataset.audience;

    document.querySelectorAll("[data-audience]").forEach(x => {
      x.classList.toggle("active", x === b);
    });

    renderProducts();
  });
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

renderCategories();
renderProducts();
