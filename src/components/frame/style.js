import styled from 'styled-components'

export const FrameWrapper = styled.div`
  .logo {
    float: left;
    width: 120px;
    height: 31px;
    line-height: 33px;
    font-size: 14px;
    margin: 16px 24px 16px 0;
  }



  .ant-layout-header {
    background: white;
  }

  .ant-menu {
    background: white;
    color: black;
  }

  .ant-menu-item {
    color: black;
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected, 
  .ant-menu-dark .ant-menu-item:hover {
    color: #1890ff;
    background-color: transparent;
  }
`