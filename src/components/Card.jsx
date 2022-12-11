const Card = (props) => (
  <div className="rounded shadow border max-w-xl max-h-xl bg-white text-zinc-600">
    <div>
      <img class="rounded-t-sm" src={props.image} alt="..." />

      <h3 className="text-xl font-bold">{props.title}</h3>
      <p className="">{props.description}</p>
    </div>
  </div>
);

export default Card;
