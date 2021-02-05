import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

import routes from './router';

import { HashRouter } from 'react-router-dom';
import Frame from '@/components/frame'

export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <Frame>
          {renderRoutes(routes)}
        </Frame>
      </HashRouter>
    </div>
  )
})
