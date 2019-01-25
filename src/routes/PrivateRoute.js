/**
 * Created by jay on 25/1/19.
 */
function PrivateRoute({component: Component, ...rest}) {

    let isLoggedIn = (localStorage.getItem('status') != null) ? localStorage.getItem('status') : false;

    return (
        <Route
            {...rest}
            render={props =>isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
        />
    );
}
