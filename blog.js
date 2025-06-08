// Blog posts data
const blogPosts = [
  {
    title: "Sarah, contemplate why you are so happy.",
    content: "Started as a habit, ended as an identity.",
    link: "posts/contemplate.html",
    image: "/images/flag-dinner.jpg",
    date: "November 30, 2024",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Be someone worth knowing.",
    content: "Cultvating depth of character.",
    link: "posts/besomeoneworthknowing.html",
    image: "/images/flowersandbearclaw.jpg",
    date: "January 28, 2025",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Behind the flag, beyond the floor.",
    content: "A love letter to my sophomore year winterguard season.",
    link: "posts/winterguard.html",
    image: "/images/finals.jpg",
    date: "April 16, 2025",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Do you ever just sit to enjoy the beauty.",
    content: "Everything there is is right in front of you.",
    link: "posts/beauty.html",
    image: "/images/beauty.jpg",
    date: "April 21, 2025",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Sarah's Rebirth: Year 2",
    content: "Words of wisdom from my sophomore year of college.",
    link: "posts/sophomore.html",
    image: "/images/boishaki.jpg",
    date: "May 8, 2025",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Don't hate the climb just because you're at the top.",
    content: "Stop hating on your past self.",
    link: "posts/past.html",
    image: "/images/past.jpg",
    date: "May 19, 2025",
    topic: "SELF-DEVELOPMENT"
  },
  { 
    title: "Don't put me in the same cage you put yourself in.",
    content: "If you're scared of the world, that's on you!",
    link: "posts/cage.html",
    image:"/images/cagesquare.jpeg",
    date: "May 23, 2025",
    topic: "SELF-DEVELOPEMENT"
  },
  { 
    title: "There's so much out there, Sarah.",
    content: "Put it in perspective.",
    link: "posts/somany.html",
    image:"/images/lakeside.jpg",
    date: "June 2, 2025",
    topic: "SELF-DEVELOPEMENT"
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