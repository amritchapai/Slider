// // const cardStack = document.querySelector(".outercontainer");
const cardStacks = document.querySelectorAll(".outercontainer");
// let cards = Array.from(cardStack.children);
let cards = Array.from(cardStacks);

//assumption: the card loops around infinitely
//assumption: the ui will only respond if the cards are dragged up
function updateCardPositions() {
  cards.forEach((card, index) => {
    card.style.transition =
      "transform 0.7s cubic-bezier(0.68, 1.3, 0.27, 1), opacity 0.7s ease-out";
    if (index === 0) {
      // card.style.transform = "translateY(0) scale(1.1)";
      // card.style.opacity = "1";
      // card.style.zIndex = "1";
      setTimeout(() => {
        card.style.transform = "translateY(-280px) scale(0.7)";
        card.style.opacity = "0.4";
      }, 100);
    } else if (index === 1) {
      // card.style.transform = "translateY(600px) scale(0.7)";
      // card.style.opacity = "0.1";
      // card.style.zIndex = "2";
      setTimeout(() => {
        card.style.transform = "translateY(0) scale(1.1)";
        card.style.opacity = "1";
      }, 100);
    } else if (index === 2) {
      // card.style.transform = "translateY(800px) scale(0.7)";
      // card.style.opacity = "0";
      // card.style.zIndex = "1";
      setTimeout(() => {
        card.style.transform = "translateY(240px) scale(0.7)";
        card.style.opacity = "0.4";
      }, 100);
    } else {
      card.style.transform = "translateY(200%) scale(0.7)";
      card.style.opacity = "0";
      card.style.zIndex = "0";
    }
  });
}

function dragCard() {
  let isDragging = false;
  let startY = 0;
  let offset = 0;

  // cardStacks.addEventListener("mousedown", (e) => {
  //   if (e.target === cards[1]) {
  //     isDragging = true;
  //     startY = e.clientY;
  //   }
  // });
  cardStacks.forEach((cardStack) => {
    cardStack.addEventListener("mousedown", (e) => {
      if (e.target.closest(".outercontainer") === cardStack) {
        isDragging = true;
        startY = e.clientY;
      }
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    if (isDragging) {
      offset = e.clientY - startY;

      if (offset < -50) {
        const firstCard = cards.shift();
        cards.push(firstCard);
        updateCardPositions();
        isDragging = false;
      }
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}
updateCardPositions();
dragCard();


// function updateCardPositions() {
//   cards.forEach((card, index) => {
//     card.style.transition =
//       "transform 0.7s cubic-bezier(0.68, 1.3, 0.27, 1), opacity 0.7s ease-out";
//     if (index === 0) {
//       // Top card (scaling down and vanishing)
//       card.style.transform = "translateY(-180px) scale(0.7)";
//       card.style.opacity = "0";
//       card.style.zIndex = "0";
//     } else if (index === 1) {
//       // Second card (moving to top position)
//       card.style.transform = "translateY(0) scale(1.1)";
//       card.style.opacity = "1";
//       card.style.zIndex = "1";
//     } else if (index === 2) {
//       // Third card (middle)
//       card.style.transform = "translateY(180px) scale(0.9)";
//       card.style.opacity = "0.4";
//       card.style.zIndex = "2";
//     } else if (index === 3) {
//       // Fourth card (bottom)
//       card.style.transform = "translateY(360px) scale(0.7)";
//       card.style.opacity = "0.1";
//       card.style.zIndex = "1";
//     }
//   });
// }

// function dragCard() {
//   let isDragging = false;
//   let startY = 0;
//   let offset = 0;

//   cardStacks.forEach((cardStack) => {
//     cardStack.addEventListener("mousedown", (e) => {
//       if (e.target.closest(".outercontainer") === cardStack) {
//         isDragging = true;
//         startY = e.clientY;
//       }
//     });
//   });

//   document.addEventListener("mousemove", (e) => {
//     if (!isDragging) return;
//     offset = e.clientY - startY;

//     if (offset < -50) {
//       // Adjust threshold as needed
//       const firstCard = cards.shift();
//       cards.push(firstCard);
//       updateCardPositions();
//       isDragging = false; // Reset dragging state after swap
//     }
//   });

//   document.addEventListener("mouseup", () => {
//     isDragging = false;
//   });
// }

// updateCardPositions();
// dragCard();
