import { Fragment } from "react";
import "./App.css";

function App() {
  const list = [
    {id: 1, text: "Перший елемент", link: "/first"},
    {id: 2, text: "Другий елемент", link: '/second'},
    {id: 3, text: "Третій елемент", link: '/last'},
  ];

 const handleLinkClick = () => {
    return window.confirm('Вийти?');
  }

  return (
    <div className="App">
      <header onClickCapture={(e) => {
        alert('Header');
        // e.stopPropagation()
      }} className="App-header">
          {list.map((item) => (
            <Fragment key={item.id}>
              <Link {...item} />
            </Fragment>
          ))}
          <Link text="My link" link="www.google.com" getConfirm={handleLinkClick}/>
          <Input />
      </header>
    </div>
  );
}

function Link({text, link, getConfirm, onClick}) {
  const handleClick = (e) => {
    console.log(e.target);

    e.preventDefault();

    const result = getConfirm();

    if(result) {
        window.location.assign(link);
    } 
  };

  return(
    <a href={link} className="App-link" onClick={onClick || handleClick}>
      {text}
    </a>
  );
}

function Input() {
  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return <input onChange={handleInput}/>;
}

export default App;