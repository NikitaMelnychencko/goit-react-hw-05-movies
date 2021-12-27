import PropTypes from 'prop-types';
import s from './Section.module.scss';

const Section = ({ children }) => {
  return (
    <section className={s.Section}>
      <div className={s.Container}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
