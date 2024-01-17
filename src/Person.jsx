const person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <h4>{name}</h4>
      <p>{age}</p>
    </article>
  );
};
export default person;
