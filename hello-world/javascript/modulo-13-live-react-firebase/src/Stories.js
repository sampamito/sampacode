import imgStories from './resources/stories1.jpg'

export default function () {
    return (
        <div className="stories">
            <div className="storiesCard" style={{ backgroundImage: `url(${imgStories})` }}>
                <p>Gui Sampaio</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${imgStories})` }}>
                <p>Gui Sampaio</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${imgStories})` }}>
                <p>Gui Sampaio</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${imgStories})` }}>
                <p>Gui Sampaio</p>
            </div>
            <div className="storiesCard" style={{ backgroundImage: `url(${imgStories})` }}>
                <p>Gui Sampaio</p>
            </div>
        </div>
    );
}