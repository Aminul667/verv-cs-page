import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="w-[1200px] m-auto bg-cover bg-center ">
        <div>
          <h2 className="text-3xl font-bold">WHO WE ARE</h2>
        </div>
        <div>
          <div
            className="w-[626px] h-[687px] bg-red-300 rounded-2xl"
            style={{ backgroundImage: `url(${aboutImage})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default About;
