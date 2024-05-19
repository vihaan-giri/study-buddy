import "./app.css";
import TopMenu from "./components/topMenu/topMenu";

export function App() {
  const websiteIcon = { width: "32px", height: "32px" };
  const MAIN_PAGE_QUOTE =
    "I'm not the smartest fellow in the world, but I sure can pick smart colleagues - F.D.R";
  return (
    <>
      <div class="logo-container">
        <div class="col-3">
          <img src="./studybuddy_titleicon.png" class="website-icon" />
        </div>
        <div class="col-9">
          <TopMenu></TopMenu>
        </div>
      </div>

      <h1 class="page-title">Study Buddy</h1>

      <div class="col-12">
        <div class="quote">{MAIN_PAGE_QUOTE}</div>
      </div>
      <div class="col-12" style="display: flex">
        <div class="col-6">
          <img
            src="./studybuddy_friends.jpg"
            style="width: 480px; height: 480px"
          />
        </div>
        <div class="col-6">
          <h1 style="align-text:center; color: azure">About</h1>
          <p class="aboutus">
            {/* 
              write under these comments
            */}
            While one's own knowledge is the step toward sucess, the art of
            accepting help is the fundamental leap towards true sucess. Here at
            Study Buddy, we believe every student deserves that helping hand to
            ascend to a higher level of learning. Our website provides all such
            nessecities; be it through tutors or our very own AI assistant.
          </p>
        </div>
      </div>

      {/* <div class="card">
        <blockquote>{MAIN_PAGE_QUOTE}</blockquote>
      </div> */}
    </>
  );
}
