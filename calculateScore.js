function calculateScore(userAnswers) {

    let correctAnswers = 0;

    for (let i = 0; i < userAnswers.length; i++) {

        if (userAnswers[i].result) {

            correctAnswers++;

        }

    }

    // Calculate the percentage score and round up to the nearest whole number
    let percentageScore = Math.round((correctAnswers / userAnswers.length) * 100);

    let color, message;

    if (percentageScore >= 80) { 
        color = 'green';
        message = 'Great job! You really know your genres ❤️';
    } else if (percentageScore >= 40) {
        color = 'yellow';
        message = 'Decent effort! But you can definitely improve 😉';
    } else {
        color = 'red';
        message = 'Tough times! Do you even know music? 😞';
    }
    

    return {percentageScore, color, message};

}
