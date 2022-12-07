const RepairForm = ({ repair, onSubmit }) => {
  return (
    <div className="flex flex-col items-center">
      <h1>Repairs</h1>
      <p>Page for contacting about repairs</p>
      <form className="flex flex-col gap-2">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <label>
          Repair:
          <input type="text" name="repair" />
        </label>

        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RepairForm;
