import { Redirect } from "expo-router";
import "../global.css";
import { getItem } from "./utils/local_storage";
import { useEffect, useState } from "react";

const App = () => {
  const [showMe, setShowMe] = useState(null);

  const checkFirstTime = async () => {
    const onboarded = await getItem("onboarded");
    if (onboarded === "1") {
      setShowMe(true);
    } else {
      setShowMe(false);
    }
  };

  useEffect(() => {
    checkFirstTime();
  }, []);

  if (showMe === null) {
    return null;
  }

  if (showMe === true) {
    return <Redirect href={`/(auth)/sign-in`} />;
  } else {
    return <Redirect href={`/(auth)/onboarding`} />;
  }
};

export default App;
