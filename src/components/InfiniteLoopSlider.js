//UUID
import { v4 as uuidv4 } from 'uuid';

function InfiniteLoopSlider(props) {

    const children = props.children.map((skill) =>
        <div key={uuidv4()} className="skill-item">
            <img src={skill.image} alt={`${skill.text} logo`}></img>
            <p className="skill-title">{skill.text}</p>
        </div>
    );


    return (
        <div className="loop-slider">
            <div className={`inner ${props.type}`}>
                <div className="child-1">
                    {children}
                </div>

                <div className="child-2">
                    {children}
                </div>
            </div>
            <div className="fade"></div>
        </div>
    );
}

export default InfiniteLoopSlider;
