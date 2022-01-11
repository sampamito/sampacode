import './App.css';
import Header from './Header';
import Stories from './Stories';
import Feed from './Feed';
import profile from './resources/profile.jpg'
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai"

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <Feed />
    </div>
  );
}
// parei o video com 1:14:41
export default App;
