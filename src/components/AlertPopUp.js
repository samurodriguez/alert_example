import { useAlertPopUp } from "../contexts/AlertPopUpContext";

const AlertPopUp = () => {
  const [alert, setAlert] = useAlertPopUp();

  const style = alert.status === "ok" ? { color: "green" } : { color: "red" };

  return (
    <div
      style={
        alert.msg
          ? {
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              position: "fixed",
              top: 0,
              display: "grid",
              placeItems: "center",
            }
          : {}
      }
      onClick={() => setAlert({ msg: "", status: "" })}
    >
      {alert.msg && (
        <div
          id="alertPopUp"
          onClick={(e) => e.stopPropagation()}
          style={{
            padding: "3rem",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <p style={style}>{alert.msg}</p>
          <button onClick={(e) => setAlert({ msg: "", status: "" })}>
            CLOSE
          </button>
        </div>
      )}
    </div>
  );
};

export default AlertPopUp;
