let fakeGenres = ["Neon Baroque", "Quantum Funk", "BioSynthwave", "Pastel Grunge", "Agricore", "Hyperfolk", "Post-Shoegraze", "Dreamstep", "Hauntwave", "Glitchgrass", "Chiptune Gospel", "Lo-Fi Yodel", "Dronegrass", "Kawaii Doom", "Vaporchant", "Algorithmic Jazz", "Dungeonwave", "Emo Polka", "Trap Waltz", "Acid Ragtime", "Neo-Sea Shanty", "Cloudstep", "Garage Opera", "Minimalist Screamo", "Antigravity Blues", "Pixelpunk", "Slowcore Trance", "Bitcrush Blues", "Hologram Swing", "Cottagecore Trap", "Retrofuture Funk", "Darkwave Calypso", "Ambient Mariachi", "Math Cabaret", "Noise Waltz", "Cybergrass", "Space Gospel", "Post-Dubstep Folk", "Quantum Ska", "Holographic Punk", "Liminal Jazz", "Chamberstep", "Haunted House", "Pastelcore Metal", "Crystalwave", "Neo-Primitive Beats", "Steamtrap", "WiFi Jazz", "Trancegrass", "Molecular Pop", "Astro Disco", "Emoji Punk", "Cloud Punk", "Neo-Klezmer Trap", "VHSwave", "Orchestral Lo-Fi", "Nanocore", "Fractal Funk", "Psycho Barbershop", "Dronegrass Revival", "Industrial Bossa Nova", "Lo-Fi Gospelcore", "Ambient Polka", "Algorithmic Doo-Wop", "Vaporfolk", "Toxic Waltz", "Pixel Samba", "Hyperchant", "Coffeeshop Grindcore", "Post-Apocalyptic Blues", "Lullaby Punk", "Minimalist Zydeco", "Augmented Reality Metal", "Cottage Synth", "Slow-Fi House", "Neon Ragtime", "Solar Reggae", "Techno Yodel", "K-Pop Noir", "Drone Disco", "Artificial Folk", "Retro Anime Jazz", "Vegan Thrash", "Bitwave", "Catstep", "Deep Space Ska", "VHS Punk", "Neo-Tin Pan Alley", "Softcore Doom", "8-Bit Flamenco", "AI Emo", "Celestial Cumbia", "Hologram Folk", "Post-Chillwave", "Bubblegum Noir", "Quantum Reggae", "Surf Doom", "Noise Tango", "Pixel Polka", "Pastel Thrash", "Bio-Metal", "Future Zydeco", "Drone Samba", "Algorithmic Marching Band", "Bedroom Orchestra", "Unknown Music", "Orchestra Thrash", "Pink Noise"];
let realGenres = ["Musique Concrète", "Steampunk", "Onkyokei", "Liwa", "Vandeville", "Hokum Blues", "Apala", "Gnawa", "Kapuka", "Sakara", "Coupé-Décalé", "Palm-Wine", "Morlam", "Semba", "Zouglou", "Mbaqanga", "Mbube", "Marrabenta", "Maloya", "Mbalax", "Morna", "Negro Spiritual", "Fann At-Tanbura", "Fijiri", "Lingala", "Chimurenga", "Cape Jazz", "Bikutsi", "Benga", "Bongo Flava", "Afro-House", "Afro-Beat", "African Heavy Metal", "Anison", "Kayōkyoku", "Khaliji", "Taiwanese Pop", "Sawt", "Dangdut", "Filmi", "Pinoy Pop", "Ragini", "Pop Sunda", "Lavani", "Luk Thung", "Manila Sound", "Piphat", "Taarab", "Rebetika", "Laiko", "Entechno", "Schlager", "Yacht Rock", "Wonky Pop", "Space Age Pop", "Dream Pop", "Chamber Pop", "Louisiana Swamp Pop", "Orchestral Pop", "Sunshine Pop", "Synthpunk", "Math Rock", "Noise Rock", "Pagan Rock", "Gothic Metal", "Stoner Metal", "Technical Death Metal", "Grindcore", "Pornogrind", "Pagan Metal", "Psychobilly", "Oi!", "Occult Rock", "Paisley Underground", "Post-punk revival", "Queercore", "Powerviolence", "Raga Rock", "Rock Against Communism", "Neo-Soul", "Cloud Rap", "Crunkcore", "Mafioso Rap", "Chap Hop", "Phonk", "Plugg", "Brooklyn Drill", "Shangaan Electro", "Budots", "Drone", "Drone Doom", "Onryōka", "Far-Western Classical", "Islamic Nasheed", "Swiss Yodeling", "Mongolian Throat Singing", "Tuvan Throat Singing", "Georgian Polyphony", "Gnossienne", "Gregorian Chant", "Shomyo", "Bugaku", "Noh", "Kathak", "Carnatic Music", "Gagaku", "Ligeti-Style Micropolyphony", "Spectral Music"];

let genres = fakeGenres.concat(realGenres);

// Create an array to store user answers
let userAnswers = [];

function getRandomGenre() {
    if (genres.length === 0) {
        return null;
    }
    let randomIndex = Math.floor(Math.random() * genres.length);
    let randomGenre = genres[randomIndex];
    genres.splice(randomIndex, 1);
    return randomGenre;
}

function checkAnswer(userChoice, randomGenre, questionNumber) {
    const isFakeGenre = fakeGenres.includes(randomGenre);
    const isRealGenre = realGenres.includes(randomGenre);
    const resultElement = document.getElementById("result");

    let isCorrect = (userChoice === "fake" && isFakeGenre) || (userChoice === "real" && isRealGenre);

    // Store the user's answer and the result
    userAnswers.push({ question: randomGenre, answer: userChoice, result: isCorrect });

    if (isCorrect) {
        resultElement.innerText = `Correct! It was ${isRealGenre ? "real" : "fake"}.`;
    } else {
        resultElement.innerText = `Wrong! It was ${isRealGenre ? "real" : "fake"}.`;
    }

    setTimeout(() => {
        resultElement.innerText = "";

        if (questionNumber < 10 && genres.length > 0) {
            askNextQuestion(questionNumber + 1);
        } else {
            // Hide the genre buttons and question
            document.getElementById("real-button").style.display = "none";
            document.getElementById("fake-button").style.display = "none";
            document.getElementById("genre").style.display = "none";
            document.getElementById("question").style.display = "none";

            // Show DONE message above Check Results button
            document.getElementById("done-message").style.display = "block";
            document.getElementById("results-button").style.display = "block";
        }
    }, 1000);
}

function askNextQuestion(questionNumber) {
    let randomGenre = getRandomGenre();

    if (randomGenre === null) {
        document.getElementById("result").innerText = "No more genres left. Game Over!";
        return;
    }

    document.getElementById("genre").textContent = randomGenre;

    const realButton = document.getElementById("real-button");
    realButton.onclick = () => checkAnswer("real", randomGenre, questionNumber);

    const fakeButton = document.getElementById("fake-button");
    fakeButton.onclick = () => checkAnswer("fake", randomGenre, questionNumber);
}

// Hide the results button at the start of the game
document.getElementById("results-button").style.display = "none";

// Add an event listener to the results button
document.getElementById("results-button").onclick = function () {
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    window.open('resultspage.html', '_blank');
};

askNextQuestion(1);
