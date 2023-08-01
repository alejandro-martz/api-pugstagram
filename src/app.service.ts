import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPosts(): Object[] {
    let posts = [
      {avatar: 'avatar.png', username: 'lefebvre', location: 'Mexico', photo: 'photo.png', comments: []},
      {avatar: 'avatar2.png', username: 'lefebvre2', location: 'Mexico2', photo: 'photo2.png', comments: []},
      {avatar: 'avatar3.png', username: 'lefebvre3', location: 'Mexico3', photo: 'photo3.png', comments: []}
    ];
    return posts;
  }
}
