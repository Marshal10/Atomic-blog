import { useEffect, useState } from "react";
import { PostProvider } from "../contexts/PostContext";
import Header from "./Header";
import LightDarkBtn from "./LightDarkBtn";
import Main from "./Main";
import Footer from "./Footer";
import Archive from "./Archive";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      <LightDarkBtn isFakeDark={isFakeDark} setIsFakeDark={setIsFakeDark} />

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
