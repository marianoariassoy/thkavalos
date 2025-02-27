import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { useDataContext } from "../../context/lanContext";
import ReactPlayer from "react-player";
import WhatsApp from "../../components/WhatsApp";

const UrquizaContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/imagenes`);
  const { data: dataGaleria, loading: loadingGaleria } = useFetch(`/galeria`);
  const { data: dataArticles, loading: loadingArticles } = useFetch(
    `/secciones/${lan}`
  );
  if (loadingArticles) return <Loader />;

  const TextoHTML = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const properties = {
    arrows: true,
    transitionDuration: 500,
    pauseOnHover: false,
    autoplay: true,
    indicators: true,
  };
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>THK Avalos &bull; Villa Urquiza</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Villa Urquiza" />
        <meta property="og:url" content="/villa-urquiza" />
        <meta property="og:description" content="" />
        <link rel="canonical" href="/villa-urquiza" />
      </Helmet>

      <section className="">
        <div className="hero bg-secondary px-12 py-8 absolute bottom-28 right-10 z-20 w-3/4 max-w-md">
          <h1 className="font-italic text-4xl mb-4 text-primary">
            {dataArticles[7].title}
          </h1>
          <p className="text-white">
            <TextoHTML html={dataArticles[7].text} />
          </p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          data
            .filter((item) => item.category == 8)
            .map((item) => (
              <ReactPlayer
                key={item.id}
                url={item.video}
                playing={true}
                controls={true}
                muted={true}
                loop
                width="100%"
                height="auto"
                className="w-screen aspect-video"
              />
            ))
        )}
      </section>

      <section className="bg-primary">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 px-10 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-extra uppercase">
              {dataArticles[8].title2}
            </h1>
            <h1 className="text-white text-6xl font-extra mb-4 uppercase">
              {dataArticles[8].title3}
            </h1>
            <Link
              to="/proyecto"
              className="text-white bg-secondary px-10 py-3 font-bold text-sm inline-block bg-white-hover hover:shadow-lg"
            >
              {lan === "es" ? "VER MÁS" : "SEE MORE"}
            </Link>
          </div>
          <div className="text-center border-neutral-950 lg:text-left lg:border-l-4 lg:pl-12 ">
            <h1 className="font-italic text-4xl mb-4">
              {dataArticles[8].title}
            </h1>
            <p>
              <TextoHTML html={dataArticles[8].text} />
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen relative">
        <div className="absolute left-0 w-full z-20 ">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 px-10 pt-28">
            <div className="bg-white p-8">
              <h1 className="text-6xl font-extra uppercase mb-4">
                {dataArticles[9].title}
              </h1>
              <p className="mb-8">
                <TextoHTML html={dataArticles[9].text} />
              </p>
              <h1 className="text-6xl font-extra uppercase mb-4">
                {dataArticles[10].title}
              </h1>
              <p>
                <TextoHTML html={dataArticles[10].text} />
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.1052556914838!2d-58.48705808883593!3d-34.576203172851365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb667ea1a392d%3A0xa7a38afdc3a0c2b4!2s%C3%81valos%202183%2C%20C1431DPO%20CABA%2C%20Argentina!5e0!3m2!1ses!2sit!4v1681379277884!5m2!1ses!2sit"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl px-10 py-24 relative">
          {loadingGaleria ? (
            <Loader />
          ) : (
            <Slide
              slidesToScroll={1}
              slidesToShow={1}
              responsive={responsiveSettings}
              {...properties}
            >
              {dataGaleria.map((item) => (
                <div className="px-3 w-full " key={item.id}>
                  <ImageComponent
                    src={item.image}
                    alt="Foto de Villa Urquiza"
                  />
                </div>
              ))}
            </Slide>
          )}
        </div>
      </section>

      <WhatsApp />
    </Layout>
  );
};

export default UrquizaContainer;
