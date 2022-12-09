import Card from "../components/Card";

const About = () => {
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row justify-evenly">
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
        <Card
          image={
            "https://as1.ftcdn.net/v2/jpg/02/44/67/96/1000_F_244679651_1ZFNvsYDKuTOlgSBFasEF2CguYFVAvQ1.jpg"
          }
          title={"Staff"}
          description={
            "Our staff is the best in the country and highly certified! Every one of our staff members has at least 5 years of experience in the field!"
          }
        />
      </div>
    </div>
  );
};

export default About;
