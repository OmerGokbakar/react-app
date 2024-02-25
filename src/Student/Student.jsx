import styles from './Student.module.css'
import PropTypes from 'prop-types'


function Student(props){
    
    return(
        <div className={styles.student}>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
/* Type Control Elements */
Student.PropTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}
/* Default Elements */
Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false,
}

export default Student 