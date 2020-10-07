import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return this.usersRepo.find();
  }

  async createUser(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const user = this.usersRepo.create({
      ...createUserDto,
    });

    return this.usersRepo.save(user);
  }

  async findByUsername(username: string) {
    const user = await this.usersRepo.findOne({ username });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }

  async findById(id: number) {
    const user = await this.usersRepo.findOne({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
