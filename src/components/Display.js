import { Textfit } from "react-textfit";
import './Display.css';

const Display = ({value}) => {
    return (
        <Textfit className="display" mode="single" max={75}>
            {value}
        </Textfit>
    )
}

export default Display;
