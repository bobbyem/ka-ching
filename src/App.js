import React, {useState, useEffect} from 'react';
import classes from './App.module.css';
import Layout from "./components/Layout/Layout";
import Clock from "./components/Clock/Clock";
import UserInformationInput from "./containers/UserInformation/UserInformation";
import Salary from "./components/Salary/Salary";

let count = false;

function App() {
  //State
  const [date, setDate] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [stopDate, setStopDate] = useState(null);
  const [currentSalary, setCurrentSalary] = useState(0);
  const [salaryPerSecond, setSalaryPerSecond] = useState(0);
  const [user, setUser] = useState({
    userName: "",
    userFirstName: "",
    userLastName: "",
    userAge: 0,
    userSalaryPerHour: 145,
  });

  useEffect(() => {
    setInterval (function () {
      updateDate();
    }, 1000);
  }, [])

  useEffect(() => {
    if(count) {
      let salarySoFar = (date - startDate) / 1000 * salaryPerSecond;
      console.log(salarySoFar);
      setCurrentSalary(salarySoFar);
    }

  }, [date, startDate, user, salaryPerSecond]);

  const updateDate = () =>{
    let currentDate = new Date();
    setDate(currentDate);
  }

  const shouldCountChangeHandler = () => {
    count = !count;
    if (count) {
      setStartDateHandler();
      console.log(startDate);
    };
  }

  const updateSalaryPerHour = (event) => {
    let newSalaryPerHour = event.target.value;
    let newSalaryPerSecond = newSalaryPerHour / 60 / 60;
    setUser({...user, salaryPerHour: newSalaryPerHour});
    setSalaryPerSecond(newSalaryPerSecond);
  }

  const updateUserName = (event) => {
    let newUserName = event.target.value;
    setUser({...user, userName: newUserName});
  }

  const setStartDateHandler = () => {
    let startDate = new Date();
    setStartDate(startDate);
  }

  const setStopDateHandler = () => {
    let stopDate = new Date();
    setStopDate(stopDate);
  }

  return (
    <div className={classes.App}>
      <Layout>  
        <Clock date={date}/>
        <Salary salary={currentSalary}/>
        <button onClick={shouldCountChangeHandler}>{!count ? "Start counting" : "Stop counting"}</button>
        <h1>{user.userName}</h1>
        <h1>{user.salaryPerHour} kr/hr</h1>
        <UserInformationInput updateSalary={updateSalaryPerHour} updateUserName={updateUserName}/>
      </Layout>
    </div>
  );
}

export default App;
