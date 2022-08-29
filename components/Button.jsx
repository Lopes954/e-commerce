const Button = ({ label, onClick, classList, disabled = false }) => {
    return (
      <button className={classList} onClick={onClick} disabled={disabled} >
        {label}
      </button>
    );
  };
  
  export default Button;
  