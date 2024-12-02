import * as React from "react";
import "../styles/styles.scss";
import Layout from "../components/Layout";
import Pasobox from "../components/Pasobox";
import PreciosSection from "../components/PreciosSection";
import Overlay from "../components/Overlay";
import Form from "../components/Form";
import FormStatusContext from "../components/FormStatusContext";
import CustomUserFieldsContext from "../components/CustomUserFieldsContext";

export default function Home() {
  const [formSent, setFormSent] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    firstName: " blank name",
    casilleroNumber: "blank #",
  });

  const pasosData = [
    {
      number: "Paso 1",
      info: "Ingresa al sitio web de tu elección, agrega lo que desees al carrito y completa tu información en la página de pago. Usa la dirección del casillero que te proporcionamos como destino. Es importante que el nombre que ingreses coincida exactamente con el registrado en el casillero (sin excepciones). Si no puedes añadir el número del casillero, simplemente escribe tu nombre completo.",
    },
    {
      number: "Paso 2",
      info: "Después de completar tu compra, comunícate con nosotros a través de WhatsApp. De esta forma, le haremos el seguimiento apropiado a tu paquete, acelerando así el proceso de entrega. WhatsApp: +1 954 682 2058",
    },
    {
      number: "Paso 3",
      info: "Cuando recibamos tu compra, te enviaremos un mensaje por WhatsApp con fotos de tus artículos. Si todo está en orden, con tu aprobación, procederemos a despacharlos. Una vez que tu paquete llegue a nuestra sede en Bogotá, uno de nuestros agentes te indicará dónde realizar el pago del envío. Al completar el pago, tu paquete será entregado.",
    },
  ];

  return (
    <>
      <Layout>
        <FormStatusContext.Provider value={[formSent, setFormSent]}>
          <CustomUserFieldsContext.Provider value={[userInfo, setUserInfo]}>
            {/* INTRO SECTION//////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////// */}

            <section className={`intro ${formSent || "hidden"}`}>
              <img src="/me-cut-out.jpg" alt="company employee" />
              <h1>Registración completa</h1>
              <h3>
                Tu número de casillero:
                <span className="numero-casillero-letter">
                  {` ${userInfo.casilleroNumber}`}
                </span>
              </h3>
              <h6>¡Anota tú número de casillero!</h6>
              <p>
                Hola
                <span className="nombre-letter"> {userInfo.firstName}</span>,
                soy Daniel, CEO de PaMi Tierra Envíos. ¡Felicidades por tu nuevo casillero! Ahora puedes comprar en tiendas online de EE. UU. como si vivieras allí y disfrutar de todos los beneficios de ser un comprador americano.<br />
                <br />
                &#183; Productos 100% auténticos. <br />
                &#183; Acceso a productos de edición limitada, disponibles solo
                en EEUU
                <br />
                &#183; Acceso anticipado a productos meses antes de que lleguen
                a Colombia. <br />
                &#183; Oportunidad de participar en el famoso Viernes Negro; los
                descuentos pueden llegar hasta el 70%. <br />
                &#183; Ventas mensuales imbatibles con numerosos productos.{" "}
                <br />
                &#183; Los precios más bajos en tus marcas favoritas. <br />
                <br />
                ¿Y la mejor parte? <br />
                <br />
                Solo te enfocas en comprar. Nosotros nos encargamos de todo lo demás: tasas de importación, papeleo, recepción, embalaje y entrega directa a tu puerta. ¡Así de fácil! 🚛✨ <br />
                <br />
                ¡Ahora eres libre! Libre de pagar de más, de los molestos límites de compra y de las eternas búsquedas que terminan en decepciones. ¡Disfruta una experiencia de compra sin fronteras y sin complicaciones! 
                <br />
                <br />
                Ahora, sé que puede parecer un poco intimidante comprar en otro
                país, pero te garantizo que es seguro y sencillo
                <br />
                <br />
                De hecho, cientos de clientes de todas las edades ya están disfrutando de esta experiencia. Y no estás solo: estamos aquí para ayudarte en cada paso del proceso a través de WhatsApp
                <br />
                <br />
                ¡Listo para empezar! Aquí tienes los pasos para realizar tu primera compra: 👇🛒
              </p>
            </section>
            {/* PASOS SECTION//////////////////////////
        ////////////////////////////////////////////
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////// */}
            <section className={`pasos ${formSent || "hidden"}`}>
              <p>De EE.UU. a Colombia, rápido!</p>
              <h2>Proceso de compra</h2>
              <h3>
                Para completar con éxito tu primera compra, necesitarás 3 cosas.
                <br />
                <br />
                1) Un método de pago: una tarjeta de crédito, una tarjeta
                prepago, o una aplicación de pago como PayPal o NEQUI <br />
                2) La dirección de tu casillero:
                <span className="highlight">
                  <strong> 1967 NW 55 Avenue, Margate, FL, 33063</strong>
                </span>
                <br />
                3) El número de tu casillero:
                <span className="numero-casillero-letter">
                  {` ${userInfo.casilleroNumber}`}
                </span>
              </h3>

              <div className="box-container uniform-width">
                {pasosData.map((data, i) => {
                  return (
                    <Pasobox key={i} paso={data.number} info={data.info} />
                  );
                })}
              </div>
            </section>

            {/* PRECIOS SECTION/////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////// */}

            <section className={`precios ${formSent || "hidden"}`}>
              <PreciosSection />
            </section>

            <section className={`end ${formSent || "hidden"}`}>
              <div className="end-container">
                <p>
                ¡Eso es todo! Ahora tienes todo lo necesario para hacer tu primera compra en los Estados Unidos. <br />
                  <br />
                  Espero que todo haya quedado claro. Si tienes alguna duda, no dudes en escribirme por WhatsApp. Además, si quieres saber el costo exacto de enviar un artículo o varios, solo envíame su peso y precio, ¡y lo calcularé para ti!  <br />
                  <br />
                  Síguenos en Facebook y en Instagram @pamitierraenvios para
                  obtener consejos útiles de compra. Disfruta! Hasta luego :){" "}
                  <br />
                  <br />- Daniel
                </p>
              </div>
            </section>

            <section className={`download-pdf ${formSent || "hidden"}`}>
              <a href="/PMT Intro.pdf" download>
                **Haga clic para descargar estas instrucciones**
              </a>
            </section>
            {formSent || <Overlay />}
            {formSent || <Form />}
          </CustomUserFieldsContext.Provider>
        </FormStatusContext.Provider>
      </Layout>
    </>
  );
}
