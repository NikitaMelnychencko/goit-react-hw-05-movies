import s from './Reviews.module.scss';
const ReviewsItem = ({ data }) => {
  return (
    <>
      <li className={s.Item}>
        <h3 className={s.Name}>{data.author}</h3>
        <p className={s.Character}>{data.content}</p>
      </li>
    </>
  );
};
export default ReviewsItem;
