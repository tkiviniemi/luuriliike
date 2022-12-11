import Card from "../components/Card";

const About = () => {
  return (
    <div className="flex flex-col m-8">
      <div className="flex flex-row justify-evenly">
        <Card
          image={
            "https://as2.ftcdn.net/v2/jpg/01/07/50/01/1000_F_107500164_rwndmChhmlkuzaLOdorIzSwCxLNTjg2R.jpg"
          }
          title={"Repairs"}
          description={
            "We repair all kinds of mobile devices! Whether it has a broken screen or a broken battery, water damage or perhaps a broken charging port we can fix it!"
          }
        />
        <Card
          image={
            "https://as2.ftcdn.net/v2/jpg/02/23/36/07/1000_F_223360793_r60sTRO9KZrTEQlXX3eQOFPVeaUoERBw.jpg"
          }
          title={"Staff"}
          description={
            "Our staff is the best in the country and highly certified! Every one of our staff members has at least 5 years of experience in the field!"
          }
        />
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-evenly items-center m-8 max-w-2xl">
          <h3 className="text-lg font-bold">About the Company</h3>
          <p className="p-2"></p>
          <p className="p-2 text-center">
            The founder of this company, John Doe, has been in the mobile device
            repair industry for over 10 years. He has worked for many different
            companies and has gained a lot of experience in the field. He has
            decided to start his own company and has been doing so for the past
            5 years. He has been very successful and has been able to expand his
            company to 3 different locations. He has been able to hire many
            employees and has been able to provide them with a stable job. He
            has been able to provide his customers with the best service
            possible and has been able to provide them with the best prices.
          </p>
          <p className="p-2 text-center">
            The company has been able to expand to 3 different locations and has
            been able to hire many employees. The company has been able to
            provide its customers with the best service possible and has been
            able to provide them with the best prices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
