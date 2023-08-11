export default function Filter({ filter, setFilter, setSort }) {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(ev) => setFilter(ev.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Finalizadas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
}
