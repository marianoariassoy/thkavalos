import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProyectoContainer = () => {
  const data = [
    {
      id: 2,
      image: "https://images.pexels.com/photos/956952/pexels-photo-956952.png?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    },
  ];
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
        <div className="hero bg-secondary px-12 py-8 absolute bottom-20 left-10 z-20 w-3/4 max-w-md">
          <h1 className="font-italic text-4xl mb-4 text-primary">El Proyecto</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
            ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
          </p>
        </div>
        <Slider data={data} autoplay={false} indicators={false} />
      </section>

      <section className="bg-primary">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 px-10 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-extra">EXCLUSIVAS UNIDADES</h1>
            <h1 className="text-white text-6xl font-extra mb-4">DESDE 30M2 A 190M2</h1>
            <Link to="/" className="text-white bg-secondary px-10 py-3 font-bold text-sm inline-block bg-white-hover hover:shadow-lg">
              VER MÁS
            </Link>
          </div>
          <div className="text-center border-neutral-950 lg:text-left lg:border-l-4 lg:pl-12 ">
            <h1 className="font-italic text-4xl mb-4">Tu casa, tu lugar en el mundo.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 lg:gap-20 px-10 py-28">
          <div>
            <h1 className="font-italic text-4xl mb-4">Espacios pensados para disfrutar todos los días.</h1>
            <p className="mb-12 text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
              praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
            <h1 className="font-italic text-4xl mb-4">Tu casa, tu lugar en el mundo.</h1>
            <p className="mb-12 text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
            </p>
          </div>
          <div>
            <img src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full" />
          </div>
        </div>
      </section>

      <section>
        <img src="https://images.pexels.com/photos/1907046/pexels-photo-1907046.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1" alt="" className="w-full" />
      </section>
    </Layout>
  );
};

export default ProyectoContainer;
