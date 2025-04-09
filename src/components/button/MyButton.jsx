import cl from "./MyButton.module.css"
const MyButton = ({click}) => {
  return (<button onClick={click} className={cl.btn}>Далее</button>);
};

export default MyButton;
