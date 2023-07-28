import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterByTemperament,
  filterBySource,
  orderByName,
  orderByWeight,
} from '../../Redux/actions';

export default function Selects() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.allTemperaments);
  const [selectedTemperament, setSelectedTemperament] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedNameOrder, setSelectedNameOrder] = useState('');
  const [selectedWeightOrder, setSelectedWeightOrder] = useState('');

  const handleTemperamentFilter = () => {
    dispatch(filterByTemperament(selectedTemperament));
  };

  const handleSourceFilter = () => {
    dispatch(filterBySource(selectedSource));
  };

  const handleNameOrder = () => {
    dispatch(orderByName(selectedNameOrder));
  };

  const handleWeightOrder = () => {
    dispatch(orderByWeight(selectedWeightOrder));
  };

  return (
    <div>
      {/* Desplegable para filtrar por temperamentos */}
      <div>
        <p>Filter by Temperament:</p>
        <select
          onChange={(e) => setSelectedTemperament(e.target.value)}
          value={selectedTemperament}
        >
          <option value="">Select a temperament</option>
          {allTemperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
        <button onClick={handleTemperamentFilter}>Apply</button>
      </div>

      {/* Desplegable para filtrar por origen (API o base de datos) */}
      <div>
        <p>Filter by Source:</p>
        <select
          onChange={(e) => setSelectedSource(e.target.value)}
          value={selectedSource}
        >
          <option value="">Select a source</option>
          <option value="API">API</option>
          <option value="DB">Database</option>
        </select>
        <button onClick={handleSourceFilter}>Apply</button>
      </div>

      {/* Desplegable para ordenar por nombre */}
      <div>
        <p>Order by Name:</p>
        <select
          onChange={(e) => setSelectedNameOrder(e.target.value)}
          value={selectedNameOrder}
        >
          <option value="">Select an order</option>
          <option value="ASCENDENT">Ascending</option>
          <option value="DESCENDENT">Descending</option>
        </select>
        <button onClick={handleNameOrder}>Apply</button>
      </div>

      {/* Desplegable para ordenar por peso */}
      <div>
        <p>Order by Weight:</p>
        <select
          onChange={(e) => setSelectedWeightOrder(e.target.value)}
          value={selectedWeightOrder}
        >
          <option value="">Select an order</option>
          <option value="ASCENDENT">Ascending</option>
          <option value="DESCENDENT">Descending</option>
        </select>
        <button onClick={handleWeightOrder}>Apply</button>
      </div>
    </div>
  );
}
