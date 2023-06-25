import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br not-className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit commodi obcaecati sint unde nobis voluptas numquam incid.
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
