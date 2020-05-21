const forward = document.getElementById("forward");
const previous = document.getElementById("previous");
const container = document.getElementById("card");
var currentPosition = 0;

console.log(container);

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

function assembleCard(position) {
  const { name, profission, testimonial, photo } = data[position];
  container.classList.add("fadeIn")
  container.innerHTML = `
  <image class="photo" src="${photo}"></image>
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

container.addEventListener("animationiteration",()=>{
    container.classList.remove("fadeIn")
})

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

assembleCard(currentPosition)