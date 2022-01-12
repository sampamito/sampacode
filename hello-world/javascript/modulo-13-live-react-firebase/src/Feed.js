import FeedForm from './FeedForm';
import FeedIcons from './FeedIcons';
import profile from './resources/profile.jpg'
import postContent from './resources/postContent.jpg'
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai"

export default function () {
    return (
        <div className="feed" >

            { /* componente de formulario do feed*/}
            <FeedForm />

            { /* componente de icones do feed */}
            <FeedIcons />

        </div>
    );
}