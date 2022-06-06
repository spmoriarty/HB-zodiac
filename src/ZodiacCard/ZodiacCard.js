import './ZodiacCard.css';
export default function ZodiacCard({ name, dates }) {
  return (
    <div className='zodiac-card'>
      <h1>{name}</h1>
      <p>{dates}</p>
      <img src = {/images/`${name}`.png} />
      {/* <img>{ public/images/`${name}`.png}</img> */}
    </div>
  );
  // public/images/aquarius.png
}

