// Page for contacting about repairs

import RepairForm from "../components/RepairForm";
import Collapsible from "../components/Collapsible";
import Card from "../components/Card";

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
    <div className="flex flex-col m-8">
      <div className="flex justify-evenly">
        <Card
          image={
            "https://as1.ftcdn.net/v2/jpg/02/44/67/96/1000_F_244679651_1ZFNvsYDKuTOlgSBFasEF2CguYFVAvQ1.jpg"
          }
          title={"Repairs"}
          description={
            "We repair all kinds of mobile devices! Whether it has a broken screen or a broken battery, water damage or perhaps a broken charging port we can fix it!"
          }
        />
        <Card
          image={
            "https://as1.ftcdn.net/v2/jpg/02/44/67/96/1000_F_244679651_1ZFNvsYDKuTOlgSBFasEF2CguYFVAvQ1.jpg"
          }
          title={"Staff"}
          description={
            "Our staff is the best in the country and highly certified! Every one of our staff members has at least 5 years of experience in the field!"
          }
        />
        <RepairForm onRequestSubmit={repairRequestHandler} />
      </div>
      <div className="flex justify-evenly">
        <Collapsible children={<div>Hello</div>} title={"Queue"} />
      </div>
    </div>
  );
};

export default Repairs;
