
const Login = () => {
  return (
    <div className="flex items-center justify-center" style={{ height: "calc(100vh - 4rem)" }}>
        <div className="m-4 p-6 bg-blue-200 rounded-md">
          <h2 className="mx-2 my-1 p-2 text-2xl font-bold">Login</h2>
          <div className=" p-2">
            <form action="">
              <div>
                <input className="m-2 p-2" type="text" placeholder="username" />
              </div>
              <div>
                <input className="m-2 p-2" type="password" placeholder="password" />
              </div>
              <div className="text-center">
                <button className="m-2 p-2 px-4 bg-blue-500 text-white rounded">Login</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Login