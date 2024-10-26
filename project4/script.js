const tongueTwisters = [
   "She sells sea shells by the sea shore.",
    "Peter Piper picked a peck of pickled peppers.",
    "How can a clam cram in a clean cream can?",
    "I saw Susie sitting in a shoeshine shop.",
    "Can you can a can as a canner can can a can?",
    "I scream, you scream, we all scream for ice cream.",
    "Six slippery snails slid slowly seaward.",
    "Fred fed Ted bread and Ted fed Fred bread.",
    "A big black bug bit a big black bear.",
    "Unique New York, unique New York, you know you need unique New York.",
    "Red lorry, yellow lorry.",
    "Toy boat, toy boat, toy boat.",
    "She sells sea shells down by the sea shore.",
    "If two witches were watching two watches, which witch would watch which watch?",
    "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t very fuzzy, was he?",
    "Betty Botter bought some butter, but she said the butter’s bitter.",
    "I thought a thought. But the thought I thought wasn’t the thought I thought I thought.",
    "I can’t believe it’s not butter!",
    "Lesser leather never weathered wetter weather better.",
    "Crisp crusts crackle and crunch.",
    "How can a clam cram in a clean cream can?",
    "A proper cup of coffee from a proper coffee pot.",
    "Silly Sally swiftly shooed seven silly sheep.",
    "Seventy seven benevolent elephants.",
    "I wish to wish the wish you wish.",
    "Eleven benevolent elephants.",
    "The sixth sick sheik's sixth sheep's sick.",
    "A canner exceedingly canny, one morning remarked to his granny.",
    "The great Greek grape growers grow great Greek grapes.",
    "Can you imagine an imaginary menagerie manager imagining managing an imaginary menagerie?",
    "The thirty-three thieves thought that they thrilled the throne throughout Thursday.",
    "She stood on the balcony, inexplicably mimicking him hiccupping, and amicably welcoming him in."
];

function getRandomTwister() {
    const randomIndex = Math.floor(Math.random() * tongueTwisters.length);
    return tongueTwisters[randomIndex];
}

document.getElementById("generate-btn").addEventListener("click", function() {
    const twister = getRandomTwister();
    document.getElementById("tongue-twister").textContent = twister;
});
