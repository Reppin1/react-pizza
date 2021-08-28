import ClassNames from 'classnames';

const Button = ({ className, children, onClick }) => (
  <div>
    <button onClick={onClick} type="button" className={ClassNames('button', className, { 'button--outline': '' })}>{children}</button>
  </div>
);

export { Button };
