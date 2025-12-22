// Blog posts data
const blogPosts = [
  {
    title: "Contemplating why I'm so happy.",
    content: "4,000-word manifesto.",
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
    image: "/images/boishaki.JPG",
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
    image:"/images/cagesquare.JPEG",
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
  },
  {
    title: "Pretty aura privilege.",
    content: "Beauty + Coherence + Receptivity.",
    link: "posts/prettyaura.html",
    image:"/images/aurasquare.jpg",
    date: "June 16, 2025", //Actually published on June 8
    topic: "SELF-DEVELOPEMENT"
  },
  { 
    title: "Transcendence is also found in the ordinary.",
    content: "Can be felt in a crater in Iceland, or at your childhood park.",
    link: "posts/transcend.html",
    image:"/images/transcend.PNG",
    date: "June 30, 2025", //Actually published on June 10
    topic: "SELF-DEVELOPEMENT"
  },
  {
    title: "To the woman who chose me.",
    content: "Thanks for sticking around, Sarah.",
    link: "posts/choice.html",
    image: "/gallery/79.JPG",
    date: "July 22, 2025", //Actually published on June 16
    topic: "SELF-DEVELOPMENT"
  }, /*
  {
    title: "Applications of introductory psychology.",
    content: "Using PSYCH 111 to back my self-development antics.",
    link: "posts/psych.html",
    image: "/images/psych.JPG",
    date: "June 18, 2025",
    topic: "SELF-DEVELOPMENT"
  }, */
    {
    title: "Entering the post-Switzerland era of my life.",
    content: "Never the same.",
    link: "posts/swiss.html",
    image: "/images/switz.jpg",
    date: "August 18, 2025",
    topic: "SELF-DEVELOPMENT"
  }, /*
  {
  title: "Natural curiousity, an insatiable hunger to learn, and an even stronger courage to fail.",
  content: "Triad to success.",
  link: "posts/curiosity.html",
  image: "/gallery/61.JPG",
  date: "December 4, 2025",
  topic: "SELF-DEVELOPMENT"
  }, */
    {
  title: "Commit to absolute integrity.",
  content: "There is always someone watching you.",
  link: "posts/integrity.html",
  image: "/gallery/64.JPG",
  date: "November 10, 2025", // Actually came up with the idea on December 4 lol
  topic: "SELF-DEVELOPMENT"
  }, /*
  {
  title: "Go ALL IN on yourself.",
  content: "Hyperfocus on you.",
  link: "posts/allin.html",
  image: "/gallery/153.JPG",
  date: "December 4, 2025",
  topic: "SELF-DEVELOPMENT"
  }, */
  {
  title: "Never forget who you are.",
  content: "And never change for ANYTHING.",
  link: "posts/neverforget.html",
  image: "/images/neverforget.jpg", 
  date: "October 20, 2025", // Actually came up with the idea on December 4 lol
  topic: "SELF-DEVELOPMENT"
  },
    {
  title: "Until death, defeat is psychological.",
  content: "Unstoppable under every circumstance.",
  link: "posts/death.html",
  image: "/images/canthurtme.jpg",
  date: "October 7, 2025", // Actually came up with the idea on December 4 lol
  topic: "SELF-DEVELOPMENT"
  }, /*
  {
  title: "Get out of your own way.",
  content: "The mountain is you.",
  link: "posts/way.html",
  image: "/images/buffsarah.jpg",
  date: "December 4, 2025",
  topic: "SELF-DEVELOPMENT"
  }, */
  {
  title: "You can turn your life around.",
  content: "The only way to go is up.",
  link: "posts/around.html",
  image: "/images/abayasarah.jpg",
  date: "September 4, 2025", // Actually came up with the idea on December 4 lol
  topic: "SELF-DEVELOPMENT"
  },
  {
  title: "God is always testing you to see how badly you want it.",
  content: "Can you really handle what you are wishing for?",
  link: "posts/test.html",
  image: "/images/sunsetimage.PNG",
  date: "November 24, 2025", // Actually came up with the idea on December 5 lol
  topic: "SELF-DEVELOPMENT"
  },
  /* {
  title: "Attention span recovery in the digital age.",
  content: "Relearning how to be present, intentional, and deeply alive. ",
  link: "posts/attention.html",
  image: "/gallery/106.JPG",
  date: "December 5, 2025",
  topic: "SELF-DEVELOPMENT"
  }, 
  {
  title: "I think I've lost the plot.",
  content: "Extreme crashout disguised as a candidly raw and honest post.",
  link: "posts/plot.html",
  image: "/gallery/36.JPG",
  date: "December 5, 2025",
  topic: "SELF-DEVELOPMENT"
  },
  {
  title: "Who even am I.",
  content: "Me when the existential dread hits just right.",
  link: "posts/who.html",
  image: "/gallery/95.JPG",
  date: "December 5, 2025",
  topic: "SELF-DEVELOPMENT"
  }, */
  {
  title: "When was the last time you surprised yourself with your own growth?",
  content: "MATH 217.",
  link: "posts/math217.html",
  image: "/images/math217.JPG",
  date: "December 9, 2025",
  topic: "SELF-DEVELOPMENT"
  },
  {
  title: "The beauty of not being good yet.",
  content: "The point of it all is who you become in the process.",
  link: "posts/thepoint.html",
  image: "/gallery/97.JPG",
  date: "December 14, 2025",
  topic: "SELF-DEVELOPMENT"
  },
  /*
  {
  title: "How you see life is how it is"}
  */
 {
  title: "I only ate beans and rice everyday for a year straight.",
  content: "I permanently rewired my brain towards immense gratitude.",
  link: "posts/beans.html",
  image: "/gallery/30.JPG",
  date: "December 15, 2025",
  topic: "SELF-DEVELOPMENT"
 },
 {
  title: "Softcore routines breed hardcore discipline.",
  content: "All you need is a simple routine centered around your wellness, and discpline will naturally follow.",
  link: "posts/softcore.html",
  image: "/gallery/42.JPG",
  date: "December 19, 2025",
  topic: "SELF-DEVELOPMENT"
 }

  
  
];

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
