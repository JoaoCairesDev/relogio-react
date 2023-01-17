import React, { useEffect, useState } from "react";

export default function RelogioDigital() {
  const [Fulltime, setFulltime] = useState();
  const [Saudacao, setSaudacao] = useState();

  //Relógio

  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date();
      let horaTime = now.getHours();
      let minutoTime = now.getMinutes();
      let segundoTIme = now.getSeconds();

      if (horaTime < 10) {
        horaTime = "0" + horaTime;
      }
      if (minutoTime < 10) {
        minutoTime = "0" + minutoTime;
      }
      if (segundoTIme < 10) {
        segundoTIme = "0" + segundoTIme;
      }

      setFulltime(horaTime + ":" + minutoTime + ":" + segundoTIme);

      //saudacao
      let SaudaBoa = "";

      if (horaTime < 10) {
        SaudaBoa = "Bom Dia!";
      }
      if (horaTime > 12) {
        SaudaBoa = "Boa Tarde!";
      }
      if (horaTime > 19) {
        SaudaBoa = "Boa Noite!";
      }
      setSaudacao(SaudaBoa);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header>
        <p className="cursivaFont">{Saudacao}</p>
        <p className="DigitalFont">{Fulltime}</p>
      </header>
    </div>
  );
}
