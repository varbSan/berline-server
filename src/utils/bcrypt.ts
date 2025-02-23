import * as bcrypt from 'bcryptjs';

export const createHashedPassword = async (
  plainTextPassword: string,
  saltRounds = 10,
): Promise<string> => bcrypt.hash(plainTextPassword, saltRounds);
