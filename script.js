// yorum satiri
let bookList = [];
const toggleModal = () => {
  const basketModalEl = document.querySelector(".basket-modal");
  basketModalEl.classList.toggle("active");
};

const getBooks = () => {
  fetch("./products.json")
    .then((res) => res.json())
    .then((books) => (bookList = books));
};

getBooks();

const createBookStar = (starRate) => {
  let starRateHtml = "";
  for (let i = 1; i <= 5; i++) {
    if (Math.round(starRate) >= i)
      starRateHtml += `<i class="bi bi-star-fill active"></i>`;
    else
      starRateHtml += `<i class="bi bi-star-fill"></i>`;
  }
  return starRateHtml;
};

const createBookItemsHtml = () => {
  const bookListEl = document.querySelector(".book-list");
  let bookListHtml = "";
  bookList.forEach((book, index) => {
    bookListHtml += `<div class="col-5 ${index % 2 == 0 && "offset-2" } my-5">
      <div class="row book-card">
        <div class="col-6">
          <img src="${book.imgSource}" 
          width="258"
          height="400px">
        </div>
        <div class="col-6 d-flex justify-content-between">
          <div class="book-detail">
            <div class="fs-5">
              <span class="fos gray fs-5">${book.author}</span>
              <span class="fs-4 fw-bold">${book.name}</span><br>
              <span class="book-star-rate">
                ${createBookStar()}
              </span>
              <span class="gray">${book.reviewCount} reviews</span>
              <p class="book-description fos gray">${book.description}</p>
              <div>
                <span class="black fw-bold fs-4 me-2">${book.price}₺</span>
                ${book.oldPrice && `<span class="fs-4 fw-bold old-price">${book.oldPrice}</span>`}
              </div>
              <div>
                <button class="btn-purple mt-3">ADD BASKET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });

  bookListEl.innerHTML = bookListHtml;
};

setTimeout(() => {
  createBookItemsHtml();
}, 100);
