// // const cardStack = document.querySelector(".outercontainer");
const cardStacks = document.querySelectorAll(".outercontainer");
let cards = Array.from(cardStacks);

//assumptions: the mouse is always scrolled upward
function updateCardPositions() {
  cards.forEach((card, index) => {
    if (index === 0) {
      setTimeout(() => {
        card.style.transform = "translateY(-280px) scale(0.7)";
        card.style.opacity = "0.4";
      }, 100);
    } else if (index === 1) {
      setTimeout(() => {
        card.style.transform = "translateY(0) scale(1.1)";
        card.style.opacity = "1";
      }, 100);
    } else if (index === 2) {
      setTimeout(() => {
        card.style.transform = "translateY(240px) scale(0.7)";
        card.style.opacity = "0.4";
      }, 100);
    } else if (index === 3) {
      setTimeout(() => {
        card.style.transform = "translateY(-280px) scale(0)";
        card.style.opacity = "0.4";
      }, 100);
    } else if (index === 4) {
      setTimeout(() => {
        card.style.transform = "translateY(240px) scale(0)";
        card.style.opacity = "0.4";
      }, 100);
    } else {
      card.style.transform = "translateY(200%) scale(0)";
      card.style.opacity = "0";
      card.style.zIndex = "0";
    }
  });
}

function dragCard() {
  let isDragging = false;
  let startY = 0;
  let offset = 0;
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
