import React, { useState } from "react";
import "./Informacion.css";

// --- IMPORTACIONES DE IMÁGENES ---
import avatar from "../images/isabella-avatar.png";

// Importa todas las imágenes locales de tus proyectos
import adSecurityisa from "../images/adSecurityisa.png";
import govisa from "../images/govisa.png";
import gov2isa from "../images/gov2isa.png";
import resilenciaisa from "../images/resilenciaisa.png";
import fruitdietisa from "../images/fruitdietisa.png";
import moneyWalletisa from "../images/money-walletisa.png";
import langostino from "../images/granlangostinoisa.png";
import eimas from "../images/eimasisa.png";
import xcala from "../images/xcala.png";

// --- DATOS PARA RENDERIZAR DINÁMICAMENTE ---

const testimonialsData = [
  {
    avatar: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
    name: "Jonathan Lopez",
    text: "Isabella fue contratada para crear una identidad corporativa. Es moderna, limpia y con un hermoso diseño que recibió muchos elogios. Quedamos muy satisfechos con el trabajo.",
  },
  {
    avatar: "https://i.postimg.cc/DwY0yHtx/avatar-2.png",
    name: "Jessica Miller",
    text: "Trabajar con Isabella ha sido un placer. Me impresionó su atención al detalle, sus habilidades de diseño y su enfoque profesional con nuestros plazos y procesos.",
  },
  {
    avatar: "https://i.postimg.cc/zXv1Xv81/avatar-4.png",
    name: "Sebastian",
    text: "Estaba abrumado, pero Isabella hizo que el proceso de rediseño fuera perfecto. El sitio es visualmente atractivo y está optimizado para conversiones.",
  },
  {
    avatar: "https://i.postimg.cc/fRFWhX9F/avatar-3.png",
    name: "Emily Evans",
    text: "No podría estar más feliz con el sitio web que Isabella creó. Su atención al detalle y su creatividad son inigualables. Nuestros clientes elogian el diseño.",
  },
];

const projectsData = [
  // Proyectos Empresariales
  {
    category: "empresarial",
    img: adSecurityisa, // CORREGIDO
    title: "Manual de Marca AdSecurity",
    desc: "Adobe XD",
    link: "https://xd.adobe.com/view/238d33cb-771b-45ac-8690-dedf8367a427-76de/",
  },
  {
    category: "empresarial",
    img: govisa, // CORREGIDO
    title: "Home Portal ANM",
    desc: "Adobe XD",
    link: "https://xd.adobe.com/view/ee2bc3ff-b986-4600-a492-0d95b8a66504-bb78/",
  },
  {
    category: "empresarial",
    img: gov2isa, // CORREGIDO
    title: "Portal Micrositios",
    desc: "Adobe XD",
    link: "https://xd.adobe.com/view/8de210c3-9fb1-4f7d-88c2-de4602f35b8a-d8b1/",
  },

  // Proyectos Personales
  {
    category: "personal",
    img: resilenciaisa, // CORREGIDO
    title: "Resilencia de Irina (Videojuego)",
    desc: "Figma - Prototipo",
    link: "https://www.figma.com/proto/Zeg9llmiAsLCdzVUKCYY3I/Resilencia-de-Irina?node-id=0-1&t=6YWU1IHOtVZcxMpm-1",
  },
  {
    category: "personal",
    img: fruitdietisa, // CORREGIDO
    title: "FruitDiet (Interfaz Videojuego)",
    desc: "Figma - Prototipo",
    link: "https://www.figma.com/proto/H7yfUmuPd3MmriWzPhDG4S/FruitDiet-Victor?node-id=0-1&t=OjzD0zz96YlTj6xn-1",
  },
  {
    category: "personal",
    img: moneyWalletisa, // CORREGIDO
    title: "Money Wallet (App de Ahorro)",
    desc: "Figma - Prototipo",
    link: "https://www.figma.com/proto/IuiXKtrL558zUPXEoFnsBf/HCI-money-wallet?node-id=0-1&p=f&t=pweqRRpeecWfdhEh-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=209%3A53",
  },
  // Proyectos Freelance (estos ya funcionaban)
  {
    category: "freelance",
    img: langostino,
    title: "Gran Langostino (Plantillas)",
    desc: "Figma",
    link: "https://www.figma.com/proto/KTY5hGH8glo2e8zJPECPOs/Plantillas?node-id=86-51&t=UA8AwMu2TVD3vq2K-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=86%3A51",
  },
  {
    category: "freelance",
    img: eimas,
    title: "EIMAS (Plataforma Educativa)",
    desc: "Adobe XD - Prototipo",
    link: "https://xd.adobe.com/view/b59a5380-d963-4806-82e4-343de61323d0-e0c9/",
  },
  {
    category: "freelance",
    img: xcala,
    title: "Xcala (Interfaz Web App)",
    desc: "Figma - Prototipo",
    link: "https://www.figma.com/proto/oNQi5rsGK8iWEDU2fE2T5O/Xcala?node-id=0-1&t=6tZfgPpxoK5rUWO2-1",
  },
];

