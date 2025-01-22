import styles from "./style.module.css";

export default function Button(props) {
    return (
        <button {...props} className={styles.btn}>{props.children}</button>
    );
}