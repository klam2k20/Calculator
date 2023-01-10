import './Button.css';

const Button = ({className, value, onClickHandler}) => {
    return (
        <button className={className} onClick={onClickHandler}>
            {value}
        </button>
    )
}

export default Button;