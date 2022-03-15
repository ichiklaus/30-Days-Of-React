let HexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return (
        <p className="intro-description">
            A random hex color picker: {'#' + color}
        </p>
    );
}

export default HexaColor;