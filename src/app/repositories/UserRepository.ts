import User from "../entities/User";
import IUser from "../interfaces/iUsers";
import { AppDataSource } from "../../database/data-source";

const UserRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
    return UserRepository.find();
}

export default { getUsers };