export interface UserResponseData {
  success: true;
  statusCode: 200;
  data: {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    userType: string;
    status: string;
    preferredLanguage: "fr" | "en";
    roles: string[];
    permissions: string[];
    createdAt: string;
  };
}
