import { TagInfo } from './tag';

export interface PostInfo {
  postId: number;
  title: string;
  content: string;
  modifiedAt: string;
  createdAt: string;
  postImagePathUrls: string[];
  author: Author;
  tags: TagInfo[];
  views: number;
  services: Service[];
  comments: Comment[];
  likeCount: number;
}

interface Author {
  memberId: number;
  username: string;
  profileImagePathUrl: string;
}

interface Service {
  serviceId: number;
  planIds: number[];
  name: string;
  url: string;
}

interface Comment {
  commentId: number;
  comment: string;
  likeCount: number;
  replies: Reply[];
  createdAt: string;
  writer: Author;
}

interface Reply {
  replyId: number;
  reply: string;
  likeCount: number;
  createdAt: string;
  writer: Author;
}
