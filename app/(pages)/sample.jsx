const ImageType = {
  EMBEDDED_SVG: "embeddedSvg",
  BASE64_IMAGE: "base64Image",
  REMOTE_IMAGE: "remoteImage",
};

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import MathRenderer from "../components/MathRenderer";
import { StatusBar } from "expo-status-bar";
import { SvgXml } from "react-native-svg";
// import MathView from "react-native-math-view";
// import MathWithText from "../components/FlexibleMath";
const sampleQuizData = {
  questions: [
    // Text Question
    {
      id: 1,
      question: {
        type: "text",
        text: "What is the primary purpose of a firewall in cybersecurity?",
      },
      options: {
        type: "mcqOptions",
        headings: ["Choose the correct answer"],
        A: { type: "text", text: "Virus scanning" },
        B: { type: "text", text: "Network traffic filtering" },
        C: { type: "text", text: "Data encryption" },
        D: { type: "text", text: "Password management" },
      },
      correctAnswer: "B",
    },
    // Math Question
    {
      id: 2,
      question: {
        type: "mathText",
        text: `<p> \\( f(z) = u(x, y) + iv(x, y) \\), if \\( \\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} \\) \\( \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x} \\).</p>`,
      },
      options: {
        type: "mcqOptions",
        headings: ["Calculate the time needed"],
        A: {
          type: "mathText",
          text: "<p>The value \\(10^3 \\text{ seconds}\\)</p>",
        },
        B: {
          type: "mathText",
          text: "<p>The value \\(10^6 \\text{ seconds}\\)</p>",
        },
        C: {
          type: "mathText",
          text: "<p>The value \\(10^9 \\text{ seconds}\\)</p>",
        },
        D: {
          type: "mathText",
          text: "<p>The value \\(10^{12} \\text{ seconds}\\)</p>",
        },
      },
      correctAnswer: "B",
    },
    // Single Image Question
    {
      id: 3,
      question: {
        type: "image",
        imageType: ImageType.REMOTE_IMAGE,
        data: "https://lh7-us.googleusercontent.com/docsz/AD_4nXft63rt4UxCMywsdMvgI7UvZdjuD8-zD9U3e1tbsgiOpFGt_IB6e2q5cyCsZW_GvEWneU1mSYKeRtYdOpzAqov1FTc7-vxFHfGNn-Ba-LKoo_NiVQAXJMJXLgmZFm57k-5wr85-31Bc8YN3IdCpZV_sAspu?key=qNRk2tHXSc1Al0i1vBbvYA",
        title: "Network Topology",
        alt: "Diagram showing a network topology",
        caption: "Analyze the network topology shown above",
      },
      options: {
        type: "mcqOptions",
        headings: ["Identify the vulnerability in this network setup"],
        A: { type: "text", text: "No firewall" },
        B: { type: "text", text: "Single point of failure" },
        C: { type: "text", text: "Unsecured ports" },
        D: { type: "text", text: "Redundant connections" },
      },
      correctAnswer: "B",
    },
    // Image Array Question
    {
      id: 4,
      question: {
        type: "imageArray",
        images: [
          {
            type: "image",
            imageType: ImageType.REMOTE_IMAGE,
            data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXgKow7Veej6v-G1BxapTxnL5q3j_JqE-yCk58d4IHXzbq_auTxisMlZBUL1xIr5E0KQ&usqp=CAU",
            title: "Attack Pattern 1",
            alt: "First attack pattern",
            caption: "DDoS Attack Pattern",
          },
          {
            type: "image",
            imageType: ImageType.REMOTE_IMAGE,
            data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXgKow7Veej6v-G1BxapTxnL5q3j_JqE-yCk58d4IHXzbq_auTxisMlZBUL1xIr5E0KQ&usqp=CAU",
            title: "Attack Pattern 2",
            alt: "Second attack pattern",
            caption: "Brute Force Attack Pattern",
          },
          {
            type: "image",
            imageType: ImageType.REMOTE_IMAGE,
            data: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPXgKow7Veej6v-G1BxapTxnL5q3j_JqE-yCk58d4IHXzbq_auTxisMlZBUL1xIr5E0KQ&usqp=CAU",
            title: "Attack Pattern 3",
            alt: "Third attack pattern",
            caption: "Man-in-the-Middle Attack Pattern",
          },
        ],
      },
      options: {
        type: "mcqOptions",
        headings: [
          "Which attack pattern shows a distributed denial of service?",
        ],
        A: { type: "text", text: "Pattern 1" },
        B: { type: "text", text: "Pattern 2" },
        C: { type: "text", text: "Pattern 3" },
        D: { type: "text", text: "None of the above" },
      },
      correctAnswer: "A",
    },
    // Graph Question
    {
      id: 5,
      question: {
        type: "graph",
        imageType: ImageType.EMBEDDED_SVG,
        data: `<svg viewBox="0 0 400 200">
          <rect x="0" y="0" width="400" height="200" fill="#1a1a1a"/>
          <path d="M 50 150 L 350 50" stroke="#00ff00" fill="none" stroke-width="2"/>
          <text x="200" y="180" fill="#00ff00" text-anchor="middle">Time</text>
          <text x="30" y="100" fill="#00ff00" transform="rotate(-90 30 100)">Attacks</text>
        </svg>`,
        xLabel: "Time",
        yLabel: "Number of Attacks",
        title: "Attack Frequency Over Time",
        alt: "Graph showing increasing attack frequency",
        caption: "Analyze the trend in cyber attacks",
      },
      options: {
        type: "mcqOptions",
        headings: ["What does the trend indicate?"],
        A: { type: "text", text: "Decreasing attacks" },
        B: { type: "text", text: "Steady attack rate" },
        C: { type: "text", text: "Increasing attacks" },
        D: { type: "text", text: "Periodic attack pattern" },
      },
      correctAnswer: "C",
    },
    // Table Question
    {
      id: 6,
      question: {
        type: "table",
        renderingTemplate: 1,
        headers: [
          "Attack Type",
          "Frequency",
          "Average Impact",
          "Detection Rate",
        ],
        rows: [
          ["SQL Injection", "High", "Severe", "75%"],
          ["XSS", "Medium", "Moderate", "85%"],
          ["CSRF", "Low", "High", "60%"],
          ["Buffer Overflow", "Medium", "Critical", "90%"],
        ],
        title: "Common Attack Statistics",
        alt: "Table of attack statistics",
        caption: "Which attack type has the highest detection rate?",
      },
      options: {
        type: "mcqOptions",
        headings: ["Based on the data in the table"],
        A: { type: "text", text: "SQL Injection" },
        B: { type: "text", text: "XSS" },
        C: { type: "text", text: "CSRF" },
        D: { type: "text", text: "Buffer Overflow" },
      },
      correctAnswer: "D",
    },
  ],
}; // Constants for colors
const COLORS = {
  primary: "#00FF00", // Bright green
  primaryDark: "#00CC00", // Darker green
  background: "#000000", // Black
  surface: "#121212", // Slightly lighter black for cards
  text: "#FFFFFF", // White text
  textSecondary: "#88FF88", // Light green text
  border: "#1F1F1F", // Dark gray border
  success: "#00FF00", // Green for correct answers
  error: "#FF0000", // Red for wrong answers
  disabled: "#333333", // Disabled state
};

const SampleApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };
  const [showResults, setShowResults] = useState(false);

  const calculateScore = () => {
    let score = 0;
    sampleQuizData.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: COLORS.background }}
    >
      <StatusBar style="light" />
      <ScrollView className="flex-1 p-4">
        {!showResults ? (
          <View>
            <Text className="text-xl font-bold mb-4 text-slate-200">
              Question {currentQuestionIndex + 1} of{" "}
              {sampleQuizData.questions.length}
            </Text>
            <QuestionComponent
              question={sampleQuizData.questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              selectedAnswer={
                selectedAnswers[
                  sampleQuizData.questions[currentQuestionIndex].id
                ]
              }
            />
            <View className="flex-row justify-between mt-6">
              <TouchableOpacity
                className={`px-4 py-3 rounded-lg ${
                  currentQuestionIndex === 0 ? "bg-slate-500" : "bg-green-600"
                }`}
                onPress={() =>
                  setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                }
                disabled={currentQuestionIndex === 0}
              >
                <Text style={{ color: COLORS.text }}>Previous</Text>
              </TouchableOpacity>

              {currentQuestionIndex === sampleQuizData.questions.length - 1 ? (
                <TouchableOpacity
                  className="px-6 py-3 rounded-lg bg-red-500"
                  onPress={() => setShowResults(true)}
                >
                  <Text className="text-white">Finish</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className={`px-6 py-3 rounded-lg bg-green-600`}
                  onPress={() =>
                    setCurrentQuestionIndex((prev) =>
                      Math.min(sampleQuizData.questions.length - 1, prev + 1)
                    )
                  }
                >
                  <Text style={{ color: COLORS.text }}>Next</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ) : (
          <ResultsComponent
            score={calculateScore()}
            totalQuestions={sampleQuizData.questions.length}
            onRetry={() => {
              setShowResults(false);
              setCurrentQuestionIndex(0);
              setSelectedAnswers({});
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const QuestionComponent = ({ question, onAnswer, selectedAnswer }) => {
  const screenWidth = Dimensions.get("window").width;

  const renderQuestionContent = (content) => {
    switch (content.type) {
      case "text":
        return <Text className="text-lg text-slate-100 ">{content.text}</Text>;

      case "mathText":
        return <MathRenderer text={content.text} color="white" font={16} />;

      case "image":
        return (
          <View className="mb-4">
            <Text className="font-bold mb-2 text-slate-100">
              {content.title}
            </Text>
            {content.imageType === ImageType.EMBEDDED_SVG ? (
              <SvgXml xml={content.data} width="100%" />
            ) : (
              <View style={{ backgroundColor: COLORS.surface }}>
                <Image
                  source={{ uri: content.data }}
                  className="w-full h-48 rounded-lg"
                  resizeMode="contain"
                  accessible={true}
                  accessibilityLabel={content.alt}
                />
              </View>
            )}
            <Text className="text-sm mt-1 text-slate-200">
              {content.caption}
            </Text>
          </View>
        );

      case "imageArray":
        return (
          <ScrollView
            horizontal
            className="mb-4"
            showsHorizontalScrollIndicator={false}
          >
            {content.images.map((image, index) => (
              <View
                key={index}
                className="mr-4"
                style={{ backgroundColor: COLORS.surface }}
              >
                <Text className="font-bold mb-2 text-slate-100">
                  {image.title}
                </Text>
                {image.imageType === ImageType.EMBEDDED_SVG ? (
                  <SvgXml xml={image.data} width={screenWidth * 0.8} />
                ) : (
                  <Image
                    source={{ uri: image.data }}
                    className="w-64 h-48 rounded-lg"
                    resizeMode="contain"
                    accessible={true}
                    accessibilityLabel={image.alt}
                  />
                )}
                <Text className="text-sm mt-1 text-slate-200 text-center">
                  {image.caption}
                </Text>
              </View>
            ))}
          </ScrollView>
        );

      case "graph":
        return (
          <View className="mb-4">
            <Text className="font-bold mb-2 text-slate-100">
              {content.title}
            </Text>
            {content.imageType === ImageType.EMBEDDED_SVG ? (
              <SvgXml xml={content.data} width="100%" />
            ) : (
              <Image
                source={{ uri: content.data }}
                className="w-full h-48 rounded-lg"
                resizeMode="contain"
                accessible={true}
                accessibilityLabel={content.alt}
              />
            )}
            <View className="flex-row justify-between mt-2">
              <Text className="text-blue-400">X : {content.xLabel}</Text>
              <Text className="text-yellow-400">Y : {content.yLabel}</Text>
            </View>
            <Text className="text-sm mt-2 text-slate-200">
              {content.caption}
            </Text>
          </View>
        );

      case "table":
        return (
          <View
            className="border rounded-lg mb-4"
            style={{ borderColor: COLORS.border }}
          >
            <Text
              className="font-bold p-2 text-slate-200"
              style={{
                backgroundColor: COLORS.surface,
              }}
            >
              {content.title}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="p-2">
                <View
                  className="flex-row"
                  style={{ backgroundColor: COLORS.surface }}
                >
                  {content.headers.map((header, index) => (
                    <Text
                      key={index}
                      className="min-w-[120px] font-bold p-2 text-green-400"
                    >
                      {header}
                    </Text>
                  ))}
                </View>
                {content.rows.map((row, rowIndex) => (
                  <View
                    key={rowIndex}
                    className="flex-row border-t"
                    style={{ borderColor: COLORS.border }}
                  >
                    {row.map((cell, cellIndex) => (
                      <Text
                        key={cellIndex}
                        className="min-w-[120px] p-2"
                        style={{ color: COLORS.text }}
                      >
                        {cell}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
            <Text className="text-sm p-2 text-yellow-300">
              {content.caption}
            </Text>
          </View>
        );

      default:
        return (
          <Text style={{ color: COLORS.text }}>Unsupported question type</Text>
        );
    }
  };

  const renderOption = (optionKey, optionContent) => {
    const isSelected = selectedAnswer === optionKey;

    return (
      <TouchableOpacity
        key={optionKey}
        className={`p-4 mb-3 rounded-lg border`}
        style={{
          backgroundColor: isSelected ? COLORS.primaryDark : COLORS.surface,
          borderColor: isSelected ? COLORS.primary : COLORS.border,
        }}
        onPress={() => onAnswer(question.id, optionKey)}
      >
        <View className="flex-row items-center">
          <Text
            className="font-bold mr-2"
            style={{ color: COLORS.textSecondary }}
          >
            {optionKey}.
          </Text>
          <View className="flex-1">{renderQuestionContent(optionContent)}</View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      className="p-4 rounded-lg shadow"
      style={{ backgroundColor: COLORS.surface }}
    >
      {question.question.type == "mathText" ? (
        <MathRenderer text={question.question.text} color="white" font={18} />
      ) : (
        renderQuestionContent(question.question)
      )}
      <View className="mt-4">
        <Text className="font-bold mb-2 text-slate-200">
          {question.options.headings[0]}
        </Text>
        {["A", "B", "C", "D"].map((optionKey) =>
          renderOption(optionKey, question.options[optionKey])
        )}
      </View>
    </View>
  );
};

const ResultsComponent = ({ score, totalQuestions, onRetry }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <View
      className="p-6 rounded-lg shadow"
      style={{ backgroundColor: COLORS.surface }}
    >
      <Text
        className="text-2xl font-bold mb-4 text-center"
        style={{ color: COLORS.textSecondary }}
      >
        Quiz Results
      </Text>
      <Text className="text-lg mb-2 text-center" style={{ color: COLORS.text }}>
        You scored {score} out of {totalQuestions}
      </Text>
      <Text
        className="text-xl font-bold mb-6 text-center"
        style={{ color: COLORS.primary }}
      >
        {percentage}%
      </Text>
      <TouchableOpacity
        className="px-6 py-3 rounded-lg"
        style={{ backgroundColor: COLORS.primary }}
        onPress={onRetry}
      >
        <Text
          className="font-semibold text-center"
          style={{ color: COLORS.background }}
        >
          Try Again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SampleApp;
