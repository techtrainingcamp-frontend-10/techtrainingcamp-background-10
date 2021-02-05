import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

import routes from './router';

import { BrowserRouter } from 'react-router-dom';
import Frame from '@/components/frame'

export default memo(function App() {
  return (
    <div>
      <BrowserRouter>
        <Frame>
          {renderRoutes(routes)}
        </Frame>
      </BrowserRouter>
    </div>
  )
})
