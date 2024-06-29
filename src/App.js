import React, {useState} from "react";
import "./App.css";

const FIELD_NAME = {
  [FIELD_NAME.NAME]: "",
  [FIELD_NAME.EMAIL]: "",
  [FIELD_NAME.PASSWORD]: "",
};

const initialValues = (values) => ({
  [FIELD_NAME.NAME]: "",
  [FIELD_NAME.EMAIL]: "",
  [FIELD_NAME.PASSWORD]: "",
  ...values,
})

function App() {
  const [value, setValue] = useState(() => initialValues({color: "red"}));

  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserList([...userList, value]);

    setValue(initialValues());
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  console.log(value);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <input
            type="text"
            placeholder="Ім'я"
            name={FIELD_NAME.NAME}
            value={value[FIELD_NAME.NAME]}
            onChange={handleChange}
            />
          </div>
          <div>
            <input 
            type="email"
            placeholder="Email"
            name={FIELD_NAME.EMAIL}
            value={value[FIELD_NAME.EMAIL]}
            onChange={handleChange}
            />
          </div>
          <div>
            <input 
              type="password"
              placeholder="Пароль"
              name={FIELD_NAME.PASSWORD}
              value={value[FIELD_NAME.PASSWORD]}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Відправити</button>
        </form>

          {userList.length > 0 && (
            <ul>
              {userList.map((user, index)=> {
                <React.Fragment key={user.name}>
                  <li><User {...user} show={index === 0}/></li>
                </React.Fragment>
              })}
            </ul>
          )}
        </header>
    </div>
  );
}

function User({name, email, password, show: initialShow}) {
  const [show, setShow] = useState(initialShow);

  const toggleDetails = () => {
    setShow(!show);
  };

  console.log("render", name);

  const isShow = initialShow && show

  return (
    <React.Fragment>
      <div onClick={toggleDetails}>{name}</div>
      {isShow && (
        <ul>
          <li>Email: {email}</li>
          <li>Password: {password}</li>
        </ul>
      )}
    </React.Fragment>
  )
}

export default App;