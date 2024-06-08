import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/Index'
import RacksPiano from './pages/RacksTeclados'
import RacksTecladoItem from './pages/RacksTecladoItem'

const Rotas = () => (
  <Routes>
    <Route index element={<IndexPage />} />
    <Route path="/racksteclados" element={<RacksPiano />} />
    <Route path="/produtos/:id" element={<RacksTecladoItem />} />
  </Routes>
)

export default Rotas
