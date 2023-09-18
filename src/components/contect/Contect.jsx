import "./Contect.css";
import { useForm } from "@formspree/react";
import UseInput from "../../hooks/useInputs";

const Contect = () => {
  const [state, handleSubmit] = useForm("mdorzzwa");

  console.log("ond");

  const {
    vlaue: enteredName,
    ValueChangeHandler: nameChangedHandler,
    hasError: nameHasError,
    reset: resetName,
    isValid: nameIsValid,
    inputBlurHandler: inputNameBlurHandler,
  } = UseInput((valu) => valu.trim() !== "");

  const {
    vlaue: enteredEmail,
    ValueChangeHandler: emailChangedHandler,
    hasError: emailHasError,
    reset: resetEmail,
    isValid: emailIsValid,
    inputBlurHandler: inputEmailBlurHandler,
  } = UseInput((valu) => valu.includes("@"));

  const {
    vlaue: enteredSubject,
    ValueChangeHandler: saubjectChangedHandler,
    reset: resetSubject,
    inputBlurHandler: inputSubjectBlurHandler,
  } = UseInput((valu) => valu.trim() !== "");

  const {
    vlaue: enteredMessage,
    ValueChangeHandler: messageChangedHandler,
    hasError: messageHasError,
    reset: resetMessage,
    isValid: messageIsValid,
    inputBlurHandler: inputMessageBlurHandler,
  } = UseInput((valu) => valu.trim() !== "");

  let form = false;

  if (nameIsValid && messageIsValid && emailIsValid) {
    form = true;
  }

  if (state.succeeded) {
    const timer = setTimeout(() => {
      resetEmail();
      resetMessage();
      resetName();
      resetSubject();
      console.log("here");
    }, 300);
    clearTimeout(timer);
    window.location.reload();
  }

  const namee = nameHasError ? "contact__form-inputE " : "contact__form-input ";
  const email = emailHasError
    ? "contact__form-inputE "
    : "contact__form-input ";
  const subject = "contact__form-input ";
  const message = messageHasError
    ? "contact__form-inputE "
    : "contact__form-input";

  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>

      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'>Let's talk about everything!</h3>
          <p className='contact__details'>
            Don't like forms? Send me an email. 👋
          </p>
        </div>
        <form method='POST' className='contact__form' onSubmit={handleSubmit}>
          <div className='contact__form-group grid'>
            <div className='contact__form-div'>
              <input
                type='text'
                name='name'
                id='name'
                className={namee}
                placeholder='Insert your name'
                onBlur={inputNameBlurHandler}
                value={enteredName}
                onChange={nameChangedHandler}
              />
            </div>
            <div className='contact__form-div'>
              <input
                name='email'
                type='email'
                id='email'
                className={email}
                placeholder='Insert your email'
                onBlur={inputEmailBlurHandler}
                value={enteredEmail}
                onChange={emailChangedHandler}
              />
            </div>
          </div>
          <div className='contact__form-div'>
            <input
              type='text'
              name='subject'
              id='subject'
              className={subject}
              placeholder='Insert your subject'
              onBlur={inputSubjectBlurHandler}
              value={enteredSubject}
              onChange={saubjectChangedHandler}
            />
          </div>
          <div className='contact__form-div contact__are'>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Write your message'
              className={message}
              onBlur={inputMessageBlurHandler}
              value={enteredMessage}
              onChange={messageChangedHandler}></textarea>
          </div>
          <button type='submit' className='btn' disabled={!form}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
