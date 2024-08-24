import { Author } from './post';

export interface ReplyInfo {
  replyId: number;
  reply: string;
  likeCount: number;
  createdAt: string; // ISO 날짜 형식
  writer: Author;
}
