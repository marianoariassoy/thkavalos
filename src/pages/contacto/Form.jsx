import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { useDataContext } from "../../context/lanContext";

const Error = () => {
  return <div className="text-red-500 font-bold">Debe completar este campo</div>;
};

const Form = () => {
  const { lan } = useDataContext();
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    const sender = {
      to: "info@thk-avalos.com",
      from: "no-reply@thk-avalos.com",
      from_name: "THK Avalos",
      subject: "Contacto THK Avalos",
    };

    axios
      .post("https://thk-avalos.com/backend/send-email.php", { ...data, ...sender })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      })
      .catch(() => {
        setError(true);
        setSended(false);
      });
  };

  const text = {
    es: {
      name: "NOMBRE Y APELLIDO",
      email: "EMAIL",
      phone: "TELÉFONO",
      message: "MENSAJE",
      send: "ENVIAR",
      thanks: "Gracias por contactarte con nosotros.",
      error: "Se produjo un error al enviar el mensaje :-(",
    },
    en: {
      name: "NAME AND SURNAME",
      email: "EMAIL",
      phone: "PHONE",
      message: "MESSAGE",
      send: "SEND",
      thanks: "Thanks for contacting us.",
      error: "An error occurred while sending the message :-(",
    },
  };

  return (
    <>
      {error ? (
        <span className="text-2xl font-bold">{text[lan].error}</span>
      ) : sended ? (
        <span className="text-3xl font-bold">{text[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-3">
            <div>
              <label className="mb-1 block font-bold text-sm">{text[lan].name}</label>
              <input {...register("name", { required: true })} className="w-full h-11 p-3 text-black" />
              {errors.name && <Error />}
            </div>
            <div>
              <label className="mb-1 block font-bold text-sm">{text[lan].email}</label>
              <input {...register("email", { required: true })} className="w-full h-11 p-3 text-black" />
              {errors.email && <Error />}
            </div>
            <div>
              <label className="mb-1 block font-bold text-sm">{text[lan].phone}</label>
              <input {...register("phone")} className="w-full h-11 p-3 text-black" />
            </div>
            <div>
              <label className="mb-1 block font-bold text-sm">{text[lan].message}</label>
              <textarea cols="30" rows="3" {...register("message", { required: true })} className="w-full p-3 text-black" />
              {errors.message && <Error />}
            </div>
            <div>{sending ? <BeatLoader /> : <button className="bg-white text-black px-10 py-3 font-bold text-sm inline-block bg-primary-hover hover:shadow-lg">{text[lan].send}</button>}</div>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
