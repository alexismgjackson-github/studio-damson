function About() {
  return (
    <section className="about">
      <div className="about-primary">
        <h1 className="about-heading">
          Studio Damson is a Brooklyn-raised street photographer based in Tokyo,
          Japan.
        </h1>
      </div>
      <div className="about-secondary">
        <div className="portrait-img">
          <img
            src="./images/unsplash_25.jpg"
            alt="Photographer Studio Damson taking a picture on his camera"
          />
        </div>
        <h3 className="about-subheading">Hey, I'm Damson.</h3>
        <p>
          Throughout the past 8 years I've been lucky enough to find a passion
          with photography and explore it daily. For the past 3 years, my work
          has concentrated on finding beauty in the mundane within the streets
          of Tokyo. Outside of photography, you'll find me playing video games,
          watching anime or indoor rock climbing.
        </p>
      </div>
    </section>
  );
}

export default About;
