import React, { useState } from "react";
import style from "./ContactsForm.module.scss";
import fly from "../../assets/fly.svg";
const ContactsForm = (props) => {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  let data = {
    name,
    email,
    comments,
  };
  return (
    <form>
      <div className={style.item}>
        <div className={style.input}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            className={style.inputItem}
          />
          <label className={style.inputLabel}>
            Ваше имя<span>*</span>
          </label>
        </div>
        <div className={`${style.input} ${style.inputMail}`}>
          <input
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
            className={`${style.inputItem} ${style.inputItemEmail}`}
          />
          <label className={style.inputLabel}>
            Ваш E-Mail<span>*</span>
          </label>
        </div>
        <div className={style.textarea}>
          <textarea
            onresize={false}
            onChange={(e) => setComments(e.target.value)}
            required
            className={style.textareaItem}
          />
          <label className={style.textareaLabel}>
            Комментарий<span>*</span>
          </label>
        </div>
        <div className={style.checkbox}>
          <input
            type="checkbox"
            id="check"
            name="happy"
            value="yes"
            className={style.checkboxItem}
          />
          <label htmlFor="check">
            <div>
              Согласен с <span> Политикой конфиденциальности</span>
            </div>
          </label>
        </div>
      </div>
      <button
        className={form ? `${style.btn} ${style.active}` : `${style.btn}`}
        onClick={(e) => {
          {
            name === "" || email === "" || comments === ""
              ? setForm(false)
              : e.preventDefault();
            props.PostFormSending(data);
            setForm(true);
          }
        }}
      >
        <img src={fly} className={style.icon} />
        <div className={style.btnText}>
          {form ? "Ваше сообщение отправлено!" : "Отправить"}
        </div>
      </button>
    </form>
  );
};

export default ContactsForm;
