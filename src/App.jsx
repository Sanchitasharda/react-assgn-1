import "./App.css";
// import { Header } from "./useless/Header";
// import Social, { Footer } from "./useless/Footer";
// import Social from "./useless/Footer";
// import { Main } from "./useless/Main";
// import { Aside } from "./useless/Aside";
// import { Section } from "./useless/Section";
import Blog from "./components/news/news";
import Student from "./components/table/student";

const App = () => {
  return (
    <main>
      <div style={{ marginTop: 20, paddingBottom: 10 }}>
        <Blog />
      </div>
      <div style={{ marginTop: 30, paddingBottom: 15 }}>
        <Student />
      </div>
    </main>
  );
};
export default App;
