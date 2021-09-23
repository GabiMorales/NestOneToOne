import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column()
    name: string;

    @Column({ name: 'last_name' })
    lastname: string;

    @OneToOne(()=> User, (user) => user.profile)
    user: User;
}