const Informacion = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("about");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [activeFilter, setActiveFilter] = useState("all");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleTestimonialClick = (testimonial) => {
    setModalContent(testimonial);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isFormValid = formData.fullname && formData.email && formData.message;

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <main>
      {/* ===== SIDEBAR ===== */}
      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={avatar} alt="Isabella Correa" width="80" />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Isabella Correa Costain">
              Isabella Correa
            </h1>
            <p className="title">Diseñadora UX/UI</p>
          </div>
          <button
            className="info-more-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span>Mostrar Contactos</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>
        <div className="sidebar-info-more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Correo</p>
                <a href="mailto:isacc3739@gmail.com" className="contact-link">
                  isacc3739@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Celular</p>
                <a href="tel:+573213127508" className="contact-link">
                  (+57) 321 312 7508
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/isabella-correa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  isabella correa costain
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Ubicación</p>
                <address>Colombia</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">{/* Espacio para redes sociales */}</ul>
        </div>
      </aside>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button
                className={`navbar-link ${
                  activePage === "about" ? "active" : ""
                }`}
                onClick={() => handleNavClick("about")}
              >
                Sobre mí
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${
                  activePage === "resume" ? "active" : ""
                }`}
                onClick={() => handleNavClick("resume")}
              >
                Currículum
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${
                  activePage === "portfolio" ? "active" : ""
                }`}
                onClick={() => handleNavClick("portfolio")}
              >
                Portafolio
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${
                  activePage === "blog" ? "active" : ""
                }`}
                onClick={() => handleNavClick("blog")}
              >
                Video
              </button>
            </li>
            <li className="navbar-item">
              <button
                className={`navbar-link ${
                  activePage === "contact" ? "active" : ""
                }`}
                onClick={() => handleNavClick("contact")}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>

        {/* --- PÁGINA SOBRE MÍ (ABOUT) --- */}
        <article className={`about ${activePage === "about" ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Perfil Profesional</h2>
          </header>
          <section className="about-text">
            <p>
              Soy ingeniera en multimedia con 3 años de experiencia en UX/UI y
              gestión de productos digitales. Experta en herramientas como
              Figma, Adobe XD, Illustrator y Photoshop, así como en animación
              2D/3D con After Effects y Premiere. Amplio conocimiento en
              programación front con bases como Java, Python, React.js y
              experiencia desde diseño con MySQL y Oracle. Busco aportar en
              proyectos innovadores, ampliando mis habilidades desde la
              estrategia hasta el control de la usabilidad.
            </p>
          </section>

          <section className="service">
            <h3 className="h3 service-title">Habilidades Profesionales</h3>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box">
                  <ion-icon name="color-palette-outline"></ion-icon>
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    Investigación de interfaces de usuario (UI)
                  </h4>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box">
                  <ion-icon name="analytics-outline"></ion-icon>
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    Análisis de experiencia de usuario (UX)
                  </h4>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box">
                  <ion-icon name="videocam-outline"></ion-icon>
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Animación 2D/3D</h4>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box">
                  <ion-icon name="people-outline"></ion-icon>
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    Diseño centrado en el usuario
                  </h4>
                </div>
              </li>
            </ul>
          </section>

          <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonios</h3>
            <ul className="testimonials-list has-scrollbar">
              {testimonialsData.map((testimonial, index) => (
                <li
                  className="testimonials-item"
                  key={index}
                  onClick={() => handleTestimonialClick(testimonial)}
                >
                  <div className="content-card">
                    <figure className="testimonials-avatar-box">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width="60"
                      />
                    </figure>
                    <h4 className="h4 testimonials-item-title">
                      {testimonial.name}
                    </h4>
                    <div className="testimonials-text">
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <div className={`modal-container ${modalOpen ? "active" : ""}`}>
            <div
              className={`overlay ${modalOpen ? "active" : ""}`}
              onClick={closeModal}
            ></div>
            <section className="testimonials-modal">
              <button className="modal-close-btn" onClick={closeModal}>
                <ion-icon name="close-outline"></ion-icon>
              </button>
              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img
                    src={modalContent.avatar}
                    alt={modalContent.name}
                    width="80"
                  />
                </figure>
                <img
                  src="https://i.postimg.cc/mZ00RwX7/icon-quote.png"
                  alt="icono de cita"
                />
              </div>
              <div className="modal-content">
                <h4 className="h3 modal-title">{modalContent.name}</h4>
                <div className="modal-text">
                  <p>{modalContent.text}</p>
                </div>
              </div>
            </section>
          </div>

          {/* <section className="clients">
            <h3 className="h3 clients-title">Clientes Anteriores</h3>
            <ul className="clients-list has-scrollbar">
              <li className="clients-item">
                <a href="#">
                  <img
                    src="https://i.postimg.cc/YqfKyG66/logo-1-color.png"
                    alt="logo cliente"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="https://i.postimg.cc/fWm6JtgG/logo-2-color.png"
                    alt="logo cliente"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="https://i.postimg.cc/Bb07xpwd/logo-3-color.png"
                    alt="logo cliente"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="https://i.postimg.cc/hv1yMmkh/logo-4-color.png"
                    alt="logo cliente"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="https://i.postimg.cc/ry1P86Dc/logo-5-color.png"
                    alt="logo cliente"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="https://i.postimg.cc/SsWDN8NV/logo-6-color.png"
                    alt="logo cliente"
                  />
                </a>
              </li>
            </ul>
          </section> */}
        </article>

        {/* --- PÁGINA CURRÍCULUM (RESUME) --- */}
        <article
          className={`resume ${activePage === "resume" ? "active" : ""}`}
        >
          <header>
            <h2 className="h2 article-title">Currículum</h2>
          </header>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="h3">Logros Académicos</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Ingeniera Multimedia</h4>
                <span>Universidad Autónoma de Occidente</span>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Especialización en Gerencia de Proyectos
                </h4>
                <span>(En curso)</span>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Nivel Avanzado de Inglés
                </h4>
                <span>Colombo Británico</span>
              </li>
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>
              <h3 className="h3">Experiencia Profesional</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Diseñadora UI/UX - Intelecto S.A.S
                </h4>
                <span>Nov 2024 - Actualidad</span>
                <p className="timeline-text">
                  Rediseño del portal para la Agencia Nacional de Minería,
                  desarrollo de manual de marca para AdSecurity y diseño de
                  micrositios para entidades del gobierno.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  User Experience - TECNOTURNOS S.A.S
                </h4>
                <span>Jun 2022 - Ago 2022</span>
                <p className="timeline-text">
                  Participé en el diseño de interfaces enfocadas en la
                  optimización del sistema de planificación de turnos, mejorando
                  la usabilidad de flujos internos.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  User Experience & UI Designer - TUDERECHO
                </h4>
                <span>Nov 2022 - Feb 2023</span>
                <p className="timeline-text">
                  Diseñé la identidad digital y visual del sitio. Realicé
                  pruebas de usabilidad para validar flujos y mejoras en
                  accesibilidad.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  User Interface Designer - X-CALA/STG Internacional
                </h4>
                <span>Jul 2023 - Sep 2023</span>
                <p className="timeline-text">
                  Diseño de interfaz web para plataforma internacional
                  educativa, edición de video explicativo y pruebas de
                  navegabilidad.
                </p>
              </li>
            </ol>
          </section>
          <section className="skill">
            <h3 className="h3 skills-title">Habilidades y Metodologías</h3>
            <ul className="skills-list content-card">
              <li>
                <h5 className="h5">Herramientas:</h5>{" "}
                <p className="timeline-text">
                  Figma (experta), Adobe XD (experta), Adobe Creative Cloud
                  (Photoshop, Illustrator, After Effects, Premiere), Notion,
                  Trello, Jira.
                </p>
              </li>
              <br />
              <li>
                <h5 className="h5">Metodologías:</h5>{" "}
                <p className="timeline-text">
                  Scrum, Design Thinking, Lean UX, Agile UX, Double Diamond,
                  Human Centered Design, Atomic Design.
                </p>
              </li>
              <br />
              <li>
                <h5 className="h5">Proceso de Diseño:</h5>{" "}
                <p className="timeline-text">
                  Investigación, definición de usuarios, wireframes, prototipado
                  interactivo, testing, documentación visual, evaluación
                  heurística y handoff técnico.
                </p>
              </li>
            </ul>
          </section>
        </article>

        {/* --- PÁGINA PORTAFOLIO --- */}
        <article
          className={`portfolio ${activePage === "portfolio" ? "active" : ""}`}
        >
          <header>
            <h2 className="h2 article-title">Portafolio</h2>
          </header>
          <section className="projects">
            <ul className="filter-list">
              <li className="filter-item">
                <button
                  className={activeFilter === "all" ? "active" : ""}
                  onClick={() => setActiveFilter("all")}
                >
                  Todos
                </button>
              </li>
              <li className="filter-item">
                <button
                  className={activeFilter === "empresarial" ? "active" : ""}
                  onClick={() => setActiveFilter("empresarial")}
                >
                  Empresariales
                </button>
              </li>
              <li className="filter-item">
                <button
                  className={activeFilter === "freelance" ? "active" : ""}
                  onClick={() => setActiveFilter("freelance")}
                >
                  Freelance
                </button>
              </li>
              <li className="filter-item">
                <button
                  className={activeFilter === "personal" ? "active" : ""}
                  onClick={() => setActiveFilter("personal")}
                >
                  Personales
                </button>
              </li>
            </ul>
            <ul className="project-list">
              {filteredProjects.map((project, index) => (
                <li className="project-item active" key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      {/* La clase CSS se encargará de estandarizar el tamaño */}
                      <img
                        src={project.img}
                        alt={project.title}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.desc}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* --- PÁGINA VIDEO (antes BLOG) --- */}
        <article className={`blog ${activePage === "blog" ? "active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Video Portafolio</h2>
          </header>
          <section className="blog-posts">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://www.youtube.com/embed/VIDEO_ID" // REEMPLAZA VIDEO_ID con el ID de tu video de YouTube
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </article>

        {/* --- PÁGINA CONTACTO --- */}
        <article
          className={`contact ${activePage === "contact" ? "active" : ""}`}
        >
          <header>
            <h2 className="h2 article-title">Contacto</h2>
          </header>
          <section className="mapbox">
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.4828790403!2d-75.66699395!3d6.2235948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1672252157933!5m2!1ses!2sco" // Reemplaza esto con tu mapa de Google
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>
          <section className="contact-form">
            <h3 className="h3 form-title">Formulario de Contacto</h3>
            <form action="#" className="form">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Nombre completo"
                  required
                  value={formData.fullname}
                  onChange={handleFormInputChange}
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Dirección de Email"
                  required
                  value={formData.email}
                  onChange={handleFormInputChange}
                />
              </div>
              <textarea
                name="message"
                className="form-input"
                placeholder="Tu mensaje"
                required
                value={formData.message}
                onChange={handleFormInputChange}
              ></textarea>
              <button
                className="form-btn"
                type="submit"
                disabled={!isFormValid}
              >
                <ion-icon name="paper-plane"></ion-icon>
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </section>
        </article>
      </div>

      {/* --- Elementos de decoración --- */}
      <div className="koiFish">
        <div className="fish">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="koiCoil"></div>
          ))}
        </div>
        <div className="fish">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="koiCoil"></div>
          ))}
        </div>
        <div className="seaLevel"></div>
      </div>
    </main>
  );
};

export default Informacion;
