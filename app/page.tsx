'use client'
import React, { useEffect } from "react";
import './globals.css';


type CSSVarStyle = React.CSSProperties & {
  "--t"?: string;
  "--i"?: string | number;
};

const delayStyle = (value: string): CSSVarStyle => ({ "--t": value });
const indexStyle = (value: number): CSSVarStyle => ({ "--i": value });

export default function Home() {
  useEffect(() => {
    const datetxt = "11 Dec";
    const datatxtletter =
      "  Congratulations! Rachna You’ve officially reached the age where your back goes out more than you do. Don’t worry… you’re not getting older, you’re just increasing in value like vintage wine (or expired milk — depends on the day).                ";
    const titleLetter = "To you";

    const charArrDate = datetxt.split("");
    const charArrDateLetter = datatxtletter.split("");
    const charArrTitle = titleLetter.split("");

    let currentIndex = 0;
    let currentIndexLetter = 0;
    let currentIndexTitle = 0;

    const timeouts: number[] = [];
    const intervals: number[] = [];

    const dateOfBirth = document.querySelector<HTMLElement>(".date__of__birth span");
    const textLetter = document.querySelector<HTMLElement>(".text__letter p");
    const titleLetterEl = document.querySelector<HTMLElement>(".title__letter");
    const boxLetter = document.querySelector<HTMLElement>(".box__letter");
    const letterBorder = document.querySelector<HTMLElement>(".letter__border");
    const hearts = Array.from(document.querySelectorAll<HTMLElement>(".heart"));
    const heartLetter = document.querySelector<HTMLElement>("#heart__letter");
    const loveImg = document.querySelector<HTMLElement>(".love__img");
    const mewmew = document.querySelector<HTMLElement>("#mewmew");
    const btnLetter = document.querySelector<HTMLButtonElement>("#btn__letter");
    const closeButtons = Array.from(document.querySelectorAll<HTMLElement>(".close"));

    const startDateAnimation = () => {
      if (!dateOfBirth) return;
      const intervalId = window.setInterval(() => {
        if (currentIndex < charArrDate.length) {
          dateOfBirth.textContent = (dateOfBirth.textContent || "") + charArrDate[currentIndex];
          currentIndex += 1;
        } else {
          const star = document.createElement("i");
          star.className = "fa-solid fa-star";
          const dateWrapper = document.querySelector(".date__of__birth");
          dateWrapper?.prepend(star);
          dateWrapper?.append(star.cloneNode(true));
          window.clearInterval(intervalId);
        }
      }, 100);

      intervals.push(intervalId);
    };

    timeouts.push(window.setTimeout(startDateAnimation, 12000));

    const handleLetterClick = () => {
      boxLetter?.classList.add("open");
      letterBorder?.classList.add("open");

      const startTitle = () => {
        const intervalId = window.setInterval(() => {
          if (!titleLetterEl) {
            window.clearInterval(intervalId);
            return;
          }

          if (currentIndexTitle < charArrTitle.length) {
            titleLetterEl.textContent = (titleLetterEl.textContent || "") + charArrTitle[currentIndexTitle];
            const heart = document.createElement("i");
            heart.className = "fa-solid fa-heart";
            titleLetterEl.appendChild(heart);
            currentIndexTitle += 1;
          } else {
            window.clearInterval(intervalId);
          }
        }, 100);

        intervals.push(intervalId);
      };

      timeouts.push(window.setTimeout(startTitle, 2000));
      timeouts.push(
        window.setTimeout(() => {
          heartLetter?.classList.add("animationOp");
          loveImg?.classList.add("animationOp");
          mewmew?.classList.add("animationOp");
        }, 2800)
      );
      timeouts.push(
        window.setTimeout(() => {
          hearts.forEach((item) => item.classList.add("animation"));
        }, 3500)
      );
      timeouts.push(
        window.setTimeout(() => {
          const intervalId = window.setInterval(() => {
            if (!textLetter) {
              window.clearInterval(intervalId);
              return;
            }

            if (currentIndexLetter < charArrDateLetter.length) {
              textLetter.textContent = (textLetter.textContent || "") + charArrDateLetter[currentIndexLetter];
              currentIndexLetter += 1;
            } else {
              window.clearInterval(intervalId);
            }
          }, 50);

          intervals.push(intervalId);
        }, 6000)
      );
    };

    const handleLetterClose = () => {
      intervals.forEach((id) => window.clearInterval(id));
      if (titleLetterEl) titleLetterEl.textContent = "";
      if (textLetter) textLetter.textContent = "";
      currentIndexLetter = 0;
      currentIndexTitle = 0;
      heartLetter?.classList.remove("animationOp");
      loveImg?.classList.remove("animationOp");
      mewmew?.classList.remove("animationOp");
      hearts.forEach((item) => item.classList.remove("animation"));
      boxLetter?.classList.remove("open");
      letterBorder?.classList.remove("open");
    };

    btnLetter?.addEventListener("click", handleLetterClick);
    closeButtons.forEach((btn) => btn.addEventListener("click", handleLetterClose));

    const mailBox = document.querySelector<HTMLElement>(".mail");
    const boxMail = document.querySelector<HTMLElement>(".boxMail");
    const closeMail = document.querySelector<HTMLElement>(".fa-xmark");

    const handleMailOpen = () => {
      mailBox?.classList.toggle("active");
      boxMail?.classList.add("active");
    };

    const handleMailClose = () => {
      boxMail?.classList.remove("active");
    };

    mailBox?.addEventListener("click", handleMailOpen);
    closeMail?.addEventListener("click", handleMailClose);

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
      btnLetter?.removeEventListener("click", handleLetterClick);
      closeButtons.forEach((btn) => btn.removeEventListener("click", handleLetterClose));
      mailBox?.removeEventListener("click", handleMailOpen);
      closeMail?.removeEventListener("click", handleMailClose);
    };
  }, []);

  return (
    <div id="wrapper">
      <div className="flag__birthday">
        <img src="./images/1.png" alt="" width="350" className="flag__left" />
        <img src="./images/1.png" alt="" width="350" className="flag__right" />
      </div>
      <div className="content">
        <div className="left">
          <div className="title">
            <h1 className="happy">
              <span style={delayStyle("4s")}>H</span>
              <span style={delayStyle("4.2s")}>a</span>
              <span style={delayStyle("4.4s")}>p</span>
              <span style={delayStyle("4.6s")}>p</span>
              <span style={delayStyle("4.8s")}>y</span>
            </h1>
            <h1 className="birthday">
              <span style={delayStyle("5s")}>B</span>
              <span style={delayStyle("5.2s")}>i</span>
              <span style={delayStyle("5.4s")}>r</span>
              <span style={delayStyle("5.6s")}>t</span>
              <span style={delayStyle("5.8s")}>h</span>
              <span style={delayStyle("6s")}>d</span>
              <span style={delayStyle("6.2s")}>a</span>
              <span style={delayStyle("6.4s")}>y</span>
            </h1>
            <div className="hat">
              <img src="./images/hat.png" alt="" width="130" />
            </div>
          </div>
          <div className="date__of__birth">
            <span></span>
          </div>
          <div className="btn">
            <button id="btn__letter">
              <div className="mail">
                Click Here
                <i className="fa-regular fa-envelope"></i>
              </div>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="box__account">
            <div className="image">
              <img src="/Rachna.png" alt="" />
            </div>
            <div className="name">
              <i className="fa-solid fa-heart"></i>
              <span>Madam Rachna</span>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="balloon_one">
              <img width="100px" src="./images/balloon1.png" alt="" />
            </div>
            <div className="balloon_two">
              <img width="100px" src="./images/balloon2.png" alt="" />
            </div>
          </div>
          <div className="cricle">
            <div className="text__cricle">
              <span style={indexStyle(1)}>h</span>
              <span style={indexStyle(2)}>a</span>
              <span style={indexStyle(3)}>p</span>
              <span style={indexStyle(4)}>p</span>
              <span style={indexStyle(5)}>y</span>
              <span style={indexStyle(6)}>-</span>
              <span style={indexStyle(7)}>b</span>
              <span style={indexStyle(8)}>i</span>
              <span style={indexStyle(9)}>r</span>
              <span style={indexStyle(10)}>t</span>
              <span style={indexStyle(11)}>h</span>
              <span style={indexStyle(12)}>d</span>
              <span style={indexStyle(13)}>a</span>
              <span style={indexStyle(14)}>y</span>
              <span style={indexStyle(15)}>-</span>
            </div>
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
      <div className="decorate_star star1" style={delayStyle("15s")}></div>
      <div className="decorate_star star2" style={delayStyle("15.2s")}></div>
      <div className="decorate_star star3" style={delayStyle("15.4s")}></div>
      <div className="decorate_star star4" style={delayStyle("15.6s")}></div>
      <div className="decorate_star star5" style={delayStyle("15.8s")}></div>
      <div className="decorate_flower--one" style={delayStyle("15s")}>
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--two" style={delayStyle("15.3s")}>
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_flower--three" style={delayStyle("15.6s")}>
        <img width="20" src="./images/decorate_flower.png" alt="" />
      </div>
      <div className="decorate_bottom">
        <img src="./images/decorate.png" alt="" width="100" />
      </div>
      <div className="smiley__icon">
        <img src="./images/smiley_icon.png" alt="" width="100" />
      </div>

      <div className="boxMail">
        <i className="fa-solid fa-xmark"></i>
        <div className="boxMail-container">
          <div className="card1">
            <div className="userImg">
              <img src="/Rachna.png" alt="Rachna" />
            </div>
            <h4 className="username">
              To: <span className="underline"></span>
            </h4>

            <h3>Happy Birthday</h3>
            <div className="imageCute">
              <img src="cute1.png" alt="" />
            </div>
          </div>
          <div className="card2">
            <div className="card2-content">
              <h3>To You!</h3>
              <h2>
              Congratulations! Rachna You’ve officially reached the age where your back goes out more than you do.
              Don’t worry… you’re not getting older, you’re just increasing in value like vintage wine (or expired milk — depends on the day).                
              </h2>

              <div className="imageCute2">
                <img src="cute2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
