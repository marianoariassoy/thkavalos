import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { useDataContext } from "../../context/lanContext";
import WhatsApp from "../../components/WhatsApp";

const ProyectoContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/imagenes`);
  const { data: dataArticles, loading: loadingArticles } = useFetch(
    `/secciones/${lan}`
  );
  if (loadingArticles) return <Loader />;

  const TextoHTML = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <Layout>
      <Helmet>
        <title>THK Avalos &bull; El Proyecto</title>
        <meta name="description" content="" />
        <meta property="og:title" content="El Proyecto" />
        <meta property="og:url" content="/proyecto" />
        <meta property="og:description" content="" />
        <link rel="canonical" href="/proyecto" />
      </Helmet>

      <section className="h-screen">
        <div className="hero bg-secondary px-12 py-8 absolute bottom-28 right-10 z-20 w-3/4 max-w-md">
          <h1 className="font-italic text-4xl mb-4 text-primary">
            {dataArticles[1].title}
          </h1>
          <p className="text-white">
            <TextoHTML html={dataArticles[1].text} />
          </p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <Slider
            data={data.filter((item) => item.category == 2)}
            autoplay={false}
            indicators={false}
          />
        )}
      </section>

      <section className="bg-primary">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 px-10 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-extra">{dataArticles[2].title2}</h1>
            <h1 className="text-white text-6xl font-extra mb-4">
              {dataArticles[2].title3}
            </h1>
            <Link
              to="/unidades"
              className="text-white bg-secondary px-10 py-3 font-bold text-sm inline-block bg-white-hover hover:shadow-lg"
            >
              {lan === "es" ? "VER MÁS" : "SEE MORE"}
            </Link>
          </div>
          <div className="text-center border-neutral-950 lg:text-left lg:border-l-4 lg:pl-12 ">
            <h1 className="font-italic text-4xl mb-4">
              {dataArticles[2].title}
            </h1>
            <p>
              <TextoHTML html={dataArticles[2].text} />
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 lg:gap-20 px-10 py-28">
          <div>
            <h1 className="font-italic text-4xl mb-4">
              {dataArticles[3].title}
            </h1>
            <p className="mb-12">
              <TextoHTML html={dataArticles[3].text} />
            </p>
            <h1 className="font-italic text-4xl mb-4">
              {dataArticles[4].title}
            </h1>
            <p className="mb-12">
              <TextoHTML html={dataArticles[4].text} />
            </p>
          </div>
          <div>
            <ImageComponent
              src={dataArticles[3].image}
              alt={dataArticles[3].title}
              className="w-full aspect-square"
            />
          </div>
        </div>
      </section>

      {loading ? (
        <Loader />
      ) : (
        data
          .filter((item) => item.category == 3)
          .map((item) => (
            <ImageComponent
              key={item.id}
              src={item.image}
              alt="Imagen pie de página de Proyectos"
            />
          ))
      )}

      <WhatsApp />
    </Layout>
  );
};

export default ProyectoContainer;
