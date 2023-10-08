const AboutSec = () => {
  return (
    <div className="max-w-screen-xl  mx-auto my-16 px-5">
      <div className="text-center my-8">
        <h3 className=" text-2xl lg:text-4xl font-semibold text-red-400 font-caveat mb-4">
          About
        </h3>
        <h2 className="text-lg font-medium mt-4">
          Welcome to Event Bay, your premier destination for cutting-edge tech
          event management. At Event Bay, we are passionate about bridging the
          gap between innovation and the world, connecting tech enthusiasts,
          professionals, and businesses through unforgettable experiences.
        </h2>
      </div>
      <div className="flex flex-col gap-12 items-center lg:flex-row">
        <div className="">

        <img
          className=" rounded-lg"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
          alt=""
        />
        
        </div>
        <div className="">
          <h3 className="text-3xl mb-4 font-bold">What We Do</h3>
          <p className="text-lg">
            <b>Tech Event Management:</b> We curate and organize a wide range of tech
            events, from conferences and seminars to workshops and hackathons.
            Our events feature top-notch speakers, cutting-edge topics, and
            hands-on workshops that cater to tech enthusiasts of all levels.
            <br />
            <b>Networking Opportunities:</b> Event Bay provides a unique platform for
            professionals, startups, and industry leaders to connect and forge
            valuable relationships. <br />
            <b>Innovation Showcases:</b> Our Innovation
            Showcases spotlight groundbreaking technologies and startups. <br />
            
            <b>Community Building:</b> We are committed to building a
            strong and vibrant tech community. Through our online forums, social
            media, and in-person events, we encourage collaboration, knowledge
            sharing, and camaraderie among tech enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
