import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { useDataContext } from "../../context/lanContext";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const UnidadesContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/imagenes`);
  const { data: dataUnidades, loading: loadingUnidades } = useFetch(`/unidades`);
  const { data: dataArticles, loading: loadingArticles } = useFetch(`/secciones/${lan}`);
  if (loadingArticles) return <Loader />;

  const TextoHTML = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const properties = {
    arrows: true,
    transitionDuration: 500,
    pauseOnHover: false,
    autoplay: false,
    indicators: true,
  };
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>THK Avalos &bull; Unidades</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Unidades" />
        <meta property="og:url" content="/unidades" />
        <meta property="og:description" content="" />
        <link rel="canonical" href="/unidades" />
      </Helmet>
      <section className="h-screen">
        <div className="hero bg-secondary px-12 py-8 absolute bottom-20 right-10 z-20 w-3/4 max-w-md">
          <h1 className="font-italic text-4xl mb-4 text-primary">{dataArticles[5].title}</h1>
          <p className="text-white">
            <TextoHTML html={dataArticles[5].text} />
          </p>
        </div>
        {loading ? <Loader /> : <Slider data={data.filter((item) => item.category == 4)} autoplay={false} indicators={false} />}
      </section>
      <section>
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 px-10 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-extra">{dataArticles[6].title}</h1>
          </div>
          <div className="text-center border-neutral-950 lg:text-left lg:border-l-4 lg:pl-12 ">
            <p>
              <TextoHTML html={dataArticles[6].text} />
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl px-10 py-10 relative">
          {loadingUnidades ? (
            <Loader />
          ) : (
            <Slide slidesToScroll={1} slidesToShow={1} responsive={responsiveSettings} {...properties}>
              {dataUnidades.map((item) => (
                <article className="bg-secondary z-30 mx-2" key={item.id}>
                  <div className="aspect-video object-cover w-full overflow-hidden">
                    <ImageComponent src={item.image} alt={item.title} />
                  </div>
                  <div className="text-white p-8 text-sm">
                    <h2 className="uppercase font-extra text-3xl pb-2 border-white border-b-2 mb-4">{item.title}</h2>
                    <p className="mb-8">
                      <TextoHTML html={lan === "es" ? item.text : item.text_eng} />
                    </p>
                    <a href={item.file} target="_blank" rel="noreferrer" className="text-black bg-primary px-10 py-3 font-bold text-sm inline-block bg-white-hover hover:shadow-lg">
                      {lan === "es" ? "VER MÁS" : "MORE INFO"}
                    </a>
                  </div>
                </article>
              ))}
            </Slide>
          )}
        </div>
      </section>
      <section>
        {loading ? (
          <Loader />
        ) : (
          data
            .filter((item) => item.category == 5)
            .map((item) => (
              <div className="w-full aspect-video block" key={item.id}>
                <ImageComponent src={item.image} alt="Imagen pie de página de Unidades" />
              </div>
            ))
        )}
      </section>
    </Layout>
  );
};

export default UnidadesContainer;
