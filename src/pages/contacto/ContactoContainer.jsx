import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import logoFooter from "../../assets/images/logo-footer.svg";
import { Helmet } from "react-helmet";

const ContactoContainer = () => {
  const data = [
    {
      id: 2,
      image: "https://images.pexels.com/photos/956952/pexels-photo-956952.png?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>THK Avalos &bull; Contacto</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Contacto" />
        <meta property="og:url" content="/contacto" />
        <meta property="og:description" content="" />
        <link rel="canonical" href="/contacto" />
      </Helmet>

      <section className="h-screen">
        <div className="absolute bottom-20 right-10 z-20 w-3/4 max-w-md text-white">
          <h1 className="font-italic text-4xl mb-8">Contacto.</h1>
          <div className="grid gap-4">
            <div>
              <label className="mb-1 block font-bold text-sm" htmlFor="name">
                NOMBRE Y APELLIDO
              </label>
              <input type="text" name="name" className="w-full h-11 p-3 text-black" id="name" />
            </div>
            <div>
              <label className="mb-1 block font-bold text-sm" htmlFor="email">
                EMAIL
              </label>
              <input type="text" name="email" className="w-full h-11 p-3 text-black" id="name" />
            </div>
            <div>
              <label className="mb-1 block font-bold text-sm" htmlFor="phone">
                TELÉFONO
              </label>
              <input type="text" name="phone" className="w-full h-11 p-3 text-black" id="phone " />
            </div>
            <div>
              <label className="mb-1 block font-bold text-sm" htmlFor="message">
                MENSAJE
              </label>
              <textarea className="w-full p-3" name="message" id="message" cols="30" rows="4"></textarea>
            </div>
            <div>
              <button className="bg-white text-black px-10 py-3 font-bold text-sm inline-block bg-primary-hover hover:shadow-lg">ENVIAR</button>
            </div>
          </div>
        </div>
        <Slider data={data} autoplay={false} indicators={false} />
      </section>

      <section className="bg-secondary text-white">
        <div className="container mx-auto max-w-6xl lg:flex justify-between items-center gap-4 p-10">
          <div className="lg:flex flex-col items-center justify-center text-sm">
            <div className="mb-4">DISEÑO & COMERCIALIZACIÓN</div>
            <img src={logoFooter} alt="Logo" className="mb-4" />
          </div>
          <div className="lg:text-right">
            <p>
              Ávalos 2183 | Villa Urquiza | C1431DPO
              <br /> Ciudad Autónoma de Buenos Aires I Argentina
              <br /> [+549] 11 3409 5408 / [+549] 11 6014 1806
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactoContainer;
