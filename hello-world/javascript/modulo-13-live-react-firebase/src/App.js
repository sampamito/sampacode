import './App.css';
import Header from './Header';
import Stories from './Stories';
import profile from './resources/profile.jpg'
import { AiFillVideoCamera } from "react-icons/ai"

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <div className="feed">
        <div className="feedForm">
          <img src={profile} />
          <input type="text" placeholder="No que você está pensando?" />
        </div>
        <div className="feedIcons">
          <div className="iconSigle">
            <AiFillVideoCamera />
            <span>Video ao vivo</span>
          </div>
          <div className="iconSigle">
            <AiFillVideoCamera />
            <span>Video ao vivo</span>
          </div>
          <div className="iconSigle">
            <AiFillVideoCamera />
            <span>Video ao vivo</span>
          </div>

        </div>
      </div>
    </div>
  );
}
// parei o video com 1:02:01
export default App;
