import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import logoFooter from "../../assets/images/logo-footer.svg";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Form from "./Form";
import { useDataContext } from "../../context/lanContext";

const ContactoContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const miDiv = document.querySelector("header");
    const miLogo = document.querySelector(".logo");
    miDiv.style.backgroundColor = "white";
    miLogo.style.width = "80px";
  }, []);

  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/imagenes`);

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

      <section className="h-screen bg-gray-200">
        <div className="absolute bottom-20 right-10 z-20 w-3/4 max-w-md text-white">
          <h1 className="font-italic text-4xl mb-8">Contacto.</h1>
          <Form />
        </div>
        {loading ? <Loader /> : <Slider data={data.filter((item) => item.category == 6)} autoplay={false} indicators={false} />}
      </section>

      <section className="bg-secondary text-white">
        <div className="container mx-auto max-w-6xl lg:flex justify-between items-center gap-4 p-10">
          <div className="lg:flex flex-col items-center justify-center text-sm">
            <div className="mb-4">{lan === "es" ? "DISEÑO & COMERCIALIZACIÓN" : "DESIGN & SALES"}</div>
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
