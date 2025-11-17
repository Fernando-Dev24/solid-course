import { JsonDatabaseService, PostProvider } from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postsProvider: PostProvider) {}

  async getPosts() {
    this.posts = await this.postsProvider.getPosts();

    return this.posts;
  }
}
