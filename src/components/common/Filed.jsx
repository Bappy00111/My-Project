import React from "react";

const Filed = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      {label && (
        <label className="auth-label" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <div role="alert" className="text-red-600">
          {error.message}
        </div>
      )}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if (child.porps && "id" in child?.porps.id) {
    return child.porps.id;
  } else {
    return null;
  }
};

export default Filed;
