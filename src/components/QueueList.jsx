const QueueList = (props) => {
  return (
    <div className="flex flex-col items-center">
      <ul>
        {props.data.map((item) => (
          <li key={item.id}>
            {item.device} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueueList;
