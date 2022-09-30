import { useState } from 'react';
import './App.css';
import Table from './Table';
import { Users } from "./users";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["name", "cargo"]

  function search(data) {
    return data.filter(
      (item) =>
        keys.some((key) => item[key].toLowerCase().includes(query)) 
    );
  }

  return (
    <div className="App">

      <header>
        <div className='title'>
          <div className='be'>Be</div>
          <div className='mobile'>mobile</div>
        </div>
      </header>

      <section>
        <div className='box-fun-search'>
          <h2>Funcionários</h2>
          <input
            className="search"
            type="text"
            placeholder='Pesquisar'
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className='cabecalho'>
          <div className='foto'>Foto</div>
          <div className='nome'>Nome</div>
          <div className='cargo'>Cargo</div>
          <div className='data'>Data de Admissão</div>
          <div>Telefone</div>
        </div>
      </section>

      <Table data={search(Users)} />

    </div>
  );
}

export default App;
