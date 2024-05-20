export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    dob: Date,
    gender: Gender,
    education: Education,
    company: string,
    experience: number,
    salary: number
}

export enum Gender {
    MALE = "Male",
    FEMALE = "Female"
}

export enum Education {
    MATRIC = "Matric",
    DIPLOMA = "Diplome",
    INTERMEDIATE = "Intermediate",
    GRADUATE = "Graduate",
    POST_GRADUATE = "Post Graduate"
}