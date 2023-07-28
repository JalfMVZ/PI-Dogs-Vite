import style from './Home.module.css'
import Nav from '../../components/NavBar/Nav'
import Cards from '../../components/Cards/Cards'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getAllDogs} from '../../Redux/actions'


export default function Home() {

  const dispach = useDispatch()
  useEffect(()=>{
    dispach(getAllDogs())
  } ,[dispach])
  
  return (
    <div className={style.div}>
      <Nav/>
      <Cards/>
    </div>
  )
}