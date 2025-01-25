import React from "react";
import { View, Text, Image } from "react-native";
import MathRenderer from "./MathRenderer";

const renderComponent = (component) => {
  switch (component.type) {
    case "text":
      return <Text className="text-md font-pregular ">{component.text}</Text>;
    case "mathText":
      return (
        <MathRenderer
          text={component.text}
          color="black"
          style={{ textAlign: "center" }}
          font={16}
        />
      );
    case "image":
      return (
        <View className="items-center">
          <Image
            source={{ uri: component.data }}
            className="w-full max-w-xs aspect-square"
            resizeMode="contain"
          />
          {component.caption && (
            <Text className="text-center text-sm mt-2">
              {component.caption}
            </Text>
          )}
        </View>
      );
    case "imageArray":
      return (
        <View className="flex-row flex-wrap justify-center">
          {component.images.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img.data }}
              className="w-1/2 aspect-square p-1"
              resizeMode="contain"
            />
          ))}
        </View>
      );
    case "graph":
      return (
        <View className="items-center">
          <Image
            source={{ uri: component.data }}
            className="w-full max-w-xs aspect-square"
            resizeMode="contain"
          />
          {component.caption && (
            <Text className="text-center text-sm mt-2">
              {component.caption}
            </Text>
          )}
        </View>
      );
    case "table":
      return (
        <View className="border border-gray-300 rounded">
          <View className="flex-row bg-gray-100 p-2">
            {component.headers.map((header, index) => (
              <Text key={index} className="flex-1 text-center font-bold">
                {header}
              </Text>
            ))}
          </View>
          {component.rows.map((row, rowIndex) => (
            <View
              key={rowIndex}
              className="flex-row border-t border-gray-300 p-2"
            >
              {row.map((cell, cellIndex) => (
                <Text key={cellIndex} className="flex-1 text-center">
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
      );
    default:
      return null;
  }
};

const McqOptionsComponent = ({ headings, A, B, C, D }) => {
  const renderOption = (label, content) => {
    const contents = Array.isArray(content) ? content : [content];
    return (
      <View className="mb-4 p-3 border border-gray-200 rounded-lg  bg-white shadow-sm">
        <View className="bg-primary-100 items-center justify-center p-1 w-8 h-8 mb-2 ">
          <Text className="text-center text-white font-pbold text-rg">
            {label}
          </Text>
        </View>
        {contents.map((component, index) => (
          <View key={index} className="mb-2">
            {renderComponent(component)}
          </View>
        ))}
      </View>
    );
  };

  return (
    <>
      <View className="py-4 px-3">
        {headings.length > 0 && (
          <View className="mb-3">
            {headings.map((heading, index) => (
              <Text key={index} className="text-xl font-pbold text-center">
                {heading}
              </Text>
            ))}
          </View>
        )}
      </View>
      <View className="py-2 px-3">
        {renderOption("A", A)}
        {renderOption("B", B)}
        {renderOption("C", C)}
        {renderOption("D", D)}
      </View>
    </>
  );
};

export default McqOptionsComponent;
