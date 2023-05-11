import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import ImageLoader from "../../components/ImageLoader";

const HomeContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2001829/pexels-photo-2001829.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/956952/pexels-photo-956952.png?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1907046/pexels-photo-1907046.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    },
  ];

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

      <Slider data={data} autoplay={true} indicators={true} />
      <section>
        <div className="container mx-auto max-w-6xl grid px-10 py-28 gap-8 lg:grid-cols-2 lg:gap-20 ">
          <div>
            <ImageLoader src="https://images.pexels.com/photos/1274850/pexels-photo-1274850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full aspect-square object-cover" />
          </div>
          <div>
            <h1 className="font-italic text-4xl mb-4">
              Diseño de Vanguardia
              <br /> en el corazón de Villa Urquiza
            </h1>
            <p className="mb-8 text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
              praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
              ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet
            </p>

            <Link to="/unidades" className="text-white bg-secondary px-10 py-3 font-bold text-sm inline-block bg-primary-hover hover:shadow-lg">
              VER MÁS
            </Link>
          </div>
        </div>
      </section>

      <section>
        <iframe
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/2ecqslqwXLQ?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </Layout>
  );
};

export default HomeContainer;
