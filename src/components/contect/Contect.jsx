import React ,{useRef} from "react";
import "./Contect.css";
import { useForm } from "@formspree/react";

const Contect = () => {
  const [state, handleSubmit] = useForm("mdorzzwa");
  const accName = useRef();
  const accMes = useRef();
  const accSeb = useRef();
  const accEma = useRef();

  const vv = ()=> {
    const  timer = ()=> {
      accName.current.value = '';
      accMes.current.value = '';
      accSeb.current.value = '';
      accEma.current.value = '';}
    setTimeout(timer
    ,300)
    clearTimeout(timer,300)
    
  }
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
        <form method="POST" className='contact__form' onSubmit={handleSubmit}>
          <div className='contact__form-group grid'>
            <div className='contact__form-div'>
              <input
                ref={accName}
                type='text'
                name="name"
                className='contact__form-input'
                placeholder='Insert your name'
              />
            </div>
            <div className='contact__form-div'>
              <input
                ref={accEma}
                name="email"
                type='email'
                className='contact__form-input'
                placeholder='Insert your email'
              />
            </div>
          </div>
          <div className='contact__form-div'>
            <input
              ref={accSeb}
              type='text'
              name="subject"
              className='contact__form-input'
              placeholder='Insert your subject'
            />
          </div>
          <div className='contact__form-div contact__are'>
            <textarea
              ref={accMes}
              name='message'
              id=''
              cols='30'
              rows='10'
              placeholder='Write your message'
              className='contact__form-input '></textarea>
          </div>
          <button type="submit" className='btn' onClick={vv} disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
