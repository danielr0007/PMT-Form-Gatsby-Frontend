import React, { useState } from "react";
import FormStatusContext from "./FormStatusContext";
import CustomUserFieldsContext from "./CustomUserFieldsContext";
import MessageBox from "./MessageBox";

const api = "https://pmt-form-backend-private.onrender.com/v1/nuevo-usuario";
// const api = "http://localhost:3000/v1/nuevo-usuario";

function Form() {
  // ? Use this to get rid of the form and the overlay on submission.
  const [, setFormSent] = React.useContext(FormStatusContext);
  const [, setUserInfo] = React.useContext(CustomUserFieldsContext);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [secondLastName, setSecondLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [casilleroNumber, setCasilleroNumber] = React.useState("");

  const [showMessageBox, setShowMessageBox] = React.useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState(null);

  // CODE THAT CREATES A CASILLERO NUMBER BASED ON INFORMATION PROVIDED BY USER
  function createCasilleroNumber() {
    if (firstName !== "" && lastName !== "") {
      const apellidoFirstThreeLetters = lastName.toUpperCase().slice(0, 3);
      const nombreFirstLetter = firstName.toUpperCase().slice(0, 1);
      const currentMonth = (new Date().getMonth() + 1).toString();
      const currentYear = new Date().getFullYear().toString().slice(2);
      const randomThreeNumbers = Math.floor(Math.random() * (89 - 10) + 10);
      setCasilleroNumber(
        nombreFirstLetter +
          apellidoFirstThreeLetters +
          randomThreeNumbers +
          currentMonth +
          currentYear
      );
    }
  }

  // Email validation function
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // phone number validation function
  const isValidPhoneNumber = (phoneNumber) => {
    // Remove non-digit characters from the phone number
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    // Check if the phone number has at least 10 digits
    return digitsOnly.length >= 10;
  };

  // Thios function handles the form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Makes sure user can't submit form if any field is empty
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      address.trim() === ""
    ) {
      setMessageBoxContent(
        "Por favor, rellene todos los campos del formulario."
      );
      setShowMessageBox(true);
      return;
    }

    // Checks that user provided valid email
    if (!isValidEmail(email)) {
      setMessageBoxContent(
        "Por favor, introduzca un correo electrónico válido."
      );
      setShowMessageBox(true);
      return;
    }

    // Checks that user provided valid phone number
    if (!isValidPhoneNumber(phone)) {
      setMessageBoxContent(
        "Por favor, introduzca un número de teléfono válido de al menos 10 dígitos."
      );
      setShowMessageBox(true);
      return;
    }

    // Makes sure casillero number is created before user can submmit form
    if (casilleroNumber === "") {
      createCasilleroNumber();
      return;
    }

    const data = {
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      secondLastName: secondLastName.toLowerCase(),
      phone: phone,
      email: email.toLowerCase(),
      address: address.toLowerCase(),
      casilleroNumber: casilleroNumber,
    };

    // Handles api call
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // Conditional statement that checks if user already exists
        // ........................................................
        // ........................................................
        if (res.error === "Resource already exists.") {
          console.log("balls");
          setMessageBoxContent(
            `El correo electrónico introducido ya existe, póngase en contacto con nosotros para obtener su información.`
          );
          setShowMessageBox(true);

          // If user doesn't exists then this code runs
          // ........................................................
          // ........................................................
        } else {
          // Sets client information in copy (casillero # and name)
          // ........................................................
          // ........................................................
          setUserInfo({
            firstName: firstName,
            casilleroNumber: casilleroNumber,
          });

          // Removes the overlay and form on form submission to reveal the copy page
          // ........................................................
          // ........................................................
          setFormSent(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessageBoxContent(
          "Se ha producido un error, inténtelo de nuevo más tarde o póngase en contacto con nosotros para que podamos registrarle manualmente."
        );
        setShowMessageBox(true);
      });
  }

  return (
    <div className="modal-container">
      <div className="leftside">
        <img src="/personaje-de-envios.png" alt="logo" />
      </div>
      <div className="rightside">
        <h2>Ya casi estas listo para comprar tus marcas favoritas!</h2>

        <h4>
          Solo llena el siguiente formulario y recibirás tu dirección y número
          de casillero.
        </h4>

        <div id="error-message">
          <p></p>
        </div>
        <div className="form-container">
          <form id="form-element">
            <div className="nombre-y-apellido">
              <div>
                <label className="label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  id="nombre"
                  placeholder="Daniel"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label className="label" htmlFor="apellido">
                  Apellido
                </label>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  id="apellido"
                  placeholder="Ramirez"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    createCasilleroNumber();
                  }}
                />
              </div>
            </div>
            <div className="segundoap-telefono">
              <div>
                <label className="label" htmlFor="segundo-apellido">
                  Segundo apellido
                </label>
                <input
                  className="input"
                  type="text"
                  name="lastName2"
                  id="segundo-apellido"
                  placeholder="Cardona"
                  value={secondLastName}
                  onChange={(e) => setSecondLastName(e.target.value)}
                />
              </div>
              <div>
                <label className="label" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  className="input"
                  type="number"
                  name="phone"
                  id="telefono"
                  placeholder="3103489901"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Daniel77@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="label" htmlFor="direccion">
                Dirección
              </label>
              <textarea
                className="input"
                name="address"
                id="direccion"
                cols="20"
                rows="5"
                placeholder="Bogotá, Brr Chapinero Alto, Cra 6 # 57 - 91, apto 213, código postal 110231"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label className="label" htmlFor="locker">
                Número de casillero:
              </label>
              <input
                id="locker"
                name="locker"
                className="input"
                type="text"
                value={casilleroNumber}
                readOnly={true}
              />
            </div>

            <button
              type="submit"
              id="submit-butoni"
              onClick={(e) => handleSubmit(e)}
            >
              Abrir casillero
            </button>
          </form>
        </div>
      </div>
      {showMessageBox && (
        <MessageBox
          message={messageBoxContent}
          setShowMessageBox={setShowMessageBox}
        />
      )}
    </div>
  );
}

export default Form;
