export const useApp = function (express, port) {
  const app = express();
  app.listen(port, () => console.log(`Server is running on port ${port}`));

  const dispatch = function (action) {
    app[action.payload.method](
      action.payload.path,
      ...action.payload.middlewares,
      action.payload.controller
    );
  };
  return [app, dispatch];
};
