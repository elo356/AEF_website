// Swiper gallery
const swiper = new Swiper(".myGallery", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Multi-language (ES/EN)
(function () {
  const translations = {
     es: {
        "meta.title":"Dr. Adalberto Echevarría Feliciano | Clínica Médica en Añasco",
        "nav.home":"Inicio","nav.about":"Sobre","nav.services":"Servicios","nav.gallery":"Galería","nav.team":"Equipo","nav.contact":"Contacto",
        "call":"Llamar",
        "hero.title":"Medicina primaria, preventiva y empática en Añasco. <br>Tu Salud es nuestra prioridad!",
        "hero.desc":"Atención médica integral con enfoque en la prevención, el bienestar y el trato personal.",
        "hero.cta":"Agendar cita",
        "about.title":"Sobre Nosotros",
        "about.text":"En la clínica del Dr. Adalberto Echevarría Feliciano nos dedicamos a cuidar la salud de la comunidad con servicios accesibles, profesionales y humanos. Creemos en la medicina preventiva y en la cercanía con nuestros pacientes.",
        "mission.title":"Misión","mission.text":"Brindar atención médica integral y preventiva centrada en la salud y bienestar de cada paciente.",
        "vision.title":"Visión","vision.text":"Ser un modelo de excelencia médica en el área oeste de Puerto Rico.",
        "values.title":"Valores","values.text":"Respeto, empatía, ética, compromiso y profesionalismo en cada consulta.",
        "services.title":"Servicios Médicos",
        "service.primary.title":"Medicina Primaria","service.primary.desc":"Evaluación y manejo integral de la salud familiar y condiciones crónicas.",
        "service.surgery.title":"Cirugía Menor","service.surgery.desc":"Procedimientos ambulatorios simples con tecnología moderna y esterilización completa.",
        "service.tele.title":"Telemedicina","service.tele.desc":"Consultas médicas seguras desde tu hogar con video o llamada telefónica.",
        "service.certs.title":"Certificados Médicos","service.certs.desc":"Certificados de salud, matrimonio y licencias de conducir.",
        "service.weight.title":"Control de Peso","service.weight.desc":"Asesoramiento médico y nutricional para un estilo de vida saludable. Trabajamos GLP1 y GIP",
        "service.home.title":"Visitas al Hogar","service.home.desc":"Atención personalizada en la comodidad de tu residencia.",
        "hours.title":"🕒 Horarios de Atención","hours.desc":"Visítanos en nuestros horarios regulares. También contamos con teleconsultas por cita previa.",
        "hours.monthu":"<strong>Lunes a Jueves:</strong> 8:00 am — 4:00 pm","hours.fri":"<strong>Viernes:</strong> 8:00 am — 3:00 pm","hours.sat":"<strong>Sábado:</strong> 8:00 am — 12:00 pm",
        "payments.title":"💳 Métodos de Pago","payments.desc":"Aceptamos la mayoría de los planes médicos, incluyendo Plan Vital. Consulte si su plan está cubierto.",
        "payment.cash.title":"Efectivo","payment.cash.desc":"Pagos directos en oficina.",
        "payment.transfer.title":"Transferencias","payment.transfer.desc":"ATH Móvil y Zelle disponibles.",
        "payment.card.title":"Tarjetas","payment.card.desc":"Visa, MasterCard, American Express y Discover.",
        "gallery.title":"Nuestras Instalaciones",
        "gallery.alt1":"Recepción","gallery.alt2":"Sala de Espera","gallery.alt3":"Área de Consulta","gallery.alt4":"Área de Procedimientos","gallery.alt5":"Fachada","gallery.alt6":"Área Administrativa",
        "team.title":"Nuestro Equipo","team.desc":"Profesionales comprometidos con la atención humana y de calidad para toda la familia.",
        "role.doctor":"Médico General","role.nurse":"RN, BSN","role.admin":"Asistente Administrativo",
        "contact.title":"Contacto","contact.desc":"Agenda tu cita o envíanos tu consulta. Respuesta en menos de 24 horas laborables.",
        "contact.infoTitle":"Información","contact.address":"Golden Plaza #3","contact.addressLine":"Carretera 402 KM 2.1, Bo. Marías, Añasco, PR",
        "contact.phone":"+1 (939) 699-6336","contact.phoneNote":"Llamadas y SMS","contact.email":"adalbertoechevarriamd@gmail.com","contact.emailNote":"Correo para documentos",
        "form.name":"Nombre","form.phone":"Teléfono","form.email":"Correo electrónico","form.message":"Mensaje","form.submit":"Enviar mensaje",
        "footer.copy":"© 2025 Clínica del Dr. Adalberto Echevarría Feliciano","footer.facebook":"Facebook",
        "contact.consent":"Autorizo el uso de mis datos para gestionar la cita.",
        "contact.privacy":"Al enviar aceptas que nos comuniquemos por los medios indicados. No compartimos tus datos."
      },
      en: {
        "meta.title":"Dr. Adalberto Echevarría Feliciano | Medical Clinic in Añasco",
        "nav.home":"Home","nav.about":"About","nav.services":"Services","nav.gallery":"Gallery","nav.team":"Team","nav.contact":"Contact",
        "call":"Call",
        "hero.title":"Primary, preventive and empathetic medicine in Añasco. <br>Your health is our priority!",
        "hero.desc":"Comprehensive medical care focused on prevention, wellbeing and personal attention.",
        "hero.cta":"Book appointment",
        "about.title":"About us",
        "about.text":"At Dr. Adalberto Echevarría Feliciano's clinic we care for the community with accessible, professional and human services. We believe in preventive medicine and close patient care.",
        "mission.title":"Mission","mission.text":"Provide comprehensive, preventive medical care focused on each patient's health and wellbeing.",
        "vision.title":"Vision","vision.text":"To be a model of medical excellence in the western area of Puerto Rico.",
        "values.title":"Values","values.text":"Respect, empathy, ethics, commitment and professionalism in every consultation.",
        "services.title":"Medical Services",
        "service.primary.title":"Primary Care","service.primary.desc":"Comprehensive family health assessment and chronic condition management.",
        "service.surgery.title":"Minor Surgery","service.surgery.desc":"Simple outpatient procedures with modern technology and full sterilization.",
        "service.tele.title":"Telemedicine","service.tele.desc":"Secure medical consultations from home via video or phone.",
        "service.certs.title":"Medical Certificates","service.certs.desc":"Health, marriage and driver's license certificates.",
        "service.weight.title":"Weight Management","service.weight.desc":"Medical and nutritional advice for a healthy lifestyle. We work with GLP1 and GIP",
        "service.home.title":"Home Visits","service.home.desc":"Personalized care in the comfort of your residence.",
        "hours.title":"🕒 Opening Hours","hours.desc":"Visit us during our regular hours. Teleconsultations available by appointment.",
        "hours.monthu":"<strong>Mon–Thu:</strong> 8:00 am — 4:00 pm","hours.fri":"<strong>Friday:</strong> 8:00 am — 3:00 pm","hours.sat":"<strong>Saturday:</strong> 8:00 am — 12:00 pm",
        "payments.title":"💳 Payment Methods","payments.desc":"We accept most health plans, including Plan Vital. Please verify coverage with us.",
        "payment.cash.title":"Cash","payment.cash.desc":"Payments at the office.",
        "payment.transfer.title":"Transfers","payment.transfer.desc":"ATH Móvil and Zelle available.",
        "payment.card.title":"Cards","payment.card.desc":"Visa, MasterCard, American Express and Discover.",
        "gallery.title":"Our Facilities",
        "gallery.alt1":"Reception","gallery.alt2":"Waiting Room","gallery.alt3":"Consultation Area","gallery.alt4":"Procedure Area","gallery.alt5":"Facade","gallery.alt6":"Administrative Area",
        "team.title":"Our Team","team.desc":"Professionals committed to humane, high-quality care for the whole family.",
        "role.doctor":"General Doctor","role.nurse":"RN, BSN","role.admin":"Administrative Assistant",
        "contact.title":"Contact","contact.desc":"Book your appointment or send us your inquiry. We typically reply within 24 business hours.",
        "contact.infoTitle":"Information","contact.address":"Golden Plaza #3","contact.addressLine":"Carretera 402 KM 2.1, Bo. Marías, Añasco, PR",
        "contact.phone":"+1 (939) 699-6336","contact.phoneNote":"Calls & SMS","contact.email":"adalbertoechevarriamd@gmail.com","contact.emailNote":"Email for documents",
        "form.name":"Name","form.phone":"Phone","form.email":"Email","form.message":"Message","form.submit":"Send message",
        "footer.copy":"© 2025 Dr. Adalberto Echevarría Feliciano Clinic","footer.facebook":"Facebook",
        "contact.consent":"I consent to store my submitted information.",
        "contact.privacy":"By submitting, you agree that we may contact you through the indicated channels. We do not share your data."
      },
  };

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const txt = translations[lang] && translations[lang][key];
      if (txt !== undefined) el.innerHTML = txt;
    });
    localStorage.setItem("site_lang", lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("lang-select");
    const saved = localStorage.getItem("site_lang") || "es";
    select.value = saved;
    select.addEventListener("change", (e) => apply(e.target.value));
    apply(saved);
  });
})();
