function grade(multipleChoiceCount, multipleChoicePoints, shortAnswerPoints, studentMultipleChoiceCorrect,
    studentShortAnswerIncorrect) {
        let score = studentMultipleChoiceCorrect * multipleChoicePoints
            + shortAnswerPoints - studentShortAnswerIncorrect;
        let maxScore = multipleChoiceCount * multipleChoicePoints + shortAnswerPoints;

        return score + " / " + maxScore
            + " (" + score / maxScore * 100 + ")";
}