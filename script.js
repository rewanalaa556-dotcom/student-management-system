class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // حساب المتوسط
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // حساب التقدير
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // النتيجة النهائية
    getResult() {
        if (this.calculateAverage() >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// إنشاء مصفوفة الطلاب
let studentsList = [
    new Student(1, "Ahmed", [90, 85, 95], 90),
    new Student(2, "Mona", [45, 48, 42], 80),
    new Student(3, "Ali", [60, 55, 65], 70),
    new Student(4, "Sara", [40, 45, 48], 85)
];

// لجنة الرأفة
let weakStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// إضافة 5 درجات رأفة
let mercyStudents = weakStudents.map(student => {
    return {
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };
});

// حساب مجموع المتوسطات الجديدة
let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// حساب متوسط الرأفة مع منع القسمة على صفر
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// طباعة تقرير كل طالب
console.log("===== Students Report =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();

    console.log("Name:", student.name);
    console.log("Average:", average);
    console.log("Grade:", student.getGrade(average));
    console.log("Result:", student.getResult());
    console.log("----------------------");
});

// طباعة الطلاب المتعثرين بعد الرأفة
console.log("===== Mercy Students =====");
console.log(mercyStudents);

// طباعة متوسط الرأفة
console.log("Mercy Average:", mercyAverage);