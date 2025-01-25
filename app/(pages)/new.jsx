import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import MathRenderer from "../components/MathRenderer";
import imageType from "../constants/imageType";
import { SvgXml } from "react-native-svg";
import McqOptionsComponent from "../components/OptionRenderer";
import CustomScrollIndicator from "../components/HorizontallScroller";

const sampleQuizData = {
  questions: [
    // Text Question
    {
      id: 1,
      question: [
        {
          type: "text",
          text: "What is the primary purpose of a firewall in cybersecurity?",
        },
        {
          type: "mathText",
          text: `\\( f(z) = u(x, y) + iv(x, y) \\), if \\( \\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} \\) \\( \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x} \\).`,
        },
        {
          type: "text",
          text: "Choose the correct Answer Below",
        },
        {
          type: "image",
          imageType: imageType.REMOTE_IMAGE,
          data: "https://lh7-us.googleusercontent.com/docsz/AD_4nXft63rt4UxCMywsdMvgI7UvZdjuD8-zD9U3e1tbsgiOpFGt_IB6e2q5cyCsZW_GvEWneU1mSYKeRtYdOpzAqov1FTc7-vxFHfGNn-Ba-LKoo_NiVQAXJMJXLgmZFm57k-5wr85-31Bc8YN3IdCpZV_sAspu?key=qNRk2tHXSc1Al0i1vBbvYA",
          title: "Network Topology",
          alt: "Diagram showing a network topology",
          caption: "Analyze the network topology shown above",
        },
      ],
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
      question: [
        {
          type: "text",
          text: "Given that",
        },
        {
          type: "mathText",
          text: `\\( f(z) = u(x, y) + iv(x, y) \\), if \\( \\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} \\) \\( \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x} \\). The equation \\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}\\)`,
        },
        {
          type: "text",
          text: "Calculate the time needed",
        },
      ],
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
    {
      id: 3,
      question: [
        {
          type: "text",
          text: "What option summarize the below picture more correctly?",
        },
        {
          type: "image",
          imageType: imageType.REMOTE_IMAGE,
          data: "https://lh7-us.googleusercontent.com/docsz/AD_4nXft63rt4UxCMywsdMvgI7UvZdjuD8-zD9U3e1tbsgiOpFGt_IB6e2q5cyCsZW_GvEWneU1mSYKeRtYdOpzAqov1FTc7-vxFHfGNn-Ba-LKoo_NiVQAXJMJXLgmZFm57k-5wr85-31Bc8YN3IdCpZV_sAspu?key=qNRk2tHXSc1Al0i1vBbvYA",
          title: "Network Topology",
          alt: "Diagram showing a network topology",
          caption: "Analyze the network topology shown above",
        },
      ],
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
    {
      id: 4,
      question: [
        {
          type: "text",
          text: "What is the primary purpose of a firewall in cybersecurity?",
        },
        {
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
        {
          type: "text",
          text: "Choose the correct answer from the below given options.",
        },
      ],
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
    {
      id: 5,
      question: [
        {
          type: "text",
          text: "The below chart shows analysis on attacks on digit channel in the last year",
        },
        {
          type: "graph",
          imageType: imageType.EMBEDDED_SVG,
          data: `<svg viewBox="0 0 400 200">
          <rect x="0" y="0" width="400" height="200" fill="#224BF4"/>
          <path d="M 50 150 L 350 50" stroke="#FFC0CB" fill="none" stroke-width="3"/>
          <text x="200" y="180" fill="#FFC0CB" text-anchor="middle">Time</text>
          <text x="30" y="100" fill="#FFC0CB" transform="rotate(-90 30 100)">Attacks</text>
        </svg>`,
          title: "Attack Frequency Over Time",
          alt: "Graph showing increasing attack frequency",
          caption: "Analyze the trend in cyber attacks",
        },
        {
          type: "text",
          text: "Choose the right option",
        },
      ],
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
    {
      id: 6,
      question: [
        {
          type: "text",
          text: "Analyse the given information in the table",
        },
        {
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
      ],
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
};
const NewPaper = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };
  const progress =
    ((currentQuestionIndex + 1) / sampleQuizData.questions.length) * 100;
  return (
    <SafeAreaView className="flex-1 h-full bg-[#FFFEF0]">
      <View className="py-4 px-2 w-100 bg-primary-100 flex-row items-start justify-between  ">
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={30} color={"grey"} />
        </TouchableOpacity>
        <View className="flex-1 mx-4">
          <View className="flex-row justify-between items-center">
            <Text className="font-psemibold text-white text-rg">
              {currentQuestionIndex + 1}/{sampleQuizData.questions.length}
            </Text>
            <Text className="font-pbold text-white text-xl">
              15 min
              <Text className="font-pregular text-gray-200">/40 min</Text>
            </Text>
          </View>
          <View className="h-2 bg-gray-200 rounded-full my-2">
            <View
              className="h-full bg-orange-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </View>
        </View>
        <TouchableOpacity>
          <AntDesign name="clockcircleo" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 h-[90%] p-2">
        <QuestionComponent
          currentIndex={currentQuestionIndex}
          question={sampleQuizData.questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          selectedAnswer={
            selectedAnswers[sampleQuizData.questions[currentQuestionIndex].id]
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
            <Text className="text-white ">Previous</Text>
          </TouchableOpacity>

          {currentQuestionIndex === sampleQuizData.questions.length - 1 ? (
            <TouchableOpacity
              className="px-6 py-3 rounded-lg bg-red-500"
              onPress={() => {}}
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
              <Text className="text-white">Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPaper;

const QuestionComponent = ({
  question,
  onAnswer,
  selectedAnswer,
  currentIndex,
}) => {
  const screenWidth = Dimensions.get("window").width;

  const renderQuestionContent = (content) => {
    switch (content.type) {
      case "text":
        return (
          <Text className="text-lg text-grey-100 font-psemibold ">
            {content.text}
          </Text>
        );

      case "mathText":
        return <MathRenderer text={content.text} color="black" font={15} />;

      case "image":
        return (
          <View className="my-4">
            <Text className="font-pbold mb-2 text-grey-100 text-center text-rg">
              {content.title}
            </Text>
            {content.imageType === imageType.EMBEDDED_SVG ? (
              <SvgXml xml={content.data} width="100%" />
            ) : (
              <View>
                <Image
                  source={{ uri: content.data }}
                  className="w-full h-48 rounded-lg"
                  resizeMode="contain"
                  accessible={true}
                  accessibilityLabel={content.alt}
                />
              </View>
            )}
            <Text className="text-sm mt-1 text-grey-200 text-center">
              {content.caption}
            </Text>
          </View>
        );

      case "imageArray":
        return (
          <CustomScrollIndicator className={"my-3"}>
            {content.images.map((image, index) => (
              <View
                key={index}
                className="mr-4"
                style={{ backgroundColor: "transparent" }}
              >
                <Text className="font-pbold mb-2 text-grey-100 text-rg text-center">
                  {image.title}
                </Text>
                {image.imageType === imageType.EMBEDDED_SVG ? (
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
                <Text className="text-sm mt-1 text-grey-200 text-center">
                  {image.caption}
                </Text>
              </View>
            ))}
          </CustomScrollIndicator>
        );

      case "graph":
        return (
          <View className="my-3">
            <Text className="font-pbold mb-1 text-grey-100">
              {content.title}
            </Text>
            {content.imageType === imageType.EMBEDDED_SVG ? (
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
            <Text className="text-sm mt-2 text-grey-200 text-center">
              {content.caption}
            </Text>
          </View>
        );

      case "table":
        return (
          <View
            className="border rounded-lg mb-4"
            style={{ borderColor: "grey" }}
          >
            <Text
              className="font-pbold p-2 text-slate-800"
              style={{
                backgroundColor: "transparent",
              }}
            >
              {content.title}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="p-2">
                <View className="flex-row">
                  {content.headers.map((header, index) => (
                    <Text
                      key={index}
                      className="min-w-[120px] font-pbold p-1 text-blue-600"
                    >
                      {header}
                    </Text>
                  ))}
                </View>
                {content.rows.map((row, rowIndex) => (
                  <View
                    key={rowIndex}
                    className="flex-row border-t"
                    style={{ borderColor: "grey" }}
                  >
                    {row.map((cell, cellIndex) => (
                      <Text
                        key={cellIndex}
                        className="min-w-[120px] p-2 text-grey-300"
                      >
                        {cell}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
            <Text className="text-sm p-2 text-center text-slate-700">
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
    <>
      <View className="max-h-[60%] px-2 py-1 rounded-lg">
        <View className="bg-primary-100 items-center p-1 w-8 h-8 mb-2 ">
          <Text className="text-center text-white font-pbold text-lg">
            {currentIndex + 1}
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {question.question.map((que, index) => (
            <View key={index} className="my-1">
              {renderQuestionContent(que)}
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="h-[1px] bg-[#D1D1D6] w-100 mx-1 my-2 "></View>

      <View className="flex-1  px-1 py-1">
        <ScrollView showsVerticalScrollIndicator={false}>
          <McqOptionsComponent
            headings={question.options.headings}
            A={question.options["A"]}
            B={question.options["B"]}
            C={question.options["C"]}
            D={question.options["D"]}
          />
        </ScrollView>
      </View>
    </>
  );
};
