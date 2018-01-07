import React from 'react';


if (process.env.ABOF_IS_BROWSER) {
  require('./SvgIcon.scss');

  // Explicitly include SVGs in a way that WebPack can statically extract
  // them as dependencies.
  require('./svgs/arrow-left.svg');
  require('./svgs/right.svg');
  require('./svgs/arrow-up.svg');
  require('./svgs/bag.svg');
  require('./svgs/check-circle.svg');
  require('./svgs/check.svg');
  require('./svgs/checkbox-primary-off.svg');
  require('./svgs/checkbox-primary-on.svg');
  require('./svgs/close.svg');
  require('./svgs/empty-bag.svg');
  require('./svgs/facebook.svg');
  require('./svgs/filter.svg');
  require('./svgs/google-plus.svg');
  require('./svgs/heart-outline.svg');
  require('./svgs/heart.svg');
  require('./svgs/home.svg');
  require('./svgs/menu.svg');
  require('./svgs/minus.svg');
  require('./svgs/pencil.svg');
  require('./svgs/phone.svg');
  require('./svgs/plus.svg');
  require('./svgs/radio-off.svg');
  require('./svgs/radio-on.svg');
  require('./svgs/search.svg');
  require('./svgs/sort.svg');
  require('./svgs/trash.svg');
  require('./svgs/truck.svg');
  require('./svgs/user.svg');
  require('./svgs/warning.svg');
  require('./svgs/question-mark-circle.svg');
  require('./svgs/abg-abof.svg');
  require('./svgs/google.svg');
  require('./svgs/email.svg');
  require('./svgs/tick.svg');
  require('./svgs/Android.svg');
  require('./svgs/expand.svg');
  require('./svgs/collaps.svg');
  require('./svgs/checkbox-secondary-on.svg');
  require('./svgs/checkbox-secondary-off.svg');
  require('./svgs/success.svg');
  require('./svgs/secure.svg');
  require('./svgs/alert.svg');
  require('./svgs/coupon.svg');

  // checkout new header
  require('./svgs/referral.svg');
  require('./svgs/guest_user.svg');
  require('./svgs/male.svg');
  require('./svgs/female.svg');
  require('./svgs/whatshot.svg');
  require('./svgs/men.svg');
  require('./svgs/women.svg');
  require('./svgs/order.svg');
  require('./svgs/fav.svg');
  require('./svgs/refer_friend.svg');
  require('./svgs/exchange.svg');
  require('./svgs/coupons.svg');
  require('./svgs/chat.svg');
  require('./svgs/contact.svg');
  require('./svgs/abof.svg');
  require('./svgs/terms.svg');
  require('./svgs/privacy.svg');
  require('./svgs/download.svg');

  require('./svgs/cash-on-delivery.svg');
  require('./svgs/free-shipping.svg');
  require('./svgs/hastle-free-returns.svg');
  require('./svgs/premium-brands.svg');
  require('./svgs/american-express-card.svg');
  require('./svgs/master-card.svg');
  require('./svgs/facebook-circle.svg');
  require('./svgs/twitter-circle.svg');
  require('./svgs/google-circle.svg');
  require('./svgs/instagram-circle.svg');

  require('./svgs/order.svg');
  require('./svgs/returns.svg');
  require('./svgs/coupons.svg');
  require('./svgs/men.svg');
  require('./svgs/female.svg');

  require('./svgs/mailbox.svg');
  require('./svgs/blank.svg');
  require('./svgs/no_order.svg');
  require('./svgs/cancelled.svg');
  require('./svgs/exchange_tag.svg');
  require('./svgs/return.svg');

  require('./svgs/history.svg');
  require('./svgs/shortcut.svg');
  require('./svgs/xcircle.svg');
}

const baseClassName = 'svg-icon';

const SvgIcon = ({ glyph, size = 'medium', additionalClassNames }) => {
  const classNames = [baseClassName];

  if (size && size !== 'medium') {
    classNames.push(`${baseClassName}--${size}`);
  }

  if (additionalClassNames) {
    classNames.push(additionalClassNames);
  }

  classNames.push(`${baseClassName}--type-${glyph}`);

  return (
    <svg className={classNames.join(' ')}>
      <use xlinkHref={`#${glyph}`}></use>
    </svg>
  );
};

SvgIcon.propTypes = {
  /* The name of the glyph, should match the file name of svg (without.svg) */
  glyph: React.PropTypes.string,
  additionalClassNames: React.PropTypes.string,

  /* Default size is medium */
  size: React.PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'responsive', // small → medium
    'reverse-responsive', // medium → small
    'reverse-responsive-small' // small → tiny
  ])
};

export default SvgIcon;
