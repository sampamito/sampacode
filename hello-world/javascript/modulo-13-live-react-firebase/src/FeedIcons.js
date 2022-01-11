import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai"

export default function () {
    return (
        <div className="feedIcons" >
            <div className="iconSingle">
                <AiFillVideoCamera />
                <span>Video Ao Vivo</span>
            </div>
            <div className="iconSingle img">
                <AiOutlineFileImage />
                <span>Video Ao Vivo</span>
            </div>
            <div className="iconSingle emoji">
                <AiOutlineMeh />
                <span>Video Ao Vivo</span>
            </div>
        </div>
    );
}