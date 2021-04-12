import s from './Button.module.scss';

function Button(props) {
    return (
        <button className={s.btn}>
            {props.title}
        </button>
    );
}

export default Button;