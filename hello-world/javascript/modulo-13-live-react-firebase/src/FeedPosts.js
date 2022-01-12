import profile from './resources/profile.jpg'
import postContent from './resources/postContent.jpg'

export default function (props) {
    return (
        <div className="feedPosts" >
            <div className="feedPostSingle" >
                <div className="feedPostSingle__profile" >
                    <img src={profile} />
                    <h3>{props.name}<br /> <span> {props.hour} h</span></h3>
                </div>
                <div className="feedPostSingle__content" >
                    <p>{props.postContent}<br />
                        https://www.youtube.com/watch?v=mFUUCLBAsno</p>
                    <img src={postContent} />
                </div>
            </div>
        </div>
    );
}