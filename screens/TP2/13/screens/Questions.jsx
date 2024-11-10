import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Question } from "../components/Question";

export function Questions({ navigation, route }) {
  const [questions, setQuestions] = useState(
    route.params.questions.map((question) => ({
      ...question,
      userAnswer: null,
    }))
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const currentQuestionData = questions[currentQuestion] ?? {};

  function handleAnswer(answer) {
    setQuestions((prevState) =>
      prevState.map((question) => {
        if (question.id === questions[currentQuestion].id) {
          question.userAnswer = answer;
        }

        return question;
      })
    );
  }

  function handleFinish() {
    navigation.navigate("Result", {
      result: {
        points: questions.reduce((acc, question) => {
          return question.correct === question.userAnswer ? acc + 5 : acc;
        }, 0),
        maxPoints: questions.length * 5,
      },
    });
  }

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>
        {currentQuestion + 1} / {questions.length}
      </Text>

      <Question
        key={currentQuestionData.id}
        title={currentQuestionData.title}
        options={currentQuestionData.options}
        correct={currentQuestionData.correct}
        userAnswer={currentQuestionData.userAnswer}
        onAnswer={handleAnswer}
      />

      <TouchableOpacity
        style={{
          ...styles.nextBtn,
          opacity: currentQuestionData.userAnswer ? 1 : 0.5,
        }}
        disabled={!currentQuestionData.userAnswer}
        onPress={() => {
          if (isLastQuestion) {
            handleFinish();
            return;
          }

          setCurrentQuestion((prev) => prev + 1);
        }}
      >
        <Text style={styles.btnText}>
          {isLastQuestion ? "Finalizar" : "Próxima"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  progressText: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "flex-end",
    color: "blue",
    fontWeight: "bold",
  },
  nextBtn: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  startBtn: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 26,
    marginTop: 40,
    borderRadius: 5,
    alignSelf: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: 18,
  },
});
