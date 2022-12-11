import Carousel from "../components/Carousel";

const Landing = () => {
  // image array for the carousel
  const images = [
    "https://images.unsplash.com/photo-1566728595333-75a1d7cae961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1584206863352-ce8b3a1c10e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    "https://plus.unsplash.com/premium_photo-1661952599243-56ed767454d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  return (
    <div className="flex flex-col m-8 items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-zinc-600">
        Welcome to our awesome website!
      </h1>
      <div className="max-h-min">
        <Carousel images={images} />
      </div>
      <h1 className="text-xl font-bold mt-6 text-zinc-600">
        You can find more information about us from the navigation bar above.
      </h1>
    </div>
  );
};

export default Landing;
