// Sample blog posts data array
const blogPosts = [
  {
    id: 1,
    title: "5 extreme water sports to try this summer",
    content:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    poster_img: "/images/sport2.jpg", // Replace with actual image URL
    poster_username: "Admin",
    post_time: "Mar 21, 2023",
    no_of_comments: 0,
    no_of_views: 0,
    likes: 11,
  },
  {
    id: 2,
    title: "French Alps: A snowboarding wonderland",
    content:
      "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
    poster_img: "/images/sport1.jpg", // Replace with actual image URL
    poster_username: "Admin",
    post_time: "Mar 21, 2023",
    no_of_comments: 0,
    no_of_views: 0,
    likes: 7,
  },
];

// Function to render blog posts
function renderBlogPosts() {
  const blogPostsContainer = document.getElementById("blog-posts");
  blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    postElement.innerHTML = `
            <img src="${post.poster_img}" alt="${post.title}">
            <div href= class="blog-content">
                <div class="blog-meta">
                    <span><b>${post.poster_username}</b> - ${post.post_time} - 2 min</span>
                    <span><i class="fas fa-ellipsis-h"></i></span>
                </div>
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <div class="blog-meta">
                    <span>${post.no_of_views} views</span>
                    <span>${post.no_of_comments} comments</span>
                    <div class="blog-actions">
                        <span>${post.likes} <i class="fas fa-heart"></i></span>
                    </div>
                </div>
            </div>
        `;

    // Add click event listener to each post
    postElement.addEventListener("click", function () {
      // Store the post id in localStorage
      localStorage.setItem("stored_id", post.id);

      // Redirect to blog.html after 2 seconds
      setTimeout(function () {
        window.location.href = "blog.html";
      }, 2000); // 2000 milliseconds = 2 seconds
    });

    blogPostsContainer.appendChild(postElement);
  });
}

// Call the render function when the DOM is loaded
document.addEventListener("DOMContentLoaded", renderBlogPosts);
