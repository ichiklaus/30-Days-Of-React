
const Button = ({ onClick, text, style}) => {
    return (
        <button onClick={onClick} style={style} className={"button button--submit mt-2"}>
            {text}
        </button>
    )
  };

  export default Button;