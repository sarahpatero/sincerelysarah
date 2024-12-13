// Blog posts data
const blogPosts = [
  {
    title: "Sarah, contemplate why you are so happy.",
    content: "In this post, I touch on ten essential ways towards happiness: recognizing your greatest power, solitude, confidence, trusting in something greater, meaning, love, gratitude, social connection, health, and growth.",
    link: "posts/contemplate.html",
    image: "images/contemplate.png",
    date: "November 30, 2024",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Lack of discipline makes you ugly",
    content: "Discipline calls for respect. The more you lack discipline, the more you are denying respect to yourself... When you lack discipline, you're telling yourself that your potential isn't worth the work.",
    link: "posts/lack of discipline.html",
    image: "images/buff sarah.jpg",
    date: "November 27, 2024",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Stop wasting your potential as a teenager",
    content: "Stop wasting your potential by procrastinating or living in comfort. Take action, challenge yourself, and become the person you were meant to be.",
    link: "posts/stop-wasting.html",
    image: "images/potential.jpg",
    date: "November 27, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "How to change the world",
    content: "The key to changing the world starts with changing yourself. If you want to impact the world, start with your mindset, actions, and the way you treat others.",
    link: "posts/world.html",
    image: "images/abaya sarah.jpg",
    date: "November 27, 2024",
    topic: "PHILOSOPHY"
  },
  {
    title: "Don't complain, rebuild yourself",
    content: "Complaining doesn't change anything. If you want to see change in your life, focus on rebuilding yourself, step by step, day by day.",
    link: "full-post5.html",
    image: "images/can't hurt me.jpg",
    date: "November 27, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Don't let their hate go to waste.",
    content: "Complaining doesn't change anything. If you want to see change in your life, focus on rebuilding yourself, step by step, day by day.",
    link: "full-post5.html",
    image: "images/can't hurt me.jpg",
    date: "November 27, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "My life is my beauty routine",
    content: "For me, beauty isn’t about makeup or appearance. It’s about how I take care of my mind and body, and how I cultivate inner peace and strength.",
    link: "full-post6.html",
    image: "images/sarah dance.png",
    date: "November 1, 2024",
    topic: "HEALTH"
  },
  {
    title: "How to forgive yourself when you were the problem",
    content: "Forgiveness starts with yourself. When you realize you were part of the problem, you need to take responsibility, forgive yourself, and learn how to grow from the experience.",
    link: "full-post7.html",
    image: "images/sarah dance.png",
    date: "November 1, 2024",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "You can turn your life around",
    content: "No matter where you are in life, it’s never too late to turn things around. Start by making small changes that will lead to bigger transformations over time.",
    link: "full-post8.html",
    image: "images/sarah dance.png",
    date: "November 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Everything comes to a past",
    content: "The past is a teacher, not a burden. Learn from it, but don't carry it with you. Let go of what no longer serves you and move forward.",
    link: "full-post9.html",
    image: "images/sarah dance.png",
    date: "November 1, 2024",
    topic: "REFLECTIONS"
  },
  {
    title: "Emotional regulation is the biggest skill to master",
    content: "Being able to regulate your emotions is one of the most important life skills. Mastering emotional regulation will allow you to maintain balance even in the toughest situations.",
    link: "full-post10.html",
    image: "images/sarah dance.png",
    date: "November 1, 2024",
    topic: "SELF-DEVELOPMENT"
  },
  {
    title: "Stop walking around like you're an apology",
    content: "Don’t apologize for your existence. Stop shrinking yourself and start owning your space, your voice, and your purpose.",
    link: "full-post11.html",
    image: "images/sarah dance.png",
    date: "November 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "A Man's Search for Meaning",
    content: "This book ruined my life in the best way possible. It taught me that meaning isn’t something that happens to you; it’s something you create. Here’s how it changed my perspective on life...",
    link: "full-post12.html",
    image: "images/sarah dance.png",
    date: "November 1, 2024",
    topic: "BOOK NOOK"
  },
  { 
    title: "Go for it",
    content: "just do it omg",
    link: "full-post13.html",
    image: "images/buff sarah.jpg",
    date: "November 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Push past your edge",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Be someone worth knowing",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Live with an open heart, even if it hurts",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "You're desperate",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Take the next small step",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Have you forgotten who you are?",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "Once you commit, it's literally yours. If your mind knows it's not going to quit, it's going to find ways to push through.",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
  },
  {
    title: "I'm not lucky, I just know how to talk to myself",
    content: "push",
    link: "full-post14.html",
    image: "images/buff sarah.jpg",
    date: "Novemmber 1, 2024",
    topic: "MOTIVATION"
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