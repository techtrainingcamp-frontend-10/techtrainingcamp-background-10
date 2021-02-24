import Login from "@/pages/login";
import LiveManage from "@/pages/live-manage";
import VideoManage from "@/pages/video-manage";
import CommentManage from "@/pages/comment-manage";
import CommentDetail from "@/pages/comment-detail";


const routes = [
    {
        path: "/",
        exact: true,
        component: LiveManage,
        requiresAuth: true
    },
    {
        path: "/login",
        component: Login,
        requiresAuth: false
    },
    {
        path: "/live",
        component: LiveManage,
        requiresAuth: true
    },
    {
        path: "/video",
        component: VideoManage,
        requiresAuth: true
    },
    {
        path: "/comment",
        component: CommentManage,
        requiresAuth: true
    },
    {
        path: "/detail",
        component: CommentDetail,
        requiresAuth: true
    }
]

export default routes;