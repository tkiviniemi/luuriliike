const Card = (props) => (
  <div className="rounded shadow border max-w-lg max-h-96 bg-white text-zinc-600">
    <img class="rounded-t-sm" src={props.image} alt="..." />
    <div>
      <h3 className=" text-xl font-bold">{props.title}</h3>
      <p className="">{props.description}</p>
    </div>
  </div>
);

export default Card;
