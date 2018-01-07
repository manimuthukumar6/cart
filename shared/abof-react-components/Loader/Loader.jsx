import React from 'react';

if (process.env.ABOF_IS_BROWSER) {
  require('./Loader.scss');
  require('./Loader.svg');
}

const Loader = ({ size, variant }) => {
  const baseClassName = 'loader';
  const classNames = [baseClassName];

  if (variant) {
    classNames.push(`${baseClassName}--${variant}`);
  }

  if (size) {
    classNames.push(`${baseClassName}--${size}`);
  }

  return (
    <div className={classNames.join(' ')}>
      <svg className="loader__svg">
        <use xlinkHref="#Loader"></use>
      </svg>
    </div>
  );
};

Loader.propTypes = {
  /* Default size is medium */
  size: React.PropTypes.oneOf(['small', 'tiny', 'medium', 'large']),
  variant: React.PropTypes.oneOf(['regular', 'light'])
};

Loader.defaultProps = {
  size: 'medium',
  variant: 'regular'
};

export default Loader;
