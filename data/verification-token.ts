import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const token = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return token;
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const existingToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return existingToken;
  } catch {
    return null;
  }
};
