import React from "react";
import { useState } from "react";

function PreciosSection() {
  const [tabState, setTabState] = useState({
    costoDeCasillero: true,
    envioDeCelulares: false,
    envioDeComputadoras: false,
    envioDeCamaras: false,
    comprasPequenas: false,
  });

  function showTabOne() {
    setTabState({
      costoDeCasillero: true,
      envioDeCelulares: false,
      envioDeComputadoras: false,
      envioDeCamaras: false,
      comprasPequenas: false,
    });
  }
  function showTabTwo() {
    setTabState({
      costoDeCasillero: false,
      envioDeCelulares: true,
      envioDeComputadoras: false,
      envioDeCamaras: false,
      comprasPequenas: false,
    });
  }
  function showTabThree() {
    setTabState({
      costoDeCasillero: false,
      envioDeCelulares: false,
      envioDeComputadoras: true,
      envioDeCamaras: false,
      comprasPequenas: false,
    });
  }
  function showTabFour() {
    setTabState({
      costoDeCasillero: false,
      envioDeCelulares: false,
      envioDeComputadoras: false,
      envioDeCamaras: true,
      comprasPequenas: false,
    });
  }
  function showTabFive() {
    setTabState({
      costoDeCasillero: false,
      envioDeCelulares: false,
      envioDeComputadoras: false,
      envioDeCamaras: false,
      comprasPequenas: true,
    });
  }

  return (
    <div className="precios-contain">
      <i className="lni lni-dollar"></i>
      <h2>Precios y Tarifas</h2>
      <div className="tab-and-content-container">
        <div className="tab-container">
          <div
            onClick={showTabOne}
            className={`tab ${tabState.costoDeCasillero && "active-tab"}`}
          >
            <h3>costo del casillero</h3>
          </div>
          <div
            onClick={showTabTwo}
            className={`tab ${tabState.envioDeCelulares && "active-tab"}`}
          >
            <h3>envío de celulares</h3>
          </div>
          <div
            onClick={showTabThree}
            className={`tab ${tabState.envioDeComputadoras && "active-tab"}`}
          >
            <h3>envío de computadoras</h3>
          </div>
          <div
            onClick={showTabFour}
            className={`tab ${tabState.envioDeCamaras && "active-tab"}`}
          >
            <h3>envío de cámaras</h3>
          </div>
          <div
            onClick={showTabFive}
            className={`tab ${tabState.comprasPequenas && "active-tab"}`}
          >
            <h3>compras pequeñas</h3>
          </div>
        </div>
        <div className="content-container">
          {tabState.costoDeCasillero && (
            <div className="content">
              <p>
                El costo de tu casillero es $0.00 <br />
                <br />
                Disfrutarás de...
                <br />
                <br />
                - Almacenamiento de hasta 60 días. <br />
                - Consolidación de todos tus artículos (excluye celulares y
                portátiles)
                <br />
                - Embalaje realizado por expertos.
                <br />
                - Consultoría de expertos.
                <br />
                <br />
                Lo único que pagas es el envío, y eso dependerá del peso de tus
                artículos. Actualmente, tenemos un
                <strong> precio promocional</strong> de $1,35 por libra + $0,60
                de trámite aduanero. Eso equivale a un total de $1,95 por libra.
                Todos los cargos son en dólares americanos. (Después del período
                promocional, la tarifa por libra volverá a los $2.25 estándar).
                <br />
                <br />
                <strong>Seguro:</strong> 10 dólares por envío que cubre hasta
                200 dólares por perdida total. (ninguna agencia de carga
                responde por daños, pero nos ocupamos de empacar lo mejor
                posible sus artículos para evitar estas situaciones).
                <br />
                <br />
                El peso mínimo de un envío está basado en 7 libras. Ejemplo: si
                su artículo pesa 2 libras o menos pagaras 23 dólares, y si pesa
                7 pagara de igual manera 23 dólares (este es el peso exigido por
                las empresas de carga).
                <br />
                <br />
                Recomendamos acumular varios artículos cuando son de poco peso y
                bajo costo para que sea rentable para usted pagar este envío
                mínimo; recuerda que tienes 60 días de almacenaje sin costo para
                tratar de comprar en ese tiempo lo que más pueda. <br />
                <br />
                El costo de tus compras para el envío mínimo de 23 dólares no
                puede ser superior a 100 dólares.
                <br />
                <br />
                Ten en cuenta que cualquier producto o grupo de
                <strong>
                  productos con un valor total inferior a 200 dólares estará
                  exento de impuestos de importación.
                </strong>
                Sin embargo, si el valor total supera los 200 dólares, se
                añadirá un impuesto del 19%, según la ley colombiana.
                <br />
                <br />
                En resumen, la estructura de precios es así: [libras x 1,95
                dólares + 19% de impuestos (si es aplicable) + 10 dólares de
                seguro] <br />
                <br />
                Regulación de aduana en cuanto a cantidades permitidas:
                <strong>solo 6 unidades del mismo tipo por envío</strong>
                (Ej. Si compras gafas aunque sean diferente estilo, color o
                modelo no podemos enviar más de 6 de igual manera para cualquier
                otro artículo)
              </p>
            </div>
          )}

          {tabState.envioDeCelulares && (
            <div className="content">
              <p>
                Los equipos celulares cuyo costo sea inferior a 200 dólares
                están exentos de impuestos. Aquellos equipos móviles cuyo costo
                sea superior o igual a 200 dólares, se les aplicará un impuesto
                del 19%. <br />
                <br />
                Para una cotización detallada debe brindarnos valor exacto del
                equipo e informarnos que tipo de seguro requiere.
              </p>
            </div>
          )}

          {tabState.envioDeComputadoras && (
            <div className="content">
              <p>
                Los computadores cuyo costo esté por debajo de 470 dólares están
                exentos de impuestos. Los equipos cuyo costo sea superior o
                igual a 470 dólares, se les aplicará un impuesto del 19%.
                <br />
                <br />
                Para una cotización detallada debe brindarnos valor exacto del
                equipo e informarnos que tipo de seguro requiere.
              </p>
            </div>
          )}

          {tabState.envioDeCamaras && (
            <div className="content">
              <p>
                Las cámaras fotográficas cuyo costo sea inferior de 200 dólares
                están exentas de impuestos. Aquellas cuyo costo sea superior o
                igual a 200 dólares, se les aplicará un impuesto del 19%.
                <br />
                <br />
                Para una cotización detallada debe brindarnos valor exacto del
                equipo e informarnos que tipo de seguro requiere.
              </p>
            </div>
          )}

          {tabState.comprasPequenas && (
            <div className="content">
              <p>
                Aquellas compras cuyo peso sea inferior a 7 libras y que se
                encuentren en un rango de su valor total entre 1 y 100 dólares,
                se clasificará como un envío mínimo. El costo del envío mínimo
                es de 23 dólares, incluyendo el seguro.
                <br />
                <br />
                Para los productos que tienen un peso mínimo y cuestan menos de
                100 dólares, te recomendamos que compres más artículos para que
                puedas agruparlos y aprovechar al máximo tu envío mínimo de 23
                dólares.
                <br />
                <br />
                Guardaremos tus compras hasta 60 días para otorgar más tiempo
                para comprar. Después de los 60 días, se le contactará para
                empezar el proceso de envío. Contáctenos para una cotización
                exacta.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PreciosSection;
