// Tải danh sách dịch vụ từ JSON
fetch("js/services.json")
  .then((res) => res.json())
  .then((services) => {
    const grid = document.getElementById("serviceGrid");
    grid.innerHTML = services
      .map(
        (s) => `
      <div class="card" onclick="viewService(${s.id})">
        <div class="badge-left discount">-</div>
        <div class="image">
          <div class="service-image">
            <img src="${s.image}" class="carousel-image img-fluid" alt="${s.title}" />
          </div>
        </div>
        <div class="card-body">
          <div>
            <div class="title">${s.title}</div>
            <div class="stars">★★★★★</div>
          </div>
          <div>
            <div class="price-row">
              <span class="price">${s.price}</span>
            </div>
            <div class="note">${s.note}</div>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  });

function viewService(id) {
  window.location.href = `chitiet.html?id=${id}`;
}
