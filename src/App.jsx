import { apps } from "./data";
import "./App.css";

function App() {
  return (
    <>

      <h1>내 즐겨찾기</h1>


    <div className="container">

      {apps.map(app => (
        <a
          key={app.id}
          href={app.url}
          target="_blank"
          rel="noreferrer"
          className="card"
        >
          <img
            src={app.image}
            alt={app.name}
            className="card-image"
          />

          <div className="info">
            <h2>{app.name}</h2>
            <p>{app.description}</p>
          </div>
        </a>
      ))}
    </div>
    </>
  );
}

export default App;