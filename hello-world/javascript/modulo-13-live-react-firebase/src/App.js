import './App.css';
import Header from './Header';
import Stories from './Stories';
import Feed from './Feed';
import FeedPosts from './FeedPosts';
import profile from './resources/profile.jpg'
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai"

function App() {
  return (
    <div className="App">

      { /* componente de header */}
      <Header />

      { /* componente de stories */}
      <Stories />

      { /* componente de feed */}
      <Feed />

      { /* componente de posts do feed 1 */}
      <FeedPosts name="Guilherme Sampaio" postContent="Como o homem aranha derrotou o Dr. Estranho!" hour="4" />

      { /* componente de posts do feed 2 */}
      <FeedPosts name="Guilherme Sampaio" postContent="Como o homem aranha derrotou o Dr. Estranho!" hour="4" />

      { /* componente de posts do feed 3 */}
      <FeedPosts name="Guilherme Sampaio" postContent="Como o homem aranha derrotou o Dr. Estranho!" hour="4" />

      { /* componente de posts do feed 4 */}
      <FeedPosts name="Guilherme Sampaio" postContent="Como o homem aranha derrotou o Dr. Estranho!" hour="4" />

    </div>
  );
}
// parei o video com 1:28:09
export default App;
