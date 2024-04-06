import styles from './InputFatec.module.css'

interface Props{
    type: 'text'|'email'|'phone'
    placeholder: string
}

function InputFatec({type,placeholder}:Props){
    return(
        <input className={styles.inputFatec} type={type} placeholder={placeholder}/>
    )
}

export default InputFatec