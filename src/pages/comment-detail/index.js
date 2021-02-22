import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import React from 'react'
import { useState, useEffect } from 'react'

import { getComment } from "@/services/manage";

export default function CommentDetail(props) {
    const videoId = props.location.query.videoId;
    const [list, setList] = useState([])

    useEffect(() => {
        getComment(1613969044447).then(res => {
            setList(res.data);
            console.log(res.data);
        });
    },
        []
    )

    return (
        <div>
            <List
                className="comment-list"
                header={`${list.length} 条评论`}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={item => (
                    <li >
                        <Comment
                            actions={[<a key="list-loadmore-edit">编辑</a>, <a key="list-loadmore-more">删除</a>]}
                            content={item.comment}
                            datetime={item.updatedAt}
                        />
                    </li>
                )}
            />
        </div>
    )
}
