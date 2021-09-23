import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "../entities/user.entity";
import { Profile } from "../entities/profile.entity";
import { retry } from 'rxjs';
import { profile } from 'console';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private usersRepo: Repository<User>,
        @InjectRepository(Profile) private profilesRepo: Repository<Profile>
    ){}

    finAll() {
        return this.usersRepo.find({
            relations: ['profile']
        });
    }

    async create(body: any) {
        const profile = new Profile();
        profile.name = body.name;
        profile.lastname = body.lastname;
        const newProfile = await this.profilesRepo.save(profile);

        const user = new User();
        user.email = body.email;
        user.password = body.password;
        user.profile = newProfile;
        return this.usersRepo.save(user);
    }
}
