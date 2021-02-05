import React, { memo } from 'react'

import { Button } from 'antd';

export default memo(function LiveManage() {
    return (
        <div>
            <h2>直播列表</h2>
            <Button type="primary">新建直播</Button>
        </div>
    )
})
