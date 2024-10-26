const phrases = {
    "hello": {
        "Hmong": "Nyob zoo",
        "Twi": "Akwabaa",
        "Igbo": "Ndewo"
    },
    "thank you": {
        "Hmong": "Ua tsaug",
        "Twi": "Medase",
        "Igbo": "Dalu"
    },
    "where is the bathroom": {
        "Hmong": "Nws nyob qhov twg",
        "Twi": "Ɛhe na ɔwɔ?",
        "Igbo": "Ebee ka ime ụlọ nsọ na?"
    },
    "help": {
        "Hmong": "Thov pab",
        "Twi": "Bɔ me mpae",
        "Igbo": "Nye m mịrị"
    },
    "I need water": {
        "Hmong": "Kuv xav tau dej",
        "Twi": "Mehia nsuo",
        "Igbo": "Achọrọ m mmiri"
    },
    "I am lost": {
        "Hmong": "Kuv ploj",
        "Twi": "Medi kan",
        "Igbo": "E jidere m"
    },
    "call for help": {
        "Hmong": "Hu kom pab",
        "Twi": "Frɛ mmoa",
        "Igbo": "Kpọọ maka enyemaka"
    },
    "is there a doctor?": {
        "Hmong": " puas muaj kws kho mob?",
        "Twi": "Ɔwɔ dɔkita bi?",
        "Igbo": "Enwekwaghị dọkịta?"
    },
    "I'm hungry": {
        "Hmong": "Kuv tshaij",
        "Twi": "Mepɛ aduan",
        "Igbo": "Echere m na m na-eri"
    },
    "I'm tired": {
        "Hmong": "Kuv quaj",
        "Twi": "M'ani agye",
        "Igbo": "Aha m na-atụ"
    },
    "please help me": {
        "Hmong": "Thov pab kuv",
        "Twi": "Mepa wo kyɛw, boa me",
        "Igbo": "Biko nyere m"
    },
    "where can I find food?": {
        "Hmong": "Kuv yuav tsum mus nrhiav zaub mov qhov twg?",
        "Twi": "Ɛhe na mɛkɔ hwehwɛ aduan?",
        "Igbo": "Ebee ka m ga-ahụ nri?"
    },
    "I need to go": {
        "Hmong": "Kuv xav mus",
        "Twi": "Mɛkɔ",
        "Igbo": "Achọrọ m ịga"
    }
};

document.getElementById("translateBtn").addEventListener("click", () => {
    const input = document.getElementById("phraseInput").value.toLowerCase().trim();
    const translation = phrases[input];
    if (translation) {
        const languages = Object.keys(translation);
        const randomLang = languages[Math.floor(Math.random() * languages.length)];
        const translatedPhrase = translation[randomLang];
        document.getElementById("result").innerHTML = `Translation (${randomLang}): ${translatedPhrase}`;
    } else {
        document.getElementById("result").innerHTML = "Phrase not found. Please try another.";
    }
});
