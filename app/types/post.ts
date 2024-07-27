export interface PostInfo {
  postId: number;
  title: string;
  content: string;
  createdAt: string;
  postImagePathUrls: string[];
  author: Author;
  tag: string[];
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
  comment: string;
  likeCount: number;
  replies: Reply[];
  createdAt: string;
  writer: Author;
}

interface Reply {
  reply: string;
  likeCount: number;
  createdAt: string;
  writer: Author;
}
