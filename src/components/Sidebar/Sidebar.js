const React = window.React1;
console.log('window.React1 *****---->>>', window.React1);
import PropTypes from 'prop-types';
import classnames from 'classnames';

import "./Sidebar.scss";

function Sidebar() {
  const [expanded, setExpanded] = React.useState(false);
  
  return (
    <div id='sidebar' className={classnames([{ expanded }])}>
      <div className="sidebar-tab" onClick={() => setExpanded(!expanded)}>
        <i className="fas fa-angle-double-left"></i>
      </div>
      Sidebar Component
    </div>
  );
};

Sidebar.propTypes = {

};

export default Sidebar;