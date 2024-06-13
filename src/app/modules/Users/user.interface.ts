export type TUser = {
  name: string;
  email: string;
  password?: string;
  phone: string;
  role: "admin" | "user";
  address: string;
};

export type TLogingUser = {
  email: string;
  password?: string;
  role: "admin" | "user";
};
