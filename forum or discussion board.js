// script.js

// Sample posts data
const postsData = [
    { id: 1, content: "This is the first post." },
    { id: 2, content: "Here's the second post." }
];

// Function to display posts
function displayPosts() {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    postsData.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to handle form submission
document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const postContent = document.getElementById("postContent").value;
    if (postContent.trim() !== "") {
        const newPost = { id: postsData.length + 1, content: postContent };
        postsData.push(newPost);
        displayPosts();
        document.getElementById("postForm").reset();
    }
});

// Display initial posts
displayPosts();
