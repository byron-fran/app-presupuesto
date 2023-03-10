import { useState, useEffect } from 'react';
import  Header   from './components/Header';
import Button from './components/Button';
import { formaterDinero ,calcular} from './helpers';
 

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)
  useEffect(()=>{
    const totalPagar = calcular(cantidad, meses)
      setTotal(totalPagar)

      //calcular el pago mesual
      setPago((total/meses).toFixed(2))
  },[cantidad, meses,total])

  const min =0;
  const max = 20000;
  const step = 100;
  const handleChange = (e)=>{
    const valor =Number(e.target.value)
    setCantidad(valor)
  }

  const handleClickDecremento = ()=>{
    if(cantidad <step){
      alert('Cantidad no válida');
      return
    }
    setCantidad(cantidad-step)
  };
  const handleClickIncremento = ()=>{
    if(cantidad==max){
      alert('Cantidad no válida');
      return
    }
    setCantidad(cantidad+step)
  };


  return (
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10 '>
      <Header></Header>
      <div className='flex justify-between my-14'>
        <Button operador='-' fn={handleClickDecremento}></Button>
        <Button operador= '+' fn={handleClickIncremento}></Button>
      </div>
      <input type="range"  
            className='w-full h-6 bg-gray-200 accent-emerald-500 hover:accent-emerald-600'
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            value={cantidad}
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{formaterDinero(cantidad)}</p>
      <h2 className='text-2xl font-extrabold text-gray-600 text-center'>Elige un 
      <span className='text-indigo-600 '>Plazo</span> a pagar</h2>
      <select className='mt-5 w-full p-2 bg-white border-gray-200 rounded-lg text-center text-xl font-bold text-gray-500' 
      value={meses}
      onChange={e => setMeses(+e.target.value)}>
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 '>Resumen A 
        <span className='text-indigo-600'> Pagar</span>
        </h2>
        <p className='text-gray-500 text-center font-bold'>{meses} meses</p>
        <p className='text-gray-500 text-center font-bold'>{formaterDinero(total)} Total A pagar</p>
        <p className='text-gray-500 text-center font-bold'>{pago} Pago mensual</p>

      </div>
      
    </div>
   
  )
}

export default App
