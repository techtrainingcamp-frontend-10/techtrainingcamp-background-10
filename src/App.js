import React, { memo } from 'react'
import { renderRoutes } from './router/renderRoutes';

import routes from './router';

import { BrowserRouter } from 'react-router-dom';
import Frame from '@/components/frame'


const authPath = "/login"

export default memo(function App() {
  return (
    <div>
      <BrowserRouter>
        <Frame>
          {renderRoutes(routes, authPath)}
        </Frame>
      </BrowserRouter>
    </div>
  )
})
