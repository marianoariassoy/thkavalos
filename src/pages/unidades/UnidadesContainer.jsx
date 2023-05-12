import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import ImageLoader from "../../components/ImageLoader";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { useDataContext } from "../../context/lanContext";

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
        <div className="hero bg-secondary px-12 py-8 absolute bottom-20 left-10 z-20 w-3/4 max-w-md">
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
        <div className="container mx-auto max-w-6xl grid grid-col-1 lg:grid-cols-3 gap-8 px-10 py-10">
          {loadingUnidades ? (
            <Loader />
          ) : (
            dataUnidades.map((item) => (
              <article className="bg-secondary z-30" key={item.id}>
                <div>
                  <img src={item.image} alt={item.title} className="aspect-square object-cover" />
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
            ))
          )}
        </div>
      </section>

      <section className="-mt-20">{loading ? <Loader className="pt-20" /> : data.filter((item) => item.category == 5).map((item) => <ImageLoader key={item.id} src={item.image} alt="Imagen pie de página de Unidades" />)}</section>
    </Layout>
  );
};

export default UnidadesContainer;
