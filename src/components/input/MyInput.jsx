import cl from "./MyInput.module.css"
const MyInput = ({labelName, type, value, onChange}) => {
  return (
    <div className={cl.formGroup}>
      <input type={type} placeholder="" value={value} onChange={e => onChange(e.target.value)}/>
      <label className={cl.label}>{labelName}</label>
    </div>
  );
};

export default MyInput