import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import ImageLoader from "../../components/ImageLoader";

const UnidadesContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: 2,
      image: "https://images.pexels.com/photos/562868/pexels-photo-562868.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        <div className="hero bg-secondary px-12 py-8 absolute bottom-20 left-10 z-20 w-3/4 max-w-md">
          <h1 className="font-italic text-4xl mb-4 text-primary">Unidades</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
            ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
          </p>
        </div>
        <Slider data={data} autoplay={false} indicators={false} />
      </section>

      <section>
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 px-10 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-extra">ENCONTRÁ LA UNIDAD</h1>
            <h1 className="text-6xl font-extra">PERFECTA PARA VOS.</h1>
          </div>
          <div className="text-center border-neutral-950 lg:text-left lg:border-l-4 lg:pl-12 ">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl grid grid-col-1 lg:grid-cols-3 gap-8 px-10 py-10">
          <article className="bg-secondary z-30">
            <div>
              <img src="https://images.pexels.com/photos/1714430/pexels-photo-1714430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="aspect-square object-cover" />
            </div>
            <div className="text-white p-8 text-sm">
              <h2 className="uppercase font-extra text-3xl pb-2 border-white border-b-2 mb-4">avalos 102</h2>
              <p className="mb-8">
                Superfie Cubierta: 65m. <br /> Ambientes: 3 <br />
                Unidad: 01 <br />
                Piso: 1 <br />
                Superficie Cochera: 12,5 m. <br /> Balcón | Terraza: 5 m.
              </p>
              <Link to="/" className="text-black bg-primary px-10 py-3 font-bold text-sm inline-block bg-white-hover hover:shadow-lg">
                VER MÁS
              </Link>
            </div>
          </article>
          <article className="bg-secondary z-30">
            <div>
              <img src="https://images.pexels.com/photos/1714430/pexels-photo-1714430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="aspect-square object-cover" />
            </div>
            <div className="text-white p-8 text-sm">
              <h2 className="uppercase font-extra text-3xl pb-2 border-white border-b-2 mb-4">avalos 103</h2>
              <p className="mb-8">
                Superfie Cubierta: 65m. <br /> Ambientes: 3 <br />
                Unidad: 01 <br />
                Piso: 1 <br />
                Superficie Cochera: 12,5 m. <br /> Balcón | Terraza: 5 m.
              </p>
              <Link to="/" className="text-black bg-primary px-10 py-3 font-bold text-sm inline-block bg-white-hover hover:shadow-lg">
                VER MÁS
              </Link>
            </div>
          </article>
          <article className="bg-secondary z-30">
            <div>
              <img src="https://images.pexels.com/photos/1714430/pexels-photo-1714430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="aspect-square" />
            </div>
            <div className="text-white p-8 text-sm">
              <h2 className="uppercase font-extra text-3xl pb-2 border-white border-b-2 mb-4">avalos 101</h2>
              <p className="mb-8">
                Superfie Cubierta: 65m. <br /> Ambientes: 3 <br />
                Unidad: 01 <br />
                Piso: 1 <br />
                Superficie Cochera: 12,5 m. <br /> Balcón | Terraza: 5 m.
              </p>
              <Link to="/" className="text-black bg-primary px-10 py-3 font-bold text-sm inline-block bg-white-hover hover:shadow-lg">
                VER MÁS
              </Link>
            </div>
          </article>
        </div>
      </section>

      <ImageLoader src="https://images.pexels.com/photos/1500459/pexels-photo-1500459.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1" alt="" className="w-full aspect-video" />
    </Layout>
  );
};

export default UnidadesContainer;
