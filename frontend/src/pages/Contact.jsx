import Header from "../components/Header";
import Footer from "../components/Footer";
import './Contact.css'

function Contact() {
    return (
        <>
        <Header />

        <main className="contact-page">
           <section className='contact-header'>
            <h1>Contactez-nous</h1>
            <p>
                Une question, une suggestion ou tout simplement envie
                d'échanger avec nous ? Nous sommes à votre écoute.
            </p>
           </section>

         <section className="contact-content">
            <h2>Envoyez-nous un message</h2>

            <form 
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
               <label htmlFor="name">Votre nom</label>
               <input type="text"
                      id="name"
                      name="name"
                      placeholder="votre nom"
                      required 
                      />
                      </div>

                      <div className="form-group">
               <label htmlFor="email">Votre adresse email</label>
               <input type="email"
                      id="email"
                      name="email"
                      placeholder="votre email"
                      required 
                      />
                      </div>

                      <div className="form-group">
               <label htmlFor="subject">Sujet</label>
               <input type="text"
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      required
                      />
                      </div>

                      <div className="form-group">
               <label htmlFor="message">Votre message</label>
               <textarea id="message"
                         name="message"
                         rows="6"
                         placeholder="Ecrivezvotre message ici..."
                         required
                         />
                      </div>

                      <button type="submit" className="contact-button">Envoyer mon message</button>


            </form>
         </section>
         </main>

        <Footer />
        </>
    )
}

export default Contact