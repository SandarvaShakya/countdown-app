const Button = (props) => {
    return (
        <button className={props.class} onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    text: "Button",
    handleClick: () => console.log("Clicked")
}

export default Button;