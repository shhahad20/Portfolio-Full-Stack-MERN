
import "../styles/contact.scss";

const Contact = () => {
  const cards = [
    {
      id: 1,
      title: "Keep the link connected.",
      description: "Follow me on LinkedIn. ",
      icon: "/circleg.svg",
    },
    {
      id: 2,
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      icon: "/ill.png",
    },
    {
      id: 3,
      title: "The repositories",
      description: "Explore latest repositories & projects.",
      icon: "/github.png",
    },
    // {
    //   id: 4,
    //   title: "The Power of Communication",
    //   description: "Discover the beauty of thoughtful and functional design.",
    //   icon: "/circlep2.svg",
    // },
    // {
    //   id: 5,
    //   title: "The Art of Design",
    //   description: "Discover the beauty of thoughtful and functional design.",
    //   icon: "/ill.png",
    // },
  ];

  return (
    <div className="contact">
    <div>
      <h1 className="contact-header">Contact Area</h1>
    </div>
<div className="card-grid">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${index === 3 ? "double-card" : ""}`}
        >
          <div className="icon">
          <div className="img-container">
          {/* {card.icon} */}
          <img src={card.icon} alt="img" className="img-fill"/>
          </div>
          </div>
          <h3 className="title">{card.title}</h3>
          <p className="description">{card.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Contact;
