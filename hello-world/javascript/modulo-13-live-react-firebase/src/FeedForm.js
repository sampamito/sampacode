import profile from './resources/profile.jpg'

export default function () {
    return (
        <div className="feedForm" >
            <img src={profile} />
            <input type="text" placeholder="No que você está pensando?" />
        </div>
    );
}