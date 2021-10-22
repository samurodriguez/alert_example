import { useAlertPopUp } from "../contexts/AlertPopUpContext";

const LoginPage = () => {
  const [, setAlert] = useAlertPopUp();

  const fetchApi = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const body = await res.json();

    if (res.ok) {
      setAlert({ status: "ok", msg: body.results[0].name });
      return;
    }

    setAlert({ status: "error", msg: body.error });
  };

  return (
    <section id="loginPage" style={{ display: "grid", placeItems: "center" }}>
      <h2>LOGIN</h2>
      <button
        onClick={() => setAlert({ msg: "Algo fue mal...", status: "error" })}
      >
        ERROR
      </button>
      <button
        onClick={() => setAlert({ msg: "Todo fue genial! :D", status: "ok" })}
      >
        GUAY
      </button>
      <button onClick={fetchApi}>FETCH API</button>
    </section>
  );
};

export default LoginPage;
