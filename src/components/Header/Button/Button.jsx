import ClassNames from 'classnames';

const Button = ({ className, children }) => (
  <div>
    <button type="button" className={ClassNames('button', className, { 'button--outline': '' })}>{children}</button>
  </div>
);

export { Button };
