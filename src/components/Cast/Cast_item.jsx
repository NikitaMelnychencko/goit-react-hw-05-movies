import s from './Cast.module.scss';
import img from '../../img/no-image.png';
const CastItem = ({ data }) => {
  return (
    <>
      <li className={s.Card}>
        {data.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            width="100px"
            height="150px"
          />
        ) : (
          <img src={img} alt={data.name} width="100px" height="150px" />
        )}
        <h4 className={s.Name}>{data.name}</h4>
        <p className={s.Character}>{data.character}</p>
      </li>
    </>
  );
};
export default CastItem;
