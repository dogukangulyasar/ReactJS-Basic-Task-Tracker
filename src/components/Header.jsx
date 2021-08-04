 import Button from "./Button";
 import PropTypes from 'prop-types';
 const Header = ({title, onAdd, showAdd}) => {
     //Function when button pressed
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? "Red" : "Green"} text={showAdd ? "Close" : "Add"} onClick={onAdd}/>
        </header>
    )
}


Button.defaultProps = {
    color: 'steelblue'
}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Header
