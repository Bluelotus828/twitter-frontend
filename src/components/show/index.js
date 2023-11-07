import PropTypes from 'prop-types';

/**
 * 用于显示/隐藏其他组件
 *  -css control whether show or not, cache required
 * -uninstall components, no need for cache
*/

export const Show = ({
  visible,
  isMount,
  children,
}) => (
  <div style={{ display: visible ? 'block' : 'none' }}>
    {(!isMount || visible) && children}
  </div>
);

Show.propTypes = {
  visible: PropTypes.bool.isRequired,
  isMount: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Show;
