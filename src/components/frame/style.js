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

  .ant-layout {
    width:100%;
    height:100vh; 
  }

  .site-layout-background {
    height: 100%;
    background: #fff;
    overflow: auto;
    padding: 16px 28px;
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
    color: #5276F0;
    background-color: transparent;
  }
`