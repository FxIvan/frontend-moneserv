import { Index } from './component';
import { ChargingData } from './component/chg_date';
import { Solicitar } from './component/solicitar/solicitar';
import { Router } from './router/route';
function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path='/reserva'       element={<Index/>} />
          <Route path='/charging/date' element={<ChargingData/>} />
          <Route path='/form/solicitud' element={<Solicitar/>} />
      </Routes>
  </HashRouter>
  );
}

export default App;
