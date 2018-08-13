// higher order component
// react component (HOC) that renders another component (regular component)
// reuse code
// render highjacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login to authenticate</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="this is the info from props" />,
  document.getElementById('appRoot')
);

// ReactDOM.render(
//   <Info info="this is the info from props" />,
//   document.getElementById('appRoot')
// );
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="this is the info from props" />,
//   document.getElementById('appRoot')
// );
