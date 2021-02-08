import { Alert } from 'antd';

const Error = () => {
    return (
        <div>
            <Alert message="Error" type="error" showIcon />
            <Alert
                message="错误"
                description="This is an error message about copywriting."
                type="error"
                showIcon
            />
        </div>
    )
}

export default Error
