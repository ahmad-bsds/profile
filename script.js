// Standard animation
// Initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Define the advanced animation for each category
var skillsCategories = document.querySelectorAll('.standardAnimate');

skillsCategories.forEach(function (category) {
    var skillsAnimation = gsap.timeline()
        .from(category, { opacity: 0.5, y: 100, duration: 0.5, stagger: 0.5, ease: 'power4.out' }) // Animate opacity, translateY with a stagger effect and easing

    // Create a scene for each category
    new ScrollMagic.Scene({
        triggerElement: category,
        triggerHook: 1, // Adjust this value as needed
        reverse: true // Change to true if you want the animation to reverse on scrolling up
    })
        .setTween(skillsAnimation)
        .addTo(controller);
});

// .......................................
const projects = [
    {
        title: 'Project 1',
        description: 'This is a futuristic project with amazing features.',
        image: 'project1.jpg',
    },
    {
        title: 'Project 2',
        description: 'Explore the cutting-edge technology in this project.',
        image: 'project2.jpg',
    },
    {
        title: 'Project 3',
        description: 'A glimpse into the future of innovation.',
        image: 'project3.jpg',
    },
];

const projectContainer = document.getElementById('project-container');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const image = document.createElement('img');
    image.src = project.image;
    card.appendChild(image);

    const title = document.createElement('h2');
    title.innerText = project.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.innerText = project.description;
    card.appendChild(description);

    projectContainer.appendChild(card);
});


// ..........................