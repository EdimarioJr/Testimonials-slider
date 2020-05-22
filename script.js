const forward = document.getElementById("forward");
const previous = document.getElementById("previous");

// div that the content will be placed
const container = document.getElementById("card");

var currentPosition = 0;

console.log(container);

// seed data
const data = [
  {
    name: "Tanya Sinclair",
    profission: "UX Engineer",
    testimonial:"I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    photo: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    profission: "Junior Front-end Developer",
    testimonial:"If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    photo: "./images/image-john.jpg",
  },
];


// will assemble the card on the container div
function assembleCard(position) {
  const { name, profission, testimonial, photo } = data[position];
  container.classList.add("fadeIn")
  container.innerHTML = `
  <image alt="photo coder" class="photo" src="${photo}"></image>
  <div class="description">  
  <div class="testimonial">
        ${testimonial}
    </div>
    <div class="legend">
        <span class="name">${name}</span>
        <span class="profission">${profission}</span>
    </div>
  </div>
    
  `;
}

// removing the animation after 1 iteration
container.addEventListener("animationiteration",()=>{
    container.classList.remove("fadeIn")
})

// defining the click functions for the buttons of the slider

forward.addEventListener("click", function () {
  if (currentPosition == data.length - 1) {
    currentPosition = 0;
    assembleCard(currentPosition);
  } else {
    currentPosition++;
    assembleCard(currentPosition);
  }
});

previous.addEventListener("click", function () {
  if (currentPosition == 0) {
    currentPosition = data.length - 1;
    assembleCard(currentPosition);
  } else {
    currentPosition--;
    assembleCard(currentPosition);
  }
});

// assemble the default card

assembleCard(currentPosition)