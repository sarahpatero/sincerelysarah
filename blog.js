// SETTINGS
const postsPerPage = 100;
let currentPage = 1;
let selectedTopic = null;
let sortOrder = "newest"; // newest or oldest

// SORTING FUNCTION
function getSortedPosts(posts) {
  return posts.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return sortOrder === "newest"
      ? dateB - dateA   // newest → oldest
      : dateA - dateB;  // oldest → newest
  });
}

// MAIN RENDER FUNCTION
function renderPosts() {
  const container = document.getElementById("blog-container");
  container.innerHTML = "";

  // 1. FILTER BY TOPIC
  let filteredPosts =
    selectedTopic && selectedTopic !== "ALL"
      ? blogPosts.filter((post) => post.topic === selectedTopic)
      : blogPosts;

  // 2. SORT POSTS BASED ON sortOrder
  filteredPosts = getSortedPosts(filteredPosts);

  // 3. PAGINATE
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const postsToDisplay = filteredPosts.slice(start, end);

  // 4. RENDER POSTS
  postsToDisplay.forEach((post) => {
    container.innerHTML += `
      <article class="blog-post">
        <div class="blog-post-image">
          <img src="${post.image}" alt="${post.title}" />
        </div>
        <div class="blog-post-content">
          <h2 class="blog-post-title">
            <a href="${post.link}">${post.title}</a>
          </h2>
          <p class="blog-post-description">${post.content}</p>
          <p class="blog-post-date">Published on: <span>${post.date}</span></p>
        </div>
      </article>
    `;
  });

  // 5. SHOW PAGINATION IF NEEDED
  if (filteredPosts.length > postsPerPage) {
    renderPagination(filteredPosts.length);
  } else {
    document.getElementById("pagination").innerHTML = "";
  }
}

// TOPIC FILTER
function filterByTopic(topic) {
  selectedTopic = topic;
  currentPage = 1;
  renderPosts();
}

// SORT BUTTON HANDLER
function setSortOrder(order) {
  sortOrder = order;
  currentPage = 1;
  renderPosts();
}

// PAGINATION RENDERING
function renderPagination(totalPosts) {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  pagination.innerHTML = "";

  if (currentPage > 1) {
    pagination.innerHTML += `<button onclick="changePage(-1)">Previous</button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button class="${i === currentPage ? "active" : ""}" onclick="goToPage(${i})">
        ${i}
      </button>
    `;
  }

  if (currentPage < totalPages) {
    pagination.innerHTML += `<button onclick="changePage(1)">Next</button>`;
  }
}

// PAGE NAVIGATION
function changePage(direction) {
  currentPage += direction;
  renderPosts();
}

function goToPage(page) {
  currentPage = page;
  renderPosts();
}

// INITIAL RENDER
document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
});
function changeSort(order) {
  sortOrder = order;
  currentPage = 1;

  // Update active button
  document.querySelectorAll('.sort-option').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.sort-option[onclick="changeSort('${order}')"]`)
    .classList.add('active');

  const container = document.getElementById("blog-container");

  // Fade out
  container.classList.add("fade-out");

  // Wait, then load new posts + fade in
  setTimeout(() => {
    renderPosts();
    container.classList.remove("fade-out");
  }, 400);
}
