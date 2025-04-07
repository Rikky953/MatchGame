const fruits = ["🍎", "🍌", "🍇", "🍉", "🍊", "🍓", "🥝", "🍍"];
 let cards = [...fruits, ...fruits]; 
 // Duplicate fruits for matching
  let flippedCards = [];
   let matchedCards = [];
    let cardElements = [];
     function shuffle(array) { return array.sort(() => Math.random() - 0.5);
     } 
     function createBoard() { 
        const board = document.getElementById("game-board");
         board.innerHTML = ""; 
         cards = shuffle(cards); 
         cardElements = []; 


         cards.forEach((fruit, index) => 
         { const card = document.createElement("div"); 
         card.classList.add("card"); 
         card.textContent = "?"; // Hide the fruit initially
          card.addEventListener("click", () => flipCard(card, fruit));
         board.appendChild(card); 
         cardElements.push({ element: card, fruit }); }); } 
         
function flipCard(card, fruit) 
{ if (flippedCards.length < 2 && !card.classList.contains("flipped")) { 
    card.classList.add("flipped"); 
    card.textContent = fruit; 
    flippedCards.push({ element: card, fruit }); 
    
if (flippedCards.length === 2) { setTimeout(checkMatch, 500); } } }


 function checkMatch() { 
    const [card1, card2] = flippedCards; 
    if (card1.fruit === card2.fruit) { card1.element.classList.add("matched");
     card2.element.classList.add("matched");
      matchedCards.push(card1, card2);
     } else { 
        card1.element.classList.remove("flipped");
         card2.element.classList.remove("flipped");
          card1.element.textContent = "?";
           card2.element.textContent = "?";
         }

          flippedCards = [];
           if (matchedCards.length === cards.length) { 
            setTimeout(() => alert("Congratulations! You matched all the fruits!"), 300); } } createBoard();