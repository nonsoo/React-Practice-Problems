const Actions = () => {
  return (
    <section className="actions">
      <div className="actions__count">
        <button className="btn">Increment Count</button>
        <button className="btn">Decrement Count</button>
      </div>
      <div className="actions__theme">
        <button className="btn">Toggle light</button>
        <button className="btn">Toggle Dark</button>
      </div>
    </section>
  );
};

export default Actions;
