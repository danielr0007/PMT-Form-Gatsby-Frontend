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
      info: "Ingresa al sitio web donde quieres comprar y agrega lo que quieras al carrito. Completa tu información en la página de pago y coloca la dirección del casillero proporcionada arriba como destino. Recuerda que el nombre que proporciones en el proceso de compra debe coincidir con el nombre que registraste en el casillero (sin excepciones). Si no te permite colocar el número de casillero, solo escribe tu nombre completo.",
    },
    {
      number: "Paso 2",
      info: "Después de completar tu compra, comunícate con nosotros a través de WhatsApp. De esta forma, le haremos el seguimiento apropiado a tu paquete, acelerando así el proceso de entrega. WhatsApp: +1 954 682 2058",
    },
    {
      number: "Paso 3",
      info: "Cuando obtengamos tu compra, recibirás un mensaje a través de WhatsApp (incluirá fotos de tus artículos). Si todo está en orden, con tu aprobación, lo despachamos. Una vez que tu compra llegue a nuestra sede en Bogotá uno de nuestros agentes te informará dónde depositar el pago del envío, y al hacerlo, el paquete será entregado. Todo este proceso Miami --> tu casa, puede tomar de 4 a 7 días hábiles.",
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
                soy Daniel, CEO de PaMi Tierra Envíos. ¡Felicidades por la
                adquisición de tu casillero! Con este casillero, ahora puedes
                comprar en las tiendas online de EE. UU. como si vivieras allí.
                Eso significa que puedes disfrutar de todos los beneficios que
                los compradores americanos disfrutan... <br />
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
                No tienes que preocuparte de nada más que comprar... nosotros
                nos encargamos de las tasas de importación, el papeleo, la
                recepción, el embalaje, la entrega, etc. <br />
                <br />
                ¡Ahora eres libre! Libre de tener que pagar en exceso, eres
                libre de estar sometido a límites de compras y eres libre de
                tener que hacer largas búsquedas de productos que, a menudo, se
                convierten en una decepción.
                <br />
                <br />
                Ahora, sé que puede parecer un poco intimidante comprar en otro
                país, pero te garantizo que es seguro y sencillo
                <br />
                <br />
                Tanto es así, que cientos de nuestros clientes, de diferentes
                edades, ya lo están haciendo. Además, estamos siempre
                disponibles para ayudarte y guiarte a través de todo el proceso
                utilizando la red social WhatsApp.
                <br />
                <br />
                Echa un vistazo a los siguientes pasos para realizar tu primera
                compra.
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
                  <strong> 7861 Beechfern Circle, Tamarac, FL, 33321</strong>
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
                  ¡Listo! Eso es todo lo que necesitas saber para hacer tu
                  primera compra en los Estados Unidos. <br />
                  <br />
                  Espero que todo te haya quedado claro, pero si aún tienes
                  dudas, puedes enviarme tus preguntas a través de WhatsApp. Si
                  deseas saber el costo exacto del envío de un artículo o de un
                  grupo de artículos, envíame su peso y precio y lo calcularé
                  por ti. <br />
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
