import { useState } from 'react';
import style from './Selects.module.css'
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
  const sourceFilter = useSelector((state) => state.sourceHelper);
  const [selectedTemperament, setSelectedTemperament] = useState('');
  // const [selectedSource, setSelectedSource] = useState('');
  const [selectedNameOrder, setSelectedNameOrder] = useState('');
  const [selectedWeightOrder, setSelectedWeightOrder] = useState('');

  const handleTemperamentFilter = () => {
    dispatch(filterByTemperament(setSelectedTemperament));
  };

  const handleSourceFilter = (event) => {
    dispatch(filterBySource(event.target.value));
  };

  const handleNameOrder = () => {
    dispatch(orderByName(setSelectedNameOrder));
  };

  const handleWeightOrder = () => {
    dispatch(orderByWeight(setSelectedWeightOrder));
  };

  return (
    <div className={style.container}>  
                <select onChange={handleTemperamentFilter} defaultValue="TEMPERAMENT" className="reset">
                    <option value="TEMPERAMENT" disabled> TEMPERAMENTS</option>
                    {allTemperaments.map((temperament, index)=> {
                        return (
                            <option value={temperament.name} key={index}>{temperament.name}</option>
                        )
                    })
                    }
                </select>
                <select onChange={event => handleSourceFilter(event)} defaultValue="SOURCE">
                    <option value="SOURCE" disabled>SOURCE</option>
                    <option value={false}>API</option>
                    <option value={true}>DATABASE</option>
                </select>
                <select onChange={handleNameOrder} defaultValue="ORDER BY NAME" className="reset">
                    <option value="ORDER BY NAME" disabled>ORDER BY NAME</option>
                    <option value="ASCENDENT">ASCENDENT</option>
                    <option value="DESCENDENT">DESCENDENT</option>
                </select>
                <select onChange={handleWeightOrder} defaultValue="ORDER BY WEIGHT" className="reset">
                    <option value="ORDER BY WEIGHT" disabled>ORDER BY WEIGHT</option>
                    <option value="ASCENDENT">ASCENDENT</option>
                    <option value="DESCENDENT">DESCENDENT</option>
                </select>
        </div>
  );
}
