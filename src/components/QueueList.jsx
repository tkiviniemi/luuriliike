const QueueList = (props) => {
  return (
    <div className="flex flex-col items-center">
      <ul className="w-full">
        <div className="font-bold bg-stone-100">
          <div className="inline-flex w-1/2">
            <i>Device</i>
          </div>
          <div className="inline-flex w-1/2">
            <i>Problem</i>
          </div>
          <hr />
        </div>
        {props.data.map((item) => (
          <li key={item.id} className="flex-row text-center">
            <div className="inline-flex w-1/2">
              <i>{item.device}</i>
            </div>
            <div className="inline-flex w-1/2">
              <i>{item.description}</i>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
