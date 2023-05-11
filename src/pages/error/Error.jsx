import Layout from "../../components/Layout";

const Error = () => {
  return (
    <Layout>
      <section className="grid place-content-center text-center h-screen">
        <div>
          <h1 className="text-5xl font-bold mb-4">Error 404</h1>
          <p className="text-xl">La página que esta buscando no existe</p>
        </div>
      </section>
    </Layout>
  );
};

export default Error;
