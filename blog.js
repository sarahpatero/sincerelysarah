// Blog posts data
const blogPosts = [
  {
    title: "Sarah, contemplate why you are so happy.",
    content: "In this post, I touch on ten essential ways towards happiness: recognizing your greatest power, solitude, confidence, trusting in something greater, meaning, love, gratitude, social connection, health, and growth.",
    link: "posts/contemplate.html",
    image: "/images/flag-dinner.jpg",
    date: "November 30, 2024",
    topic: "SELF-DEVELOPMENT"
  }
];

// Settings for pagination
const postsPerPage = 10; 
let currentPage = 1;
let selectedTopic = null; // Track the selected topic

// Function to render posts on the current page and selected topic
function renderPosts() {
  const container = document.getElementById("blog-container");
  container.innerHTML = ""; // Clear previous posts

  // Filter posts by the selected topic
  let filteredPosts = selectedTopic && selectedTopic !== 'ALL'
      ? blogPosts.filter(post => post.topic === selectedTopic)
      : blogPosts;

  // Determine the slice of posts to display for the current page if pagination is active
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const postsToDisplay = filteredPosts.slice(start, end);

  // Generate HTML for each post
  postsToDisplay.forEach(post => {
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
                  <p class="blog-post-date">
                      Published on: <span>${post.date}</span>
                  </p>
              </div>
          </article>
      `;
  });

  // Render pagination only if we need to paginate
  if (filteredPosts.length > postsPerPage) {
    renderPagination(filteredPosts.length);
  } else {
    // If no pagination is needed, clear pagination controls
    document.getElementById("pagination").innerHTML = "";
  }
}

// Function to filter posts by topic
function filterByTopic(topic) {
  selectedTopic = topic; // Set selected topic for pagination
  currentPage = 1; // Reset to first page when a new topic is selected
  renderPosts(); // Re-render posts with the selected topic or all posts
}

// Function to render pagination controls
function renderPagination(totalPosts) {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  pagination.innerHTML = ""; // Clear previous pagination

  // Add "Previous" button
  if (currentPage > 1) {
    pagination.innerHTML += `<button onclick="changePage(-1)">Previous</button>`;
  }

  // Add page numbers
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>
    `;
  }

  // Add "Next" button
  if (currentPage < totalPages) {
    pagination.innerHTML += `<button onclick="changePage(1)">Next</button>`;
  }
}

// Function to handle page change (previous/next)
function changePage(direction) {
  currentPage += direction;
  renderPosts(); // Re-render posts with the updated page
}

// Function to go to a specific page
function goToPage(page) {
  currentPage = page;
  renderPosts(); // Re-render posts with the selected page
}

// Call renderPosts to show all posts by default
document.addEventListener("DOMContentLoaded", () => {
  renderPosts();
});