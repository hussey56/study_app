import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
const QuizApp = () => {
  const quizData = {
    title: "General Quiz",
    questions: [
      {
        type: "simple",
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
      },
      {
        type: "paragraph",
        passage: `The Industrial Revolution was a period of major industrialization 
        and innovation during the late 18th and early 19th century. The Industrial 
        Revolution began in Great Britain and quickly spread throughout Western Europe
        and the United States. This era marked a major turning point in human history,
        fundamentally changing economic and social organization.`,
        question: "When did the Industrial Revolution begin?",
        options: [
          "Late 16th century",
          "Late 17th century",
          "Late 18th century",
          "Late 19th century",
        ],
        correctAnswer: 2,
      },
      {
        type: "statement",
        statement: "E = mc²",
        question: "This famous equation was proposed by which scientist?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Niels Bohr",
          "Max Planck",
        ],
        correctAnswer: 1,
      },
      {
        type: "simple",
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1,
      },
      {
        type: "paragraph",
        passage: `The Amazon rainforest, often referred to as the "lungs of the planet," 
        produces 20% of the world's oxygen and is home to millions of species of flora and fauna. 
        Covering much of South America, it spans across nine countries, with the largest portion 
        in Brazil. Despite its importance, it faces threats from deforestation and climate change.`,
        question:
          "Which country contains the largest portion of the Amazon rainforest?",
        options: ["Colombia", "Peru", "Brazil", "Venezuela"],
        correctAnswer: 2,
      },
      {
        type: "statement",
        statement: "The Pythagorean Theorem is expressed as a² + b² = c².",
        question: "What type of triangle does this theorem apply to?",
        options: [
          "Scalene Triangle",
          "Right Triangle",
          "Isosceles Triangle",
          "Equilateral Triangle",
        ],
        correctAnswer: 1,
      },
      {
        type: "simple",
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet",
        ],
        correctAnswer: 1,
      },
      {
        type: "paragraph",
        passage: `Photosynthesis is the process by which green plants and some other organisms use 
        sunlight to synthesize foods with the help of chlorophyll. Carbon dioxide and water are 
        converted into glucose and oxygen in this process. This essential function not only 
        sustains the plant but also provides oxygen for other living organisms.`,
        question: "What is the primary pigment involved in photosynthesis?",
        options: ["Hemoglobin", "Chlorophyll", "Carotene", "Xanthophyll"],
        correctAnswer: 1,
      },
      {
        type: "statement",
        statement: "The Great Wall of China stretches over 13,000 miles.",
        question:
          "During which dynasty was the majority of the Great Wall constructed?",
        options: ["Han Dynasty", "Ming Dynasty", "Tang Dynasty", "Qin Dynasty"],
        correctAnswer: 1,
      },
    ],
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <SafeAreaView className="flex-1 bg-black">
        <View className="flex-1 justify-center items-center p-5">
          <View className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md shadow-lg">
            <Text className="text-3xl font-bold mb-3 text-green-400 text-center">
              Quiz Complete!
            </Text>

            {/* Score Display */}
            <View className="bg-zinc-800 rounded-xl p-6 mb-6">
              <Text className="text-4xl font-bold text-center mb-2 text-white">
                {score} out of {quizData.questions.length}
              </Text>
              <Text className="text-lg text-center text-zinc-400">
                {score === quizData.questions.length
                  ? "Perfect Score!"
                  : score === 0
                  ? "Keep Practicing!"
                  : "Good Effort!"}
              </Text>
            </View>

            {/* Performance Icon */}
            <View className="mb-6 items-center">
              <Text className="text-6xl">
                {score === quizData.questions.length
                  ? "🏆"
                  : score >= quizData.questions.length / 2
                  ? "✨"
                  : "💪"}
              </Text>
            </View>

            {/* Performance Message */}
            <Text className="text-zinc-400 text-center mb-8">
              {score === quizData.questions.length
                ? "Outstanding! You've mastered this quiz!"
                : score >= quizData.questions.length / 2
                ? "Well done! Keep pushing for perfection!"
                : "Don't give up! Practice makes perfect!"}
            </Text>

            <View className="gap-y-3">
              <TouchableOpacity
                className="bg-green-500 py-4 px-8 rounded-lg w-full"
                onPress={resetQuiz}
              >
                <Text className="text-white font-bold text-lg text-center">
                  Try Again
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="border border-green-500 py-4 px-8 rounded-lg w-full"
                onPress={() => router.push("/(tabs)/home")}
              >
                <Text className="text-green-500 font-bold text-lg text-center">
                  Go to Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const currentQ = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="py-4 px-3">
        <Ionicons
          name="chevron-back"
          size={30}
          onPress={() => router.back()}
          color={"#ffffff"}
        />
      </View>
      <ScrollView className="flex-1">
        <View className="p-5">
          <Text className="text-2xl font-bold mb-5 text-white">
            {quizData.title}
          </Text>

          {/* Progress Bar */}
          <View className="h-2 bg-gray-200 rounded-full mb-2">
            <View
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </View>
          <Text className="text-sm text-slate-200 mb-6">
            Question {currentQuestion + 1} of {quizData.questions.length}
          </Text>

          {/* Question Content */}
          {currentQ.type === "paragraph" && (
            <View className="bg-white p-4 rounded-lg mb-6 shadow-sm">
              <Text
                className="text-base text-gray-700"
                style={{
                  lineHeight: 24,
                  textAlign: "justify",
                }}
              >
                {currentQ.passage.split("\n").map((paragraph, index) => (
                  <Text key={index}>{paragraph.trim()}</Text>
                ))}
              </Text>
            </View>
          )}

          {currentQ.type === "statement" && (
            <View className="bg-white p-4 rounded-lg mb-6 shadow-sm items-center">
              <Text className="text-xl font-semibold text-gray-800">
                {currentQ.statement}
              </Text>
            </View>
          )}

          <Text className="text-lg font-semibold mb-4 text-white">
            {currentQ.question}
          </Text>

          {/* Options */}
          {currentQ.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              className={`p-4 mb-3 rounded-lg border ${
                selectedAnswer === null
                  ? "bg-white border-gray-200"
                  : selectedAnswer === index
                  ? selectedAnswer === currentQ.correctAnswer
                    ? "bg-green-50 border-green-500"
                    : "bg-red-50 border-red-500"
                  : "bg-white border-gray-200"
              }`}
              onPress={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              <Text
                className={`text-base ${
                  selectedAnswer === index ? "font-semibold" : "text-gray-700"
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Next Button */}
          <TouchableOpacity
            className={`py-4 px-6 rounded-lg mt-4 items-center ${
              selectedAnswer === null
                ? "bg-gray-300"
                : `${
                    currentQuestion === quizData.questions.length - 1
                      ? "bg-red-500"
                      : "bg-blue-500"
                  }`
            }`}
            onPress={handleNext}
            disabled={selectedAnswer === null}
          >
            <Text className="text-white font-semibold text-lg">
              {currentQuestion === quizData.questions.length - 1
                ? "Finish"
                : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizApp;
