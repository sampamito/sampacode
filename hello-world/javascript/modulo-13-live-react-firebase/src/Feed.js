import FeedIcons from './FeedIcons';
import profile from './resources/profile.jpg'
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai"

export default function () {
    return (
        <div className="feed" >
            <div className="feedForm" >
                <img src={profile} />
                <input type="text" placeholder="No que você está pensando?" />
            </div>

            { /* componente de feed */}
            <FeedIcons />

            { /* componente de posts */}
            <div className="feedPosts" >
                <div className="feedPostSingle" >
                    <div className="feedPostSingle__profile" >
                        <img src={profile} />
                        <h3>Guilherme Sampaio</h3>
                        <p>4h</p>
                    </div>
                    <div className="feedPostSingle__content" >
                    </div>
                </div>
            </div>
        </div>
    );
}