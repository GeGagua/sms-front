import { FC, memo } from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import Status from '../pages/Status'
import Rules from '../pages/Rules'
import Form from '../pages/Form'
import Success from '../pages/Success'
import EndStep3 from '../pages/End/EndStep3'
import EndStep2 from '../pages/End/EndStep2'
import EndStep1 from '../pages/End/EndStep1'

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
        <Route path='/endstep3' element={<EndStep3 />} />
        <Route path='/endstep2' element={<EndStep2 />} />
        <Route path='/endstep1' element={<EndStep1 />} />
        <Route path='/success' element={<Success />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  )
}

export default memo(Router)
