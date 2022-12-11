// Page for contacting about repairs
import { useEffect, useState } from "react";

import RepairForm from "../components/RepairForm";
import Collapsible from "../components/Collapsible";
import Card from "../components/Card";
import QueueList from "../components/QueueList";

const Repairs = () => {
  const [repairList, setRepairList] = useState([]);

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
  };

  // Handler for GETting the form data from Firebase database
  const fetchRepairList = async () => {
    const response = await fetch(
      "https://luuriliike-default-rtdb.europe-west1.firebasedatabase.app/repairs.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    const fetchedRepairs = [];

    for (const key in data) {
      fetchedRepairs.push({
        id: key,
        device: data[key].device,
        description: data[key].description,
      });
    }
    setRepairList(fetchedRepairs);
  };

  // UseEffect for fetching the data from Firebase database
  useEffect(() => {
    fetchRepairList();
  }, []);

  return (
    <div className="flex flex-col m-8">
      <div className="flex justify-evenly">
        <Card
          image={
            "https://as2.ftcdn.net/v2/jpg/01/07/50/01/1000_F_107500164_rwndmChhmlkuzaLOdorIzSwCxLNTjg2R.jpg"
          }
          title={"Repairs"}
          description={
            "We repair all kinds of mobile devices! Whether it has a broken screen or a broken battery, water damage or perhaps a broken charging port we can fix it!"
          }
        />

        <RepairForm onRequestSubmit={repairRequestHandler} />
      </div>
      <div className="flex w-full justify-center">
        <div className="m-8 w-1/2">
          <Collapsible data={<QueueList data={repairList} />} title={"Queue"} />
        </div>
      </div>
    </div>
  );
};

export default Repairs;
