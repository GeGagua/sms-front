import { FC, memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import Status from '../pages/Status'
import Rules from '../pages/Rules'
import Form from '../pages/Form'
import Success from '../pages/Success'

interface IProps {
  lang?: string
}

const Router: FC<IProps> = ({ lang }) => {
  return (
    <Routes data-lang={lang}>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path='/status' element={<Status />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/form' element={<Form />} />
        <Route path='/success' element={<Success />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default memo(Router)
