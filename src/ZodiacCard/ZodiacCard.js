import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (
    <div className='zodiac'>
      <h1>{name}</h1>
      <p>{dates}</p>
      {/* <img>{ public/images/`${name}`.png}</img> */}
    </div>
  );
  // public/images/aquarius.png
  