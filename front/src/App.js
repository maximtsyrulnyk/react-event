import { useState, useEffect } from "react";

import Page from "./component/page";
import PostList from "./container/post-list";

function App() {
  const [location, setLocation] = useState({x: 0, y: 0});

  useEffect(() => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
        },
        (error) => {
          console.error("Помилка отримання геолокації:", error.message);
        }
      );
    } else {
      console.error("Геолокація не підтримується в цьому браузері.")
    }
  }, []);

  return (
    <Page>
        {location ? (
          <div>
            <h2>Ваша геолокація:</h2>
            <p>Широта: {location.latitude}</p>
            <p>Довгота: {location.longitude}</p>
          </div>
        ): (
          <p>Отримання геолокації...</p>
        )}
        {/* <PostList /> */}
    </Page>
  );
}

export default App;