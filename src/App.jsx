import './App.css'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'

function App(){
  
  return(
    <>
      <Student name="Sponge Bob" age={18} isStudent= {false}/>
      <Student name="Patrick" age={21} isStudent={true}/>
      <Student name="Squidward" age={24} isStudent={true}/>
      <Student name="Sandy" age={28} isStudent={false}/>
      <Student/>
      <Card/>
      <Button/>
      
    </>
  );
}

export default App
