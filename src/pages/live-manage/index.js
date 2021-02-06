import React, { memo } from 'react'
import { Button } from 'antd';

import { LiveWrapper } from './style';
import LiveCard from './child-cpn/live-card'

export default memo(function LiveManage() {
    return (
        <LiveWrapper>
            <div>
                <h2>直播列表</h2>
                <Button className="new-button" type="primary">新建直播</Button>
                <LiveCard />
            </div>
        </LiveWrapper>
    )
})
