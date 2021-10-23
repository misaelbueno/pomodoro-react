import React, { useEffect, useState } from 'react';

function Cronometer() {
  const [seconds, setSeconds] = useState(25)
  const [message, setMessage] = useState(true);
  useEffect(() => {
    const ONE_SECOND = 1000;
    const interval = setInterval(() => {

      if(seconds === 0) {
        message ? setSeconds(6) : setSeconds(26)
        setMessage(!message)
      }
      console.log('tá rodando');
      setSeconds(seconds => seconds - 1)
    }, ONE_SECOND);

    return () => clearInterval(interval);
  }, [seconds, message])

  return (
    <h2>
      { !message && <p>Intervalo</p> }
      {seconds}
    </h2>
  )
}

export default Cronometer;
