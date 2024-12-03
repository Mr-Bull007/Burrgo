import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>You have encountered an error!</h2>
      <p>
        {err.status}: {err.statusText}
      </p>
      <p>
        Let's go back to{" "}
        <Link to="/">
          <span>Home</span>
        </Link>
        !
      </p>
    </div>
  );
};

export default Error;
