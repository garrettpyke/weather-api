import img from "../images/styling/home_graphic_short.jpg";
//note: image loads correctly when I change BrowserRouter in index.js to HashRouter, but Routes stop working

export default function Home() {
  return (
    <>
      <div className="home">
        <img src={img} alt="welcome image" />
        <h2>to my weather API app!</h2>
      </div>
    </>
  );
}
