import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Contacts from '../Contacts'
import Form from '../Form'
import PageNotFound from '../PageNotFound'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default AllRoutes