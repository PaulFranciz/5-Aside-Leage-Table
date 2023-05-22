// Select all elements with the "animate-on-scroll" class
const elements = document.querySelectorAll(".animate-on-scroll");

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the animation class to elements in the viewport
function animateElements() {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("animate");
    }
  });
}

// Initial check on page load
animateElements();

// Add event listener to check for scrolling
window.addEventListener("scroll", animateElements);

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Adjust the threshold as needed
  const threshold = 0.3;

  return (
    rect.top >= -rect.height * threshold &&
    rect.left >= -rect.width * threshold &&
    rect.bottom <= windowHeight + rect.height * threshold &&
    rect.right <= windowWidth + rect.width * threshold
  );
}

// Function to animate elements when they enter the viewport
function animateElements() {
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
}
