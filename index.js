/*
Assignement:

This is a 3X3 Grid Matrix With 9 cards numbered 1 to 9 


1. TODO -1, Add background Colors to the Cards 1 to 9 

card 1 - #6F98A8
card 2 - #2B8EAD
card 3 - #2F454E
card 4 - #2B8EAD
card 5 - #2F454E
card 6 - #BFBFBF
card 7 - #BFBFBF
card 8 - #6F98A8
card 9 - #2F454E



2. TODO - 2, Add Code to Make the Shuffle & Sort Button Clickable
   On CLick Of Shuffle Button - It is expected to arrange the Cards 1 to 9 in an random order   
   On Click Of Sort Button - it is expected to arrange the Cards 1 to 9 in ascending order

# BONUS
- On Click Of Sort Button Twice - If the Cards are in Ascending Order then arrange them in descending order & Vice-Versa
- Use the cardData JSON to assign background colors dynamically to the different cards
- Create a Utility for Sort & Shuffle Functionality

*/


/*----------------------------------------------DATA---------------------*/
/**
 * Hardcode data contains cards details.
 */
 const cardData = [
    {
        id: "1",
        text: "1",
        bg_color:"#6F98A8"
    },
    {
        id: "2",
        text: "2",
        bg_color:"#2B8EAD"
    },
    {
        id: "3",
        text: "3",
        bg_color:"#2F454E"
    },
    {
        id: "4",
        text: "4",
        bg_color:"#2B8EAD"
    },
    {
        id: "5",
        text: "5",
        bg_color:"#2F454E"
    },
    {
        id: "6",
        text: "6",
        bg_color:"#BFBFBF"
    },
    {
        id: "7",
        text: "7",
        bg_color:"#BFBFBF"
    },
    {
        id: "8",
        text: "8",
        bg_color:"#6F98A8"
    },
    {
        id: "9",
        text: "9",
        bg_color:"#2F454E"
    }
];

/*------------------------------------helper Lib------------------------*/

(function bindEventWrapper () {
    // Get element by CSS selector:
    window.qs = function (selector, scope) {
        return (scope || document).querySelector(selector);
    };

    // addEventListener wrapper:
    window.$on = function (target, type, callback, useCapture) {
        target.addEventListener(type, callback, !!useCapture);
    };
})();


/*-----------------------------------------------View-----------------------*/

const view = {
    cardContainer: qs(".shuffle-and-Sort__cards"),
    getViewString: (cardData) => {
        let cardViews = "";
        cardData.forEach(item => {
            cardViews += `<li class="shuffle-and-Sort__card" style="background-color:${item.bg_color}">
                <span class="card-text">
                    ${item.text}
                </span>
            </li>`;
        });

        return cardViews;
    },
    render: (cardView) => {
        view.cardContainer.innerHTML =  view.getViewString(cardView);
    },
    bind: () => {
        // TODO 2 - WRITE CODE HERE
        $on(document.getElementById("suffle-btn"),"click",function(e){
            var tempCardData=cardData;
            for (var i = tempCardData.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = tempCardData[i];
            tempCardData[i] = tempCardData[j];
            tempCardData[j] = temp;
            }
            view.render(tempCardData);
        },true),

        $on(document.getElementById("sort-btn"),"click",function(e){
        cardData.sort((a,b) => cardData[0].id > 1 ? a.id-b.id : b.id-a.id );
        view.render(cardData);
        },true)

    },
    
    init: () => {
        view.bind();
        view.render(cardData);
    }
}

view.init();