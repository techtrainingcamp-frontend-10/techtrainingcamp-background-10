import { Comment, List } from 'antd';
import React from 'react'
import { useState, useEffect } from 'react'

import { DetailWrapper } from './style';
import { getComment } from "@/services/manage";

export default function CommentDetail(props) {
    const videoId = props.location.query.videoId;
    const [list, setList] = useState([])

    useEffect(() => {
        getComment(videoId).then(res => {
            setList(res.data);
            console.log(res.data);
        });
    },
        []
    )

    return (
        <DetailWrapper className="wrap-v2">
            <List
                className="comment-list"
                header={`${list.length} 条评论`}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <li >
                        <Comment
                            actions={[<a className="edit" key="list-loadmore-edit">编辑</a>, <a className="delete" key="list-loadmore-more">删除</a>]}
                            content={item.comment}
                            datetime={item.updatedAt}
                        />
                    </li>
                )}
            />
        </DetailWrapper>
    )
}
