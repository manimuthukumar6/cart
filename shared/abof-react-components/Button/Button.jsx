import React from 'react';

import Loader from '../Loader/Loader.jsx';
import SvgIcon from '../SvgIcon/SvgIcon.jsx';

if (process.env.ABOF_IS_BROWSER) {
  require('./Button.scss');
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Button';

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    if (!this.props.disabled && (typeof this.props.onClick === 'function')) {
      this.props.onClick(e);
    }
  }

  render() {
    const baseClass = 'button';
    const classNames = [baseClass];
    /* eslint-disable no-script-url */
    let hrefString = 'javascript:;';
    /* eslint-enable no-script-url */

    if (this.props.href) {
      hrefString = this.props.href;
    }

    if (this.props.additionalClassNames) {
      classNames.push(`${baseClass}--${this.props.additionalClassNames}`);
    }

    if (this.props.type) {
      classNames.push(`${baseClass}--${this.props.type}`);
    }

    if (this.props.size) {
      classNames.push(`${baseClass}--${this.props.size}`);
    }

    if (this.props.alignText) {
      classNames.push(`${baseClass}--text-align-${this.props.alignText}`);
    }

    if (this.props.isFullWidth) {
      classNames.push(`${baseClass}--full-width`);
    }

    if (this.props.isAnimated) {
      classNames.push(`${baseClass}--animated`);
    }

    if (this.props.disabled) {
      classNames.push(`${baseClass}--disabled`);
    }


    // If left or right icons are set, when waiting is true
    // replace them with the loader. Else, place the loader
    // on the right hand side of the text.
    let loaderEl;
    let iconRightEl;
    let iconLeftEl;
    let iconCenterEl;
    if (this.props.waiting) {
      classNames.push(`${baseClass}--waiting`);
      loaderEl = (
        <div className="button__loader-wrapper">
          <div className="button__loader">
            <Loader variant="light" size={this.props.size} />
          </div>
        </div>
      );
    }
    if (this.props.iconLeft) {
      iconLeftEl = <SvgIcon glyph={this.props.iconLeft} variant="light" size={this.props.size} />;
    }
    if (this.props.iconRight) {
      iconRightEl = <SvgIcon glyph={this.props.iconRight} variant="light" size={this.props.size} />;
    }
    if (this.props.iconCenter) {
      iconCenterEl = <SvgIcon glyph={this.props.iconCenter} variant="light" size={this.props.size} />;
    }

    let buttonTitle = iconCenterEl || (<span className="button__title">{this.props.title}</span>);

    let buttonEl;
    if (this.props.element === 'button' || this.props.element === 'submit') {
      buttonEl = (
        <button
          {...this.props}
          type={this.props.element === 'submit' ? 'submit' : undefined}
          className={classNames.join(' ')}
          onClick={this.clickHandler}
        >
          {loaderEl}
          {iconLeftEl ?
            (<span className="button__icon">{iconLeftEl}</span>)
            : undefined}
          {buttonTitle}
          {iconRightEl ?
            (<span className="button__icon button__icon--right">{iconRightEl}</span>)
            : undefined}
        </button>
      );
    } else {
      buttonEl = (
        <a
          {...this.props}
          href={hrefString}
          className={classNames.join(' ')}
          onClick={this.clickHandler}
        >
          {loaderEl}
          {iconLeftEl ?
            (<span className="button__icon">{iconLeftEl}</span>)
            : undefined}
          {buttonTitle}
          {iconRightEl ?
            (<span className="button__icon button__icon--right">{iconRightEl}</span>)
            : undefined}
        </a>
      );
    }

    return buttonEl;
  }
}


Button.propTypes = {
  onClick: React.PropTypes.func,
  title: React.PropTypes.string.isRequired,
  href: React.PropTypes.string,
  size: React.PropTypes.oneOf(['medium', 'tiny', 'small', 'large']), /* Default size is medium */
  type: React.PropTypes.oneOf([ /* Default type is secondary */
    'secondary',
    'primary',
    'tertiary',
    'facebook',
    'google',
    'email'
  ]),
  element: React.PropTypes.oneOf(['link', 'button', 'submit']), /* Default type is link */
  alignText: React.PropTypes.oneOf(['center', 'left', 'right']), /* Default type is center */
  iconLeft: React.PropTypes.string,
  iconRight: React.PropTypes.string,
  iconCenter: React.PropTypes.string,
  isFullWidth: React.PropTypes.bool,
  isAnimated: React.PropTypes.bool,
  waiting: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  additionalClassNames: React.PropTypes.string
};

Button.defaultProps = {
  type: 'secondary',
  element: 'link',
  alignText: 'center'
};

export default Button;
