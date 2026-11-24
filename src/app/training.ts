// 1. INTERFACES (задание 6)

export interface IUser {
    name: string;
    age: number;
    email?: string;
}


// Интерфейс администратора (задание 7)

export interface IAdmin extends IUser {
    role: string;
    permissions: string[];
}

// 2. VARIABLES (ПЕРЕМЕННЫЕ) (задания 4 и 5)

export let uploadStatus: "loading" | "success" | "error" = "loading";
export let textFormat: "uppercase" | "lowercase" | "capitalize" = "uppercase";


// 3. FUNCTIONS (ФУНКЦИИ) (задание 3)

// Функция сложения двух чисел
export function sum(a: number, b: number): number {
    return a + b;
}


// Функция форматирования текста (задание 8)

export function formatText(
    text: string,
    format: "uppercase" | "lowercase" | "capitalize"
): string {

    switch (format) {  // 3 способа формотирования текста:
        case "uppercase": // все буквы заглавне
            return text.toUpperCase();

        case "lowercase": // все буквы маленькие
            return text.toLowerCase();

        case "capitalize": // первая буква заглавная, остальные маленькиеs
            return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
}

// Функция удаления символа из строки (задание 9)

export function removeCharacter(text: string, character: string): string {
    return text.replaceAll(character, "");
}

//массив объектов с интерфейсом IUser и фильтрация по одному параметру (задание 10)
export const users: IUser[] = [
    { name: "Aisha", age: 20, email: "aisha@example.com" },
    { name: "Sara", age: 17 },
    { name: "Maryam", age: 25, email: "maryam@example.com" }
];

export const adultUsers: IUser[] = users.filter(user => user.age >= 18);
