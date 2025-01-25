import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const QuizPagination = ({
  totalQuestions,
  currentIndex,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const generatePageNumbers = () => {
    const halfPages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(0, currentIndex - halfPages);
    let endPage = Math.min(totalQuestions - 1, startPage + maxVisiblePages - 1);

    // Adjust start page to maintain consistent page count
    if (endPage === totalQuestions - 1) {
      startPage = Math.max(0, totalQuestions - maxVisiblePages);
    }

    return Array.from(
      { length: Math.min(maxVisiblePages, totalQuestions) },
      (_, i) => startPage + i
    );
  };

  return (
    <View className="flex-row justify-center items-center gap-x-2 py-1">
      {generatePageNumbers().map((pageNumber) => (
        <TouchableOpacity
          key={pageNumber}
          onPress={() => onPageChange(pageNumber)}
          className={`
            w-8 h-8 rounded 
            flex items-center justify-center
            ${pageNumber === currentIndex && "bg-red-600"}
          `}
        >
          <Text
            className={`
            font-bold
            ${pageNumber === currentIndex ? "text-white" : "text-black"}
          `}
          >
            {pageNumber + 1}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuizPagination;
