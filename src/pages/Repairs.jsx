// Page for contacting about repairs

import RepairForm from "../components/RepairForm";

const Repairs = () => {
  // Handler for POSTing the form data to Firebase database

  const repairRequestHandler = async (repair) => {
    const response = await fetch(
      "https://luuriliike-default-rtdb.europe-west1.firebasedatabase.app/repairs.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(repair),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="h-screen ">
      <RepairForm onRequestSubmit={repairRequestHandler} />
    </div>
  );
};

export default Repairs;
