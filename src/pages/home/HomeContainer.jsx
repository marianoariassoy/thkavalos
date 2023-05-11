import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactPlayer from "react-player";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import ImageLoader from "../../components/ImageLoader";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const HomeContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading } = useFetch(`/imagenes`);
  const { data: dataArticles, loading: loadingArticles } = useFetch(`/secciones`);
  if (loadingArticles) return <Loader />;

  const TextoHTML = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <Layout>
      <Helmet>
        <title>THK Avalos</title>
        <meta name="description" content="" />
        <meta property="og:title" content="THK Avalos" />
        <meta property="og:url" content="/" />
        <meta property="og:description" content="" />
        <link rel="canonical" href="/" />
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <section className="aspect-video object-cover">
          <Slider data={data.filter((item) => item.category == 1)} autoplay={true} indicators={true} />
        </section>
      )}

      <section>
        <div className="container mx-auto max-w-6xl grid px-10 py-28 gap-8 lg:grid-cols-2 lg:gap-20 ">
          <div>
            <ImageLoader src={dataArticles[0].image} alt={dataArticles[0].title} className="w-full aspect-square object-cover" />
          </div>
          <div>
            <h1 className="font-italic text-4xl mb-4">{dataArticles[0].title}</h1>
            <p className="mb-8 text-justify">
              <TextoHTML html={dataArticles[0].text} />
            </p>
            <Link to="/unidades" className="text-white bg-secondary px-10 py-3 font-bold text-sm inline-block bg-primary-hover hover:shadow-lg">
              VER MÁS
            </Link>
          </div>
        </div>
      </section>

      {loading ? <Loader /> : data.filter((item) => item.category == 7).map((item) => <ReactPlayer key={item.id} url={item.video} width="100%" className="video-player" autoplay muted />)}
    </Layout>
  );
};

export default HomeContainer;
